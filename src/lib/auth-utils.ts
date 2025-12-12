import { authClient } from "./auth-client";
import { redirect } from "@tanstack/react-router";

export const requireAuth = () => {
  const { data } = authClient.useSession();

  if (!data?.session) {
    redirect({
      to: "/login",
    });
  }

  return data!.session;
};
