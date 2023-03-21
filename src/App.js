import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Highlights from './components/highlights';
import CompanyInfo from './components/companyInfo';
import Footer from './components/footer';

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <Hero/>
                <Highlights/>
                <CompanyInfo/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
