import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(): string {
    return 'Hello coffees';
  }
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Hello #${id} coffee`;
  }
}
