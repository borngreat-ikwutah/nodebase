import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { toast } from "sonner";

export const LogoutButton = () => {
  const navigate = useNavigate();
  const router = useRouter();
  return (
    <Button
      variant="default"
      onClick={() => {
        authClient.signOut({
          fetchOptions: {
            onSuccess: async () => {
              await router.invalidate();
              toast.success("Logged out successfully");
              await navigate({ to: "/login" });
            },
          },
        });
      }}
    >
      Logout
    </Button>
  );
};
