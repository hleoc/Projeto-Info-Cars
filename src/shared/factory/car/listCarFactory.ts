import CarsRepository from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import ListCarService from "@modules/cars/services/ListCarService";

export const listCarFactory = () => {
  const carsRepository = new CarsRepository();

  const cars = new ListCarService(carsRepository);

  return cars;
};
