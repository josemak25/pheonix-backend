const { Router } = require("express");
const router = Router();

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) =>
  res.send({ check: "pheonix server started ok" })
);

module.exports = router;
