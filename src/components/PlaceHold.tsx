// src/components/PlaceHold.tsx 

import SideNav from './SideNav';

// Re-using the types defined in App.tsx
type User = {
  id: string;
  name: string;
  role: string;
  email: string;
};

type PlaceHoldProps = { // Updated prop name
    screenName: string;
    user: User;
    onNavigate: (screen: string) => void;
    onLogout: () => void;
}

export default function PlaceHold({ // Updated function name
    screenName,
    user,
    onNavigate,
    onLogout
}: PlaceHoldProps) {
    
    return (
        <div className="min-h-screen bg-gray-50 flex justify-center py-8 px-4 relative">
            
            {/* SideNav for consistent navigation */}
            <div className="absolute top-4 left-4 z-10">
                <SideNav 
                    onNavigate={onNavigate} 
                    onLogout={onLogout} 
                />
            </div>
            
            <div className="w-full max-w-md mt-16 p-8 bg-white rounded-xl shadow-lg border-t-4 border-t-blue-600 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl font-extrabold text-blue-800 mb-2">
                    {screenName.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                </h1>
                <p className="text-gray-600 mb-6">
                    Screen for **{screenName.toUpperCase()}** is currently under construction.
                </p>
                <div className="space-y-3 w-full">
                    <button 
                        onClick={() => onNavigate('dashboard')} 
                        className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition"
                    >
                        Go Back to Dashboard
                    </button>
                    <button 
                        onClick={() => alert(`You are currently logged in as ${user.name}`)}
                        className="w-full p-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
                    >
                        View User Info
                    </button>
                </div>
            </div>
        </div>
    );
}