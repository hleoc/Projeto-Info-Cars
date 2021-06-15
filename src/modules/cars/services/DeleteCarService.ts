import ErrorsApp from "@shared/errors/ErrorsApp";
import ICarsRepository from "../repositories/ICarsRepository";


class DeleteCarService {
  constructor(
    private carsRepository: ICarsRepository,
  ) {}

  public async execute(car_id: string): Promise<void> {
    const checkCarExists = await this.carsRepository.getById(car_id);

    if(!checkCarExists) {
      throw new ErrorsApp("Carro não encontrado.", 404);
    }

    await this.carsRepository.delete(car_id);

    return;
  }
}

export default DeleteCarService;
