import { Module } from '@nestjs/common';
import { ProductsController } from './products/products.controller';
import { UsersController } from './users/users.controller';
import { HomeController } from './home.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userModule } from './users/users.module';
import { productModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestdb',
      entities: [__dirname + '/**/*.entities{.ts,.js}'],
      synchronize: true,
    }),
    userModule,
    productModule,
  ],
  controllers: [ProductsController, UsersController, HomeController],
  providers: [],
})
export class AppModule {}
