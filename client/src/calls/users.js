const { axiosInstance } = require("./index");

// register user
export const RegisterUser = async (value) => {
	try {
		const response = await axiosInstance.post("/api/user/register", value);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

// login user
export const LoginUser = async (value) => {
	try {
		const response = await axiosInstance.post("/api/user/login", value);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

// get current user
export const GetCurrentUser = async () => {
	try {
		const response = await axiosInstance.get("/api/user/current");
		return response.data;
	} catch (error) {
		console.log(error);
	}
};
