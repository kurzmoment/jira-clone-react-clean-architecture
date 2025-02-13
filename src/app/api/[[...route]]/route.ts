import { Hono } from "hono";
import { handle } from "hono/vercel";
import auth from "@/modules/auth/services/server/route";
import members from "@/modules/members/services/server/route";
import workspace from "@/modules/workspaces/services/server/route";

const app = new Hono().basePath("/api");

const routes = app
  .route("/auth", auth)
  .route("/workspaces", workspace)
  .route("/members", members);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
