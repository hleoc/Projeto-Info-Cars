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

  public async getById(id: string): Promise<Car | undefined> {
    const car = await this.ormRepository.findOne(id);

    return car;
  }

  public async save(car: Car): Promise<Car> {
    return this.ormRepository.save(car);
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
    return;
  }
}

export default CarsRepository;
