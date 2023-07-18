import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/App.css'

import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {
    const isMobile = useMediaQuery({ maxWidth: 991 });

	useEffect(() => {
		const hideURLParams = () => {
		  window.history.pushState({}, document.title, window.location.pathname);
		};
	  
		hideURLParams();
	  
		// Clean up the effect
		return () => {
		  window.onpopstate = null;
		};
	  }, []);
	  

	console.log(isMobile);

	return (
		<div>
			<NavBar isMobile={isMobile} />
			<Hero isMobile={isMobile} />
			<About isMobile={isMobile} />
			<Portfolio isMobile={isMobile} />
			<Contact isMobile={isMobile} />
		</div>
)
}

export default App
