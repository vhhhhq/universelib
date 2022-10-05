import './App.css';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Catalog from './pages/Catalog/Catalog';
import Search from './pages/Search/Search';
import Forum from './pages/Forum/Forum';
import FAQ from './pages/FAQ/FAQ';
import Footer from './components/Footer/Footer'

import 'antd/dist/antd.css';
import HomeManga from './container/HomeManga/HomeManga';


function App() {
  return (
    <div className="body">
      <Header/>
      <Routes>
        <Route path='/' element={<HomeManga/>} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/search" element={<Search />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
