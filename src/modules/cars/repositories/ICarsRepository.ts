import Car from "../infra/typeorm/models/Car";

export default interface ICarsRepository {
  getAllCars(): Promise<Car[]>;
}
