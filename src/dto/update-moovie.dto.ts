import { PartialType } from '@nestjs/mapped-types';
import { CreateMoovieDto } from './create-moovie.dto';

export class UpdateMoovieDto extends PartialType(CreateMoovieDto) {}
