import { z } from "zod";
const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

const signUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    dob: z.string().min(1, "Date of birth is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

  const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
});
const resetPasswordSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export { signInSchema, signUpSchema, forgotPasswordSchema, resetPasswordSchema };
