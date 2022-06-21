import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Navigation }  from './navigation';

const App = () =>  (
  <div className="App">
    <Header />
    <Navigation />
    <Footer />
  </div>
);

export { App };
