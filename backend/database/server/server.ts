import { z } from 'zod';
 
const appRouter = router({
  // ...
  userById: publicProcedure
    .input(z.string())
    .query(async (opts) => {
      const { input } = opts;
      // Retrieve the user with the given ID
      const user = await db.user.findById(input);
      return user;
    }),
});

const appRouter = router({
    // ...
    userCreate: publicProcedure
      .input(z.object({ name: z.string() }))
      .mutation(async (opts) => {
        const { input } = opts;
                 
  const input: {
      name: string;
  }
        // Create a new user in the database
        const user = await db.user.create(input);
  const user: {
      name: string;
      id: string;
  }
        return user;
      }),
  });