import { useState, useEffect } from "react";
import { GetCurrentUser } from "../../calls/users";

const Home = () => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		const getUser = async () => {
			let resp = await GetCurrentUser();
			console.log(resp);
		};
		getUser();
	}, []);

	return <div>This is my home page.</div>;
};

export default Home;
