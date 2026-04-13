import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entity/coffee.entity';
import { Flavour } from './entity/flavours.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavour])],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
