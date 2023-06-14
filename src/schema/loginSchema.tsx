import { z } from "zod";

const LoginSchema = z.object({
  password: z.string().min(1, { message: "Required" }),
});

export type Login = z.infer<typeof LoginSchema>;
export default LoginSchema;
