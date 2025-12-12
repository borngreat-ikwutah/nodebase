import { baseProcedure, createCallerFactory, createTRPCRouter } from "./init";

import { prisma } from "@/lib/db";
import { protectedProcedure } from "@/server/procedure";
import type { TRPCRouterRecord } from "@trpc/server";

const userRouter = {
  getAllUsers: baseProcedure.query(async ({ ctx }) => {
    return prisma.user.findMany();
  }),
} satisfies TRPCRouterRecord;

const workflowRouter = {
  createWorkflow: protectedProcedure.mutation(async () => {
    return prisma.workflow.create({
      data: {
        name: "New Workflow",
      },
    });
  }),
  getWorkflows: baseProcedure.query(async ({ ctx }) => {
    return prisma.workflow.findMany();
  }),
} satisfies TRPCRouterRecord;

export const trpcRouter = createTRPCRouter({
  users: userRouter,
  workflows: workflowRouter,
});
export type TRPCRouter = typeof trpcRouter;

export const createCaller = createCallerFactory(trpcRouter);
