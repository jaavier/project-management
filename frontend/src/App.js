import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './components/Container';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateProject from './pages/Projects/CreateProject';
import ProjectsList from './pages/Projects/ProjectsList';
import Profile from './pages/Settings/Profile';
import Notifications from './pages/Settings/Notifications';
import ViewProject from './pages/Projects/ViewProject';

function App() {
	return (
		<div className="">
			<Container>
				<BrowserRouter>
					<Navbar />
					<div className="py-4 rounded my-5 shadow-blue-100 shadow-3xl">
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/projects" element={<ProjectsList />} />
							<Route path="/projects/:projectId" element={<ViewProject />} />
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
