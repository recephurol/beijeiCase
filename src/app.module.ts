import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { AdressController } from './adress/adress.controller';
import { AddressController } from './address/address.controller';
import { SubscriptionController } from './subscription/subscription.controller';
import { OrderController } from './order/order.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, AdressController, AddressController, SubscriptionController, OrderController],
  providers: [AppService],
})
export class AppModule {}
