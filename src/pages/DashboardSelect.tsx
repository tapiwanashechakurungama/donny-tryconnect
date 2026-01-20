import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  BookOpen, 
  Calendar,
  Award,
  TrendingUp,
  MessageSquare,
  Settings
} from "lucide-react";

const DashboardSelect = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your role to access your personalized dashboard and start managing your educational journey
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Student Dashboard */}
          <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-blue-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-blue-600">Student Dashboard</CardTitle>
              <CardDescription className="text-gray-600">
                Access your courses, assignments, grades, and learning resources
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 mr-2 text-blue-500" />
                  View assignments and submit work
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="w-4 h-4 mr-2 text-blue-500" />
                  Track grades and progress
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  View class schedules
                </div>
              </div>
              <Link to="/dashboard/student">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Enter Student Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Teacher Dashboard */}
          <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-green-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-green-600">Teacher Dashboard</CardTitle>
              <CardDescription className="text-gray-600">
                Manage classes, create assignments, and track student progress
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 mr-2 text-green-500" />
                  Create and manage assignments
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                  Monitor student performance
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MessageSquare className="w-4 h-4 mr-2 text-green-500" />
                  Communicate with students
                </div>
              </div>
              <Link to="/dashboard/teacher">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Enter Teacher Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Parent Dashboard */}
          <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-purple-200">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-purple-600">Parent Dashboard</CardTitle>
              <CardDescription className="text-gray-600">
                Monitor your child's progress and stay updated on school activities
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="w-4 h-4 mr-2 text-purple-500" />
                  Track child's academic progress
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                  View school events and schedules
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MessageSquare className="w-4 h-4 mr-2 text-purple-500" />
                  Communicate with teachers
                </div>
              </div>
              <Link to="/dashboard/parent">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Enter Parent Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardSelect;
