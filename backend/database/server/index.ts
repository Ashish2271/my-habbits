import { db } from './db';
import { publicProcedure, router } from './trpc';
 
const appRouter = router({
  userList: publicProcedure
    .query(async () => {
      // Retrieve users from a datasource, this is an imaginary database
      const users = await db.user.findMany();
             
const users: User[]
      return users;
    }),
});

import { createHTTPServer } from '@trpc/server/adapters/standalone';
 
const appRouter = router({
  // ...
});
 
const server = createHTTPServer({
  router: appRouter,
});
 
server.listen(3000);