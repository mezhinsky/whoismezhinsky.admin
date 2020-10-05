const dev = {
	api: {
		URL: "http://localhost:3001"
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