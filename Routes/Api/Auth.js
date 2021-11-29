import AuthController from "../../Controllers/Auth/AuthController.js";
import GeneralMiddlewares from "../../Middlewares/GeneralMiddlewares.js"

export default [
  {
    method: "post",
    route: "/login",
    middleware: GeneralMiddlewares.GeneralMiddleware,
    controller: AuthController.Login,
  },
  {
    method: "post",
    route: "/createlogin",
    middleware: GeneralMiddlewares.GeneralMiddleware,
    controller: AuthController.CreateLogin,
  },
];
