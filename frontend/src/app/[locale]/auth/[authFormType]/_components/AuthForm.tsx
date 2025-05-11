"use client";
import { z } from "zod";
import {
  signInFormDefaultValues,
  signInFormSchema,
  signUpFormDefaultValues,
  signUpFormSchema,
} from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface AuthFormProps {
  authFormType: "sign-in" | "sign-up";
}

const AuthForm = ({ authFormType }: AuthFormProps) => {
  const schema =
    authFormType === "sign-in" ? signInFormSchema : signUpFormSchema;
  const defaultValues = authFormType
    ? signInFormDefaultValues
    : signUpFormDefaultValues;

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const handleSubmit = () => {
    console.log(form.getValues());
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="password" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        {authFormType === "sign-up" && (
          <>
            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="passwordConfirmation"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="date" placeholder="date of birth" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="termsAccepted"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <>
                      <Label>I consent</Label>
                      <Input type="checkbox" {...field} />
                    </>
                  </FormControl>
                </FormItem>
              )}
            />
          </>
        )}
      </form>
      <div className="">
        <Button className="cursor-pointer" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default AuthForm;
