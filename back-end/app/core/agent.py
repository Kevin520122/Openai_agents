from llama_index.core import (
    SimpleDirectoryReader,
    VectorStoreIndex,
    StorageContext,
    load_index_from_storage,
)
from llama_index.llms.openai import OpenAI
from llama_index.core.agent import ReActAgent
from llama_index.core.tools import QueryEngineTool, ToolMetadata
from openinference.instrumentation.llama_index import LlamaIndexInstrumentor
from phoenix.otel import register
import phoenix as px
# from app.monitor.phoenix_setup import setup_phoenix
from opentelemetry import trace

def setup_phoenix():
    """Initialize Phoenix monitoring"""
    # Launch Phoenix app
    session = px.launch_app()
    


    tracer_provider = register()
    LlamaIndexInstrumentor().instrument(tracer_provider=tracer_provider)
    return session

def get_agent():
    setup_phoenix()
    index_loaded = False
    try:
        storage_context = StorageContext.from_defaults(
            persist_dir="./storage/amazon"
        )
        amazon_index = load_index_from_storage(storage_context)

        # storage_context = StorageContext.from_defaults(
        #     persist_dir="./storage/uber"
        # )
        # uber_index = load_index_from_storage(storage_context)

        index_loaded = True
    except:
        index_loaded = False
    
    if not index_loaded:
    # load data
        amazon_docs = SimpleDirectoryReader(
            input_files=["./10k-data/Amazon2020.pdf"]
        ).load_data()
    

        # build index
        amazon_index = VectorStoreIndex.from_documents(amazon_docs, show_progress=True)
    

        # persist index
        amazon_index.storage_context.persist(persist_dir="./storage/amazon")
    
    llm = OpenAI(model="gpt-4")
    amazon_engine = amazon_index.as_query_engine(
        similarity_top_k=3, 
        llm=llm
    )
    
    query_engine_tools = [
        QueryEngineTool(
            query_engine=amazon_engine,
            metadata=ToolMetadata(
                name="amazon_10k",
                description="Provides information about Amazon financials for 2020"
            )
        )
    ]
    
    return ReActAgent.from_tools(
        query_engine_tools,
        llm=llm,
        verbose=True
    )