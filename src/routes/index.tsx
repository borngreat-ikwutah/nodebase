import { Button } from "@/components/ui/button";
import { LogoutButton } from "@/features/auth/components/logout-button";
import { useTRPC } from "@/integrations/trpc/react";
import { authMiddleware } from "@/middleware/auth";
import { getWorkflows } from "@/server/inngest";
import { getUsersFn } from "@/server/users";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: () => {
    (getUsersFn(), getWorkflows());
  },
  component: App,
  server: {
    middleware: [authMiddleware],
  },
});

function App() {
  const trpc = useTRPC();
  // const workflows = getWorkflows();
  const { queryClient } = Route.useRouteContext();

  const workflows = useQuery(trpc.workflows.getWorkflows.queryOptions());

  const createWorkflow = useMutation(
    trpc.workflows.createWorkflow.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(
          trpc.workflows.getWorkflows.queryOptions(),
        );
      },
    }),
  );

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold">NodeBase App</h1>

      <pre>{JSON.stringify(workflows, null, 2)}</pre>

      <Button
        onClick={() => {
          createWorkflow.mutate();
        }}
      >
        Create Workflow
      </Button>
      <LogoutButton />
    </div>
  );
}
