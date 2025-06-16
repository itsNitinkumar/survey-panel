'use client';
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "@/lib/schemas/auth.schema";
import AuthLayout from "@/components/auth/auth-layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const ForgotPasswordPage=()=> {
  const form = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (values: any) => {
    console.log("Forgot Password", values);
  };

  return (
    <AuthLayout
      title="Forgot Password"
      description="Enter your email address to receive password reset instructions."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Send Reset Link</Button>
        </form>
      </Form>
    </AuthLayout>
  );
}

export default ForgotPasswordPage;
