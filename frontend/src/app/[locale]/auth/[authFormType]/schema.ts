import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type SignInForm = z.infer<typeof signInFormSchema>;

export const signInFormDefaultValues: SignInForm = {
  email: "",
  password: "",
};

export const signUpFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string(),
    passwordConfirmation: z.string(),
    dateOfBirth: z.date({ message: "Wrong dob" }),
    username: z.string({ message: "Wrong username" }),
    termsAccepted: z.boolean({ message: "no termsAccepted" }),
  })
  .superRefine(({ password, passwordConfirmation }, ctx) => {
    if (password !== passwordConfirmation)
      ctx.addIssue({
        code: "custom",
        message: "Passwords did not match",
        path: ["passwordConfirmation"],
      });
  });

export type SignUpForm = z.infer<typeof signUpFormSchema>;
export const signUpFormDefaultValues: SignUpForm = {
  ...signInFormDefaultValues,
  dateOfBirth: new Date(),
  passwordConfirmation: "",
  username: "",
  termsAccepted: false,
};
