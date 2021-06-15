import { getRepository, Repository } from "typeorm";

import ICarsRepository from "@modules/cars/repositories/ICarsRepository";
import Car from "../models/Car";

class CarsRepository implements ICarsRepository {
  private ormRepository: Repository<Car>;
  constructor() {
    this.ormRepository = getRepository(Car);
  }

  public async getAllCars(): Promise<Car[]> {
    const cars = await this.ormRepository.find();

    return cars;
  }
}

export default CarsRepository;
