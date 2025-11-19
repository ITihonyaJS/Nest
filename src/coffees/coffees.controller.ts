import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(): string {
    return 'Hello coffees';
  }
  @Get(':id')
  findOne(): string {
    return 'Hello #[id] coffee';
  }
}
