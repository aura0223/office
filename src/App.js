import './App.scss';

import AppAppBar from './AppAppBar';
import Hero from './Hero';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Footer from './Footer';


function App() {
  return (
    <div>
      <AppAppBar />
      <Hero />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;