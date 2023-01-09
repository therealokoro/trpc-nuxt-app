import { inferAsyncReturnType } from "@trpc/server"

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = () => {
  return {
    auth: {
      name: "Okoro Redemption",
      email: "okororedemption24@gmail.com"
    }
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
