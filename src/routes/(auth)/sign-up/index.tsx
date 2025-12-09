import { RegisterForm } from "@/features/auth/components/register-form";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/sign-up/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
