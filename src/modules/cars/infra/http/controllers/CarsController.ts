import { Request, Response } from "express";

import { listCarFactory } from "@shared/factory/car/listCarFactory";

class CarsController {
  public async index(_request: Request, response: Response) {
    const listCars = listCarFactory();
    const cars = await listCars.execute();

    return response.status(200).json({ success: true, cars });
  }
}

const carsController = new CarsController();

export default carsController;
