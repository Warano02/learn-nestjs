import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entity/coffee.entity';
import { Flavour } from './entity/flavours.entity';
import { Event } from 'src/events/entities/event.entity';

class MockCoffeesService {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavour, Event])],
  controllers: [CoffeesController],
  providers: [{ provide: CoffeesService, useValue: new MockCoffeesService() }],
  exports: [CoffeesService],
})
export class CoffeesModule {}
