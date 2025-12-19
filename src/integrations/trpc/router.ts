import { inngest } from "@/inngest/client";
import { baseProcedure, createCallerFactory, createTRPCRouter } from "./init";

import { prisma } from "@/lib/db";
import { protectedProcedure } from "@/server/procedure";
import type { TRPCRouterRecord } from "@trpc/server";

const userRouter = {
  getAllUsers: baseProcedure.query(async () => {
    return prisma.user.findMany();
  }),
} satisfies TRPCRouterRecord;

const workflowRouter = {
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "admin@demo.com",
      },
    });

    return { success: true, message: "Job Queued" };
  }),
  getWorkflows: baseProcedure.query(async () => {
    return prisma.workflow.findMany();
  }),
} satisfies TRPCRouterRecord;

export const trpcRouter = createTRPCRouter({
  users: userRouter,
  workflows: workflowRouter,
});
export type TRPCRouter = typeof trpcRouter;

export const createCaller = createCallerFactory(trpcRouter);
