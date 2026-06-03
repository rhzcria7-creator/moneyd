import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingView from './views/LandingView';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardView from './views/DashboardView';
import InventoryView from './views/InventoryView';
import LeadsView from './views/LeadsView';
import ContractsView from './views/ContractsView';
import MarketingView from './views/MarketingView';
import SettingsView from './views/SettingsView';
import AccountView from './views/AccountView';
import FeaturesView from './views/FeaturesView';
import RoiView from './views/RoiView';
import PricingView from './views/PricingView';
import NotFoundView from './views/NotFoundView';
import LoadingScreen from './components/LoadingScreen';
import ScheduleView from './views/ScheduleView';
import ApiDocsView from './views/ApiDocsView';
import LeadDetailView from './views/LeadDetailView';
import PropertyDetailView from './views/PropertyDetailView';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial system load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Routes>
      <Route path="/" element={<LandingView />} />
      <Route path="/features" element={<FeaturesView />} />
      <Route path="/roi" element={<RoiView />} />
      <Route path="/pricing" element={<PricingView />} />
      <Route path="/schedule" element={<ScheduleView />} />
      <Route path="/docs/api" element={<ApiDocsView />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/inventory" element={<InventoryView />} />
        <Route path="/inventory/:id" element={<PropertyDetailView />} />
        <Route path="/leads" element={<LeadsView />} />
        <Route path="/leads/:id" element={<LeadDetailView />} />
        <Route path="/contracts" element={<ContractsView />} />
        <Route path="/marketing" element={<MarketingView />} />
        <Route path="/settings" element={<SettingsView />} />
        <Route path="/account" element={<AccountView />} />
      </Route>
      {/* Fallback 404 Route */}
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

