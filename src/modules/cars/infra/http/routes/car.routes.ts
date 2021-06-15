import { Router } from "express";
import carsController from "../controllers/CarsController";

const carRoutes = Router();

carRoutes.get("/", carsController.index);
carRoutes.post("/", carsController.create);

export default carRoutes;
