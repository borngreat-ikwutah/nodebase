import { createCallerFactory } from "@/integrations/trpc/init";
import { trpcRouter } from "@/integrations/trpc/router"; // Update with your router path
import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

// 1. Create the caller generator once (outside the handler)
const createCaller = createCallerFactory(trpcRouter);

export const getUsersFn = createServerFn().handler(async () => {
  // 2. Get the standard Request object
  const request = getRequest();

  const ctx = {
    req: request,
  };

  // 4. Create the caller with that context
  const caller = createCaller(ctx);

  // 5. Call your procedure directly
  const users = await caller.users.getAllUsers();

  return users;
});
