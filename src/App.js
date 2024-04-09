import './App.scss';

import AppAppBar from './AppAppBar';
import Hero from './Hero';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Footer from './Footer';


function App() {
  return (
    <div>
      <div id="top" className='main'>
        <AppAppBar />
        <p className='title'>Night's Guardians!</p>
      </div>
      <Hero />
      <div className='wrap'>
        <button className="btn-31">
          <span className="text-container">
            <span className="text">contact</span>
          </span>
        </button>
      </div>
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;