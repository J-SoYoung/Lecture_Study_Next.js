import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "894fe82bdc49ed979161",
      clientSecret: "fc9e9648ae9e7aa23f7b5f2bbbb272ee4949c30d",
    }),
  ],
  secret: "thdud",
  adapter: MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);
