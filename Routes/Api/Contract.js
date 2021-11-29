import ContractController from "../../Controllers/Http/ContractController.js";
import AuthMiddleware from "../../Middlewares/AuthMiddleware.js";

export default [
  {
    method: "get",
    route: "/contracts",
    middleware: AuthMiddleware.AuthMiddleware,
    controller: ContractController.GetContracts,
  },
  {
    method: "get",
    route: "/contracts/:id",
    middleware: AuthMiddleware.AuthMiddleware,
    controller: ContractController.GetContract,
  },
  {
    method: "post",
    route: "/contracts",
    middleware: AuthMiddleware.AuthMiddleware,
    controller: ContractController.InsertContracts,
  },
];
