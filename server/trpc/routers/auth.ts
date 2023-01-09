import { z } from "zod"
import { publicProcedure, router } from "../trpc"

const schema = z.object({
  id: z.number()
})

const users = [
  {
    id: 1,
    surname: "Skiggs",
    firstName: "Lin",
    email: "lskiggs0@t.co"
  },
  {
    id: 2,
    surname: "Zaniolini",
    firstName: "Ivy",
    email: "izaniolini1@1und1.de"
  },
  {
    id: 3,
    surname: "Ravenshaw",
    firstName: "Rodge",
    email: "rravenshaw2@imdb.com"
  },
  {
    id: 4,
    surname: "Corby",
    firstName: "Shea",
    email: "scorby3@google.ru"
  },
  {
    id: 5,
    surname: "Fantonetti",
    firstName: "Dick",
    email: "dfantonetti4@apple.com"
  }
]

export const authRouter = router({
  getUser: publicProcedure.input(schema).query(({ input }) => {
    return users.find((curr) => curr.id == input.id)
  })
})
