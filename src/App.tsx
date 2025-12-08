// src/App.tsx

import { useState, useEffect } from 'react';
import RegisterScreen from './components/RegisterScreen';
import LoginScreen from './components/LoginScreen';
import DashboardScreen from './components/DashboardScreen';
import CreateBillScreen from './components/CreateBillScreen';
import OrderHistoryScreen from './components/OrderHistoryScreen';
import ProfileScreen from './components/ProfileScreen';
import DeleteBillScreen from './components/DeleteBillScreen';
import OutstandingAmountScreen from './components/OutstandingAmountScreen';
import PaymentsListScreen from './components/PaymentsListScreen';
import QRCodeScreen from './components/QRCodeScreen';
import PlaceHold from './components/PlaceHold'; 
import PaymentSuccessScreen from './components/PaymentSuccessScreen'; // 1. ADDED: Import new screen

export type User = {
    id: string;
    name: string;
    role: string;
    email: string;
};

export type Bill = {
    id: string;
    total: number;
    status: 'pending' | 'paid' | 'deleted';
    createdAt: Date;
    items: Array<{
        id: string;
        name: string;
        code: string;
        price: number;
        quantity: number;
    }>;
};

export type CartItem = {
  id: string;
  name: string;
  code: string;
  price: number;
  quantity: number;
};

export type Payment = {
  id: string;
  billId: string;
  amount: number;
  mode: string;
  date: Date;
};

type Screen = 
    | 'register' 
    | 'login' 
    | 'dashboard'
    | 'create-bill'
    | 'order-history'
    | 'payments-list'
    | 'outstanding-amount'
    | 'delete-bill'
    | 'profile'
    | 'qrcode'
    | 'payment-success'; // 1. ADDED: New screen type


const createDummyUser = (employeeId: string): User => ({
    id: employeeId,
    name: 'Test Staff',
    role: 'Staff Member',
    email: `${employeeId}@tasl.com`,
});


