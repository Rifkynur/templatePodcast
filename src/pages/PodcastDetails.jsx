import React, { useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import Cta from "../components/cta/Cta";
import Footer from "../components/footer/Footer";
import FeatureDetails from "../components/podcastDetail/featureDetails/FeatureDetails";
import AllEpisodes from "../components/podcastDetail/allEpisodes/AllEpisodes";

const PodcastDetails = () => {
  useEffect(() => {
    document.title = "Podcast Details | Podc of Cast";
  }, []);
  return (
    <section>
      <Navigation />
      <FeatureDetails />
      <AllEpisodes />
      <Cta />
      <Footer />
    </section>
  );
};

export default PodcastDetails;
