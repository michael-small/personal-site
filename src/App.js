import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Showcase from './components/Showcase/Showcase';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Route exact path='/' component={Home} />
				<Route exact path='/showcase' component={Showcase} />
			</BrowserRouter>
		</div>
	);
}

export default App;
