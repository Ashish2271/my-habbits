import {z} from "zod"


export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  habits: z.array(Habit),
});

export const HabitSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  frequency: z.number(),
  userId: z.number(),
});
