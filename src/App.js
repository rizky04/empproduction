import './App.css';
import Footer from './component/Footer';
import Intro from './component/Intro';
import Navigation from './component/Navigation';
import PhotoGroup from './component/PhotoGroup';
import PhotoModels from './component/PhotoModels';
import PhotoWedding from './component/PhotoWedding';
import Trending from './component/Trending';
import PhotoCouple from './component/PhotoCouple';
import './style/Landingpage.css';

function App() {
  return (
    <div>
      <div className='myBG'>
        <Navigation />
        <Intro />
      </div>

      <div className='trending'>
        <Trending />
      </div>

      <div className='photoModel'>
        <PhotoModels />
      </div>

      <div className='photoWedding'>
        <PhotoWedding />
      </div>

      <div className='photoGroup'>
        <PhotoGroup />
      </div>
      <div className='photoGroup'>
        <PhotoCouple />
      </div>

      <div className='Footer'>
        <Footer />
      </div>



    </div>
  );
}

export default App;
