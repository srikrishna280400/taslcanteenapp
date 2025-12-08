import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { CardDescription, CardHeader, CardTitle } from './ui/card';
import { Building2 } from 'lucide-react';

type RegisterScreenProps = {
  onRegister: (employeeId: string, password: string) => void;
  onNavigateToLogin: () => void;
};

export default function RegisterScreen({ onRegister, onNavigateToLogin }: RegisterScreenProps) {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (!employeeId || !password) {
      alert('Please fill all fields');
      return;
      // Note: Add more robust validation here for a real application
    }
    onRegister(employeeId, password);
  };

return (
  <div 
    className="fixed inset-0 overflow-hidden" 
    style={{ 
      top: -20,
      touchAction: 'none',
      overscrollBehaviorY: 'none',
      position: 'fixed',
      width: '100vw',
      height: '100vh'
    }}
    onTouchMove={(e) => e.preventDefault()}
    onWheel={(e) => e.preventDefault()}
  >
      
      {/* 2. THE CARD: Now the primary container, with the image inside it */}
      <Card 
        // Card is full screen, white background, and transparent to let image show through
        className="w-full h-full border-none rounded-none shadow-none bg-white relative flex flex-col"
      >
        
        {/* BACKGROUND IMAGE: MUST BE THE FIRST CHILD OF THE CARD (z-0) */}
<div className="absolute inset-0 z-0 w-full h-full">
  <img 
    src="/c2.jpg" 
    alt="Food background"
    className="w-[200%] h-[200%] object-cover object-center opacity-90 -left-10 -top-10"
  />
</div>

        {/* Actual Content Container: Centered on the screen. (z-10) */}
        <div className="relative z-10 flex-1" style={{ paddingTop: '20vh' }}>
            
            {/* Inner Content Card (Form wrapper) */}
            <div className="w-full max-w-sm">
                <CardHeader className="text-center mb-0 px-0 bg-white">
                  <div className="mx-auto w-32 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-3 overflow-visible">
                  <img 
                        src="/taslc3.jpg" 
                        alt="Company Logo"
                        className="w-[200%] h-full object-contain rounded-xl -ml-[50%]" // object-contain ensures the image fits without cropping
                    />
                  </div>
                  <CardTitle className="text-2xl text-blue-900 mb-1">TASL Canteen</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    Register to access the Canteen System
                  </CardDescription>
                </CardHeader>
    
                {/* Form Wrapper: Solid white background for contrast */}
                <div className="space-y-4 bg-white p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="employeeId" className="text-gray-700 text-xs">Employee ID</Label>
                      <Input 
                        id="employeeId"
                        placeholder="Enter your employee ID" 
                        className="h-10 text-sm" 
                        type="text"
                        value={employeeId}
                        onChange={(e) => setEmployeeId(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-gray-700 text-xs">Password</Label>
                      <Input 
                        id="password"
                        type="password" 
                        placeholder="Create a password" 
                        className="h-10 text-sm" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-gray-700 text-xs">Confirm Password</Label>
                      <Input 
                        id="confirmPassword"
                        type="password" 
                        placeholder="Confirm your password" 
                        className="h-10 text-sm" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full h-10 bg-blue-600 text-sm">Register</Button>
                  </form>
                  <div className="text-center text-xs">
                    <button type="button" onClick={onNavigateToLogin} className="text-blue-600 hover:underline">
                      Already have an account? LogIn
                    </button>
                  </div>
                </div>
            </div>

        </div>
        
      </Card>
    </div>
  );
}