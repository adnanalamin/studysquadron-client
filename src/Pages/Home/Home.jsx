import Banner from "../../Components/Banner/Banner";
import Faq from "../../Components/Faq/Faq";
import Feature from "../../Layout/Frature/Feature";
import PhotoGallery from "../../Layout/PhotoGallery/PhotoGallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Feature></Feature>
      <Faq></Faq>
      <PhotoGallery></PhotoGallery>
    </div>
  );
};

export default Home;
