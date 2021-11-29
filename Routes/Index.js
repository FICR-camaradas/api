import { Router } from "express";
import Routes from "./Config.js";

const Route = Router();

for (const routePath of Routes) {
  Route[routePath.method](
    routePath.route,
    routePath.middleware,
    routePath.controller
  );
}

export default Route;
