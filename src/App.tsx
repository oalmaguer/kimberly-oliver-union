import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InvitesList from "./pages/InvitesList";
import GuestGallery from "./pages/GuestGallery";
import { ColorProvider } from "./contexts/ColorContext";
import ColorPalettePicker from "./components/ColorPalettePicker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ColorProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* <ColorPalettePicker /> */}

        <HashRouter>

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/hidden/invites" element={<InvitesList />} />
            <Route path="/guests_gallery" element={<GuestGallery />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>

        </HashRouter>

      </TooltipProvider>
    </ColorProvider>
  </QueryClientProvider>
);

export default App;
