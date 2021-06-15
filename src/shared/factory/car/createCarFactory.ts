import CarsRepository from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import CreateCarService from "@modules/cars/services/CreateCarService";

export const createCarFactory = () => {
  const carsRepository = new CarsRepository();

  const car = new CreateCarService(carsRepository);

  return car;
};