import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getAllUsers() {
    return {
      message: 'this should get all users from the database',
      data: ['array', 'of', 'users'],
    };
  }

  getUserById(id) {
    return {
      message: 'this should get a specific user from the database',
      data: `user with id = ${id}`,
      id,
    };
  }

  addUser(userData) {
    return {
      message: 'this should add a new user after validation',
      user: userData,
    };
  }

  updateUserById(id, userData) {
    console.log('update')
    return {
      message: 'this should update a specific user from the database',
      id,
      user: userData,
    };
  }

  deleteUserById(id) {
    return {
      message: 'this should delete a specific user from the database',
      data: `user with id = ${id}`,
      id,
    };
  }
}
