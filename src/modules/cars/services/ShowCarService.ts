import ErrorsApp from "@shared/errors/ErrorsApp";
import Car from "../infra/typeorm/models/Car";
import ICarsRepository from "../repositories/ICarsRepository";

class ShowCarService {
  constructor(private carsRepository: ICarsRepository) {}

  public async execute(car_id: string): Promise<Car> {
    const car = await this.carsRepository.getById(car_id);

    if (!car) {
      throw new ErrorsApp("Carro não encontrado.", 404);
    }

    return car;
  }
}

export default ShowCarService;
