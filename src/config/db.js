const common = {
  dbMongoUrl: 'mongodb://root:rootpassword123@ds145356.mlab.com:45356',
  dbMongoName: 'heroku_vzk3sf9h',
  dbMongoUri: 'mongodb://root:rootpassword123@ds145356.mlab.com:45356/heroku_vzk3sf9h',

  dbPostgresUsername: 'uedoajrdoowuzt',
  dbPostgresPassword: 'b0392e59e8e25102b9fdc25d94ced9e438bf2a140a61797e8d3b80b03e2fae05',
  dbPostgresDatabase: 'dbusihubg613d4',
  dbPostgresHost: 'ec2-23-21-129-125.compute-1.amazonaws.com',
  dbPostgresPort: 5432,
  dbPostgresSSLPort: 5572,
  dbPostgresDialect: 'postgres',
  dbPostgresURI: 'postgres://dqvbrxrokancky:f98c260c9c57539aae4fc6013ec2eaf3a4afdbaeb730b24940e2ddd928291593@ec2-50-19-114-27.compute-1.amazonaws.com:5432/dfr8v2qroholub',

  dbPostgresOptions: {
    define: {
      underscored: true
    },
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: true
    },
    logging: true
  }
};

module.exports = {
  development: {
    ...common
  },
  test: {
    ...common
  },
  production: {
    ...common
  }
};
