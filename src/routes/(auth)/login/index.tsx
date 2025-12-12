import { LoginForm } from "@/features/auth/components/login-form";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/login/")({
  component: LoginPage,
});

function LoginPage() {
  return <LoginForm />;
}
