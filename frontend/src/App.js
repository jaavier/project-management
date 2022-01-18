import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateProject from './pages/Projects/CreateProject';
import ProjectsList from './pages/Projects/ProjectsList';
import Profile from './pages/Settings/Profile';
import Notifications from './pages/Settings/Notifications';

function App() {
	return (
		<div className="">
			<Container>
				<BrowserRouter>
					<Navbar />
					<div className="p-4 border border-gray-900 rounded my-5">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/projects" element={<ProjectsList />} />
							<Route path="/projects/create" element={<CreateProject />} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/notifications" element={<Notifications />} />
						</Routes>
					</div>
				</BrowserRouter>
			</Container>
		</div>
	);
}

export default App;
