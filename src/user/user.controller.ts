import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { tb_user } from '@prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getData(): Promise<tb_user> {
    return this.userService.get();
  }

  @Post()
  async postData(
    @Body() body: { name: string; username: string; password: string },
  ): Promise<tb_user> {
    return this.userService.post(body);
  }

  @Get(':id')
  async detailData(@Param('id') id: number): Promise<tb_user> {
    return this.userService.detail(id);
  }

  @Delete(':id')
  async deleteData(@Param('id') id: number): Promise<tb_user> {
    return this.userService.delete(id);
  }

  @Put(':id')
  async putData(
    @Param('id') id: number,
    @Body() body: { name: string; username: string; password: string },
  ): Promise<tb_user> {
    return this.userService.put(id, body);
  }
}
