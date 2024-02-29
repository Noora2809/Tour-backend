import express from "express";
import {
  deleteUser,
  getAllUser,
  updateUser,
  getSingleUser,
} from "../controllers/userController.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";


const router = express.Router()

//update User
router.put("/:id", verifyUser, updateUser);

//delete User
router.delete("/:id",verifyUser, deleteUser);

//get single User
router.get("/:id",verifyUser, getSingleUser);

//get all User
router.get("/",verifyAdmin, getAllUser);

export default router;
