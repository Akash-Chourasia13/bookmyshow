import React from "react";
import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { RegisterUser } from "../../calls/users";

function Register() {
	const onFinish = async (values) => {
		try {
			const response = await RegisterUser(values);
			console.log("Registration successful:", response);
			if (response.success) {
				// Redirect to login page or show success message
				// window.location.href = "/login";
				message.success("Registration successful! Please login.");
			} else {
				message.error(
					response.message || "Registration failed. Please try again."
				);
			}
		} catch (error) {
			message.error("Registration failed:", error);
		}
	};
	return (
		<>
			<header className="App-header">
				<main className="main-area" mw-500 text-center px-3>
					<section className="left-section">
						<h1>Register to BookMyShow</h1>
					</section>
					<section className="right-section">
						<Form
							layout="vertical"
							onFinish={onFinish}
							className="register-form"
						>
							<Form.Item
								label="Name"
								htmlFor="name"
								name="name"
								className="d-block"
								rules={[{ required: true, message: "Name is required" }]}
							>
								<Input id="name" type="text" placeholder="Enter your name" />
							</Form.Item>
							<Form.Item
								label="Email"
								htmlFor="email"
								name="email"
								className="d-block"
								rules={[{ required: true, message: "Email is required" }]}
							>
								<Input id="email" type="email" placeholder="Enter your email" />
							</Form.Item>
							<Form.Item
								label="Password"
								htmlFor="password"
								name="password"
								className="d-block"
								rules={[{ required: true, message: "Password is required" }]}
							>
								<Input
									id="password"
									type="password"
									placeholder="Enter your Password"
								/>
							</Form.Item>
							<Form.Item className="d-block">
								<Button
									type="primary"
									block
									htmlType="submit"
									style={{ fontSize: "1.2rem", fontWeight: 600 }}
								>
									Register
								</Button>
							</Form.Item>
						</Form>
						<div>
							<p>
								Already a User ? <Link to="/login">Login Now</Link>
							</p>
						</div>
					</section>
				</main>
			</header>
		</>
	);
}

export default Register;
