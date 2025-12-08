// src/features/todos/getTodos.ts
import { createServerFn } from "@tanstack/react-start";
import { trpcRouter } from "@/integrations/trpc/router";
import { createCallerFactory } from "@/integrations/trpc/init";
// app/utils/queries.ts OR inside your route file
import { queryOptions } from "@tanstack/react-query";

// 1. Create the caller builder
const createCaller = createCallerFactory(trpcRouter);

export const getTodosServerFn = createServerFn({ method: "GET" }).handler(
  async () => {
    // To Initialize the caller
    const caller = createCaller({});

    // 3. Call the tRPC procedure directly
    const result = await caller.todos.getTodos();

    return result;
  },
);

export const todosQueryOptions = queryOptions({
  queryKey: ["todos"],
  queryFn: () => getTodosServerFn(),
});
