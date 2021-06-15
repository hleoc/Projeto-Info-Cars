import { Router } from "express";
import carsController from "../controllers/CarsController";

const carRoutes = Router();

carRoutes.get("/", carsController.index);
carRoutes.post("/", carsController.create);
carRoutes.get("/:id", carsController.show);
carRoutes.put("/:id", carsController.update);
carRoutes.delete("/:id", carsController.delete);

export default carRoutes;
