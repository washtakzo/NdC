import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import AdvantagesSection from "../components/Index/AdvantagesSection";
import CategoriesSection from "../components/Index/CategoriesSection";
import InstagramSection from "../components/Index/InstagramSection";
import PopularProductsSection from "../components/Index/PopularProductsSection";
import PresentationSection from "../components/Index/PresentationSection";
import PunchySection from "../components/Index/PunchySection";
import QuestionsSection from "../components/Index/QuestionsSection";
import Main from "../components/Main";
import AnimatedBackground from "../components/UI/AnimatedBackground";

//TODO:Mettre en place une variable isPopular dans la database product et affiché les popular product et dans la page admin pouvoir modifié isPopular
//TODO: demander le num de telephone sur stripe

export default function Home() {
  // return (
  //   <div className="flex justify-center items-center w-[100%] h-[100vh] bg-slate-900 z-20 sticky">
  //     <h1 className="text-red-400 font-semibold text-center">
  //       Site en cours de développement...
  //     </h1>
  //   </div>
  // );

  return (
    <>
      <AnimatedBackground />
      <Main className="sm:pt-52">
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
