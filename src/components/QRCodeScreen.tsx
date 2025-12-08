import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ArrowLeft, CheckCircle } from 'lucide-react';

type QRCodeScreenProps = {
  amount: number;
  onComplete: () => void;
  onBack: () => void;
};

export default function QRCodeScreen({ amount, onComplete, onBack }: QRCodeScreenProps) {
  const [countdown, setCountdown] = useState(5);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (isProcessing && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isProcessing && countdown === 0) {
      onComplete();
    }
  }, [isProcessing, countdown, onComplete]);

  const handleConfirmPayment = () => {
    setIsProcessing(true);
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
      {/* HEADER WITH BACK BUTTON */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '60px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '16px',
        paddingRight: '16px',
        zIndex: 100
      }}>
        <button
          onClick={onBack}
          disabled={isProcessing}
          style={{
            padding: '8px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '6px',
            cursor: isProcessing ? 'not-allowed' : 'pointer',
            opacity: isProcessing ? 0.5 : 1
          }}
          onMouseEnter={(e) => {
            if (!isProcessing) e.currentTarget.style.backgroundColor = '#f3f4f6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <ArrowLeft size={24} color="#374151" />
        </button>
        <div style={{ flex: 1, textAlign: 'center', fontSize: '16px', fontWeight: '500', color: '#1f2937' }}>
          UPI Payment
        </div>
        <div style={{ width: '40px' }} />
      </div>

      {/* SCROLLABLE CONTENT AREA */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingTop: '80px', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: '100%', maxWidth: '600px', padding: '0 16px' }}>
            
            {/* QR Code Card */}
            <Card className="shadow-lg border-blue-100">
              <CardHeader className="bg-blue-50" style={{ paddingTop: '16px', paddingBottom: '10px' }}>
                <CardTitle className="text-center text-blue-900">Scan QR Code</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {!isProcessing ? (
                  <>
                    <div className="text-center mb-6">
                      <div className="text-sm text-gray-600 mb-2">Amount to Pay</div>
                      <div style={{ fontSize: '36px', color: '#ea580c', fontWeight: 'bold' }}>₹{amount.toFixed(2)}</div>
                    </div>

                    {/* QR Code */}
                    <div style={{
                      backgroundColor: 'white',
                      border: '4px solid #c084fc',
                      borderRadius: '16px',
                      padding: '4px',
                      marginBottom: '24px',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      
                      <div style={{
                      width: '100%',
                      height: '256px',
                      backgroundColor: '#ede9fe',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src="/taslqr.png" 
                        alt="UPI QR Code"
                        style={{
                          width: 'auto',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                    </div>

                    <div className="text-center text-sm text-gray-600 mb-6">
                      Open any UPI app and scan this QR code to pay
                    </div>

                    <button
                      onClick={handleConfirmPayment}
                      style={{
                        width: '100%',
                        height: '44px',
                        backgroundColor: '#a855f7',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#9333ea';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#a855f7';
                      }}
                    >
                      I Have Paid
                    </button>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: '#ede9fe',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginBottom: '16px',
                      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                    }}>
                      <CheckCircle style={{ width: '40px', height: '40px', color: '#a855f7' }} />
                    </div>
                    <div style={{ fontSize: '18px', color: '#1f2937', marginBottom: '8px', fontWeight: '600' }}>
                      Verifying Payment...
                    </div>
                    <div style={{ fontSize: '14px', color: '#6b7280' }}>
                      Please wait {countdown} seconds
                    </div>
                  </div>
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
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}