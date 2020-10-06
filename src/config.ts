const dev = {
	api: {
		URL: process.env.REACT_APP_API_URL
	},
};

const prod = {
	api: {
		URL: "https://api.mezhinsky.com"
	},
};

const config = process.env.NODE_ENV === 'production'
	? prod
	: dev;

export default {
	// Add common config values here
	SOME: 5000000,
	...config
};