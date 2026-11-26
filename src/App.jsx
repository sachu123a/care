import { Route, Routes } from 'react-router-dom';

// Public Pages
import Home from './Pages/Public/Home';
import About from './Pages/Public/About';
import Services from './Pages/Public/Services';
import Contact from './Pages/Public/Contact';
import Login from './Pages/Public/Login';
import Register from './Pages/Public/Register';
import PublicSubscription from './Pages/Public/Subscription';

// Admin Pages
import AdminDashboard from './Pages/Admin/Dashboard';
import UsersManagement from './Pages/Admin/Users';
import FamilyAccounts from './Pages/Admin/FamilyAccounts';
import Caregivers from './Pages/Admin/Caregivers';
import CaregiverApprovals from './Pages/Admin/CaregiverApprovals';
import ElderlyPeople from './Pages/Admin/ElderlyPeople';
import AdminCareSchedules from './Pages/Admin/CareSchedules';

import AdminSubscriptions from './Pages/Admin/Subscriptions';
import SubscriptionPlans from './Pages/Admin/SubscriptionPlans';
import AdminNotifications from './Pages/Admin/Notifications';
import Analytics from './Pages/Admin/Analytics';

// Elderly & Family Shared Pages
import ElderlyDashboard from './Pages/Elderly/Dashboard';
import MyCaregiver from './Pages/Elderly/MyCaregiver';
import FamilyMembers from './Pages/Elderly/FamilyMembers';
import ElderlyCareSchedule from './Pages/Elderly/CareSchedule';
import ElderlyMedicalVisits from './Pages/Elderly/MedicalVisits';
import EmergencyContacts from './Pages/Elderly/EmergencyContacts';
import HealthRecords from './Pages/Elderly/HealthRecords';
import ElderlySubscription from './Pages/Elderly/Subscription';
import AIChatbot from './Pages/Elderly/AIChatbot';
import ElderlyNotifications from './Pages/Elderly/Notifications';
import ElderlyProfile from './Pages/Elderly/Profile';
import FindCareGiver from "./Pages/Elderly/FindCareGiver";

// Caregiver Pages
import CaregiverDashboard from './Pages/Caregiver/Dashboard';
import MyElderlyPeople from './Pages/Caregiver/MyElderlyPeople';
import CaregiverCareSchedule from './Pages/Caregiver/CareSchedule';

import CaregiverNotifications from './Pages/Caregiver/Notifications';
import CaregiverProfile from './Pages/Caregiver/Profile';
import Verification from "./Pages/Caregiver/Verification";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/subscription" element={<PublicSubscription />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<UsersManagement />} />
      <Route path="/admin/family-accounts" element={<FamilyAccounts />} />
      <Route path="/admin/caregivers" element={<Caregivers />} />
      <Route path="/admin/caregiver-approvals" element={<CaregiverApprovals />} />
      <Route path="/admin/elderly-people" element={<ElderlyPeople />} />
      <Route path="/admin/care-schedules" element={<AdminCareSchedules />} />
     
      <Route path="/admin/subscriptions" element={<AdminSubscriptions />} />
      <Route path="/admin/subscription-plans" element={<SubscriptionPlans />} />
      <Route path="/admin/notifications" element={<AdminNotifications />} />
      <Route path="/admin/analytics" element={<Analytics />} />

      {/* Elderly & Family Shared Routes */}
      <Route path="/elderly/dashboard" element={<ElderlyDashboard />} />
      <Route path="/elderly/my-caregiver" element={<MyCaregiver />} />
      <Route path="/elderly/family-members" element={<FamilyMembers />} />
      <Route path="/elderly/care-schedule" element={<ElderlyCareSchedule />} />
      <Route path="/elderly/medical-visits" element={<ElderlyMedicalVisits />} />
      <Route path="/elderly/emergency-contacts" element={<EmergencyContacts />} />
      <Route path="/elderly/health-records" element={<HealthRecords />} />
      <Route path="/elderly/subscription" element={<ElderlySubscription />} />
      <Route path="/elderly/ai-chatbot" element={<AIChatbot />} />
      <Route path="/elderly/notifications" element={<ElderlyNotifications />} />
      <Route path="/elderly/profile" element={<ElderlyProfile />} />
      <Route
  path="/elderly/find-caregivers"
  element={<FindCareGiver />}
/>

      {/* Caregiver Routes */}
      <Route path="/caregiver/dashboard" element={<CaregiverDashboard />} />
      <Route path="/caregiver/my-elderly-people" element={<MyElderlyPeople />} />
      <Route path="/caregiver/care-schedule" element={<CaregiverCareSchedule />} />
      
      <Route path="/caregiver/notifications" element={<CaregiverNotifications />} />
      <Route path="/caregiver/profile" element={<CaregiverProfile />} />
      <Route
  path="/caregiver/verification"
  element={<Verification />}
/>
    </Routes>
  );
}
