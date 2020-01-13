const Query = require("./query");
const USER = require("../model/user");

// sync all models to general query methods
const UserQuery = new Query(USER);

// export synched model for use on controller
module.exports = { UserQuery };
