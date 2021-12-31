import { Repository, getRepository } from "typeorm";

import { User } from "../../../entitie/User";
import { IUserDTO, IUserRepository } from "./implementations/IUserRepository";

class UserRepository implements IUserRepository {
  repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }

  async create(user: IUserDTO): Promise<void> {
    const createdUser = this.repository.create(user);
    await this.repository.save(createdUser);
  }

  async findByName(name: string): Promise<User> {
    const user = await this.repository.findOne({ name });
    return user;
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }
}

export { UserRepository };
