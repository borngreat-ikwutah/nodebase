// server/init.ts
import { initTRPC } from "@trpc/server";
import superjson from "superjson";

// 1. Define the Context Type
type Context = {
  req: Request;
};

// 2. Pass the generic type to initTRPC
const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const baseProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;
