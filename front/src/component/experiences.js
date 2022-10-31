import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styleSlide from "./../styles/CarouselCustom.module.scss";

function About () {
	return <section className='wrapper'>
		<h2>Mes précédentes missions</h2>
		<Carousel className={styleSlide.container}
			dynamicHeight 
			centerMode={false}
			emulateTouch
			swipeable
			stopOnHover
			showStatus={false}
			>
			<div className={styleSlide.slide} >
				<img className={styleSlide.img} src="assets/aw.png" alt="" />
				<p className={styleSlide.description_ctn} >Freelance</p>
			</div>
			<div className={styleSlide.slide}>
				<img className={styleSlide.img} src="assets/bureau.jpg" alt="" />
				<p className={styleSlide.description_ctn} >Au bureau</p>
			</div>

		</Carousel>

	</section>
}
export default About;
