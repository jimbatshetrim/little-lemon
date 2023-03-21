import logo from './assets/Logo.svg';
import heroImg from './assets/restauranfood.jpg';
import greekSalad from './assets/greek salad.jpg';
import deliveryIcon from './assets/Dish icon.svg'
import footerImg1 from './assets/Mario and Adrian A.jpg'
import footerImg2 from './assets/Mario and Adrian b.jpg'
import footerLogo from './assets/footer-logo.png'
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
                <section className="company-info">
                    <div className="company-description">
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <p>
                            Little Lemon opened in 1995 by two italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
                        </p>
                    </div>
                    <div className="company-img">
                        <img src={footerImg1} id="overlapImg" alt="company1"/>
                        <img alt="company2"  src={footerImg2}/>
                    </div>
                </section>
            </main>
            <footer>
                <img src={footerLogo} alt="logo"/>
                <div className="navigation">
                    <h3>Navigation</h3>
                        {
                            ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].map(
                                menu => <p>{menu}</p>
                            )
                        }
                </div>
                <div className="contact">
                   <h3>Contact</h3>
                    <p>3241 Maldova Way</p>
                    <p>Chicago Illinois</p>
                    <p>(123)-312-3133</p>
                    <p>info@littlelemon.com</p>
                </div>
                <div className="socials">
                    <h3>Connect</h3>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
