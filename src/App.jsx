import Header from './Components/Header';
import AboutUs from './Components/About';
import Mission from './Components/Mission';
import DrivingApproach from './Components/DrivingApproach';
import WhyChooseUpride from './Components/WhyChooseUpride';
import GallerySection from './Components/GallerySection';
import Footer from './Components/Footer';
import './App.css'

const App = () => {
  return (
    <div className="font-sans">
      <Header />
      <AboutUs />
      <Mission />
      <DrivingApproach />
      <WhyChooseUpride />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default App;
