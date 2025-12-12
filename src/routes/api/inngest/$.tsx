import { createFileRoute } from "@tanstack/react-router";
import { getRequest } from "@tanstack/react-start/server"; // 👈 Import getRequest
import { serve } from "inngest/edge";
import { inngest } from "@/inngest/client";
import { helloWorld } from "@/inngest/functions";

// 1. Initialize the Inngest handler (Standard Web API)
const handler = serve({
  client: inngest,
  functions: [helloWorld],
});

// 2. Create a clean wrapper using getRequest()
// This removes the need to write ({ request }) => ... over and over
const handleRequest = () => {
  return handler(getRequest());
};

export const Route = createFileRoute("/api/inngest/$")({
  server: {
    // 3. Much cleaner configuration
    handlers: {
      GET: handleRequest,
      POST: handleRequest,
      PUT: handleRequest,
    },
  },
});