export default function App() {
    const [currentScreen, setCurrentScreen] = useState<Screen>('login');
    const [user, setUser] = useState<User | null>(null);
    const [cart, setCart] = useState<CartItem[]>([]);
    const [bills, setBills] = useState<Bill[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    const DUMMY_PENDING_BILL: Bill = { 
        id: 'B002', 
        total: 450.00, 
        status: 'pending',
        createdAt: new Date(),
        items: []
    };

    // Recover session on mount
    useEffect(() => {
        const sessionData = sessionStorage.getItem('user_session');
        const savedScreen = sessionStorage.getItem('current_screen');
        if (sessionData) {
            try {
                const recoveredUser = JSON.parse(sessionData);
                setUser(recoveredUser);
                if (savedScreen) {
                    setCurrentScreen(savedScreen as Screen);
                } else {
                    setCurrentScreen('dashboard');
                }
            } catch (error) {
                console.error('Failed to recover session:', error);
            }
        }
        setIsInitialized(true);
    }, []);

    // Recover cart on mount
    useEffect(() => {
        const savedCart = sessionStorage.getItem('cart_session');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (error) {
                console.error('Failed to recover cart:', error);
            }
        }
    }, []);

    // Recover bills on mount
    useEffect(() => {
        const savedBills = sessionStorage.getItem('bills_session');
        if (savedBills) {
            try {
                const parsedBills = JSON.parse(savedBills);
                setBills(parsedBills.map((bill: any) => ({
                    ...bill,
                    createdAt: new Date(bill.createdAt)
                })));
            } catch (error) {
                console.error('Failed to recover bills:', error);
            }
        }
    }, []);

    const handleNavigate = (screen: string) => {
        setCurrentScreen(screen as Screen);
        sessionStorage.setItem('current_screen', screen);
    };

    const handleLogout = () => {
        setUser(null);
        sessionStorage.removeItem('user_session');
        sessionStorage.removeItem('current_screen');
        setCurrentScreen('login');
        setCart([]);
        sessionStorage.removeItem('cart_session');
        setBills([]);
        sessionStorage.removeItem('bills_session');
    };

    const handleRegister = (employeeId: string, password: string) => {
        console.log('Registration Attempted:', employeeId);
        alert(`Registration successful for ${employeeId}. Navigating to Login.`);
        handleNavigate('login');
    };

    const handleLogin = (employeeId: string, password: string) => {
        const trimmedEmployeeId = employeeId.trim();
        const trimmedPassword = password.trim();

        if (trimmedEmployeeId && trimmedPassword) {
            console.log(`✅ LOGIN SUCCESS. User ID: ${trimmedEmployeeId}`);
            const newLoggedInUser = createDummyUser(trimmedEmployeeId);
            setUser(newLoggedInUser);
            sessionStorage.setItem('user_session', JSON.stringify(newLoggedInUser));
            handleNavigate('dashboard');
        } else {
            console.log('❌ LOGIN FAILED. Employee ID or Password was empty.');
            alert('Login Failed: Employee ID and Password cannot be empty.');
        }
    };

    const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
        const existingItem = cart.find(c => c.id === item.id);
        const updatedCart = existingItem 
            ? cart.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c)
            : [...cart, { ...item, quantity: 1 }];
        setCart(updatedCart);
        sessionStorage.setItem('cart_session', JSON.stringify(updatedCart));
    };

    const handleRemoveFromCart = (itemId: string) => {
        const updatedCart = cart.filter(c => c.id !== itemId);
        setCart(updatedCart);
        sessionStorage.setItem('cart_session', JSON.stringify(updatedCart));
    };

    const handleUpdateQuantity = (itemId: string, quantity: number) => {
        let updatedCart;
        if (quantity <= 0) {
            updatedCart = cart.filter(c => c.id !== itemId);
        } else {
            updatedCart = cart.map(c => c.id === itemId ? { ...c, quantity } : c);
        }
        setCart(updatedCart);
        sessionStorage.setItem('cart_session', JSON.stringify(updatedCart));
    };

    const handleCreateBill = () => {
        const newBill: Bill = {
            id: `B${Date.now()}`,
            total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
            status: 'pending',
            createdAt: new Date(),
            items: cart
        };
        console.log('Bill created:', newBill);
        alert(`Bill created successfully! Total: ₹${newBill.total.toFixed(2)}`);
        
        const updatedBills = [...bills, newBill];
        setBills(updatedBills);
        sessionStorage.setItem('bills_session', JSON.stringify(updatedBills));
        
        setCart([]);
        sessionStorage.removeItem('cart_session');
        handleNavigate('dashboard');
    };

    const handleDeleteBill = (billId: string) => {
        const updatedBills = bills.map(bill =>
            bill.id === billId ? { ...bill, status: 'deleted' as const } : bill
        );
        setBills(updatedBills);
        sessionStorage.setItem('bills_session', JSON.stringify(updatedBills));
    };

    // 2. MODIFIED: Payment selection logic
    const handleSelectPaymentMethod = (methodId: number) => { 
        if (methodId === 2) { 
            handleNavigate('qrcode'); 
        } else if (methodId === 3) {
            handleNavigate('payment-success'); // Trigger success screen for Cash (3)
        }
    };

    const outstandingAmount = bills
        .filter(b => b.status === 'pending')
        .reduce((sum, bill) => sum + bill.total, 0);
    
    const handlePaymentComplete = () => {
        // NOTE: In a real app, this function would mark all pending bills as 'paid'.
        // For now, we only navigate to the success screen as requested.
        handleNavigate('payment-success');
    }
    
    const renderScreen = () => {
        
        if (!user && currentScreen !== 'register' && currentScreen !== 'login') {
            setCurrentScreen('login');
            return null;
        }

        const contextProps = { 
            user: user as User, 
            onNavigate: handleNavigate, 
            onLogout: handleLogout
        };

        switch (currentScreen) {
            case 'register':
                return (
                    <RegisterScreen 
                        onRegister={handleRegister} 
                        onNavigateToLogin={() => handleNavigate('login')} 
                    />
                );
            case 'login':
                return (
                    <LoginScreen 
                        onLogin={handleLogin} 
                        onNavigateToRegister={() => handleNavigate('register')} 
                    />
                );
            case 'dashboard':
                return (
                    <DashboardScreen 
                        {...contextProps} 
                        currentBill={DUMMY_PENDING_BILL} 
                    />
                );
            
            case 'create-bill':
                return (
                    <CreateBillScreen
                        {...contextProps}
                        cart={cart}
                        onAddToCart={handleAddToCart}
                        onRemoveFromCart={handleRemoveFromCart}
                        onUpdateQuantity={handleUpdateQuantity}
                        onCreateBill={handleCreateBill}
                    />
                );

            case 'order-history':
                return (
                    <OrderHistoryScreen
                        {...contextProps}
                        bills={bills}
                    />
                );

            case 'profile':
                return (
                    <ProfileScreen
                        {...contextProps}
                    />
                );

            case 'delete-bill':
                return (
                    <DeleteBillScreen
                        {...contextProps}
                        bills={bills}
                        onDeleteBill={handleDeleteBill}
                    />
                );

            case 'outstanding-amount':
                return (
                    <OutstandingAmountScreen
                        {...contextProps}
                        amount={outstandingAmount}
                        onSelectPaymentMethod={handleSelectPaymentMethod}
                    />
                );

            case 'payments-list':
                return (
                    <PaymentsListScreen
                        {...contextProps}
                        payments={[]}
                    />
                );

            case 'qrcode':
                return (
                    <QRCodeScreen
                        amount={outstandingAmount}
                        onComplete={handlePaymentComplete} // 3. MODIFIED: Now navigates to success screen
                        onBack={() => handleNavigate('outstanding-amount')}
                    />
                );
            
            case 'payment-success': // 1. ADDED: New case for success screen
                return (
                    <PaymentSuccessScreen
                        {...contextProps}
                    />
                );
                
            default:
                return null; 
        }
    };

    if (!isInitialized) {
        return null;
    }

    return (
        <div className="h-screen w-screen" style={{ position: 'relative' }}>
            {renderScreen()}
        </div>
    );
}