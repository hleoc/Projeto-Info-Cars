import CarsRepository from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import ShowCarService from "@modules/cars/services/ShowCarService";

export const showCarFactory = () => {
  const carsRepository = new CarsRepository();

  const cars = new ShowCarService(carsRepository);

  return cars;
};