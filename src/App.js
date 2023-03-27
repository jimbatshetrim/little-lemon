import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/layout';
import Homepage from './components/homepage';
import Reservations from './components/reservations';
import {useReducer} from 'react';
import {fetchAPI} from './api/bookingApi';

const reducer = (state, action) => {
    return fetchAPI(new Date(action.day))
}

function App() {
    const initialState = [];
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="/reservations" element={<Reservations availableTimes={state} dispatch={dispatch}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
