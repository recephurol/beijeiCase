import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { AddressController } from './address/address.controller';
import { SubscriptionController } from './subscription/subscription.controller';
import { OrderController } from './order/order.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    AddressController,
    SubscriptionController,
    OrderController,
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  providers: [AppService],
})
export class AppModule {}
