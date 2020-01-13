const mongoose = require("mongoose");
const util = require("util");

// config should be imported before importing any other file
const { mongoUri, mongooseDebug, env } = require("./index");

const debug = require("debug")("pheonix-backend:app");

// plugin global promise in mongoose
mongoose.Promise = global.Promise;

// connect to mongo db
mongoose.connect(mongoUri, {
  keepAlive: 1,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

mongoose.connection.on("error", () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});

mongoose.connection.on("connected", () => {
  if (env === "development") {
    console.log(`CONNECTED to database: successfully`);
  }
});

// print mongoose logs in dev env
if (mongooseDebug) {
  mongoose.set("debug", (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}
