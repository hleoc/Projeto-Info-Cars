import { Request, Response } from "express";

import { listCarFactory } from "@shared/factory/car/listCarFactory";
import { createCarFactory } from "@shared/factory/car/createCarFactory";
import { showCarFactory } from "@shared/factory/car/showCarFactory";

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

    return response.status(201).json({ success: true, car });
  }

  public async show(request: Request, response: Response) {
    const car_id = request.params.id;

    const showCar = showCarFactory();

    const car = await showCar.execute(car_id);

    return response
      .status(200)
      .json({ success: true, car });
  }
}

const carsController = new CarsController();

export default carsController;
