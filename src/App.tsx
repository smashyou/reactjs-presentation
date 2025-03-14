import "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PresentationPage from "./pages/PresentationPage";
import VirtualDOMDemo from "./components/VirtualDOMDemo";
import LifecycleDemo from "./components/LifecycleDemo";
import SPADemo from "./components/SPADemo";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/slides/:slideId" element={<PresentationPage />} />
          <Route path="/demo/virtual-dom" element={<VirtualDOMDemo />} />
          <Route path="/demo/lifecycle" element={<LifecycleDemo />} />
          <Route path="/demo/spa" element={<SPADemo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
