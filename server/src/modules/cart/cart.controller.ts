import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import products, { Product } from '../../products';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

interface CartItem extends Product {
  quantity: number;
}

interface Cart {
  cartItems: CartItem[];
}

// generating cart for easier testing, this is not a production code
const initialCart = (indexes: number[]): Cart => ({
  cartItems: indexes.map((index) => ({
    ...products[index],
    quantity: 1,
  })),
});

@Controller('cart')
export class CartController {
  private carts: Record<number, Cart> = {
    1: initialCart([0, 1, 2]),
    2: initialCart([3, 4, 5]),
  };

  constructor() {
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async index(@Request() req): Promise<Cart> {
    return this.carts[req.user.userId] ?? { cartItems: [] };
  }


}
