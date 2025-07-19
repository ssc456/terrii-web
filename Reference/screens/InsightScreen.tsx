import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, TrendingDown, Users, MessageSquare, Camera, Clock, Download, Calendar } from 'lucide-react';

interface InsightsScreenProps {
  onExportReport: () => void;
}

export function InsightsScreen({ onExportReport }: InsightsScreenProps) {
  const [timeRange, setTimeRange] = useState('week');
  const [staffFilter, setStaffFilter] = useState('all');

  // Mock data - in real app, this would come from API
  const kpiData = {
    residentsUpdated: { current: 85, target: 90, trend: 'up' },
    avgResponseTime: { current: 2.4, target: 3.0, trend: 'up' },
    momentsShared: { current: 142, target: 120, trend: 'up' },
    familyEngagement: { current: 78, target: 75, trend: 'up' },
  };

  const weeklyUpdateData = [
    { day: 'Mon', updates: 12, moments: 8 },
    { day: 'Tue', updates: 15, moments: 12 },
    { day: 'Wed', updates: 8, moments: 6 },
    { day: 'Thu', updates: 18, moments: 15 },
    { day: 'Fri', updates: 16, moments: 11 },
    { day: 'Sat', updates: 14, moments: 9 },
    { day: 'Sun', updates: 10, moments: 7 },
  ];

  const categoryData = [
    { name: 'Activities', value: 45, color: '#27AE60' },
    { name: 'Meals', value: 25, color: '#F39C12' },
    { name: 'Social', value: 20, color: '#3498DB' },
    { name: 'Wellness', value: 10, color: '#9B59B6' },
  ];

  const staffActivityData = [
    { name: 'Sarah J.', updates: 24, moments: 18, messages: 32 },
    { name: 'Maria R.', updates: 22, moments: 15, messages: 28 },
    { name: 'Michael C.', updates: 19, moments: 22, messages: 25 },
    { name: 'Lisa P.', updates: 18, moments: 12, messages: 24 },
    { name: 'David W.', updates: 16, moments: 14, messages: 22 },
  ];

  const responseTimeData = [
    { hour: '8AM', time: 2.1 },
    { hour: '10AM', time: 1.8 },
    { hour: '12PM', time: 3.2 },
    { hour: '2PM', time: 2.4 },
    { hour: '4PM', time: 2.0 },
    { hour: '6PM', time: 2.8 },
    { hour: '8PM', time: 1.9 },
  ];

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? (
      <TrendingUp className="h-4 w-4 text-terrii-success" />
    ) : (
      <TrendingDown className="h-4 w-4 text-terrii-error" />
    );
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-terrii-success' : 'text-terrii-error';
  };

  return (
    <div className="h-full bg-terrii-blue/10">
      <div className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-terrii-text-primary">Insights</h1>
            <p className="text-terrii-text-secondary">Care quality metrics and analytics</p>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="sm"
              onClick={onExportReport}
              className="flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Export</span>
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="shadow-terrii">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-terrii-text-secondary">Residents Updated</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-2xl font-bold text-terrii-text-primary">
                      {kpiData.residentsUpdated.current}%
                    </span>
                    {getTrendIcon(kpiData.residentsUpdated.trend)}
                  </div>
                  <Progress value={kpiData.residentsUpdated.current} className="mt-2" />
                </div>
                <Users className="h-8 w-8 text-terrii-green-dark" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-terrii">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-terrii-text-secondary">Avg Response Time</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-2xl font-bold text-terrii-text-primary">
                      {kpiData.avgResponseTime.current}h
                    </span>
                    {getTrendIcon(kpiData.avgResponseTime.trend)}
                  </div>
                  <p className="text-xs text-terrii-text-light mt-1">
                    Target: {kpiData.avgResponseTime.target}h
                  </p>
                </div>
                <Clock className="h-8 w-8 text-terrii-blue-dark" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-terrii">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-terrii-text-secondary">Moments Shared</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-2xl font-bold text-terrii-text-primary">
                      {kpiData.momentsShared.current}
                    </span>
                    {getTrendIcon(kpiData.momentsShared.trend)}
                  </div>
                  <p className="text-xs text-terrii-text-light mt-1">
                    Target: {kpiData.momentsShared.target}
                  </p>
                </div>
                <Camera className="h-8 w-8 text-terrii-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-terrii">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-terrii-text-secondary">Family Engagement</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-2xl font-bold text-terrii-text-primary">
                      {kpiData.familyEngagement.current}%
                    </span>
                    {getTrendIcon(kpiData.familyEngagement.trend)}
                  </div>
                  <Progress value={kpiData.familyEngagement.current} className="mt-2" />
                </div>
                <MessageSquare className="h-8 w-8 text-terrii-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Activity Chart */}
        <Card className="shadow-terrii">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Weekly Activity</span>
              <Badge variant="outline">Updates vs Moments</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyUpdateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="updates" fill="#C1E8C5" />
                <Bar dataKey="moments" fill="#D0E8F5" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution and Response Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="shadow-terrii">
            <CardHeader>
              <CardTitle>Moment Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-terrii">
            <CardHeader>
              <CardTitle>Response Time Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={responseTimeData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="time" stroke="#27AE60" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Staff Activity */}
        <Card className="shadow-terrii">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Staff Activity</span>
              <Select value={staffFilter} onValueChange={setStaffFilter}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Staff</SelectItem>
                  <SelectItem value="nurses">Nurses</SelectItem>
                  <SelectItem value="assistants">Assistants</SelectItem>
                  <SelectItem value="coordinators">Coordinators</SelectItem>
                </SelectContent>
              </Select>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {staffActivityData.map((staff, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-terrii-blue/10 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-terrii-text-primary">{staff.name}</h4>
                    <div className="flex items-center space-x-4 mt-1 text-sm text-terrii-text-secondary">
                      <span>{staff.updates} updates</span>
                      <span>{staff.moments} moments</span>
                      <span>{staff.messages} messages</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-terrii-text-primary">
                      {staff.updates + staff.moments + staff.messages}
                    </div>
                    <div className="text-xs text-terrii-text-light">Total activity</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}