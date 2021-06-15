import ICreateCarDTO from "../dtos/ICreateCarDTO";
import Car from "../infra/typeorm/models/Car";
import ICarsRepository from "../repositories/ICarsRepository";

class CreateCarService {
  constructor(private carsRepository: ICarsRepository) {}

  public async execute(data: ICreateCarDTO): Promise<Car> {
    const car = await this.carsRepository.create({ ...data });

    return car;
  }
}

export default CreateCarService;
