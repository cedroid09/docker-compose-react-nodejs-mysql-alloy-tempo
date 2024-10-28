// otel-config.js
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-otlp-http'); // Use the HTTP exporter
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');

const traceExporter = new OTLPTraceExporter({
  url: 'http://10.4.0.2:4318/v1/traces', // Adjust to the HTTP endpoint
});

const sdk = new NodeSDK({
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
