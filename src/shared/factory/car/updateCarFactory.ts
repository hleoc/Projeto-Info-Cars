import CarsRepository from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import UpdateCarService from "@modules/cars/services/UpdateCarService";

export const updateCarFactory = () => {
  const carsRepository = new CarsRepository();

  const address = new UpdateCarService(carsRepository);

  return address;
};
