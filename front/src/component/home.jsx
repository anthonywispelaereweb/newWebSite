import React from 'react';
import styles from "./../styles/Home.module.scss"


function Home() {
	return <div className='wrapper'>
		{/* <h1>Page d'accueil</h1> */}
		<section className={styles.video_ctn} > 
			<video className={styles.video} autoPlay muted>
    			<source src="/aw.mp4" type="video/mp4" />
			</video>
		</section>
	</div>
}

export default Home;
