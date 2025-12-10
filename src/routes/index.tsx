import { LogoutButton } from "@/features/auth/components/logout-button";
import { authMiddleware } from "@/middleware/auth";
import { getUsersFn } from "@/server/users";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: () => getUsersFn(),
  component: App,
  server: {
    middleware: [authMiddleware],
  },
});

function App() {
  const users = Route.useLoaderData();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold">NodeBase App</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      <LogoutButton />
    </div>
  );
}
