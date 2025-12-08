// src/components/DashboardScreen.tsx

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Calculator } from 'lucide-react';
import { User as UserType, Bill } from '../App';
import { useState } from 'react';
import SideNav from './SideNav';


type DashboardScreenProps = {
  user: UserType;
  currentBill: Bill | null;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
};

export default function DashboardScreen({
  user,
  currentBill,
  onNavigate,
  onLogout,
}: DashboardScreenProps) {
  const [display, setDisplay] = useState('0');

  const handleNumberClick = (num: string) => {
    setDisplay((prev) => (prev === '0' ? num : prev + num));
  };

  const handleClear = () => {
    setDisplay('0');
  };

  const handleDelete = () => {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };

  const handleNavigate = (screen: string) => {
    onNavigate(screen);
  };

  const handleCreateBill = () => {
    if (display === '0') {
      alert('Enter the Bill Value first');
      return;
    }
    onNavigate('create-bill');
  };

  return (
    <div 
      className="h-screen w-screen flex items-start justify-center"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        marginTop: '-40px',
        paddingTop: '60px'
      }}
    >
<SideNav 
  onNavigate={onNavigate} 
  onLogout={onLogout} 
/>
      {/* Inner Content Card (Calculator wrapper) */}
      <div className="w-full max-w-sm">
        <CardHeader className="text-center px-0 bg-white">
          <div className="mx-auto w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-3">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-xl text-blue-900 mb-1">Calculator</CardTitle>
        </CardHeader>

        {/* Calculator Wrapper: Solid white background for contrast */}
        <div className="space-y-4 bg-white p-6">
          
          {/* Display */}
          <div className="space-y-2">
            <div className="bg-gray-50 rounded-lg p-4 text-right border border-gray-300 shadow-inner">
              <div className="text-4xl font-light text-gray-900 overflow-x-auto">{display}</div>
            </div>
          </div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-4 gap-3">
            <Button onClick={handleClear} variant="outline" className="h-16 col-span-2 border-gray-300 text-gray-800 hover:bg-red-50 text-lg">Clear</Button>
            <Button onClick={handleDelete} variant="outline" className="h-16 col-span-2 border-gray-300 text-gray-800 hover:bg-red-50 text-lg">Delete</Button>
            
            {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, 'x', '0', '.', '/'].map((item, index) => {
              const isOperator = ['+', '-', 'x', '/'].includes(item.toString());
              return (
                <Button 
                  key={index}
                  onClick={() => handleNumberClick(item.toString())}
                  className={`h-16 text-lg ${
                    isOperator 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300'
                  } ${item === '0' ? 'col-span-2' : ''}`}
                >
                  {item === 'x' ? '×' : (item === '/' ? '÷' : item)}
                </Button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleCreateBill}
              className="w-full h-12 bg-blue-600 text-lg"
            >
              Create a Bill
            </Button>

            {currentBill && currentBill.status === 'pending' && (
              <Button
                onClick={() => handleNavigate('outstanding-amount')}
                className="w-full h-12 bg-green-600 hover:bg-green-700 text-lg text-white"
              >
                Pay Now - ₹{currentBill.total.toFixed(2)}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}