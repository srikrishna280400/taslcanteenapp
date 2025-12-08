import { useState } from 'react';
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
  Receipt,
} from 'lucide-react';
import { User as UserType, Bill } from '../App';
import SideNav from './SideNav';

type DeleteBillScreenProps = {
  bills: Bill[];
  onDeleteBill: (billId: string) => void;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
  user: UserType;
};

export default function DeleteBillScreen({
  bills,
  onDeleteBill,
  onNavigate,
  onLogout,
  user,
}: DeleteBillScreenProps) {
  const [billToDelete, setBillToDelete] = useState<string | null>(null);

  const handleConfirmDelete = () => {
    if (billToDelete) {
      onDeleteBill(billToDelete);
      alert('Bill deleted successfully');
      setBillToDelete(null);
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
                  <Trash2 className="w-5 h-5" />
                  Delete Bill
                </CardTitle>
              </CardHeader>
            </Card>

            {/* Bills List */}
            {bills.filter(b => b.status === 'pending').length === 0 ? (
              <Card className="border-gray-200">
                <CardContent className="p-8 text-center text-gray-500">
                  No pending bills to delete.
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3 pb-6">
                {bills
                  .filter(b => b.status === 'pending')
                  .map((bill) => (
                    <Card
                      key={bill.id}
                      className="border-gray-200 hover:border-red-300 transition-colors"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                              <Receipt className="w-5 h-5 text-orange-600" />
                            </div>
                            <div className="flex-1" style={{ lineHeight: '1.6' }}>
                              <div className="text-gray-900">{bill.id}</div>
                              <div className="text-sm text-gray-500 mt-2">
                                {bill.items.length} items • ₹{bill.total.toFixed(2)}
                              </div>
                            </div>
                          </div>

                          <button
                            onClick={() => setBillToDelete(bill.id)}
                            style={{
                              padding: '8px',
                              backgroundColor: 'transparent',
                              border: 'none',
                              borderRadius: '6px',
                              cursor: 'pointer',
                              color: '#ef4444'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#fef2f2';
                              e.currentTarget.style.color = '#dc2626';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                              e.currentTarget.style.color = '#ef4444';
                            }}
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {billToDelete && (
        <div
          style={{
            position: 'fixed',
            inset: '0',
            zIndex: 1000,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={() => setBillToDelete(null)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '24px',
              maxWidth: '400px',
              width: '90%',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>
                Are you sure?
              </div>
            </div>
            <div style={{ marginBottom: '24px', color: '#6b7280', fontSize: '14px' }}>
              This will permanently delete the bill. This action cannot be undone.
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button
                onClick={() => setBillToDelete(null)}
                style={{
                  padding: '10px 16px',
                  backgroundColor: '#f3f4f6',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e5e7eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                style={{
                  padding: '10px 16px',
                  backgroundColor: '#dc2626',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#b91c1c';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#dc2626';
                }}
              >
                Delete
              </button>
            </div>
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