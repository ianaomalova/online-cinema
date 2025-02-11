/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	swcMinify: true,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
	},

	asyncRewrites() {
		return [
			{
				source: '/api/:path*/',
				destination: 'http://localhost:4200/api/:path*/',
			},
			{
				source: '/uploads/:path*/',
				destination: 'http://localhost:4200/uploads/:path*/',
			},
		]
	},
}

module.exports = nextConfig
