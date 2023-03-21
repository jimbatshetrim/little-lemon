import React from 'react';
import greekSalad from './../assets/greek salad.jpg';
import deliveryIcon from './../assets/Dish icon.svg'

function Highlights() {
	return (
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
	);
}

export default Highlights;