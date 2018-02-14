Creates Express middleware to handle redirection

# Redirect Definition
```
[
	{
		"from": "/old-url",
		"to": "/new-url",
		"status": 302
	}
]
```

Status is optional (302 is default). Case must match.

# Use

```
router.use(require('webhandle-redirector')(JSON.parse(fs.readFileSync(configFilePath))))
```

or, if you're using a webhandle to set up your express environment,

```
require('webhandle-redirector/webhandle-setup')()
```

The webhandle setup assumes a file in the project directory `config/redirects.json`.