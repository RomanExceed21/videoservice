import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MooviesService } from '../services/moovies.service';
import { CreateMoovieDto } from '../dto/create-moovie.dto';
import { UpdateMoovieDto } from '../dto/update-moovie.dto';

@Controller('moovies')
export class MooviesController {
  constructor(private readonly mooviesService: MooviesService) {}

  @Post()
  create(@Body() createMoovieDto: CreateMoovieDto) {
    return this.mooviesService.create(createMoovieDto);
  }

  @Get()
  findAll() {
    return this.mooviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mooviesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoovieDto: UpdateMoovieDto) {
    return this.mooviesService.update(+id, updateMoovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mooviesService.remove(+id);
  }
}
