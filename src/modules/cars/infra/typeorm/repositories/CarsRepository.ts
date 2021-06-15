import { getRepository, Repository } from "typeorm";

import ICarsRepository from "@modules/cars/repositories/ICarsRepository";
import Car from "../models/Car";
import ICreateCarDTO from "@modules/cars/dtos/ICreateCarDTO";

class CarsRepository implements ICarsRepository {
  private ormRepository: Repository<Car>;
  constructor() {
    this.ormRepository = getRepository(Car);
  }

  public async getAllCars(): Promise<Car[]> {
    const cars = await this.ormRepository.find();

    return cars;
  }

  public async create(data: ICreateCarDTO): Promise<Car> {
    const car = this.ormRepository.create(data);

    await this.ormRepository.save(car);

    return car;
  }
}

export default CarsRepository;
