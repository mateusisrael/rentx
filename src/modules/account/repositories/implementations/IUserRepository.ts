import { User } from "../../entities/User";

interface IUserDTO {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  admin: boolean;
  avatar: string;
}

interface IUserRepository {
  create(user: IUserDTO): Promise<void | Error>;
  findByName(name: string): Promise<User>;
  list(): Promise<User[]>;
}

export { IUserRepository, IUserDTO };
