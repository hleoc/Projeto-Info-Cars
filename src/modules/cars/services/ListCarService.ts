import Car from "../infra/typeorm/models/Car";
import ICarsRepository from "../repositories/ICarsRepository";

class ListCarService {
  constructor(
    private carsRepository: ICarsRepository,
  ) {}

  public async execute(): Promise<Car[]> {
    const listCars = await this.carsRepository.getAllCars();

    return listCars;
  }
}

export default ListCarService;
