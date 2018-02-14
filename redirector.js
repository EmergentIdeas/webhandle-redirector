let redirector = function(config) {
	
	return function(req, res, next) {
		for(let re of config) {
			if(req.originalUrl == re.from) {
				return res.redirect(re.status || 302, re.to)
			}
		}
		next()
	}
	
}

module.exports = redirector