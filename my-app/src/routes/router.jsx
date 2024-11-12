import { createHashRouter } from "react-router-dom";
import Root from './root.jsx'
import LandingPage from '../components/LandingPage.jsx'
import Cirrus from '../components/CirrusPage.jsx'
import Web from '../components/Web360Page.jsx'


const router = createHashRouter([
	{
		// Om URL i adressfältet matchar denna route '/'
		path: "/",

		// Så ska Root-komponenten renderas
		element: <Root />,

		// Lägg till ett element om du vill hantera felaktiga länkar
		// errorElement: <ErrorPage />,

		// Inuti Root ska vi klistra in den komponent vars route matchar URL bäst
		children: [
			{
                path: '/',
                element: <LandingPage />
            },
			{
				path: '/CirrusPage',
				element: <CirrusPage />
			},{
				path: '/Web360',
				element: <Web360 />
			}, {
                path: '/annalering',
                element: <AnnaLeringPage />
            }
			
		]
	},
	
]);