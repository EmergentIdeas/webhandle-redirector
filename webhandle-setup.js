let webhandle = require('webhandle')

let setup = function(configFilePath) {
	configFilePath = configFilePath || 'config/redirects.json'
	webhandle.routers.postPages.use(require('./redirector')(
		JSON.parse(webhandle.sinks.project.readSync(configFilePath))
	))

}

module.exports = setup