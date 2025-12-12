import { createCaller } from "@/integrations/trpc/router";
import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

export const getWorkflows = createServerFn().handler(async () => {
  const request = getRequest();

  const ctx = {
    req: request,
  };

  // 4. Create the caller with that context
  const caller = createCaller(ctx);
  const workflows = await caller.workflows.getWorkflows();

  return workflows;
});
