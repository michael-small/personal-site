import './App.scss';
import Home from './components/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Showcase from './components/Showcase/Showcase';
import RecruiterView from './components/Showcase/RecruiterView/RecruiterView';
import Navigation from './components/Navigation/Navigation';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import CompWorkshop from './components/utils/CompWorkshop';

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Navigation />
				<Route exact path='/' component={Home} />
				<Route exact path='/showcase' component={Showcase} />
				<Route
					exact
					path='/showcase/recruiter'
					component={RecruiterView}
				/>
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/projects' component={Projects} />
				<Route path='/componentWorkshop' component={CompWorkshop} />
			</BrowserRouter>
		</div>
	);
}

export default App;
