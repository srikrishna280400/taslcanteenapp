import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { CheckCircle, Home, History } from 'lucide-react';
import SideNav from './SideNav';

type PaymentSuccessScreenProps = {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
};

export default function PaymentSuccessScreen({
  onNavigate,
  onLogout,
}: PaymentSuccessScreenProps) {
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
        overflow: 'hidden',
      }}
    >
      {/* SAME SIDENAV AS ALL OTHER SCREENS */}
      <SideNav onNavigate={onNavigate} onLogout={onLogout} />

      {/* SCROLLABLE CONTENT AREA — IDENTICAL TO BIBLE SCREENS */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingTop: '80px', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: '100%', maxWidth: '600px', padding: '0 16px' }}>

            {/* HEADER CARD — EXACT SAME STYLE AS OTHERS */}
            <Card className="shadow-lg border-blue-100 mb-6">
              <CardHeader className="bg-blue-50" style={{ paddingTop: '16px', paddingBottom: '10px' }}>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <CheckCircle className="w-5 h-5" />
                  Payment Successful
                </CardTitle>
              </CardHeader>
            </Card>

            {/* MAIN SUCCESS CARD — SAME VISUAL LANGUAGE */}
            <Card className="shadow-lg border-green-200">
              <CardContent className="p-8 text-center">
                <div className="w-48 h-48 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-14 h-14 text-green-600" style={{ width: '64px', height: '64px' }} />
                </div>

                <h1 className="text-2xl font-bold text-green-900 mb-3">
                  Payment Successful!
                </h1>
                <p className="text-gray-600 mb-8 text-sm">
                  Your payment has been recorded successfully.<br />
                  Thank you for using TASL Canteen.
                </p>

                <div className="space-y-3">
                  <Button
                    onClick={() => onNavigate('dashboard')}
                    className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium"
                  >
                    <Home className="w-5 h-5 mr-2" />
                    Go to Dashboard
                  </Button>

                  <Button
                    onClick={() => onNavigate('order-history')}
                    variant="outline"
                    className="w-full h-12 border-blue-300 text-blue-600 hover:bg-blue-50 font-medium"
                  >
                    <History className="w-5 h-5 mr-2" />
                    View Order History
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* SAME ANIMATION STYLE TAG AS ALL OTHER SCREENS */}
      <style>{`
        @keyframes slideInDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}