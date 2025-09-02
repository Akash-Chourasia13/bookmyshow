import React, { useState, useEffect } from "react";
import Table from "antd/lib/table";
import { getAllMovies } from "../../calls/movies";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/loaderSlice";
import moment from "moment";
import EditOutlined from "@ant-design/icons/lib/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/lib/icons/DeleteOutlined";
import MovieForm from "./MovieForm";
import DeleteMovieModal from "./DeleteMovieModal";
import { Button } from "antd";

function MovieList() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [formType, setFormType] = useState("add");
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState(null);
	const dispatch = useDispatch();

	// get all movies from the server
	useEffect(() => {
		const getData = async () => {
			dispatch(ShowLoading());
			const resp = await getAllMovies();
			const allMovies = resp.data;
			setMovies(
				allMovies.map((item) => {
					return { ...item, key: `movie${item._id}` };
				})
			);
			dispatch(HideLoading());
		};
		getData();
	}, []);

	const tableHeadings = [
		{
			title: "Poster",
			dataIndex: "poster",
			render: (text, data) => (
				<img
					src={data.poster}
					alt="movie poster"
					width="75"
					height="115"
					style={{ objectFit: "cover" }}
				/>
			),
		},
		{
			title: "Movie Name",
			dataIndex: "name",
		},
		{
			title: "Description",
			dataIndex: "description",
		},
		{
			title: "Duration",
			dataIndex: "duration",
			render: (text) => <span>{text} mins</span>,
		},
		{
			title: "Genre",
			dataIndex: "genre",
		},
		{
			title: "Language",
			dataIndex: "language",
		},
		{
			title: "Release Date",
			dataIndex: "releaseDate",
			render: (text, data) => {
				return moment(data.releaseDate).format("MM-DD-YYYY");
			},
		},
		{
			title: "Action",
			render: (text, data) => {
				return (
					<div>
						<Button
							onClick={() => {
								setIsModalOpen(true);
								setSelectedMovie(data);
								setFormType("edit");
							}}
						>
							<EditOutlined />
						</Button>
						<Button
							onClick={() => {
								setIsDeleteModalOpen(true);
								setSelectedMovie(data);
							}}
						>
							<DeleteOutlined />
						</Button>
					</div>
				);
			},
		},
	];
	return (
		<>
			<div>
				<Button
					onClick={() => {
						setIsModalOpen(true);
						setFormType("add");
					}}
				>
					Add Movie
				</Button>
			</div>
			<div>
				<Table dataSource={movies} columns={tableHeadings}></Table>
				{isModalOpen && (
					<MovieForm
						isModalOpen={isModalOpen}
						setIsModalOpen={setIsModalOpen}
						selectedMovie={selectedMovie}
						formType={formType}
						setSelectedMovie={setSelectedMovie}
					/>
				)}
				{isDeleteModalOpen && (
					<DeleteMovieModal
						isDeleteModalOpen={isDeleteModalOpen}
						setIsDeleteModalOpen={setIsDeleteModalOpen}
						selectedMovie={selectedMovie}
						setSelectedMovie={setSelectedMovie}
					/>
				)}
			</div>
		</>
	);
}

export default MovieList;
