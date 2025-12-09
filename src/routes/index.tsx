import { authMiddleware } from "@/middleware/auth";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  server: {
    middleware: [authMiddleware],
  },
});

function App() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold">NodeBase App</h1>
    </div>
  );
}
