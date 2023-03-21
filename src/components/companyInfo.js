import React from 'react';
import footerImg1 from './../assets/Mario and Adrian A.jpg'
import footerImg2 from './../assets/Mario and Adrian b.jpg'

function CompanyInfo() {
	return (
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
	);
}

export default CompanyInfo;