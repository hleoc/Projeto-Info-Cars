import { Router } from "express";
import carsController from "../controllers/CarsController";

const carRoutes = Router();

carRoutes.get("/", carsController.index);

export default carRoutes;
