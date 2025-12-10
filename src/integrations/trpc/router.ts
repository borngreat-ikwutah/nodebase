import { baseProcedure, createTRPCRouter } from "./init";

import { prisma } from "@/lib/db";
import type { TRPCRouterRecord } from "@trpc/server";

const userRouter = {
  getAllUsers: baseProcedure.query(async ({ ctx }) => {
    return prisma.user.findMany();
  }),
} satisfies TRPCRouterRecord;

export const trpcRouter = createTRPCRouter({
  users: userRouter,
});
export type TRPCRouter = typeof trpcRouter;
