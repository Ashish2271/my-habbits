
// import { t } from "@trpc/server";
// import { z } from "zod";

// export const appRouter = t.router({
//   getUser: t.procedure
//     .input(z.object({ id: z.number() }))
//     .output(UserSchema),
//   getHabits: t.procedure.output(z.array(HabitSchema)),
//   createHabit: t.procedure
//     .input(z.object({ name: z.string(), description: z.string(), frequency: z.number() }))
//     .output(HabitSchema),
//   updateHabit: t.procedure
//     .input(z.object({ id: z.number(), name: z.string(), description: z.string(), frequency: z.number() }))
//     .output(HabitSchema),
//   deleteHabit: t.procedure.input(z.object({ id: z.number() })).output(z.boolean()),
// });
import { initTRPC } from '@trpc/server';
 
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
