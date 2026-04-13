import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'password',
      database: 'coffety',
      autoLoadEntities: true,
      synchronize: true,
      port: 5432,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
