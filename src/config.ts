const dev = {
	api: {
		URL: "https://api.mezhinsky.com"
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