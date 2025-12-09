import { baseProcedure } from "@/integrations/trpc/init";
import { auth } from "@/lib/auth";
import { TRPCError } from "@trpc/server";

export const protectedProcedure = baseProcedure.use(async ({ ctx, next }) => {
  const session = await auth.api.getSession({
    headers: ctx.req.headers,
  });

  if (!session) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You must be logged in to access this resource.",
    });
  }

  return next({ ctx: { ...ctx, auth: session } });
});
