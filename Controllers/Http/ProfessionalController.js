import User from "../../Models/User.js";

const FildsToSelect = {
  name: 1,
  _id: 1,
  name: 1,
  email: 1,
  professional: 1,
  telephone: 1,
  state: 1,
  city: 1,
  zipcode: 1,
  address: 1,
  gender: 1,
};

const GetProfile = async (req, res) => {
  let svgs = await User.findById({ _id: req.params.id }).select(FildsToSelect);
  res.status(200).json(svgs);
};

const GetProfessinals = async (req, res) => {
  let svgs = await User.find({professional: 1}).select(FildsToSelect);
  res.status(200).json(svgs);
};

const GetStudents = async (req, res) => {
  let svgs = await User.find({professional: 0}).select(FildsToSelect);
  res.status(200).json(svgs);
};

export default {
  GetProfile,
  GetProfessinals,
  GetStudents
};
