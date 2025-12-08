import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, CreditCard, Smartphone, Banknote } from 'lucide-react';

type PaymentMethodScreenProps = {
  onSelectMethod: (method: 'upi' | 'card' | 'cash') => void;
  onBack: () => void;
};

export default function PaymentMethodScreen({
  onSelectMethod,
  onBack,
}: PaymentMethodScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-blue-900">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <span className="text-blue-900">Select Payment Method</span>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-2xl mx-auto">
        <Card className="shadow-lg border-blue-100">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-900 text-center">
              How would you like to pay?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <button
                onClick={() => onSelectMethod('upi')}
                className="w-full bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 hover:bg-purple-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Smartphone className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-lg text-gray-900 mb-1">UPI Payment</div>
                    <div className="text-sm text-gray-500">Scan QR code to pay</div>
                  </div>
                  <div className="text-3xl">📱</div>
                </div>
              </button>

              <button
                onClick={() => onSelectMethod('card')}
                className="w-full bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 hover:bg-blue-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <CreditCard className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-lg text-gray-900 mb-1">Card Payment</div>
                    <div className="text-sm text-gray-500">Credit or Debit Card</div>
                  </div>
                  <div className="text-3xl">💳</div>
                </div>
              </button>

              <button
                onClick={() => onSelectMethod('cash')}
                className="w-full bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 hover:bg-green-50 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Banknote className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="text-lg text-gray-900 mb-1">Cash Payment</div>
                    <div className="text-sm text-gray-500">Pay at the counter</div>
                  </div>
                  <div className="text-3xl">💵</div>
                </div>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
