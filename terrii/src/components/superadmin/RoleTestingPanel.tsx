import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { 
  User, 
  Shield, 
  UserCheck, 
  Heart, 
  Users, 
  Building, 
  TestTube,
  LogIn,
  Crown,
  Stethoscope,
  ClipboardList
} from 'lucide-react';
import { TerriiUserRole } from '../../API';

interface RoleTestingPanelProps {
  careHomeId: string;
  careHomeName: string;
  onTestRole: (careHomeId: string, role: TerriiUserRole, testMode: boolean) => void;
}

export function RoleTestingPanel({ careHomeId, careHomeName, onTestRole }: RoleTestingPanelProps) {
  const [selectedRole, setSelectedRole] = useState<TerriiUserRole | null>(null);

  const roles = [
    {
      role: TerriiUserRole.ADMIN,
      label: 'Administrator',
      description: 'Complete care home management, settings, user management',
      icon: Crown,
      color: 'bg-purple-100 text-purple-800 border-purple-200',
      features: [
        'User management',
        'Care home settings',
        'All resident access',
        'System configuration',
        'Reports & analytics'
      ]
    },
    {
      role: TerriiUserRole.MANAGER,
      label: 'Manager', 
      description: 'Staff oversight, reporting, resident management',
      icon: ClipboardList,
      color: 'bg-blue-100 text-blue-800 border-blue-200',
      features: [
        'Staff management',
        'Advanced reporting',
        'All resident access',
        'Activity oversight',
        'Family communication'
      ]
    },
    {
      role: TerriiUserRole.CARE_STAFF,
      label: 'Care Staff',
      description: 'Daily care activities, resident updates, basic reporting',
      icon: Stethoscope,
      color: 'bg-green-100 text-green-800 border-green-200',
      features: [
        'Resident care updates',
        'Daily activities',
        'Message families',
        'Basic reporting',
        'Moment sharing'
      ]
    },
    {
      role: TerriiUserRole.FAMILY,
      label: 'Family Member',
      description: 'View linked residents, receive updates, communicate with staff',
      icon: Heart,
      color: 'bg-pink-100 text-pink-800 border-pink-200',
      features: [
        'Linked residents only',
        'Receive updates',
        'Message staff',
        'View shared moments',
        'Limited reporting'
      ]
    }
  ];

  return (
    <Card className="shadow-terrii">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TestTube className="h-5 w-5" />
          <span>Role Testing - {careHomeName}</span>
        </CardTitle>
        <p className="text-sm text-terrii-text-secondary">
          Test the application interface as different user roles
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {roles.map(({ role, label, description, icon: Icon, color, features }) => (
            <div
              key={role}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedRole === role 
                  ? 'ring-2 ring-terrii-blue border-terrii-blue bg-terrii-blue/5' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedRole(role)}
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold">{label}</h3>
                    <Badge className={color.replace('bg-', 'bg-').replace('text-', 'text-')}>
                      {role}
                    </Badge>
                  </div>
                  <p className="text-sm text-terrii-text-secondary mb-3">{description}</p>
                  <div className="space-y-1">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 text-xs">
                        <div className="w-1 h-1 bg-terrii-green rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedRole && (
          <div className="flex items-center justify-between p-4 bg-terrii-blue/5 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-terrii-blue/20 rounded-lg">
                <User className="h-5 w-5 text-terrii-blue" />
              </div>
              <div>
                <h4 className="font-semibold">Ready to test as {selectedRole}</h4>
                <p className="text-sm text-terrii-text-secondary">
                  This will open a new session with {selectedRole} permissions
                </p>
              </div>
            </div>
            <Button
              onClick={() => onTestRole(careHomeId, selectedRole, true)}
              className="bg-terrii-blue hover:bg-terrii-blue/90 text-white"
            >
              <LogIn className="h-4 w-4 mr-2" />
              Test Role
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
