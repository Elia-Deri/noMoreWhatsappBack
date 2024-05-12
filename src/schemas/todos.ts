import { z } from "zod";

export const todoSchema = z.object({
  name: z.string().max(30, "בוא לא נגזים..."),
  description: z.string().max(100, "בוא לא נגזים...").optional(),
  deadLine: z.date().optional(),
  location: z
    .string()
    .min(3, "אין מיקום עם כל כך קצת מלל")
    .max(20, "בוא לא נגזים..."),
  contact: z
    .object({
      name: z.string().max(50, "בוא לא נגזים..."),
      phoneNumber: z.string().superRefine((value) => {
        const phoneRegExp = /^0\d{1,2}-\d{3}-\d{4}$/;
        if (!phoneRegExp.test(value.trim())) {
          throw new Error("Invalid phone number format");
        }
        return value;
      }),
    })
    .optional(),
  done: z.boolean(),
});
