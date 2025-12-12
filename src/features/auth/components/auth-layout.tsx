import { Link, Outlet } from "@tanstack/react-router";

export function AuthLayout() {
  return (
    <div className="bg-muted flex min-h-svh flex-col justify-center  items-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          to="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <img src="/icons/logo.svg" alt="nodebase" width={30} height={30} />
          <h2>Nodebase</h2>
        </Link>
        <Outlet />
      </div>
    </div>
  );
}
