import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import {
  Menu,
  FileText,
  History,
  CreditCard,
  AlertCircle,
  User,
  LogOut,
  Plus,
  Minus,
  ShoppingCart,
  Trash2,
} from 'lucide-react';
import { User as UserType, CartItem } from '../App';
import SideNav from './SideNav';

type CreateBillScreenProps = {
  cart: CartItem[];
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  onRemoveFromCart: (itemId: string) => void;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onCreateBill: () => void;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  user: UserType;
};

type FoodItem = {
  id: string;
  name: string;
  code: string;
  price: number;
  category: string;
};

const foodItems: FoodItem[] = [
  { id: '1', name: 'Veg Thali', code: 'VT001', price: 120, category: 'Main Course' },
  { id: '2', name: 'Non-Veg Thali', code: 'NVT001', price: 150, category: 'Main Course' },
  { id: '3', name: 'Dal Tadka', code: 'DT001', price: 80, category: 'Main Course' },
  { id: '4', name: 'Paneer Butter Masala', code: 'PBM001', price: 140, category: 'Main Course' },
  { id: '5', name: 'Chicken Curry', code: 'CC001', price: 160, category: 'Main Course' },
  { id: '6', name: 'Biryani', code: 'BIR001', price: 180, category: 'Rice' },
  { id: '7', name: 'Jeera Rice', code: 'JR001', price: 60, category: 'Rice' },
  { id: '8', name: 'Roti (4 pcs)', code: 'RT001', price: 20, category: 'Bread' },
  { id: '9', name: 'Naan (2 pcs)', code: 'NN001', price: 40, category: 'Bread' },
  { id: '10', name: 'Samosa (2 pcs)', code: 'SM001', price: 30, category: 'Snacks' },
  { id: '11', name: 'Chai', code: 'CH001', price: 15, category: 'Beverages' },
  { id: '12', name: 'Coffee', code: 'CF001', price: 20, category: 'Beverages' },
  { id: '13', name: 'Cold Drink', code: 'CD001', price: 25, category: 'Beverages' },
  { id: '14', name: 'Ice Cream', code: 'IC001', price: 40, category: 'Desserts' },
  { id: '15', name: 'Gulab Jamun', code: 'GJ001', price: 35, category: 'Desserts' },
];

export default function CreateBillScreen({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onUpdateQuantity,
  onCreateBill,
  onNavigate,
  onLogout,
  user,
}: CreateBillScreenProps) {
  const [showCart, setShowCart] = useState(false);

  const categories = Array.from(new Set(foodItems.map((item) => item.category)));
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        zIndex: 0,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      <SideNav onNavigate={onNavigate} onLogout={onLogout} />

      {/* SCROLLABLE CONTENT AREA */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingTop: '40px', paddingBottom: cart.length > 0 && !showCart ? '100px' : '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: '100%', maxWidth: '600px', padding: '0 16px' }}>
            {showCart ? (
              /* Cart View */
              <div style={{ paddingTop: '40px' }}>
                <Card className="shadow-lg border-blue-100">
                  <CardHeader className="bg-blue-50" style={{ paddingTop: '16px', paddingBottom: '10px' }}>
                    <CardTitle className="flex items-center gap-2 text-blue-900">
                      <ShoppingCart className="w-5 h-5" />
                      Your Cart
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    {cart.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        Your cart is empty. Add items to create a bill.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {cart.map((item) => (
                          <Card key={item.id} className="border-gray-200">
                            <CardContent className="p-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex-1">
                                  <div className="text-gray-900">{item.name}</div>
                                  <div className="text-sm text-gray-500">Code: {item.code}</div>
                                  <div className="text-blue-600 mt-1">₹{item.price}</div>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => onRemoveFromCart(item.id)}
                                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                              <div className="flex items-center gap-3">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                  className="h-8 w-8"
                                >
                                  <Minus className="w-4 h-4" />
                                </Button>
                                <span className="w-12 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                  className="h-8 w-8"
                                >
                                  <Plus className="w-4 h-4" />
                                </Button>
                                <span className="ml-auto text-blue-900">
                                  ₹{(item.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        ))}

                        <Separator className="my-4" />

                        <div className="flex items-center justify-between text-lg">
                          <span className="text-gray-700">Total Amount:</span>
                          <span className="text-blue-900">₹{cartTotal.toFixed(2)}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-4 pb-6">
                          <Button
                            variant="outline"
                            onClick={() => setShowCart(false)}
                            className="h-11"
                          >
                            Add More Items
                          </Button>
                          <Button
                            onClick={onCreateBill}
                            className="h-11 bg-blue-600 hover:bg-blue-700 text-white"
                            disabled={cart.length === 0}
                          >
                            Create Bill
                          </Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ) : (
              /* Food Items View */
              <div>
                {categories.map((category) => (
                  <div key={category} className="mb-6">
                    <h2 className="text-lg text-blue-900 mb-3 text-center">{category}</h2>
                    <div className="space-y-3">
                      {foodItems
                        .filter((item) => item.category === category)
                        .map((item) => {
                          const cartItem = cart.find((c) => c.id === item.id);
                          return (
                            <Card key={item.id} className="border-gray-200 hover:border-blue-300 transition-colors">
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex-1">
                                    <div className="text-gray-900">{item.name}</div>
                                    <div className="text-sm text-gray-500 mt-1">Code: {item.code}</div>
                                    <div className="text-blue-600 mt-2">₹{item.price}</div>
                                  </div>
                                  {cartItem ? (
                                    <div className="flex items-center gap-2">
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => onUpdateQuantity(item.id, cartItem.quantity - 1)}
                                        className="h-9 w-9"
                                      >
                                        <Minus className="w-4 h-4" />
                                      </Button>
                                      <span className="w-8 text-center">{cartItem.quantity}</span>
                                      <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => onUpdateQuantity(item.id, cartItem.quantity + 1)}
                                        className="h-9 w-9"
                                      >
                                        <Plus className="w-4 h-4" />
                                      </Button>
                                    </div>
                                  ) : (
                                    <Button
                                      onClick={() => onAddToCart(item)}
                                      className="bg-blue-600 hover:bg-blue-700 text-white"
                                    >
                                      <Plus className="w-4 h-4 mr-1" />
                                      Add
                                    </Button>
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Cart Button */}
      {!showCart && cart.length > 0 && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'white', borderTop: '1px solid #e5e5e5', padding: '16px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '600px', padding: '0 16px' }}>
            <Button
              onClick={() => setShowCart(true)}
              className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-xl rounded-lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              View Cart ({cartItemCount} items) - ₹{cartTotal.toFixed(2)}
            </Button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}