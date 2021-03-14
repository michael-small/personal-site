import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Showcase from './components/Showcase/Showcase';
import RecruiterView from './components/Showcase/RecruiterView/RecruiterView';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/' component={Home} />
				<Route exact path='/showcase' component={Showcase} />
				<Route
					exact
					path='/showcase/recruiter'
					component={RecruiterView}
				/>
			</BrowserRouter>
		</div>
	);
}

export default App;
