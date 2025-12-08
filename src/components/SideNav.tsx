import { useState } from 'react';
import { Menu, FileText, History, CreditCard, AlertCircle, Trash2, User, LogOut, Calculator } from 'lucide-react';


const TATA_LOGO_PATH = '/Tata-Advanced-Systems.jpg';

type SideNavProps = {
  onNavigate: (screen: string) => void;
  onLogout: () => void;
};

export default function SideNav({ onNavigate, onLogout }: SideNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: Calculator, label: 'Dashboard', screen: 'dashboard' },
    { icon: FileText, label: 'Create a Bill', screen: 'create-bill' },
    { icon: History, label: 'Order History', screen: 'order-history' },
    { icon: CreditCard, label: 'List of Payments', screen: 'payments-list' },
    { icon: AlertCircle, label: 'Outstanding Amount', screen: 'outstanding-amount' },
    { icon: Trash2, label: 'Delete Bill', screen: 'delete-bill' },
    { icon: User, label: 'Profile', screen: 'profile' },
  ];

  const handleNavigate = (screen: string) => {
    onNavigate(screen);
    setIsOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          position: 'fixed', 
          top: '32px', 
          left: '16px', 
          zIndex: 10000,
          padding: '8px',
          backgroundColor: '#e5e7eb',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        <Menu size={24} color="#374151" />
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: '0',
            zIndex: 998,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            pointerEvents: 'auto'
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '320px',
            height: '100vh',
            zIndex: 999,
            backgroundColor: 'white',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '16px',
            overflowY: 'auto',
            animation: 'slideInDown 0.3s ease-in-out'
          }}
        >
          <div style={{ textAlign: 'left', paddingLeft: '96px', borderBottom: '1px solid #e5e7eb', paddingBottom: '16px', marginBottom: '24px' }}>
            <img src={TATA_LOGO_PATH} alt="Logo" style={{ height: '60px', objectFit: 'contain' }} />
          </div>

          <nav style={{ flex: 0.8 }}>
            {menuItems.map((item) => (
              <button
                key={item.screen}
                onClick={() => handleNavigate(item.screen)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#374151',
                  marginBottom: '4px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#eff6ff'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <item.icon size={20} color="#2563eb" />
                {item.label}
              </button>
            ))}
          </nav>

          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '4px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={handleLogout}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'transparent',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '500',
                color: '#dc2626',
                marginBottom: '4px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fef2f2'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <LogOut size={20} color="#dc2626" />
              Logout
            </button>

            {/* <button
              onClick={handleLogout}
              style={{
                width: '100%',
                height: '40px',
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px'
              }}
            >
              Logout
            </button> */}
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </>
  );
}