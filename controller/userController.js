const httpStatus = require("http-status");
const { UserQuery } = require("../queries");

const sendResponse = require("../helpers/response");

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserQuery.findById(id);

    if (!user) {
      return res.status(httpStatus.UNAUTHORIZED).json(
        sendResponse(httpStatus.UNAUTHORIZED, "invalid user", null, {
          user: "invalid user"
        })
      );
    }

    const token = await authService.issue(user.toJSON());
    return res.json(sendResponse(httpStatus.OK, "success", user, null, token));
  } catch (err) {
    next(err);
  }
};
