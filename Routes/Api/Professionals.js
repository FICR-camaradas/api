import ProfessionalController from "../../Controllers/Http/ProfessionalController.js";
import AuthMiddleware from "../../Middlewares/AuthMiddleware.js";
import GeneralMiddlewares from "../../Middlewares/GeneralMiddlewares.js"

export default [
  {
    method: "get",
    route: "/professionals",
    middleware: GeneralMiddlewares.GeneralMiddleware,
    controller: ProfessionalController.GetProfessinals,
  },
  {
    method: "get",
    route: "/profile/:id",
    middleware: AuthMiddleware.AuthMiddleware,
    controller: ProfessionalController.GetProfile,
  },
  {
    method: "get",
    route: "/students",
    middleware: AuthMiddleware.AuthMiddleware,
    controller: ProfessionalController.GetStudents,
  }
];
