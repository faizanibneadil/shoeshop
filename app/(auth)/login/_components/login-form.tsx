"use client";

import { login } from "@/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { memo } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const LoginForm: React.FC = memo(() => {
  const { pending } = useFormStatus();
  const { execute, status } = useAction(login, {
    onError: (error) => {
      toast.error(error?.validationErrors?.email, { id: "login" });
      toast.error(error?.validationErrors?.password, { id: "login" });
    },
    onExecute: () => {
      toast.loading("Logging you in ...", { id: "login" });
    },
    onSuccess: (res) => {
      window.location.replace(window.location.pathname);
      toast.success(res?.success, { id: "login" });
    },
    onSettled: () => {},
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(execute)}>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="email"
            disabled={status === "executing"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="m@example.com" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid gap-2">
          <FormField
            control={form.control}
            name="password"
            disabled={status === "executing"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="*****" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={pending || status === "executing"}
          type="submit"
          className="w-full mb-2"
        >
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </form>
    </Form>
  );
});
LoginForm.displayName = "LoginForm";
export default LoginForm;
