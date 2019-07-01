import { Controller, Body, Param, Get, Post, Put, Delete, HttpCode } from '@nestjs/common';
import { UsersService } from './users-service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param() params) {
    return this.usersService.getUserById(params.id);
  }

  @Post()
  addUser(@Body() reqBody) {
    return this.usersService.addUser(reqBody);
  }

  @Put(':id')
  @HttpCode(201)
  updateUserById(@Param() params, @Body() reqBody) {
    return this.usersService.updateUserById(params.id, reqBody);
  }

  @Delete(':id')
  @HttpCode(204)
  deleteUserById(@Param() params) {
    return this.usersService.deleteUserById(params.id);
  }
}
