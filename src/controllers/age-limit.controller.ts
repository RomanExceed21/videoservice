import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgeLimitService } from '../services/age-limit.service';
import { CreateAgeLimitDto } from '../dto/create-age-limit.dto';
import { UpdateAgeLimitDto } from '../dto/update-age-limit.dto';

@Controller('age-limit')
export class AgeLimitController {
  constructor(private readonly ageLimitService: AgeLimitService) {}

  @Post()
  create(@Body() createAgeLimitDto: CreateAgeLimitDto) {
    return this.ageLimitService.create(createAgeLimitDto);
  }

  @Get()
  findAll() {
    return this.ageLimitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ageLimitService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAgeLimitDto: UpdateAgeLimitDto,
  ) {
    return this.ageLimitService.update(+id, updateAgeLimitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ageLimitService.remove(+id);
  }
}
