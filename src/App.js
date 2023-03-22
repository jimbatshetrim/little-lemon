import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/layout';
import Homepage from './components/homepage';
import Reservations from './components/reservations';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="/reservations" element={<Reservations/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
