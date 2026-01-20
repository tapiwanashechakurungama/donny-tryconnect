import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  TrendingUp,
  FileText,
  Award,
  MessageSquare,
  Clock,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [selectedParent, setSelectedParent] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingPurpose, setMeetingPurpose] = useState("");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showStudentProfileModal, setShowStudentProfileModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [profileData, setProfileData] = useState({
    firstName: "Sarah",
    lastName: "Williams",
    email: "sarah.williams@school.edu",
    phone: "+1-234-567-8901",
    department: "Mathematics",
    employeeId: "TCH001",
    profilePicture: null,
    bio: "Experienced mathematics teacher with 10+ years of teaching experience. Passionate about making math accessible and engaging for all students."
  });

  // Mock data
  const classes = [
    { id: 1, name: "Mathematics - Grade 10", students: 32, averageGrade: 85, nextClass: "Today, 10:00 AM" },
    { id: 2, name: "Advanced Algebra", students: 24, averageGrade: 78, nextClass: "Tomorrow, 2:00 PM" },
    { id: 3, name: "Statistics", students: 28, averageGrade: 82, nextClass: "Friday, 11:00 AM" }
  ];

  const assignments = [
    { id: 1, title: "Algebra Problem Set", class: "Mathematics - Grade 10", dueDate: "2024-01-15", submissions: 28, totalStudents: 32, status: "active" },
    { id: 2, title: "Statistics Project", class: "Statistics", dueDate: "2024-01-18", submissions: 15, totalStudents: 28, status: "active" },
    { id: 3, title: "Advanced Algebra Quiz", class: "Advanced Algebra", dueDate: "2024-01-20", submissions: 24, totalStudents: 24, status: "completed" }
  ];

  const students = [
    { 
      id: 1, 
      name: "Alice Johnson", 
      grade: "A", 
      attendance: 95, 
      lastActive: "2 hours ago",
      email: "alice.johnson@school.edu",
      phone: "+1-234-567-8901",
      studentId: "STU001",
      class: "Mathematics - Grade 10",
      parentName: "Robert Johnson",
      gpa: 3.8,
      assignments: [
        { title: "Algebra Problem Set", score: 92, status: "completed" },
        { title: "Geometry Quiz", score: 88, status: "completed" },
        { title: "Statistics Project", score: 95, status: "in-progress" }
      ],
      behavior: "Excellent",
      notes: "Alice is a dedicated student who consistently performs well in mathematics. She actively participates in class discussions and helps her peers."
    },
    { 
      id: 2, 
      name: "Bob Smith", 
      grade: "B+", 
      attendance: 88, 
      lastActive: "1 day ago",
      email: "bob.smith@school.edu",
      phone: "+1-234-567-8902",
      studentId: "STU002",
      class: "Mathematics - Grade 10",
      parentName: "Sarah Smith",
      gpa: 3.3,
      assignments: [
        { title: "Algebra Problem Set", score: 85, status: "completed" },
        { title: "Geometry Quiz", score: 82, status: "completed" },
        { title: "Statistics Project", score: 78, status: "in-progress" }
      ],
      behavior: "Good",
      notes: "Bob shows improvement in recent assignments. Needs additional support with complex algebraic concepts."
    },
    { 
      id: 3, 
      name: "Carol Williams", 
      grade: "A-", 
      attendance: 92, 
      lastActive: "3 hours ago",
      email: "carol.williams@school.edu",
      phone: "+1-234-567-8903",
      studentId: "STU003",
      class: "Advanced Algebra",
      parentName: "David Williams",
      gpa: 3.6,
      assignments: [
        { title: "Advanced Algebra Quiz", score: 90, status: "completed" },
        { title: "Linear Equations", score: 88, status: "completed" },
        { title: "Quadratic Functions", score: 85, status: "in-progress" }
      ],
      behavior: "Very Good",
      notes: "Carol excels in abstract mathematical concepts. Shows strong analytical thinking skills."
    },
    { 
      id: 4, 
      name: "David Brown", 
      grade: "B", 
      attendance: 85, 
      lastActive: "5 hours ago",
      email: "david.brown@school.edu",
      phone: "+1-234-567-8904",
      studentId: "STU004",
      class: "Statistics",
      parentName: "Jennifer Brown",
      gpa: 3.0,
      assignments: [
        { title: "Statistics Project", score: 82, status: "completed" },
        { title: "Data Analysis", score: 78, status: "completed" },
        { title: "Probability Theory", score: 75, status: "in-progress" }
      ],
      behavior: "Good",
      notes: "David has improved his attendance this semester. Benefits from visual learning aids and extra practice problems."
    }
  ];

  const upcomingEvents = [
    { id: 1, title: "Parent-Teacher Meeting", date: "2024-01-28", type: "meeting" },
    { id: 2, title: "Math Department Meeting", date: "2024-01-30", type: "meeting" },
    { id: 3, title: "School Science Fair", date: "2024-02-05", type: "event" }
  ];

  const parents = [
    { id: 1, name: "Robert Johnson", student: "Emma Johnson", grade: "10th Grade" },
    { id: 2, name: "Sarah Williams", student: "Michael Johnson", grade: "7th Grade" },
    { id: 3, name: "David Brown", student: "Alice Smith", grade: "10th Grade" },
    { id: 4, name: "Jennifer Davis", student: "Bob Wilson", grade: "7th Grade" }
  ];

  const handleScheduleMeeting = () => {
    if (selectedParent && meetingDate && meetingTime && meetingPurpose) {
      alert(`Meeting scheduled with ${selectedParent} on ${meetingDate} at ${meetingTime}\nPurpose: ${meetingPurpose}\n\nThis is a frontend demo - no actual meeting scheduled.`);
      setSelectedParent("");
      setMeetingDate("");
      setMeetingTime("");
      setMeetingPurpose("");
      setShowMeetingModal(false);
    }
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({
          ...profileData,
          profilePicture: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProfileUpdate = () => {
    alert(`Profile Updated Successfully!\n\nName: ${profileData.firstName} ${profileData.lastName}\nEmail: ${profileData.email}\nPhone: ${profileData.phone}\nDepartment: ${profileData.department}\nEmployee ID: ${profileData.employeeId}\nProfile Picture: ${profileData.profilePicture ? 'Updated' : 'Not uploaded'}\n\nThis is a frontend demo - no actual changes were saved.`);
    setShowProfileModal(false);
  };

  const renderProfileModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
        
        <div className="space-y-4">
          {/* Profile Picture */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold overflow-hidden">
                {profileData.profilePicture ? (
                  <img src={profileData.profilePicture} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  `${profileData.firstName[0]}${profileData.lastName[0]}`
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-green-600 rounded-full p-1 cursor-pointer hover:bg-green-700">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureUpload}
                  className="hidden"
                />
                <Edit className="w-4 h-4 text-white" />
              </label>
            </div>
            <div>
              <p className="text-sm text-gray-600">Click the edit icon to upload a profile picture</p>
              <p className="text-xs text-gray-500">JPG, PNG or GIF (Max 5MB)</p>
            </div>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                value={profileData.firstName}
                onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                value={profileData.lastName}
                onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <input
                type="text"
                value={profileData.department}
                onChange={(e) => setProfileData({...profileData, department: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Employee ID</label>
              <input
                type="text"
                value={profileData.employeeId}
                onChange={(e) => setProfileData({...profileData, employeeId: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              value={profileData.bio}
              onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
              placeholder="Tell us about yourself..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <Button onClick={handleProfileUpdate} className="flex-1">
            Save Changes
          </Button>
          <Button variant="outline" onClick={() => setShowProfileModal(false)} className="flex-1">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );

  const renderStudentProfileModal = () => {
    if (!selectedStudent) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Student Profile</h3>
            <Button variant="ghost" onClick={() => setShowStudentProfileModal(false)}>
              ×
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Basic Info */}
            <div className="lg:col-span-1 space-y-4">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-4">
                  {selectedStudent.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="text-lg font-semibold">{selectedStudent.name}</h4>
                <p className="text-sm text-gray-600">Student ID: {selectedStudent.studentId}</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700">Email</p>
                  <p className="text-sm text-gray-600">{selectedStudent.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Phone</p>
                  <p className="text-sm text-gray-600">{selectedStudent.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Class</p>
                  <p className="text-sm text-gray-600">{selectedStudent.class}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Parent</p>
                  <p className="text-sm text-gray-600">{selectedStudent.parentName}</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Performance Details */}
            <div className="lg:col-span-2 space-y-6">
              {/* Academic Performance */}
              <div>
                <h5 className="text-lg font-semibold mb-4">Academic Performance</h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600">GPA</p>
                    <p className="text-2xl font-bold text-green-600">{selectedStudent.gpa}</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Grade</p>
                    <p className="text-2xl font-bold text-blue-600">{selectedStudent.grade}</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                    <p className="text-sm text-gray-600">Attendance</p>
                    <p className="text-2xl font-bold text-orange-600">{selectedStudent.attendance}%</p>
                  </div>
                </div>
              </div>
              
              {/* Recent Assignments */}
              <div>
                <h5 className="text-lg font-semibold mb-4">Recent Assignments</h5>
                <div className="space-y-3">
                  {selectedStudent.assignments.map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{assignment.title}</p>
                        <p className="text-sm text-gray-600">Score: {assignment.score}%</p>
                      </div>
                      <Badge 
                        variant={assignment.status === "completed" ? "default" : "secondary"}
                        className={assignment.status === "completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}
                      >
                        {assignment.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Behavior & Notes */}
              <div>
                <h5 className="text-lg font-semibold mb-4">Behavior & Notes</h5>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Behavior</p>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {selectedStudent.behavior}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Teacher Notes</p>
                    <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      {selectedStudent.notes}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-3 pt-4 border-t">
                <Button className="flex-1" onClick={() => {
                  alert(`Message Parent: ${selectedStudent.parentName}\n\nStudent: ${selectedStudent.name}\nParent Contact: ${selectedStudent.phone}\nEmail: ${selectedStudent.email}\n\nRecent Performance:\n- GPA: ${selectedStudent.gpa}\n- Grade: ${selectedStudent.grade}\n- Attendance: ${selectedStudent.attendance}%\n\nThis would open a messaging interface to communicate with ${selectedStudent.parentName} about ${selectedStudent.name}'s progress.`);
                }}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Parent
                </Button>
                <Button variant="outline" className="flex-1" onClick={() => {
                  alert(`Full Academic Report - ${selectedStudent.name}\n\nStudent Information:\n- ID: ${selectedStudent.studentId}\n- Class: ${selectedStudent.class}\n- Parent: ${selectedStudent.parentName}\n\nAcademic Summary:\n- Current GPA: ${selectedStudent.gpa}\n- Overall Grade: ${selectedStudent.grade}\n- Attendance Rate: ${selectedStudent.attendance}%\n\nRecent Assignment Performance:\n${selectedStudent.assignments.map(a => `- ${a.title}: ${a.score}% (${a.status})`).join('\n')}\n\nBehavior Assessment: ${selectedStudent.behavior}\n\nTeacher Notes:\n${selectedStudent.notes}\n\nThis would generate a comprehensive PDF report with charts, detailed analytics, and recommendations for improvement.`);
                }}>
                  <FileText className="w-4 h-4 mr-2" />
                  View Full Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMeetingModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Schedule Meeting with Parent</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Parent</label>
            <select 
              value={selectedParent} 
              onChange={(e) => setSelectedParent(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose a parent...</option>
              {parents.map((parent) => (
                <option key={parent.id} value={parent.name}>
                  {parent.name} ({parent.student} - {parent.grade})
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
            <input 
              type="date"
              value={meetingDate}
              onChange={(e) => setMeetingDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
            <input 
              type="time"
              value={meetingTime}
              onChange={(e) => setMeetingTime(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
            <textarea 
              value={meetingPurpose}
              onChange={(e) => setMeetingPurpose(e.target.value)}
              placeholder="Meeting purpose..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <Button 
            onClick={handleScheduleMeeting}
            disabled={!selectedParent || !meetingDate || !meetingTime || !meetingPurpose}
            className="flex-1"
          >
            Schedule Meeting
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setShowMeetingModal(false)}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <Card className="bg-green-50 border-green-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-green-800 flex items-center">
            <Users className="w-5 h-5 mr-2" />
            Total Students
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-600">84</div>
          <p className="text-sm text-green-600">Across all classes</p>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-blue-800 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Active Classes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-blue-600">3</div>
          <p className="text-sm text-blue-600">This semester</p>
        </CardContent>
      </Card>

      <Card className="bg-orange-50 border-orange-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-orange-800 flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Assignments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-orange-600">2</div>
          <p className="text-sm text-orange-600">Currently active</p>
        </CardContent>
      </Card>

      <Card className="bg-purple-50 border-purple-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-purple-800 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Avg Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-purple-600">82%</div>
          <p className="text-sm text-purple-600">Class average</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderClasses = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">My Classes</h3>
        <Button className="bg-green-600 hover:bg-green-700" onClick={() => {
          alert(`Add New Class\n\nThis would open the class creation form where you can:\n- Enter class name and description\n- Set grade level and subject\n- Add students to the class\n- Configure class settings\n\nExample: "Physics 101 - Grade 11"`);
        }}>
          <Plus className="w-4 h-4 mr-2" />
          Add New Class
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <Card key={classItem.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">{classItem.name}</CardTitle>
              <CardDescription>{classItem.students} students enrolled</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Class Average</span>
                  <span className="font-semibold text-green-600">{classItem.averageGrade}%</span>
                </div>
                <Progress value={classItem.averageGrade} className="h-2" />
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  Next: {classItem.nextClass}
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Manage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Assignments</h3>
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => {
          alert(`Create Assignment\n\nThis would open the assignment creation form where you can:\n- Set assignment title and description\n- Choose due date and time\n- Select target classes\n- Add attachments and resources\n- Set grading criteria\n\nExample: "Chapter 5 Quiz - Due Friday"`);
        }}>
          <Plus className="w-4 h-4 mr-2" />
          Create Assignment
        </Button>
      </div>
      {assignments.map((assignment) => (
        <Card key={assignment.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="font-semibold text-gray-800">{assignment.title}</h4>
                <p className="text-sm text-gray-600">{assignment.class}</p>
              </div>
              <Badge 
                variant={assignment.status === "completed" ? "default" : "secondary"}
                className={assignment.status === "completed" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}
              >
                {assignment.status === "completed" ? "Completed" : "Active"}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-1" />
                Due: {assignment.dueDate}
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  Submissions: {assignment.submissions}/{assignment.totalStudents}
                </div>
                <div className="w-24">
                  <Progress value={(assignment.submissions / assignment.totalStudents) * 100} className="h-2" />
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderStudents = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Student Performance</h3>
        <Button variant="outline" onClick={() => {
          alert(`Export Report\n\nThis would generate and export student performance reports including:\n- Grade summaries\n- Attendance records\n- Assignment completion rates\n- Progress over time\n- Individual student insights\n\nFormats: PDF, Excel, CSV`);
        }}>
          Export Report
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <Card key={student.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="font-semibold text-gray-800">{student.name}</h4>
                  <p className="text-sm text-gray-600">Last active: {student.lastActive}</p>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  {student.grade}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Attendance</span>
                  <span className="font-semibold">{student.attendance}%</span>
                </div>
                <Progress value={student.attendance} className="h-2" />
              </div>
              <div className="flex space-x-2 mt-4">
                <Button size="sm" variant="outline" className="flex-1" onClick={() => {
                  setSelectedStudent(student);
                  setShowStudentProfileModal(true);
                }}>
                  View Profile
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <MessageSquare className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/dashboard-select" className="text-blue-600 hover:text-blue-800 mr-2 sm:mr-4">
                ← Back
              </Link>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Teacher Dashboard</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-green-700"
                onClick={() => setShowProfileModal(true)}
              >
                {profileData.profilePicture ? (
                  <img src={profileData.profilePicture} alt="Profile" className="w-full h-full object-cover rounded-full" />
                ) : (
                  `${profileData.firstName[0]}${profileData.lastName[0]}`
                )}
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-gray-900">{profileData.firstName} {profileData.lastName}</p>
                <p className="text-xs text-gray-500">{profileData.department} Department</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-8 overflow-x-auto">
            {["overview", "classes", "assignments", "students"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 sm:px-1 border-b-2 font-medium text-sm capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {activeTab === "overview" && renderOverview()}
        {activeTab === "classes" && renderClasses()}
        {activeTab === "assignments" && renderAssignments()}
        {activeTab === "students" && renderStudents()}

        {/* Quick Actions */}
        <div className="mt-6 sm:mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <Button className="h-16 sm:h-20 flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700" onClick={() => {
              alert(`Create Assignment\n\nQuick Assignment Creation:\n- Title: Enter assignment name\n- Subject: Choose from your classes\n- Due Date: Set deadline\n- Points: Assign total points\n- Description: Add instructions\n\nStudents will receive notifications immediately.`);
            }}>
              <Plus className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">Create Assignment</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center" onClick={() => {
              alert(`Grade Submissions\n\nGrading Queue:\n- 28 pending submissions for Algebra Problem Set\n- 15 pending submissions for Statistics Project\n- 24 completed submissions for Advanced Algebra Quiz\n\nThis would open the grading interface with rubrics, comments, and score entry.`);
            }}>
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">Grade Submissions</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center" onClick={() => {
              alert(`Send Announcement\n\nAnnouncement Options:\n- Target: All classes or specific classes\n- Type: General info, reminder, or urgent\n- Delivery: In-app, email, or both\n- Scheduling: Send now or schedule later\n\nExample: "Reminder: Chapter 5 test tomorrow"`);
            }}>
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">Send Announcement</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center" onClick={() => setShowMeetingModal(true)}>
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">Schedule Meeting</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Meeting Modal */}
      {showMeetingModal && renderMeetingModal()}
      
      {/* Profile Modal */}
      {showProfileModal && renderProfileModal()}
      
      {/* Student Profile Modal */}
      {showStudentProfileModal && renderStudentProfileModal()}
    </div>
  );
};

export default TeacherDashboard;
