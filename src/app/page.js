import FeatureTile from "@/components/FeatureTile";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";

export default function Home() {
  return (
    <div data-theme="light">
      <HomeBanner />
      <FeatureTile />
      <Footer />
    </div>
  );
}
