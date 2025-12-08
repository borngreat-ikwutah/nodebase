import { publicProcedure as baseProcedure, createTRPCRouter } from "./init";

import { prisma } from "@/db";
import type { TRPCRouterRecord } from "@trpc/server";

const todosRouter = {
  getTodos: baseProcedure.query(() => {
    return prisma.todo.findMany();
  }),
} satisfies TRPCRouterRecord;

export const trpcRouter = createTRPCRouter({
  todos: todosRouter,
});
export type TRPCRouter = typeof trpcRouter;
