import './App.css';
import Header from './Components/Header';
import FirstMain from './Components/FirstMain';
import SecondMain from './Components/SecondMain';
import Footer from './Components/Footer';
import Help from './Components/Help';
import Biography from './Components/Biography';
import ThirdMain from './Components/ThirdMain';

  function App() {
   return (
    <div className="App">
      <Header />
      <FirstMain />
      <SecondMain />
      <ThirdMain />
      <Biography />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
