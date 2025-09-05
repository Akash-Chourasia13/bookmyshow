import { Form } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { ShowLoading } from "../../redux/loaderSlice";
import { addMovie } from "../../calls/movies";
import { set } from "mongoose";

function MovieForm({
	isModalOpen,
	setIsModalOpen,
	formType,
	selectedMovie,
	setSelectedMovie,
	getData,
}) {
	const dispatch = useDispatch();
	const onFinish = async (value) => {
		console.log("Form values:", value);
		try {
			dispatch(ShowLoading());
			let response = null;
			if (formType === "add") {
				response = await addMovie(value);
			} else {
				response = await updateMovie({ ...value, movieId: selectedMovie._id });
			}
			if (response.success) {
				setIsModalOpen(false);
				message.success(response.message);
				getData();
			} else {
				message.error(response.message);
			}
			setSelectedMovie(null);
			dispatch(HideLoading());
		} catch (error) {
			console.log(error);
		}
	};

	const handleCancel = () => {
		setIsModalOpen(false);
		setSelectedMovie(null);
	};

	return (
		<Modal
			centered
			title={formType === "add" ? "Add Movie" : "Edit Movie"}
			open={isModalOpen}
			onCancel={handleCancel}
			width={800}
			footer={null}
		>
			<Form layout="Vertical" initialValues={selectedMovie} onFinish={onFinish}>
				<Row gutter={{ xs: 6, sm: 10, md: 12, lg: 16 }}>
					<Col span={24}>
						<Form.Item
							label="Movie Name"
							name="name"
							rules={[{ required: true, message: "Please input movie name!" }]}
						>
							<Input placeholder="Enter the movie name here" />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item
							label="Description"
							name="description"
							rules={[
								{ required: true, message: "Please input movie description!" },
							]}
						>
							<Input.TextArea
								rows={5}
								placeholder="Enter the movie description here"
							/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							label="Duration (in minutes)"
							name="duration"
							rules={[
								{ required: true, message: "Please input movie duration!" },
							]}
						>
							<Input
								type="number"
								placeholder="Enter the movie duration here"
							/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							label="Genre"
							name="genre"
							rules={[{ required: true, message: "Please input movie genre!" }]}
						>
							<Input placeholder="Enter the movie genre here" />
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							label="Language"
							name="language"
							rules={[
								{ required: true, message: "Please input movie language!" },
							]}
						>
							<Input
								placeholder="Enter the movie language here"
								options={[
									{ value: "English", label: "English" },
									{ value: "Hindi", label: "Hindi" },
									{ value: "Punjabi", label: "Punjabi" },
									{ value: "Telugu", label: "Telugu" },
									{ value: "Bengali", label: "Bengali" },
									{ value: "German", label: "German" },
								]}
							/>
						</Form.Item>
					</Col>
					<Col span={12}>
						<Form.Item
							label="Release Date"
							name="releaseDate"
							rules={[
								{ required: true, message: "Please input movie release date!" },
							]}
						>
							<DatePicker format="DD-MM-YYYY" />
						</Form.Item>
					</Col>
					<Col span={24}>
						<Form.Item
							label="Poster URL"
							name="poster"
							rules={[{ required: true, message: "Please input poster URL!" }]}
						>
							<Input placeholder="Enter the poster URL here" />
						</Form.Item>
					</Col>
				</Row>
			</Form>
		</Modal>
	);
}

export default MovieForm;
