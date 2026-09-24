import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Features from "./components/Features/Features";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Security from "./components/Security/Security";
import FAQ from "./components/FAQ/FAQ";
import DownloadApp from "./components/DownloadApp/DownloadApp";

import PaymentEcosystem from "./components/PaymentEcosystem/PaymentEcosystem";
import SmartPaymentFlow from "./components/SmartPaymentFlow/SmartPaymentFlow";
import TransactionIntelligence from "./components/TransactionIntelligence/TransactionIntelligence";
import NotificationTimeline from "./components/NotificationTimeline/NotificationTimeline";

import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./pages/Terms/Terms";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        <PaymentEcosystem />

        <SmartPaymentFlow />

        <TransactionIntelligence />

        <NotificationTimeline />

        <Features />

        <HowItWorks />

        <Security />

        <FAQ />

        <DownloadApp />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/privacy-policy"
          element={
            <>
              <Navbar />
              <PrivacyPolicy />
              <Footer />
            </>
          }
        />

        <Route
          path="/terms-and-conditions"
          element={
            <>
              <Navbar />
              <Terms />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
