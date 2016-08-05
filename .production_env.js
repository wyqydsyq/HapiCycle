var git = require('git-rev-sync');
var path = require('path');

var conf = require(path.join(__dirname, 'package.json')),
	version = conf.version,
	env = 'production',
	hostname = typeof (conf.env[env].hostname != 'undefined') ? conf.env[env].hostname : 'localhost',
	port = typeof (conf.env[env].port != 'undefined') ? conf.env[env].port : 80,
	host = hostname + ':' + port,
	branch = git.branch();

module.exports = {
	BRANCH: branch,
	VERSION: version,
	ENV: env,
	HOSTNAME: hostname,
	PORT: port,
	HOST: host
};