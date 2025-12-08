import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
  Menu,
  FileText,
  History,
  CreditCard,
  AlertCircle,
  User,
  LogOut,
  Trash2,
  Wallet,
} from 'lucide-react';
import { User as UserType } from '../App';
import SideNav from './SideNav';

type OutstandingAmountScreenProps = {
  amount: number;
  onNavigate: (screen: string) => void;
  onSelectPaymentMethod: (methodId: number) => void;
  onLogout: () => void;
  user: UserType;
};

export default function OutstandingAmountScreen({
  amount,
  onNavigate,
  onSelectPaymentMethod,
  onLogout,
  user,
}: OutstandingAmountScreenProps) {
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
            
            {/* HEADER CARD — NOW 100% CONSISTENT WITH r2 & r3 */}
            <Card className="shadow-lg border-blue-100 mb-6">
              <CardHeader className="bg-blue-50" style={{ paddingTop: '16px', paddingBottom: '10px' }}>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <AlertCircle className="w-5 h-5" />
                  Outstanding Amount
                </CardTitle>
              </CardHeader>
            </Card>

            {/* MAIN CONTENT CARD — SEPARATE, CLEAN, JUST LIKE r2 & r3 */}
            <Card className="shadow-lg border-blue-100">
              <CardContent className="p-6">
                {amount === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wallet className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-lg text-gray-900 mb-2 font-semibold">All Clear!</div>
                    <div className="text-sm text-gray-500">You have no outstanding payments</div>
                    <button
                      onClick={() => onNavigate('dashboard')}
                      style={{
                        marginTop: '24px',
                        width: '100%',
                        height: '44px',
                        backgroundColor: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#1d4ed8';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2563eb';
                      }}
                    >
                      Go to Dashboard
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <div className="text-sm text-gray-700 mb-2">Total Outstanding</div>
                      <div style={{ fontSize: '36px', color: '#ea580c', marginBottom: '8px', fontWeight: 'bold' }}>₹{amount.toFixed(2)}</div>
                      <div className="text-sm text-gray-500">Please clear your pending bills</div>
                    </div>

                    <div className="space-y-3 pb-6">
                      <div className="text-sm text-gray-700 mb-3 font-medium">Choose Payment Method:</div>

<button
                        onClick={() => onSelectPaymentMethod(1)}
                        style={{
                          width: '100%',
                          height: '56px',
                          backgroundColor: '#2563eb',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '500',
                          display: 'flex',
                          alignItems: 'center',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          gap: '12px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#1d4ed8';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#2563eb';
                        }}
                      >
                        <div style={{ fontSize: '20px' }}>💳</div>
                        <div style={{ textAlign: 'left' }}>
                          <div>Pay by Card</div>
                          <div style={{ fontSize: '12px', opacity: 0.9 }}>Credit or Debit Card</div>
                        </div>
                      </button>

                      <button
                        onClick={() => onSelectPaymentMethod(2)}
                        style={{
                          width: '100%',
                          height: '56px',
                          backgroundColor: '#9333ea',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '500',
                          display: 'flex',
                          alignItems: 'center',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          gap: '12px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#7e22ce';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#9333ea';
                        }}
                      >
                        <div style={{ fontSize: '20px' }}>📱</div>
                        <div style={{ textAlign: 'left' }}>
                          <div>Pay by UPI</div>
                          <div style={{ fontSize: '12px', opacity: 0.9 }}>Scan QR Code</div>
                        </div>
                      </button>

                      <button
                        onClick={() => onSelectPaymentMethod(3)}
                        style={{
                          width: '100%',
                          height: '56px',
                          backgroundColor: '#16a34a',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          cursor: 'pointer',
                          fontSize: '14px',
                          fontWeight: '500',
                          display: 'flex',
                          alignItems: 'center',
                          paddingLeft: '16px',
                          paddingRight: '16px',
                          gap: '12px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#15803d';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#16a34a';
                        }}
                      >
                        <div style={{ fontSize: '20px' }}>💵</div>
                        <div style={{ textAlign: 'left' }}>
                          <div>Pay by Cash</div>
                          <div style={{ fontSize: '12px', opacity: 0.9 }}>Pay at counter</div>
                        </div>
                      </button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

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