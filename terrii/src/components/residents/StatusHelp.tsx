import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/Dialog';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { 
  HelpCircle, 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Calendar,
  User,
  Activity
} from 'lucide-react';

interface StatusHelpProps {
  trigger?: React.ReactNode;
}

export function StatusHelp({ trigger }: StatusHelpProps) {
  const [open, setOpen] = useState(false);

  const defaultTrigger = (
    <Button variant="outline" size="sm">
      <HelpCircle className="h-4 w-4 mr-2" />
      How Status Updates Work
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || defaultTrigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-terrii-green" />
            Resident Status Management System
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-terrii-text-secondary">
                TERRii automatically tracks when residents were last checked by staff. The status system helps 
                prioritize care by showing which residents need attention based on time since their last update.
              </p>
              
              <div className="bg-terrii-blue/10 p-4 rounded-lg">
                <h4 className="font-medium text-terrii-text-primary mb-2">Key Concept:</h4>
                <p className="text-sm text-terrii-text-secondary">
                  Every time staff performs a "Quick Update" or adds an activity for a resident, 
                  their status automatically updates to "Up to Date" and the timer resets.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Status Levels */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Status Levels</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              
              {/* Up to Date */}
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-green-900">Up to Date</span>
                    <Badge className="bg-green-100 text-green-700">0-24 hours</Badge>
                  </div>
                  <p className="text-sm text-green-700">
                    Resident has been checked within the last 24 hours. No action needed.
                  </p>
                </div>
              </div>

              {/* Needs Update */}
              <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <Clock className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-yellow-900">Needs Update</span>
                    <Badge className="bg-yellow-100 text-yellow-700">1-3 days</Badge>
                  </div>
                  <p className="text-sm text-yellow-700">
                    Resident should be checked soon. Last update was 24-72 hours ago.
                  </p>
                </div>
              </div>

              {/* Overdue */}
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                <AlertCircle className="h-6 w-6 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-red-900">Overdue</span>
                    <Badge className="bg-red-100 text-red-700">3+ days</Badge>
                  </div>
                  <p className="text-sm text-red-700">
                    Resident needs immediate attention. Last update was more than 72 hours ago.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Update */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                How to Update a Resident's Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-terrii-green rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-medium text-terrii-text-primary">Quick Update Button</h4>
                    <p className="text-sm text-terrii-text-secondary">
                      Click the "Quick Update" button on any resident card or profile to instantly 
                      mark them as checked and reset their status to "Up to Date".
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-terrii-green rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-medium text-terrii-text-primary">Add Activities</h4>
                    <p className="text-sm text-terrii-text-secondary">
                      Adding any activity (meals, activities, care notes) automatically updates 
                      the resident's status and last update time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-terrii-green rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-medium text-terrii-text-primary">Profile Updates</h4>
                    <p className="text-sm text-terrii-text-secondary">
                      Making changes to a resident's profile information also counts as an update 
                      and resets their status timer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-terrii-info/10 p-4 rounded-lg border border-terrii-info/20">
                <h4 className="font-medium text-terrii-text-primary mb-2 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Automatic Tracking
                </h4>
                <p className="text-sm text-terrii-text-secondary">
                  All updates are automatically logged with the staff member's name and timestamp, 
                  so you have a complete record of care interactions.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Best Practices */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-terrii-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-terrii-green font-bold">•</span>
                  Check residents with "Overdue" status first - they need immediate attention
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terrii-green font-bold">•</span>
                  Use Quick Update for wellness checks that don't need detailed notes
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terrii-green font-bold">•</span>
                  Add specific activities when documenting care, meals, or interactions
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terrii-green font-bold">•</span>
                  Review the dashboard regularly to see overall care home status
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-terrii-green font-bold">•</span>
                  Use filters to focus on residents who need attention
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-end">
          <Button onClick={() => setOpen(false)} className="bg-terrii-green-dark hover:bg-terrii-green text-white">
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
