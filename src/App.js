import './App.scss';

import { useState } from "react";
import AppAppBar from './AppAppBar';
import Title from './Title';
import FAQ from './FAQ';
import Example from './Example';
import Footer from './Footer';
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const closeModal = () => {
    setEditModalIsOpen(false);
  };

  return (
    <div>
      <div id="top" className='main'>
        <AppAppBar />
        <p className='title'>Title!</p>
      </div>
      <div className='main__example'>
      <Title />
      </div>
      <Example />
      <FAQ />
      <Footer />
      <div className='main__button'>
        <button className='button-85'
        onClick={() => {
          setEditModalIsOpen(true);
        }}>お問い合わせ</button>
      </div>
      <Modal
        isOpen={editModalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}>
          <div className='main__modal'>
            お問い合わせありがとうございます！！！
          </div>
      </Modal>
    </div>
  );
}

export default App;