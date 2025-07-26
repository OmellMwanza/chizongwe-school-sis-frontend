import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { AdminLayout } from "@/components/AdminLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Results } from "./pages/Results";
import { Contact } from "./pages/Contact";
import { Admin } from "./pages/Admin";
import { Login } from "./pages/Login";
import { AdminDashboard } from "./pages/AdminDashboard";
import { ManageStudents } from "./pages/ManageStudents";
import { ManageResults } from "./pages/ManageResults";
import { ManageTermsYears } from "./pages/ManageTermsYears";
import { SendResults } from "./pages/SendResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes with main layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
          <Route path="/results" element={<Layout><Results /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/admin" element={<Layout><Admin /></Layout>} />

          {/* Admin login route (no layout) */}
          <Route path="/admin/login" element={<Login />} />

          {/* Admin routes with admin layout */}
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="students" element={<ManageStudents />} />
            <Route path="results" element={<ManageResults />} />
            <Route path="terms" element={<ManageTermsYears />} />
            <Route path="send-results" element={<SendResults />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
