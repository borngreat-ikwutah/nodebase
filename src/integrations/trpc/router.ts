import { baseProcedure, createTRPCRouter } from "./init";

import { prisma } from "@/lib/db";
import type { TRPCRouterRecord } from "@trpc/server";

const todosRouter = {} satisfies TRPCRouterRecord;

export const trpcRouter = createTRPCRouter({
  todos: todosRouter,
});
export type TRPCRouter = typeof trpcRouter;
