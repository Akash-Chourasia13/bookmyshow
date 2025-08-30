import React from "react";
import MovieList from "./MovieList";
import TheatresTable from "./TheatresTable";
import { Tabs } from "antd";

function Admin() {
	const tabitems = [
		{ label: "Movies", key: "1", children: <MovieList /> },
		{ label: "Theatres", key: "2", children: <TheatresTable /> },
	];
	return (
		<div>
			<Tabs>
				<h1>Admin Page</h1>
				<Tabs items={tabitems} />
			</Tabs>
		</div>
	);
}

export default Admin;
