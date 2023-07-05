import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server response");
});

export default router;
