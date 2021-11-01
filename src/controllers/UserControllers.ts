import { Request, Response, NextFunction } from 'express';
import User from '../models/User';

export default class UserControllers {
  static async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await User.findAll();

      res.status(200).json({
        data: users,
        success: true,
      });
    } catch (error: any) {
      console.log(error);
      next(error);
    }
  }

  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { firstName, lastName, email } = req.body;

      const newUser = await User.create({
        firstName,
        lastName,
        email,
      });

      res.status(201).json({
        success: true,
        data: newUser,
      });
    } catch (error: any) {
      console.log(error);
      next(error);
    }
  }

  static async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const user = await User.findByPk(userId);

      res.status(200).json({
        data: user,
        success: true,
      });
    } catch (error: any) {
      console.log(error);
      next(error);
    }
  }

  static async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      // Destructure req info
      const { userId } = req.params;
      const { firstName, lastName, email } = req.body;

      const foundUser: any = await User.findByPk(userId);

      // Check user exist
      if (!foundUser) {
        next(new Error(`User with id ${userId} not found`));
        return;
      }

      // Update values
      if (firstName) foundUser.firstName = firstName;
      if (lastName) foundUser.lastName = lastName;
      if (email) foundUser.email = email;

      const updatedUser = await foundUser.save();

      // Send back updated user
      res.status(201).json({
        success: true,
        data: updatedUser,
      });
    } catch (error: any) {
      console.log(error);
      next(error);
    }
  }

  static async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;

      const foundUser = await User.findByPk(userId);

      if (!foundUser) {
        next(new Error(`User with id ${userId} was not found`));
        return;
      }

      await foundUser.destroy();

      res.status(201).json({
        success: true,
      });
    } catch (error: any) {
      console.log(error);
      next(error);
    }
  }
}
