import ErrorsApp from "@shared/errors/ErrorsApp";
import IUpdateCarsDTO from "../dtos/IUpdateCarsDTO";
import Car from "../infra/typeorm/models/Car";
import ICarsRepository from "../repositories/ICarsRepository";

class UpdateCarService {
  constructor(private carsRepository: ICarsRepository) {}

  public async execute(data: IUpdateCarsDTO): Promise<Car> {
    const car = await this.carsRepository.getById(data.id);

    if (!car) {
      throw new ErrorsApp("Carro não encontrado.", 404);
    }

    Object.assign(car, data);

    return this.carsRepository.save(car);
  }
}

export default UpdateCarService;
