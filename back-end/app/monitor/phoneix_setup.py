# from phoenix.trace.otlp import OTLPSpanProcessor
# from phoenix.trace.provider import TracerProvider
from openinference.instrumentation.llama_index import LlamaIndexInstrumentor
from phoenix.otel import register
import phoenix as px


def setup_phoenix():
    """Initialize Phoenix monitoring"""
    # Launch Phoenix app
    session = px.launch_app()
    


    tracer_provider = register()
    LlamaIndexInstrumentor().instrument(tracer_provider=tracer_provider)
    return session