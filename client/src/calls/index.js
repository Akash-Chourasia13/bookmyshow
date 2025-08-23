import axios from "axios";

// Used to create an axios instance with default headers
export const axiosInstance = axios.create({
	headers: {
		"Content-Type": "application/json",
	},
});
