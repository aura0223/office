import './App.scss';

import AppAppBar from './AppAppBar';
import Title from './Title';
import FAQ from './FAQ';
import Example from './Example';
import Footer from './Footer';


function App() {
  return (
    <div>
      <div id="top" className='main'>
        <AppAppBar />
        <p className='title'>Night's Guardians!</p>
      </div>
      <div className='main__example'>
      <Title />
      </div>
      <Example />
      <FAQ />
      <Footer />
      <div className='main__button'>
        <button className='button-85'>お問い合わせ</button>
      </div>
    </div>
  );
}

export default App;