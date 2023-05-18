import  express  from "express";
import {getUsers,createUser, loginUser} from "../models/User";
import { addCategory, getCategories, deleteCategories, getMedicines, addMedicines, deleteMedicine} from "../controllers/medicine.js";

const router = express.Router();

router.get("/",getUsers);
router.post("/",createUser);
router.post("/login",loginUser);
router.post("/add-category", addCategory);
router.get("/categories",getCategories);
router.delete("/categories/:code",deleteCategories);
router.delete("/medicines/:name",deleteMedicine);
router.post("/add-medicines", addMedicines);
router.get("/medicines",getMedicines);

export default router;