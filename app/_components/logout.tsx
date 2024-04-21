"use client";
import { logout } from "@/actions";
import { Button } from "@/components/ui/button";
import { useAction } from "next-safe-action/hooks";
import { memo } from "react";
import { toast } from "sonner";

const Logout: React.FC = memo(() => {
  const { execute, status } = useAction(logout, {
    onError: () => {},
    onExecute: () => {
      toast.loading("Logging you out ...", { id: "logout" });
    },
    onSuccess: () => {
      window.location.replace(window.location.pathname);
      toast.success("You are logged out", { id: "logout" });
    },
    onSettled: () => {},
  });

  return (
    <Button
      disabled={status === "executing"}
      onClick={() => execute({})}
      className="w-full"
    >
      {status === "executing" ? "Logging out ... " : "Logout"}
    </Button>
  );
});
Logout.displayName = "Logout";
export default Logout;
