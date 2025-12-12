import { AuthLayout } from "@/features/auth/components/auth-layout";
import { requireAuth } from "@/lib/auth-utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)")({
  beforeLoad: () => requireAuth(),
  component: AuthLayout,
});
