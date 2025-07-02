var config = {
		database: {
				host:     process.env.DB_HOST     || 'localhost',
				user:     process.env.DB_USER     || 'root',
				password: process.env.DB_PASSWORD || 'root',
				port:     process.env.DB_PORT     || 3306,
				db:       process.env.DB_NAME     || 'test'
		},
		server: {
		host:     process.env.APP_HOST    || '127.0.0.1',
		port:     process.env.APP_PORT    || '3000'
		}
}

module.exports = config
