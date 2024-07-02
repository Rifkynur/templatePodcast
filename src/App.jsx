import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import PodcastDetails from "./pages/PodcastDetails";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";
import { Routes, Route } from "react-router-dom";
import ScrollToTopButton from "./components/util/ScrollToTopButton";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/podcast-details" element={<PodcastDetails />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-details" element={<BlogDetails />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;
