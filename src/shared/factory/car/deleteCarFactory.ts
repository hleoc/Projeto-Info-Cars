import CarsRepository from "@modules/cars/infra/typeorm/repositories/CarsRepository";
import DeleteCarService from "@modules/cars/services/DeleteCarService";


export const deleteCarFactory = () => {
  const carsRepository = new CarsRepository();

  const car = new DeleteCarService(carsRepository);

  return car;
};