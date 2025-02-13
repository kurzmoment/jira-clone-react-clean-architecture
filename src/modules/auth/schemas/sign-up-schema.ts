import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().nonempty({ message: "Required" }),
  email: z.string().email(),
  password: z.string().min(8, "Minimum of 8 characters required").max(256),
});
