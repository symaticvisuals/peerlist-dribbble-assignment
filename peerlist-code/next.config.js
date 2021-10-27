module.exports = {
	async redirects() {
		return [
			{
				source: "/login2",
				destination: `https://dribbble.com/oauth/authorize?client_id=${process.env.CLIENT_ID}`,
				statusCode: 301,
			},
		];
	},
	images: {
		domains: ["cdn.worldvectorlogo.com", "cdn.dribbble.com"],
	},
};
