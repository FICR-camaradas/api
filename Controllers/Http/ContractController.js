import Contract from "../../Models/Contract.js";
import AuthController from "../../Controllers/Auth/AuthController.js";

const GetContract = async (req, res) => {
  const user = AuthController.AuthUser(req);

  let contract = await Contract.findById({ _id: req.params.id });

  res.status(200).json(contract);
};

const GetContracts = async (req, res) => {
  const user = AuthController.AuthUser(req);

  console.log(user);

  let professional = user.user.professional;
  let whenColumnSearch = { userIdClient: user.userId };

  if (professional) {
    whenColumnSearch = { userIdProfessional: user.userId };
  }

  console.log(whenColumnSearch)

  let contract = await Contract.find(whenColumnSearch);

  res.status(200).json(contract);
};

const InsertContracts = async (req, res) => {
  const user = AuthController.AuthUser(req);

  let contract = Contract(req.body);

  contract.userIdClient = user.userId;

  contract.save(function (error, newContract) {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).json(newContract);
    }
  });
};

export default {
  GetContract,
  GetContracts,
  InsertContracts,
};
