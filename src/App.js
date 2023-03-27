import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/layout';
import Homepage from './components/homepage';
import Reservations from './components/reservations';
import {useReducer} from 'react';

const time = ['6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM'];
const availableTimes ={Monday: time, Tuesday: [...time].splice(1, 4), Wednesday: time,
    Thursday: time, Friday: time,
    Saturday: time,
    Sunday: time
};
const reducer = (state, action) => {
    return availableTimes[action.day]
}

function App() {
    const initialState = time;
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
