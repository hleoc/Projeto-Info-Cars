import ICreateCarDTO from "../dtos/ICreateCarDTO";
import Car from "../infra/typeorm/models/Car";

export default interface ICarsRepository {
  getAllCars(): Promise<Car[]>;
  create(data: ICreateCarDTO): Promise<Car>;
  getById(id: string): Promise<Car | undefined>;
}
