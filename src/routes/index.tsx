import { todosQueryOptions } from "@/server/todos";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  loader: ({ context }) => {
    // 'ensureQueryData' checks the cache. If empty, it fetches (Server Function).
    // It returns a Promise that resolves with the data.
    return context.queryClient.ensureQueryData(todosQueryOptions);
  },
  component: App,
});

function App() {
  const { queryClient } = Route.useRouteContext();
  const { data: todos } = useSuspenseQuery(todosQueryOptions);

  return (
    <div>
      <h1>Hydrated Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          queryClient.invalidateQueries({ queryKey: ["todos"] });
        }}
      >
        Refresh
      </button>
    </div>
  );
}
