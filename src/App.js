import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/register";
// import Bookings from "./pages/bookings"; // Uncomment when Bookings component is available

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					{/* <Route path="/bookings" element={<Bookings />} />  */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
