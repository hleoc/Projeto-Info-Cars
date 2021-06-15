import { Router } from "express";

import carRoutes from "@modules/cars/infra/http/routes/car.routes";

const routes = Router();

routes.use("/cars", carRoutes);

export default routes;
