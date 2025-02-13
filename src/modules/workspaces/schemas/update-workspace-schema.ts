import { z } from "zod";

export const updateWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "Must be 1 or more characters").optional(),
  image: z
    .union([
      z.instanceof(File),
      z.string().transform((val) => (val === "" ? undefined : val)),
    ])
    .optional(),
});
