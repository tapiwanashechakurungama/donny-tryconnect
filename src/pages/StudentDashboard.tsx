import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Calendar, 
  Award, 
  Clock, 
  TrendingUp,
  AlertCircle,
  CheckCircle,
  FileText,
  Users
} from "lucide-react";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [submissionText, setSubmissionText] = useState("");
  const [submissionComments, setSubmissionComments] = useState("");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@school.edu",
    phone: "+1-234-567-8900",
    grade: "10th Grade",
    studentId: "STU001",
    profilePicture: null,
    bio: "I'm a dedicated student passionate about mathematics and science."
  });

  // Mock data
  const assignments = [
    { id: 1, title: "Math Assignment - Algebra", course: "Mathematics", dueDate: "2024-01-15", status: "pending", progress: 75 },
    { id: 2, title: "Science Project Report", course: "Biology", dueDate: "2024-01-18", status: "pending", progress: 40 },
    { id: 3, title: "Essay on World History", course: "History", dueDate: "2024-01-20", status: "completed", progress: 100 },
    { id: 4, title: "Chemistry Lab Report", course: "Chemistry", dueDate: "2024-01-22", status: "pending", progress: 20 }
  ];

  const courses = [
    { id: 1, name: "Mathematics", teacher: "Mr. Johnson", grade: "A-", progress: 85, nextClass: "Today, 10:00 AM" },
    { id: 2, name: "Biology", teacher: "Dr. Smith", grade: "B+", progress: 78, nextClass: "Tomorrow, 2:00 PM" },
    { id: 3, name: "History", teacher: "Ms. Williams", grade: "A", progress: 92, nextClass: "Friday, 11:00 AM" },
    { id: 4, name: "Chemistry", teacher: "Dr. Brown", grade: "B", progress: 75, nextClass: "Monday, 9:00 AM" }
  ];

  const upcomingEvents = [
    { id: 1, title: "Math Test - Chapter 5", date: "2024-01-16", type: "test" },
    { id: 2, title: "Science Fair", date: "2024-01-25", type: "event" },
    { id: 3, title: "Parent-Teacher Meeting", date: "2024-01-28", type: "meeting" }
  ];

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map(file => ({
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      type: file.type || 'Unknown',
      uploadTime: new Date().toLocaleTimeString()
    }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const handleSubmitAssignment = () => {
    if (selectedAssignment && (uploadedFiles.length > 0 || submissionText.trim())) {
      alert(`Assignment Submitted Successfully!\n\nAssignment: ${selectedAssignment.title}\nCourse: ${selectedAssignment.course}\nFiles Uploaded: ${uploadedFiles.length}\nText Response: ${submissionText ? 'Yes' : 'No'}\nComments: ${submissionComments || 'None'}\n\nThis is a frontend demo - no actual submission was made.`);
      
      // Reset form
      setSelectedAssignment(null);
      setUploadedFiles([]);
      setSubmissionText("");
      setSubmissionComments("");
      setShowSubmissionModal(false);
    } else {
      alert('Please select an assignment and either upload a file or add text content.');
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
    alert(`Profile Updated Successfully!\n\nName: ${profileData.firstName} ${profileData.lastName}\nEmail: ${profileData.email}\nPhone: ${profileData.phone}\nGrade: ${profileData.grade}\nStudent ID: ${profileData.studentId}\nProfile Picture: ${profileData.profilePicture ? 'Updated' : 'Not uploaded'}\n\nThis is a frontend demo - no actual changes were saved.`);
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
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold overflow-hidden">
                {profileData.profilePicture ? (
                  <img src={profileData.profilePicture} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  `${profileData.firstName[0]}${profileData.lastName[0]}`
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1 cursor-pointer hover:bg-blue-700">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                value={profileData.lastName}
                onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
              <input
                type="text"
                value={profileData.grade}
                onChange={(e) => setProfileData({...profileData, grade: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
              <input
                type="text"
                value={profileData.studentId}
                onChange={(e) => setProfileData({...profileData, studentId: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

  const renderSubmissionModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Submit Assignment</h3>
        
        <div className="space-y-4">
          {/* Assignment Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Assignment</label>
            <select 
              value={selectedAssignment?.id || ""} 
              onChange={(e) => {
                const assignment = assignments.find(a => a.id === parseInt(e.target.value));
                setSelectedAssignment(assignment);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose an assignment...</option>
              {assignments.filter(a => a.status === "pending").map((assignment) => (
                <option key={assignment.id} value={assignment.id}>
                  {assignment.title} - {assignment.course} (Due: {assignment.dueDate})
                </option>
              ))}
            </select>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload Files</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <FileText className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">Click to upload files or drag and drop</p>
                <p className="text-xs text-gray-500">PDF, DOC, DOCX, images (Max 10MB per file)</p>
              </label>
            </div>
            
            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
              <div className="mt-3 space-y-2">
                <h4 className="text-sm font-medium text-gray-700">Uploaded Files:</h4>
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded text-sm">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="font-medium">{file.name}</span>
                      <span className="text-gray-500">({file.size})</span>
                    </div>
                    <button 
                      onClick={() => setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Text Response */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Text Response (Optional)</label>
            <textarea
              value={submissionText}
              onChange={(e) => setSubmissionText(e.target.value)}
              placeholder="Enter your assignment text here..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Comments for Teacher (Optional)</label>
            <textarea
              value={submissionComments}
              onChange={(e) => setSubmissionComments(e.target.value)}
              placeholder="Any additional comments or notes for your teacher..."
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <Button 
            onClick={handleSubmitAssignment}
            disabled={!selectedAssignment || (uploadedFiles.length === 0 && !submissionText.trim())}
            className="flex-1"
          >
            Submit Assignment
          </Button>
          <Button 
            variant="outline" 
            onClick={() => {
              setShowSubmissionModal(false);
              setSelectedAssignment(null);
              setUploadedFiles([]);
              setSubmissionText("");
              setSubmissionComments("");
            }}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="text-sm sm:text-lg text-blue-800 flex items-center">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-base">Active Courses</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold text-blue-600">4</div>
          <p className="text-xs sm:text-sm text-blue-600">Enrolled this semester</p>
        </CardContent>
      </Card>

      <Card className="bg-green-50 border-green-200">
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="text-sm sm:text-lg text-green-800 flex items-center">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-base">Average Grade</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold text-green-600">A-</div>
          <p className="text-xs sm:text-sm text-green-600">3.7 GPA</p>
        </CardContent>
      </Card>

      <Card className="bg-orange-50 border-orange-200">
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="text-sm sm:text-lg text-orange-800 flex items-center">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-base">Assignments</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold text-orange-600">3</div>
          <p className="text-xs sm:text-sm text-orange-600">Pending submissions</p>
        </CardContent>
      </Card>

      <Card className="bg-purple-50 border-purple-200">
        <CardHeader className="pb-2 sm:pb-3">
          <CardTitle className="text-sm sm:text-lg text-purple-800 flex items-center">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
            <span className="text-xs sm:text-base">Progress</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl sm:text-3xl font-bold text-purple-600">82%</div>
          <p className="text-xs sm:text-sm text-purple-600">Overall completion</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderAssignments = () => (
    <div className="space-y-3 sm:space-y-4">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Recent Assignments</h3>
      {assignments.map((assignment) => (
        <Card key={assignment.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
              <div className="mb-2 sm:mb-0">
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{assignment.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600">{assignment.course}</p>
              </div>
              <Badge 
                variant={assignment.status === "completed" ? "default" : "secondary"}
                className={assignment.status === "completed" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}
              >
                {assignment.status === "completed" ? "Completed" : "In Progress"}
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center text-xs sm:text-sm text-gray-600">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Due: {assignment.dueDate}
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="w-20 sm:w-32">
                  <Progress value={assignment.progress} className="h-2" />
                </div>
                <span className="text-xs sm:text-sm text-gray-600">{assignment.progress}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-3 sm:space-y-4">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">My Courses</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                <CardTitle className="text-base sm:text-lg text-gray-800">{course.name}</CardTitle>
                <Badge variant="outline" className="text-green-600 border-green-600 text-xs sm:text-sm">
                  {course.grade}
                </Badge>
              </div>
              <CardDescription className="text-xs sm:text-sm">Teacher: {course.teacher}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold">{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-2" />
                <div className="flex items-center text-xs sm:text-sm text-gray-600">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Next class: {course.nextClass}
                </div>
                <Button className="w-full mt-2 sm:mt-3" variant="outline" onClick={() => {
                  alert(`Course: ${course.name}\nTeacher: ${course.teacher}\nProgress: ${course.progress}%\nNext Class: ${course.nextClass}\n\nThis is the course details view. In a full implementation, this would show assignments, grades, and resources.`);
                }}>
                  View Course Details
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
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Student Dashboard</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-blue-700"
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
                <p className="text-xs text-gray-500">Student Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-8 overflow-x-auto">
            {["overview", "assignments", "courses"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 sm:px-1 border-b-2 font-medium text-sm capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
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
        {activeTab === "assignments" && renderAssignments()}
        {activeTab === "courses" && renderCourses()}

        {/* Quick Actions */}
        <div className="mt-6 sm:mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <Button className="h-16 sm:h-20 flex flex-col items-center justify-center bg-blue-600 hover:bg-blue-700" onClick={() => setShowSubmissionModal(true)}>
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">Submit Assignment</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center" onClick={() => {
              alert(`Class Schedule\n\nToday's Classes:\n- Mathematics: 10:00 AM\n- Biology: 2:00 PM\n- History: 11:00 AM\n\nThis would show your full weekly schedule with class times, locations, and upcoming assignments.`);
            }}>
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">View Schedule</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center" onClick={() => {
              alert(`Study Groups\n\nAvailable Study Groups:\n- Mathematics Study Group (Wednesdays 3PM)\n- Science Lab Partners (Thursdays 4PM)\n- History Discussion Group (Fridays 2PM)\n\nThis would show available study groups and allow you to join or create new ones.`);
            }}>
              <Users className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">Join Study Group</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Assignment Submission Modal */}
      {showSubmissionModal && renderSubmissionModal()}
      
      {/* Profile Modal */}
      {showProfileModal && renderProfileModal()}
    </div>
  );
};

export default StudentDashboard;
