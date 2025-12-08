import { Card } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group';
import { Avatar, AvatarFallback } from './components/ui/avatar';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import {
  Building2,
  Menu,
  Calculator,
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  FileText,
  History,
  CreditCard,
  AlertCircle,
  User,
  LogOut,
  Clock,
  Receipt,
  CheckCircle,
  Wallet,
  ArrowLeft,
  Smartphone,
  Banknote,
  Home,
  Mail,
  Briefcase,
  BadgeCheck,
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2 text-blue-900">TASL Canteen App</h1>
          <p className="text-gray-600">Complete Screen Flow Preview - All 15 Screens</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Screen 1: Register */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 1: Register</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white p-6 flex items-center justify-center relative">
                <div className="absolute inset-0 z-0">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1600555379885-08a02224726d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcmVzdGF1cmFudCUyMG1lYWx8ZW58MXx8fHwxNzYxOTI4MjQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Food background"
                    className="w-full h-full object-cover opacity-5"
                  />
                </div>
                <div className="w-full relative z-10">
                  <div className="text-center mb-6">
                    <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-3">
                      <Building2 className="w-9 h-9 text-white" />
                    </div>
                    <h2 className="text-2xl text-blue-900 mb-1">TASL Canteen</h2>
                    <p className="text-sm text-gray-600">Register to access the canteen system</p>
                  </div>
                  <div className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
                    <div className="space-y-2">
                      <Label className="text-gray-700 text-xs">Employee ID</Label>
                      <Input placeholder="Enter your employee ID" className="h-10 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 text-xs">Password</Label>
                      <Input type="password" placeholder="Create a password" className="h-10 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 text-xs">Confirm Password</Label>
                      <Input type="password" placeholder="Confirm your password" className="h-10 text-sm" />
                    </div>
                    <Button className="w-full h-10 bg-blue-600 text-sm">Register</Button>
                    <div className="text-center text-xs">
                      <span className="text-blue-600">Already have an account? Login</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 2: Login */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 2: Login</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white p-6 flex items-center justify-center">
                <div className="w-full">
                  <div className="text-center mb-6">
                    <div className="mx-auto w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-3">
                      <Building2 className="w-9 h-9 text-white" />
                    </div>
                    <h2 className="text-2xl text-blue-900 mb-1">Welcome Back</h2>
                    <p className="text-sm text-gray-600">Login to access the canteen system</p>
                  </div>
                  <div className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
                    <div className="space-y-2">
                      <Label className="text-gray-700 text-xs">Employee ID</Label>
                      <Input placeholder="Enter your employee ID" className="h-10 text-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-700 text-xs">Password</Label>
                      <Input type="password" placeholder="Enter your password" className="h-10 text-sm" />
                    </div>
                    <Button className="w-full h-10 bg-blue-600 text-sm">Login</Button>
                    <div className="text-center text-xs">
                      <span className="text-blue-600">Don't have an account? Register</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 3: Dashboard with Calculator */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 3: Dashboard (Calculator)</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white flex flex-col">
                <div className="bg-white border-b border-blue-100 p-3 flex items-center justify-between">
                  <Menu className="w-5 h-5 text-blue-900" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-blue-900">TASL Canteen</span>
                  </div>
                  <div className="w-5" />
                </div>
                <div className="flex-1 p-4 overflow-auto">
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <Calculator className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-700">Calculator</span>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-right border border-blue-200 mb-4">
                      <div className="text-2xl text-blue-900">0</div>
                    </div>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      <Button variant="outline" className="h-10 text-xs col-span-2">Clear</Button>
                      <Button variant="outline" className="h-10 text-xs col-span-2">Delete</Button>
                      {[7, 8, 9].map((num) => (
                        <Button key={num} variant="outline" className="h-10 text-xs">{num}</Button>
                      ))}
                      <Button className="h-10 text-xs bg-blue-600 text-white">+</Button>
                      {[4, 5, 6].map((num) => (
                        <Button key={num} variant="outline" className="h-10 text-xs">{num}</Button>
                      ))}
                      <Button className="h-10 text-xs bg-blue-600 text-white">-</Button>
                      {[1, 2, 3].map((num) => (
                        <Button key={num} variant="outline" className="h-10 text-xs">{num}</Button>
                      ))}
                      <Button className="h-10 text-xs bg-blue-600 text-white">×</Button>
                      <Button variant="outline" className="h-10 text-xs col-span-2">0</Button>
                      <Button variant="outline" className="h-10 text-xs">.</Button>
                      <Button className="h-10 text-xs bg-blue-600 text-white">÷</Button>
                    </div>
                    <Button className="w-full h-10 bg-blue-600 text-white text-sm">Create a Bill</Button>
                    <Button className="w-full h-10 bg-green-600 text-white text-sm mt-2">Pay Now - ₹450.00</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 4: Side Menu */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 4: Side Navigation Menu</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-white flex">
                <div className="w-3/4 bg-white p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-blue-900">TASL Canteen</span>
                  </div>
                  <div className="space-y-2">
                    <button className="w-full flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-left">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">Create a Bill</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-left">
                      <History className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">Order History</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-left">
                      <CreditCard className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">List of Payments</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-left">
                      <AlertCircle className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">Outstanding Amount</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-left">
                      <Trash2 className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">Delete Bill</span>
                    </button>
                    <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-left">
                      <User className="w-5 h-5 text-blue-600" />
                      <span className="text-sm text-gray-700">Profile</span>
                    </button>
                    <Separator className="my-4" />
                    <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 text-left">
                      <LogOut className="w-5 h-5 text-red-600" />
                      <span className="text-sm text-red-600">Logout</span>
                    </button>
                  </div>
                </div>
                <div className="flex-1 bg-gray-900 bg-opacity-50" />
              </div>
            </Card>
          </div>

          {/* Screen 5: Create Bill - Food Items */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 5: Create Bill - Food Menu</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white flex flex-col">
                <div className="bg-white border-b border-blue-100 p-3 flex items-center justify-between">
                  <Menu className="w-5 h-5 text-blue-900" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-blue-900">Create a Bill</span>
                  </div>
                  <div className="relative">
                    <ShoppingCart className="w-5 h-5 text-blue-900" />
                    <Badge className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center p-0 bg-red-500 text-xs">
                      3
                    </Badge>
                  </div>
                </div>
                <div className="flex-1 p-3 overflow-auto">
                  <h3 className="text-sm text-blue-900 mb-2 px-1">Main Course</h3>
                  <div className="space-y-2 mb-4">
                    {[
                      { name: 'Veg Thali', code: 'VT001', price: 120 },
                      { name: 'Paneer Butter Masala', code: 'PBM001', price: 140 },
                    ].map((item) => (
                      <div key={item.code} className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-sm text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-500 mt-1">Code: {item.code}</div>
                            <div className="text-sm text-blue-600 mt-1">₹{item.price}</div>
                          </div>
                          <Button className="bg-blue-600 text-white h-8 text-xs px-3">
                            <Plus className="w-3 h-3 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <h3 className="text-sm text-blue-900 mb-2 px-1">Beverages</h3>
                  <div className="space-y-2">
                    {[
                      { name: 'Chai', code: 'CH001', price: 15 },
                      { name: 'Coffee', code: 'CF001', price: 20 },
                    ].map((item) => (
                      <div key={item.code} className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-sm text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-500 mt-1">Code: {item.code}</div>
                            <div className="text-sm text-blue-600 mt-1">₹{item.price}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-7 w-7">
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-6 text-center text-xs">2</span>
                            <Button variant="outline" size="icon" className="h-7 w-7">
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-white border-t">
                  <Button className="w-full h-10 bg-blue-600 text-white text-sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    View Cart (3 items) - ₹155.00
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 6: Create Bill - Cart */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 6: Cart & Checkout</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white flex flex-col">
                <div className="bg-white border-b border-blue-100 p-3 flex items-center justify-between">
                  <Menu className="w-5 h-5 text-blue-900" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-blue-900">Your Cart</span>
                  </div>
                  <div className="w-5" />
                </div>
                <div className="flex-1 p-3 overflow-auto">
                  <div className="space-y-2">
                    {[
                      { name: 'Veg Thali', code: 'VT001', price: 120, qty: 1 },
                      { name: 'Chai', code: 'CH001', price: 15, qty: 2 },
                      { name: 'Samosa (2 pcs)', code: 'SM001', price: 30, qty: 1 },
                    ].map((item) => (
                      <div key={item.code} className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex-1">
                            <div className="text-sm text-gray-900">{item.name}</div>
                            <div className="text-xs text-gray-500">Code: {item.code}</div>
                            <div className="text-sm text-blue-600 mt-1">₹{item.price}</div>
                          </div>
                          <Button variant="ghost" size="icon" className="text-red-500 h-7 w-7">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="icon" className="h-7 w-7">
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center text-xs">{item.qty}</span>
                          <Button variant="outline" size="icon" className="h-7 w-7">
                            <Plus className="w-3 h-3" />
                          </Button>
                          <span className="ml-auto text-sm text-blue-900">₹{(item.price * item.qty).toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between text-base px-1 mb-3">
                    <span className="text-gray-700">Total Amount:</span>
                    <span className="text-blue-900">₹180.00</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="h-9 text-xs">Add More Items</Button>
                    <Button className="h-9 bg-blue-600 text-white text-xs">Create Bill</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 7: Order History */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 7: Order History</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white flex flex-col">
                <div className="bg-white border-b border-blue-100 p-3 flex items-center justify-between">
                  <Menu className="w-5 h-5 text-blue-900" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-blue-900">Order History</span>
                  </div>
                  <div className="w-5" />
                </div>
                <div className="flex-1 p-3 overflow-auto">
                  <div className="space-y-2">
                    {[
                      { id: 'BILL-001', total: 450, status: 'paid', items: 5, date: '01 Nov, 10:30 AM' },
                      { id: 'BILL-002', total: 180, status: 'pending', items: 3, date: '01 Nov, 02:15 PM' },
                      { id: 'BILL-003', total: 320, status: 'paid', items: 4, date: '31 Oct, 01:45 PM' },
                    ].map((bill) => (
                      <div key={bill.id} className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Receipt className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <div className="text-sm text-gray-900">{bill.id}</div>
                              <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                <Clock className="w-3 h-3" />
                                {bill.date}
                              </div>
                            </div>
                          </div>
                          <Badge
                            className={
                              bill.status === 'paid'
                                ? 'bg-green-100 text-green-700 text-xs'
                                : 'bg-orange-100 text-orange-700 text-xs'
                            }
                          >
                            {bill.status === 'paid' ? 'Paid' : 'Pending'}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-200 text-xs">
                          <span className="text-gray-600">{bill.items} items</span>
                          <span className="text-blue-900">₹{bill.total.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 8: List of Payments */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 8: Payment History</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white flex flex-col">
                <div className="bg-white border-b border-blue-100 p-3 flex items-center justify-between">
                  <Menu className="w-5 h-5 text-blue-900" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-blue-900">Payment History</span>
                  </div>
                  <div className="w-5" />
                </div>
                <div className="flex-1 p-3 overflow-auto">
                  <div className="space-y-2">
                    {[
                      { id: 'PAY-001', amount: 450, mode: 'upi', date: '01 Nov, 10:35 AM', icon: '📱' },
                      { id: 'PAY-002', amount: 320, mode: 'credit card', date: '31 Oct, 02:00 PM', icon: '💳' },
                      { id: 'PAY-003', amount: 180, mode: 'cash', date: '30 Oct, 12:30 PM', icon: '💵' },
                    ].map((payment) => (
                      <div key={payment.id} className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-base">
                              {payment.icon}
                            </div>
                            <div>
                              <div className="text-sm text-gray-900">{payment.id}</div>
                              <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                <Clock className="w-3 h-3" />
                                {payment.date}
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-700 text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Completed
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-gray-600">Mode:</span>
                          <Badge variant="secondary" className="text-xs">{payment.mode.toUpperCase()}</Badge>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                          <span className="text-xs text-gray-600">Amount Paid</span>
                          <span className="text-sm text-blue-900">₹{payment.amount.toFixed(2)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 9: Outstanding Amount */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 9: Outstanding Amount</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white flex flex-col">
                <div className="bg-white border-b border-blue-100 p-3 flex items-center justify-between">
                  <Menu className="w-5 h-5 text-blue-900" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-blue-900">Outstanding</span>
                  </div>
                  <div className="w-5" />
                </div>
                <div className="flex-1 p-4 flex items-center justify-center">
                  <div className="w-full bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-center mb-6">
                      <div className="text-xs text-gray-600 mb-2">Total Outstanding</div>
                      <div className="text-4xl text-orange-600 mb-2">₹180.00</div>
                      <div className="text-xs text-gray-500">Please clear your pending bills</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-700 mb-2">Choose Payment Method:</div>
                      <Button className="w-full h-12 bg-blue-600 text-white justify-start text-left text-xs">
                        <div className="text-lg mr-2">💳</div>
                        <div>
                          <div>Pay by Card</div>
                          <div className="text-xs opacity-90">Credit or Debit Card</div>
                        </div>
                      </Button>
                      <Button className="w-full h-12 bg-purple-600 text-white justify-start text-left text-xs">
                        <div className="text-lg mr-2">📱</div>
                        <div>
                          <div>Pay by UPI</div>
                          <div className="text-xs opacity-90">Scan QR Code</div>
                        </div>
                      </Button>
                      <Button className="w-full h-12 bg-green-600 text-white justify-start text-left text-xs">
                        <div className="text-lg mr-2">💵</div>
                        <div>
                          <div>Pay by Cash</div>
                          <div className="text-xs opacity-90">Pay at counter</div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 10: Payment Method Selection */}
          <div className="space-y-3">
            <div className="bg-purple-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 10: Payment Method Selection</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-purple-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-purple-50 to-white flex flex-col">
                <div className="bg-white border-b border-purple-100 p-3 flex items-center justify-between">
                  <ArrowLeft className="w-5 h-5 text-purple-900" />
                  <span className="text-sm text-purple-900">Select Payment Method</span>
                  <div className="w-5" />
                </div>
                <div className="flex-1 p-4 flex items-center justify-center">
                  <div className="w-full">
                    <h3 className="text-center text-purple-900 mb-6">How would you like to pay?</h3>
                    <div className="space-y-3">
                      <button className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-purple-500">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                            <Smartphone className="w-6 h-6 text-purple-600" />
                          </div>
                          <div className="text-left flex-1">
                            <div className="text-sm text-gray-900">UPI Payment</div>
                            <div className="text-xs text-gray-500">Scan QR code to pay</div>
                          </div>
                          <div className="text-2xl">📱</div>
                        </div>
                      </button>
                      <button className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-blue-500">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <CreditCard className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="text-left flex-1">
                            <div className="text-sm text-gray-900">Card Payment</div>
                            <div className="text-xs text-gray-500">Credit or Debit Card</div>
                          </div>
                          <div className="text-2xl">💳</div>
                        </div>
                      </button>
                      <button className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-green-500">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                            <Banknote className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="text-left flex-1">
                            <div className="text-sm text-gray-900">Cash Payment</div>
                            <div className="text-xs text-gray-500">Pay at the counter</div>
                          </div>
                          <div className="text-2xl">💵</div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 11: QR Code Payment */}
          <div className="space-y-3">
            <div className="bg-purple-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 11: UPI QR Code Payment</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-purple-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-purple-50 to-white flex flex-col">
                <div className="bg-white border-b border-purple-100 p-3 flex items-center justify-between">
                  <ArrowLeft className="w-5 h-5 text-purple-900" />
                  <span className="text-sm text-purple-900">UPI Payment</span>
                  <div className="w-5" />
                </div>
                <div className="flex-1 p-4 flex items-center justify-center">
                  <div className="w-full text-center">
                    <div className="mb-4">
                      <div className="text-xs text-gray-600 mb-1">Amount to Pay</div>
                      <div className="text-3xl text-purple-600">₹180.00</div>
                    </div>
                    <div className="bg-white border-4 border-purple-200 rounded-2xl p-6 mb-4 mx-auto w-fit">
                      <div className="w-48 h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                          <rect width="100" height="100" fill="white" />
                          <g fill="#7c3aed">
                            <rect x="10" y="10" width="25" height="25" />
                            <rect x="65" y="10" width="25" height="25" />
                            <rect x="10" y="65" width="25" height="25" />
                            <rect x="17.5" y="17.5" width="10" height="10" fill="white" />
                            <rect x="72.5" y="17.5" width="10" height="10" fill="white" />
                            <rect x="17.5" y="72.5" width="10" height="10" fill="white" />
                          </g>
                        </svg>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mb-4 px-4">
                      Open any UPI app and scan this QR code to pay
                    </div>
                    <Button className="w-full h-10 bg-purple-600 text-white text-sm">
                      I Have Paid
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 12: Card Payment */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 12: Card Payment Form</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white flex flex-col">
                <div className="bg-white border-b border-blue-100 p-3 flex items-center justify-between">
                  <ArrowLeft className="w-5 h-5 text-blue-900" />
                  <span className="text-sm text-blue-900">Card Payment</span>
                  <div className="w-5" />
                </div>
                <div className="flex-1 p-3 overflow-auto">
                  <div className="bg-blue-50 p-4 rounded-lg text-center mb-3">
                    <div className="text-xs text-gray-600 mb-1">Amount to Pay</div>
                    <div className="text-2xl text-blue-600">₹180.00</div>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-lg">
                    <div className="space-y-3">
                      <div>
                        <Label className="text-xs text-gray-700 mb-2">Card Type</Label>
                        <RadioGroup value="credit">
                          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border text-xs">
                            <RadioGroupItem value="credit" id="credit" />
                            <Label htmlFor="credit" className="flex-1 text-xs">Credit Card</Label>
                            <span>💳</span>
                          </div>
                          <div className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg border text-xs mt-2">
                            <RadioGroupItem value="debit" id="debit" />
                            <Label htmlFor="debit" className="flex-1 text-xs">Debit Card</Label>
                            <span>💳</span>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-gray-700">Card Number</Label>
                        <Input placeholder="1234 5678 9012 3456" className="h-9 text-xs" />
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs text-gray-700">Cardholder Name</Label>
                        <Input placeholder="Name on card" className="h-9 text-xs" />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <Label className="text-xs text-gray-700">Expiry Date</Label>
                          <Input placeholder="MM/YY" className="h-9 text-xs" />
                        </div>
                        <div className="space-y-1">
                          <Label className="text-xs text-gray-700">CVV</Label>
                          <Input type="password" placeholder="123" className="h-9 text-xs" />
                        </div>
                      </div>
                      <Button className="w-full h-9 bg-blue-600 text-white text-xs mt-2">
                        Pay ₹180.00
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 13: Payment Success */}
          <div className="space-y-3">
            <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 13: Payment Success</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-green-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-2xl text-green-900 mb-3">Payment Successful!</h2>
                  <p className="text-sm text-gray-600 mb-6 px-4">
                    Your payment has been recorded successfully. Thank you for using TASL Canteen.
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full h-10 bg-blue-600 text-white text-sm">
                      <Home className="w-4 h-4 mr-2" />
                      Go to Dashboard
                    </Button>
                    <Button variant="outline" className="w-full h-10 border-blue-300 text-blue-600 text-sm">
                      View Order History
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 14: Delete Bill */}
          <div className="space-y-3">
            <div className="bg-red-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 14: Delete Bill</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-red-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white flex flex-col">
                <div className="bg-white border-b border-blue-100 p-3 flex items-center justify-between">
                  <Menu className="w-5 h-5 text-blue-900" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-blue-900">Delete Bill</span>
                  </div>
                  <div className="w-5" />
                </div>
                <div className="flex-1 p-3 overflow-auto">
                  <div className="space-y-2">
                    {[
                      { id: 'BILL-002', items: 3, total: 180 },
                      { id: 'BILL-004', items: 2, total: 95 },
                    ].map((bill) => (
                      <div key={bill.id} className="bg-white p-3 rounded-lg border border-gray-200">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Receipt className="w-4 h-4 text-orange-600" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm text-gray-900">{bill.id}</div>
                              <div className="text-xs text-gray-500 mt-1">
                                {bill.items} items • ₹{bill.total.toFixed(2)}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="text-red-500 h-8 w-8">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Screen 15: Profile */}
          <div className="space-y-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg">
              <span>Screen 15: Profile</span>
            </div>
            <Card className="overflow-hidden shadow-xl border-blue-100">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-white flex flex-col">
                <div className="bg-white border-b border-blue-100 p-3 flex items-center justify-between">
                  <Menu className="w-5 h-5 text-blue-900" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-blue-900">Profile</span>
                  </div>
                  <div className="w-5" />
                </div>
                <div className="flex-1 p-3 overflow-auto">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-xl text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-3 border-4 border-white">
                      <AvatarFallback className="bg-white text-blue-600 text-xl">JD</AvatarFallback>
                    </Avatar>
                    <h2 className="text-lg">John Doe</h2>
                    <div className="text-xs text-blue-100 mt-1">Staff Member</div>
                  </div>
                  <div className="bg-white p-4 rounded-b-xl shadow-lg space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">Full Name</div>
                          <div className="text-sm text-gray-900">John Doe</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">Role in Organization</div>
                          <div className="text-sm text-gray-900">Staff Member</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">Organization Email</div>
                          <div className="text-xs text-gray-900">EMP001@company.com</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BadgeCheck className="w-4 h-4 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">Employee ID</div>
                          <div className="text-sm text-gray-900">EMP001</div>
                        </div>
                      </div>
                    </div>
                    <Separator className="my-2" />
                    <Button variant="outline" className="w-full h-9 border-red-300 text-red-600 text-xs">
                      <LogOut className="w-3 h-3 mr-2" />
                      Logout
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
