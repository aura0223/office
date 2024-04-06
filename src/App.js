import './App.scss';

function App() {

  function greeting() {
    alert("準備中だぜ!");
  }

  function noItem() {
    alert("レスポンシブは気が向いたらやる!");
  }

  return (
    <div className="App">
      <header className="header">
        <h1 className="App__title">
          ロナルド吸血鬼退治事務所
        </h1>
        <nav>
          <a href="#">Menu</a>
          <a href="#">Menu</a>
          <a href="#">Menu</a>
          <a href="#">Menu</a>
          <a href="#">Menu</a>
        </nav>
      </header>
      <div className="App__wrap">
        <ul className="App__list">
          <li className="App__box">テキスト</li>
          <li className="App__box">テキスト</li>
          <li className="App__box" onClick={noItem}>テキスト</li>
          <li className="App__rainbow" onClick={greeting}>お問い合わせ</li>
        </ul>
        <div>
          <h2 className="App__access">アクセス</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.863290242576!2d139.6175553!3d35.5076585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185ed02e389b43%3A0xdab81661ffb6a63b!2z5paw5qiq5rWc6aeF!5e0!3m2!1sja!2sjp!4v1712329840464!5m2!1sja!2sjp" width={380} height={230} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
