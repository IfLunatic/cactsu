import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
      phoneNumber: createUserDto.phoneNumber
      },
    });
    if (existUser) {
      throw new BadRequestException('User with this phone number already exists');
    }
    
    const user = await this.userRepository.save({
      phoneNumber: createUserDto.phoneNumber,
      username: createUserDto.username,
      password: await argon2.hash(createUserDto.password),
      name: createUserDto.name,
      surname: createUserDto.surname,
    })
    
    return {user}
  };

  findAll() {
    return `This action returns all user`;
  }
}
