import User from "../../Models/User.js";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";

const AuthUser = function (req, res) {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const decoded = JWT.verify(token, process.env.SECRET_KEY);

    return decoded;
  } catch (error) {
    return {};
  }
};

const UserResponse = function (user) {
  let userReturn = {
    name: user.name,
    email: user.email,
    professional: user.professional,
    professional: user.professional,
    telephone: user.telephone,
    state: user.state,
    city: user.city,
    zipcode: user.zipcode,
    address: user.address,
    gender: user.gender
  };

  return userReturn;
};

const Login = async (req, res) => {
  try {
    const { email, passwordUser } = req.body;

    if (!req.body) {
      res.status(400).send({
        msg: "send_all_params",
        code: "400",
      });
    }

    let user = "";
    user = await User.findOne({ email }).select("+password");

    if (user) {
      let { password } = user;

      let verificationPassword = await bcrypt.compare(passwordUser, password);

      if (verificationPassword) {
        let userId = user._id.toString();

        let dataUser = {
          userId,
          user,
        };

        const token = JWT.sign(dataUser, process.env.SECRET_KEY, {
          expiresIn: 604800,
        });

        user = UserResponse(user);

        let userResponse = {
          token,
          userId,
          user,
        };

        res.status(200).json(userResponse);
      } else {
        res.status(401).send({
          msg: "password_or_username_do_not_match",
          code: "401",
        });
      }
    } else {
      res.status(404).send({ msg: "user_not_found", code: "404" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "error_when_login_user",
      code: "500",
    });
  }
};

const CreateLogin = (req, res) => {
  try {
    const user = req.body;

    let newUser = "";
    const results = User.find(
      { email: user.email },
      function name(error, users) {
        if (users.length) {
          res.status(400).send({
            msg: "already_exists_registered_email_address",
            code: "400",
          });
        } else {
          newUser = User(user);

          newUser.save(function (error, newUser) {
            if (error) {
              res.status(400).send(error);
            } else {
              let userId = newUser._id.toString();

              let dataUser = {
                userId,
                newUser,
              };

              const token = JWT.sign(dataUser, process.env.SECRET_KEY, {
                expiresIn: 604800,
              });

              let user = UserResponse(newUser);

              let userResponse = {
                token,
                userId,
                user,
              };

              res.status(200).json(userResponse);
            }
          });
        }
      }
    );

    return results;
  } catch (error) {
    console.log(error);
    res.status(500).send({
      msg: "error_when_create_user",
      code: 500,
    });
  }
};

export default {
  Login,
  AuthUser,
  CreateLogin,
};
