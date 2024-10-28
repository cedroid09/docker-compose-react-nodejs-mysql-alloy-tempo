// otel-config.js
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-otlp-http');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { Resource } = require('@opentelemetry/resources');
const { SERVICE_NAME } = require('@opentelemetry/semantic-conventions');

// Set the service name here
const traceExporter = new OTLPTraceExporter({
  url: 'http://10.4.0.2:4320/v1/traces',
});

const sdk = new NodeSDK({
  traceExporter,
  resource: new Resource({
    [SERVICE_NAME]: 'demo-node-app', // Customize the service name
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
