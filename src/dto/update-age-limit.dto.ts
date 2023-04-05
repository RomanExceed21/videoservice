import { PartialType } from '@nestjs/mapped-types';
import { CreateAgeLimitDto } from './create-age-limit.dto';

export class UpdateAgeLimitDto extends PartialType(CreateAgeLimitDto) {}
