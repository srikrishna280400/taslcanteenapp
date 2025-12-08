import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  Menu,
  FileText,
  History,
  CreditCard,
  AlertCircle,
  User,
  LogOut,
  Mail,
  Briefcase,
  BadgeCheck,
  Trash2,
} from 'lucide-react';
import { User as UserType } from '../App';
import SideNav from './SideNav';

type ProfileScreenProps = {
  user: UserType;
  onNavigate: (screen: string) => void;
  onLogout: () => void;
};

export default function ProfileScreen({ user, onNavigate, onLogout }: ProfileScreenProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
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
            
            {/* Profile Card */}
            <Card className="shadow-lg border-blue-100">
              <CardHeader className="bg-blue-50" style={{ paddingTop: '16px', paddingBottom: '10px' }}>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <User className="w-5 h-5" />
                  Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                
                {/* User Avatar and Name Section */}
                <div className="flex flex-col items-center mb-6 pb-6 border-b border-gray-200">
                  <Avatar className="w-20 h-20 mb-3 border-4 border-blue-100">
                    <AvatarFallback className="bg-blue-600 text-white text-lg font-semibold">
                      {getInitials(user.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="text-lg text-gray-900 font-semibold">{user.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{user.role}</div>
                  </div>
                </div>

                {/* User Details */}
                <div className="space-y-4 pb-6">
                  
                  {/* Full Name */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">Full Name</div>
                        <div className="text-gray-900">{user.name}</div>
                      </div>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">Role in Organization</div>
                        <div className="text-gray-900">{user.role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">Organization Email</div>
                        <div className="text-gray-900 break-all text-sm">{user.email}</div>
                      </div>
                    </div>
                  </div>

                  {/* Employee ID */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BadgeCheck className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">Employee ID</div>
                        <div className="text-gray-900">{user.id}</div>
                      </div>
                    </div>
                  </div>
                </div>
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