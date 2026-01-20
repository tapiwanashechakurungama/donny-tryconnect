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
  Award,
  MessageSquare,
  Clock,
  AlertCircle,
  CheckCircle,
  FileText,
  Bell,
  GraduationCap,
  Edit
} from "lucide-react";

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [messageSubject, setMessageSubject] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [currentConversation, setCurrentConversation] = useState(null);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [selectedTeacherForMeeting, setSelectedTeacherForMeeting] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [meetingPurpose, setMeetingPurpose] = useState("");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Robert",
    lastName: "Johnson",
    email: "robert.johnson@email.com",
    phone: "+1-234-567-8902",
    occupation: "Software Engineer",
    parentId: "PAR001",
    profilePicture: null,
    bio: "Parent of two students at Lincoln schools. Active in parent-teacher association and committed to supporting my children's education."
  });

  // Mock data
  const children = [
    { 
      id: 1, 
      name: "Emma Johnson", 
      grade: "10th Grade", 
      school: "Lincoln High School",
      gpa: 3.8,
      attendance: 95,
      recentActivity: "Submitted Math Assignment"
    },
    { 
      id: 2, 
      name: "Michael Johnson", 
      grade: "7th Grade", 
      school: "Lincoln Middle School",
      gpa: 3.5,
      attendance: 92,
      recentActivity: "Attended Science Lab"
    }
  ];

  const recentGrades = [
    { id: 1, student: "Emma Johnson", subject: "Mathematics", grade: "A-", date: "2024-01-12", assignment: "Algebra Quiz" },
    { id: 2, student: "Emma Johnson", subject: "Biology", grade: "B+", date: "2024-01-10", assignment: "Lab Report" },
    { id: 3, student: "Michael Johnson", subject: "Science", grade: "A", date: "2024-01-11", assignment: "Chapter Test" },
    { id: 4, student: "Michael Johnson", subject: "Math", grade: "B", date: "2024-01-09", assignment: "Homework Set" }
  ];

  const upcomingEvents = [
    { id: 1, title: "Parent-Teacher Conference", date: "2024-01-28", type: "meeting", student: "Emma Johnson" },
    { id: 2, title: "School Science Fair", date: "2024-02-05", type: "event", student: "Michael Johnson" },
    { id: 3, title: "Math Test - Chapter 6", date: "2024-01-20", type: "test", student: "Emma Johnson" }
  ];

  const communications = [
    { id: 1, from: "Ms. Williams (Math Teacher)", subject: "Emma's Progress Report", date: "2024-01-12", type: "message" },
    { id: 2, from: "Lincoln High School", subject: "Upcoming School Events", date: "2024-01-10", type: "announcement" },
    { id: 3, from: "Dr. Smith (Science Teacher)", subject: "Michael's Lab Performance", date: "2024-01-08", type: "message" }
  ];

  const teachers = [
    { id: 1, name: "Ms. Williams", subject: "Mathematics", school: "Lincoln High School" },
    { id: 2, name: "Dr. Smith", subject: "Science", school: "Lincoln Middle School" },
    { id: 3, name: "Mr. Johnson", subject: "English", school: "Lincoln High School" },
    { id: 4, name: "Ms. Davis", subject: "History", school: "Lincoln Middle School" }
  ];

  const [conversations, setConversations] = useState([]);

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
    alert(`Profile Updated Successfully!\n\nName: ${profileData.firstName} ${profileData.lastName}\nEmail: ${profileData.email}\nPhone: ${profileData.phone}\nOccupation: ${profileData.occupation}\nParent ID: ${profileData.parentId}\nProfile Picture: ${profileData.profilePicture ? 'Updated' : 'Not uploaded'}\n\nThis is a frontend demo - no actual changes were saved.`);
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
              <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold overflow-hidden">
                {profileData.profilePicture ? (
                  <img src={profileData.profilePicture} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  `${profileData.firstName[0]}${profileData.lastName[0]}`
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1 cursor-pointer hover:bg-purple-700">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                value={profileData.lastName}
                onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={profileData.email}
              onChange={(e) => setProfileData({...profileData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={profileData.phone}
              onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Occupation</label>
              <input
                type="text"
                value={profileData.occupation}
                onChange={(e) => setProfileData({...profileData, occupation: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Parent ID</label>
              <input
                type="text"
                value={profileData.parentId}
                onChange={(e) => setProfileData({...profileData, parentId: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
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

  const handleScheduleMeeting = () => {
    if (selectedTeacherForMeeting && meetingDate && meetingTime && meetingPurpose) {
      alert(`Meeting scheduled with ${selectedTeacherForMeeting} on ${meetingDate} at ${meetingTime}\nPurpose: ${meetingPurpose}\n\nThis is a frontend demo - no actual meeting scheduled.`);
      setSelectedTeacherForMeeting("");
      setMeetingDate("");
      setMeetingTime("");
      setMeetingPurpose("");
      setShowMeetingModal(false);
    }
  };

  const renderMeetingModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Schedule Meeting with Teacher</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Teacher</label>
            <select 
              value={selectedTeacherForMeeting} 
              onChange={(e) => setSelectedTeacherForMeeting(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose a teacher...</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.name}>
                  {teacher.name} - {teacher.subject}
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
            disabled={!selectedTeacherForMeeting || !meetingDate || !meetingTime || !meetingPurpose}
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

  const handleSendMessage = () => {
    if (selectedTeacher && messageSubject && messageContent) {
      const newMessage = {
        id: Date.now(),
        teacher: selectedTeacher,
        subject: messageSubject,
        content: messageContent,
        timestamp: new Date().toLocaleString(),
        type: 'sent'
      };
      
      setConversations([...conversations, newMessage]);
      
      // Simulate teacher reply
      setTimeout(() => {
        const reply = {
          id: Date.now() + 1,
          teacher: selectedTeacher,
          subject: `Re: ${messageSubject}`,
          content: `Thank you for your message. I have received your inquiry about "${messageSubject}" and will respond as soon as possible. Best regards, ${selectedTeacher}`,
          timestamp: new Date().toLocaleString(),
          type: 'received'
        };
        setConversations(prev => [...prev, reply]);
      }, 2000);
      
      // Reset form
      setSelectedTeacher("");
      setMessageSubject("");
      setMessageContent("");
      setShowMessageModal(false);
    }
  };

  const renderMessageModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h3 className="text-lg font-semibold mb-4">Send Message to Teacher</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Teacher</label>
            <select 
              value={selectedTeacher} 
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose a teacher...</option>
              {teachers.map((teacher) => (
                <option key={teacher.id} value={teacher.name}>
                  {teacher.name} - {teacher.subject}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
            <input 
              type="text"
              value={messageSubject}
              onChange={(e) => setMessageSubject(e.target.value)}
              placeholder="Enter message subject"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea 
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
              placeholder="Type your message here..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <Button 
            onClick={handleSendMessage}
            disabled={!selectedTeacher || !messageSubject || !messageContent}
            className="flex-1"
          >
            Send Message
          </Button>
          <Button 
            variant="outline" 
            onClick={() => setShowMessageModal(false)}
            className="flex-1"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );

  const renderConversationView = () => {
    if (!currentConversation) return null;
    
    const conversationMessages = conversations.filter(
      msg => msg.teacher === currentConversation.teacher || 
              msg.subject.includes(currentConversation.subject) ||
              currentConversation.subject.includes(msg.subject)
    );
    
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        <div className="bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" onClick={() => setCurrentConversation(null)}>
              ← Back
            </Button>
            <div>
              <h3 className="font-semibold">{currentConversation.teacher}</h3>
              <p className="text-sm text-gray-600">{currentConversation.subject}</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {conversationMessages.map((message) => (
            <div key={message.id} className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.type === 'sent' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${message.type === 'sent' ? 'text-blue-100' : 'text-gray-500'}`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t p-4">
          <div className="flex space-x-2">
            <input 
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button onClick={() => alert('Message sent! (Frontend demo)')}>
              Send
            </Button>
          </div>
        </div>
      </div>
    );
  };

  const renderOverview = () => (
    <div className="space-y-4 sm:space-y-6">
      {/* Children Overview */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">My Children</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {children.map((child) => (
            <Card key={child.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 text-base sm:text-lg">{child.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{child.grade} • {child.school}</p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600 text-xs sm:text-sm">
                    GPA: {child.gpa}
                  </Badge>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-600">Attendance</span>
                    <span className="font-semibold">{child.attendance}%</span>
                  </div>
                  <Progress value={child.attendance} className="h-2" />
                  <div className="flex items-center text-xs sm:text-sm text-gray-600">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Next class: {child.nextClass}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="bg-green-50 border-green-200">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-sm sm:text-lg text-green-800 flex items-center">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-base">Average GPA</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-green-600">3.65</div>
            <p className="text-xs sm:text-sm text-green-600">Across all children</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-sm sm:text-lg text-blue-800 flex items-center">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-base">Attendance Rate</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">93.5%</div>
            <p className="text-xs sm:text-sm text-blue-600">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-orange-50 border-orange-200">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-sm sm:text-lg text-orange-800 flex items-center">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-base">Upcoming Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-orange-600">3</div>
            <p className="text-xs sm:text-sm text-orange-600">This month</p>
          </CardContent>
        </Card>

        <Card className="bg-purple-50 border-purple-200">
          <CardHeader className="pb-2 sm:pb-3">
            <CardTitle className="text-sm sm:text-lg text-purple-800 flex items-center">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-base">Messages</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-purple-600">2</div>
            <p className="text-xs sm:text-sm text-purple-600">Unread</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderGrades = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Grades</h3>
      <div className="space-y-4">
        {recentGrades.map((grade) => (
          <Card key={grade.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">{grade.assignment}</h4>
                  <p className="text-sm text-gray-600">{grade.student} - {grade.subject}</p>
                </div>
                <div className="text-right">
                  <Badge 
                    variant="outline" 
                    className={`${
                      grade.grade.startsWith('A') ? 'text-green-600 border-green-600' :
                      grade.grade.startsWith('B') ? 'text-blue-600 border-blue-600' :
                      'text-orange-600 border-orange-600'
                    }`}
                  >
                    {grade.grade}
                  </Badge>
                  <p className="text-sm text-gray-500 mt-1">{grade.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderEvents = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Events</h3>
      <div className="space-y-4">
        {upcomingEvents.map((event) => (
          <Card key={event.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    event.type === 'meeting' ? 'bg-blue-100' :
                    event.type === 'test' ? 'bg-orange-100' :
                    'bg-green-100'
                  }`}>
                    {
                      event.type === 'meeting' ? <Users className="w-6 h-6 text-blue-600" /> :
                      event.type === 'test' ? <FileText className="w-6 h-6 text-orange-600" /> :
                      <Calendar className="w-6 h-6 text-green-600" />
                    }
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{event.title}</h4>
                    <p className="text-sm text-gray-600">{event.student}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800">{event.date}</p>
                  <Badge variant="outline" className={
                    event.type === 'meeting' ? 'text-blue-600 border-blue-600' :
                    event.type === 'test' ? 'text-orange-600 border-orange-600' :
                    'text-green-600 border-green-600'
                  }>
                    {event.type}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderCommunications = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Messages & Communications</h3>
      <div className="space-y-4">
        {communications.map((comm) => (
          <Card key={comm.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">{comm.subject}</h4>
                  <p className="text-sm text-gray-600">{comm.from}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{comm.date}</p>
                  <Badge variant={comm.type === 'message' ? 'default' : 'secondary'} className={
                    comm.type === 'message' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }>
                    {comm.type}
                  </Badge>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <Button size="sm" variant="outline" onClick={() => {
                  setCurrentConversation({
                    teacher: comm.from,
                    subject: comm.subject
                  });
                }}>
                  View Conversation
                </Button>
                {comm.type === 'message' && (
                  <Button size="sm" variant="outline" onClick={() => setShowMessageModal(true)}>
                    Reply
                  </Button>
                )}
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
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">Parent Dashboard</h1>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold cursor-pointer hover:bg-purple-700"
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
                <p className="text-xs text-gray-500">Parent Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 sm:space-x-8 overflow-x-auto">
            {["overview", "grades", "events", "communications"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 sm:px-1 border-b-2 font-medium text-sm capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? "border-purple-500 text-purple-600"
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
        {activeTab === "grades" && renderGrades()}
        {activeTab === "events" && renderEvents()}
        {activeTab === "communications" && renderCommunications()}

        {/* Quick Actions */}
        <div className="mt-6 sm:mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <Button className="h-16 sm:h-20 flex flex-col items-center justify-center bg-purple-600 hover:bg-purple-700" onClick={() => setShowMessageModal(true)}>
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">Message Teacher</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center" onClick={() => setShowMeetingModal(true)}>
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">Schedule Meeting</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center" onClick={() => {
              alert(`Report Card\n\nEmma Johnson - 10th Grade\n\nAcademic Performance:\n- Mathematics: A- (85%)\n- Biology: B+ (78%)\n- History: A (92%)\n- Chemistry: B (75%)\n\nOverall GPA: 3.7\nAttendance: 95%\n\nThis would show detailed grades, attendance, and teacher comments.`);
            }}>
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">View Report Card</span>
            </Button>
            <Button variant="outline" className="h-16 sm:h-20 flex flex-col items-center justify-center" onClick={() => {
              alert(`School Notifications\n\nRecent Notifications:\n• School Science Fair - February 5th\n• Parent-Teacher Conferences - January 28th\n• Mid-term Exams - January 22nd\n• Winter Break - February 12-16\n\nThis would show all school-wide announcements, events, and important dates.`);
            }}>
              <Bell className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm">School Notifications</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Message Modal */}
      {showMessageModal && renderMessageModal()}
      
      {/* Meeting Modal */}
      {showMeetingModal && renderMeetingModal()}
      
      {/* Profile Modal */}
      {showProfileModal && renderProfileModal()}
      
      {/* Conversation View */}
      {currentConversation && renderConversationView()}
    </div>
  );
};

export default ParentDashboard;
