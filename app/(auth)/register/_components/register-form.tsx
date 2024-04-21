"use client";

import { register } from "@/actions";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { registerSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { memo } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const RegisterForm: React.FC = memo(() => {
  const { pending } = useFormStatus();
  const { execute, status } = useAction(register, {
    onError: (error) => {
      toast.error(error?.validationErrors?.firstName, { id: "register" });
      toast.error(error?.validationErrors?.lastName, { id: "register" });
      toast.error(error?.validationErrors?.email, { id: "register" });
      toast.error(error?.validationErrors?.password, { id: "register" });
    },
    onExecute: () => {
      toast.loading("Creating new user ...", { id: "register" });
    },
    onSuccess: (res) => {
      toast.success(res?.success, { id: "register" });
    },
    onSettled: () => {},
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(execute)}>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="firstName"
              disabled={status === "executing"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="First name" {...field} />
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
              name="lastName"
              disabled={status === "executing"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Last name" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
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
          Create an account
        </Button>
        <Link
          href="/register"
          className={buttonVariants({
            variant: "outline",
            className: "w-full",
          })}
        >
          Sign up with Google
        </Link>
      </form>
    </Form>
  );
});
RegisterForm.displayName = "RegisterForm";
export default RegisterForm;
