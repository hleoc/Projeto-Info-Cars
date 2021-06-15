import { Request, Response } from "express";
import { classToClass } from "class-transformer";

import { listCarFactory } from "@shared/factory/car/listCarFactory";
import { createCarFactory } from "@shared/factory/car/createCarFactory";

class CarsController {
  public async index(_request: Request, response: Response) {
    const listCars = listCarFactory();
    const cars = await listCars.execute();

    return response.status(200).json({ success: true, cars });
  }

  public async create(request: Request, response: Response) {
    const carData = request.body;

    const createCar = createCarFactory();

    const car = await createCar.execute({...carData});

    return response.status(201).json({ success: true, car: classToClass(car) });
  }
}

const carsController = new CarsController();

export default carsController;
