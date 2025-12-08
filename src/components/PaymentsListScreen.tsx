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
  CheckCircle,
  Trash2,
} from 'lucide-react';
import { User as UserType, Payment } from '../App';
import SideNav from './SideNav';

type PaymentsListScreenProps = {
  payments: Payment[];
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  user: UserType;
};

export default function PaymentsListScreen({
  payments,
  onNavigate,
  onLogout,
  user,
}: PaymentsListScreenProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getPaymentIcon = (mode: string) => {
    switch (mode) {
      case 'upi':
        return '📱';
      case 'credit card':
      case 'debit card':
        return '💳';
      case 'cash':
        return '💵';
      default:
        return '💰';
    }
  };

  const getModeColor = (mode: string) => {
    switch (mode) {
      case 'upi':
        return 'bg-purple-100 text-purple-700 hover:bg-purple-100';
      case 'credit card':
        return 'bg-blue-100 text-blue-700 hover:bg-blue-100';
      case 'debit card':
        return 'bg-indigo-100 text-indigo-700 hover:bg-indigo-100';
      case 'cash':
        return 'bg-green-100 text-green-700 hover:bg-green-100';
      default:
        return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
    }
  };

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
                  <CreditCard className="w-5 h-5" />
                  Payment History
                </CardTitle>
              </CardHeader>
            </Card>

            {/* Payments List */}
            {payments.length === 0 ? (
              <Card className="border-gray-200">
                <CardContent className="p-8 text-center text-gray-500">
                  No payments recorded yet.
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3 pb-6">
                {payments
                  .slice()
                  .reverse()
                  .map((payment) => (
                    <Card
                      key={payment.id}
                      className="border-gray-200 hover:border-blue-300 transition-colors"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">
                              {getPaymentIcon(payment.mode)}
                            </div>
                            <div>
                              <div className="text-gray-900">{payment.id}</div>
                              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                <Clock className="w-4 h-4" />
                                {formatDate(payment.date)}
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Completed
                          </Badge>
                        </div>

                        <div className="space-y-2" style={{ marginBottom: '12px' }}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Payment Mode:</span>
                            <Badge variant="secondary" className={getModeColor(payment.mode)}>
                              {payment.mode.toUpperCase()}
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>Bill ID:</span>
                            <span className="text-xs">{payment.billId}</span>
                          </div>
                        </div>

                        <div style={{ paddingTop: '12px', borderTop: '1px solid #e5e5e5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span className="text-gray-700">Amount Paid</span>
                          <span className="text-lg text-blue-900 font-semibold">₹{payment.amount.toFixed(2)}</span>
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