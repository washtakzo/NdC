import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AdvantagesSection from "../components/Index/AdvantagesSection";
import CategoriesSection from "../components/Index/CategoriesSection";
import InstagramSection from "../components/Index/InstagramSection";
import PopularProductsSection from "../components/Index/PopularProductsSection";
import PresentationSection from "../components/Index/PresentationSection";
import PunchySection from "../components/Index/PunchySection";
import QuestionsSection from "../components/Index/QuestionsSection";
import Main from "../components/Main";
import AnimatedBackground from "../components/UI/AnimatedBackground";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Main className="sm:pt-52">
        <Header />
        <PresentationSection />
        <PunchySection />
        <CategoriesSection />
        <PopularProductsSection />
        <AdvantagesSection />
        <QuestionsSection />
        <InstagramSection />
      </Main>
      <Footer />
      <Copyright />
    </>
  );
}
