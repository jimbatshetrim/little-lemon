import logo from './assets/Logo.svg';
import heroImg from './assets/restauranfood.jpg';
import greekSalad from './assets/greek salad.jpg';
import deliveryIcon from './assets/Dish icon.svg'
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <img src={logo} alt="logo"/>
                <nav>
                    <ul>
                        {
                            ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map(
                                menu => <li>{menu}</li>
                            )
                        }
                    </ul>
                </nav>
            </header>
            <main>
                <section className="Hero-section">
                    <div className="description">
                        <h1>Little Lemon</h1>
                        <h4>Chicago</h4>
                        <p>We are family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        <button className="reserve-btn br">Reserve a Table</button>
                    </div>
                    <img src={heroImg} className="br hero-img" alt="hero"/>
                </section>
                <section className="Highlight-section">
                    <div className="title">
                        <h2>This weeks specials!</h2>
                        <div>
                            <button>Online Menu</button>
                        </div>
                    </div>
                    <div className="cards">
                        { ['', '', ''].map(() =>
                            <div className="card">
                                <img src={greekSalad} alt="greet salad"/>
                                <div className="card-header"> <span>
                                    Greek Salad
                                </span>
                                    <span className="price">
                                    $12.99
                                </span> </div>
                                <div className="card-description">
                                    The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                                </div>
                                <a href="#">Order a delivery <img alt="delivery icon" src={deliveryIcon}/></a>
                            </div>)
                        }
                    </div>
                </section>
                <section className="testimonials">
                    {
                        ['' , '', '', '', '', '', '', '', ''].map(() =>
                            <div className="testimonials-card">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <sub> - fdjsal</sub>
                            </div>
                        )
                    }
                </section>
            </main>
        </div>
    );
}

export default App;
