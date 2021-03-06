import { User } from "../../entities/User";

interface IUserDTO {
  name: string;
  username: string;
  password: string;
  email: string;
  driver_license: string;
  admin: boolean;
  avatar: string;
}

interface IUserRepository {
  create(user: IUserDTO): Promise<void | Error>;
  findByName(username: string): Promise<User>;
  list(): Promise<User[]>;
}

export { IUserRepository, IUserDTO };
