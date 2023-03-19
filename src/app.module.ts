import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { HomeController } from './controllers/home.controller';
import { ProductsService } from './services/products/products.service';
import { BrandsService } from './services/brands/brands.service';
import { CategoriesService } from './services/categories/categories.service';
import { CustomersService } from './services/customers/customers.service';
import { OrdersService } from './services/orders/orders.service';
import { UsersService } from './services/users/users.service';

@Module({
  imports: [],
  controllers: [
    ProductsController,
    CategoriesController,
    UsersController,
    CustomersController,
    BrandsController,
    OrdersController,
    HomeController,
  ],
  providers: [ProductsService, BrandsService, CategoriesService, CustomersService, OrdersService, UsersService],
})
export class AppModule {}