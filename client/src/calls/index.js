import axios from "axios";

// Used to create an axios instance with default headers
export const axiosInstance = axios.create({
	headers: {
		"Content-Type": "application/json",
		// Bearer token are typically send in OAuth2.0 authentication to authorize API requests
		Authorization: `Bearer ${localStorage.getItem("token")}`,
	},
});
