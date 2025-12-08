import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { ArrowLeft, CreditCard } from 'lucide-react';

type CardPaymentScreenProps = {
  amount: number;
  onComplete: (cardType: 'credit' | 'debit') => void;
  onBack: () => void;
};

export default function CardPaymentScreen({ amount, onComplete, onBack }: CardPaymentScreenProps) {
  const [cardType, setCardType] = useState<'credit' | 'debit'>('credit');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      alert('Please fill all fields');
      return;
    }
    onComplete(cardType);
  };

  const formatCardNumber = (value: string) => {
    const cleaned = value.replace(/\s/g, '');
    const formatted = cleaned.match(/.{1,4}/g)?.join(' ') || cleaned;
    return formatted.substring(0, 19); // 16 digits + 3 spaces
  };

  const formatExpiryDate = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.substring(0, 2) + '/' + cleaned.substring(2, 4);
    }
    return cleaned;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-blue-100">
        <div className="flex items-center justify-between p-4">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-blue-900">
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <span className="text-blue-900">Card Payment</span>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-2xl mx-auto">
        <Card className="shadow-lg border-blue-100 mb-4">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-blue-900 text-center">Amount to Pay</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-4xl text-blue-600 text-center">₹{amount.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-blue-100">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Card Details
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-3">
                <Label className="text-gray-700">Card Type</Label>
                <RadioGroup value={cardType} onValueChange={(v: 'credit' | 'debit') => setCardType(v)}>
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit" className="flex-1 cursor-pointer">
                      Credit Card
                    </Label>
                    <span>💳</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <RadioGroupItem value="debit" id="debit" />
                    <Label htmlFor="debit" className="flex-1 cursor-pointer">
                      Debit Card
                    </Label>
                    <span>💳</span>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardNumber" className="text-gray-700">
                  Card Number
                </Label>
                <Input
                  id="cardNumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  className="h-11 border-gray-300 focus:border-blue-500"
                  maxLength={19}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName" className="text-gray-700">
                  Cardholder Name
                </Label>
                <Input
                  id="cardName"
                  type="text"
                  placeholder="Name on card"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value.toUpperCase())}
                  className="h-11 border-gray-300 focus:border-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate" className="text-gray-700">
                    Expiry Date
                  </Label>
                  <Input
                    id="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                    className="h-11 border-gray-300 focus:border-blue-500"
                    maxLength={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cvv" className="text-gray-700">
                    CVV
                  </Label>
                  <Input
                    id="cvv"
                    type="password"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                    className="h-11 border-gray-300 focus:border-blue-500"
                    maxLength={3}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white mt-6"
              >
                Pay ₹{amount.toFixed(2)}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
