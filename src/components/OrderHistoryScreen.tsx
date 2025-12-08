import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Menu,
  FileText,
  History,
  CreditCard,
  AlertCircle,
  User,
  LogOut,
  Clock,
  Receipt,
  Trash2,
} from 'lucide-react';
import { User as UserType, Bill } from '../App';
import SideNav from './SideNav';

type OrderHistoryScreenProps = {
  bills: Bill[];
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  user: UserType;
};

export default function OrderHistoryScreen({
  bills,
  onNavigate,
  onLogout,
  user,
}: OrderHistoryScreenProps) {
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
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingTop: '80px', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: '100%', maxWidth: '600px', padding: '0 16px' }}>
            
            {/* Header Card */}
            <Card className="shadow-lg border-blue-100 mb-6">
              <CardHeader className="bg-blue-50" style={{ paddingTop: '16px', paddingBottom: '10px' }}>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <History className="w-5 h-5" />
                  Order History
                </CardTitle>
              </CardHeader>
            </Card>

            {/* Orders List */}
            {bills.length === 0 ? (
              <Card className="border-gray-200">
                <CardContent className="p-8 text-center text-gray-500">
                  No orders found. Create your first bill to get started.
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3 pb-6">
                {bills
                  .slice()
                  .reverse()
                  .map((bill) => (
                    <Card
                      key={bill.id}
                      className="border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <CardContent className="p-4" style={{ lineHeight: '1.8' }}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Receipt className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <div className="text-gray-900">{bill.id}</div>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                <Clock className="w-4 h-4" />
                                {new Date(bill.createdAt).toLocaleString('en-IN', {
                                  day: '2-digit',
                                  month: 'short',
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </div>
                            </div>
                          </div>
                          <Badge
                            className={
                              bill.status === 'paid'
                                ? 'bg-green-100 text-green-700 hover:bg-green-100'
                                : bill.status === 'pending'
                                ? 'bg-orange-100 text-orange-700 hover:bg-orange-100'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                            }
                          >
                            {bill.status === 'paid' ? 'Paid' : bill.status === 'pending' ? 'Pending' : 'Deleted'}
                          </Badge>
                        </div>

                        {bill.items && bill.items.length > 0 && (
                          <div style={{ marginBottom: '0px' }}>
                            {bill.items.map((item) => (
                              <div
                                key={item.id}
                                className="flex items-center justify-between text-sm text-gray-600"
                                style={{ marginBottom: '8px' }}
                              >
                                <span>
                                  {item.name} × {item.quantity}
                                </span>
                                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div style={{ paddingTop: '24px', borderTop: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span className="text-gray-700">Total Amount</span>
                          <span className="text-lg text-blue-900 font-semibold">₹{bill.total.toFixed(2)}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}