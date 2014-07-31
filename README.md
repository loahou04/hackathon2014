
## Usage

### Starting http-server locally
	 npm install

     node bin/http-server

*Now you can visit http://localhost:8080 to view your server*

### Deploy http-server to nodejitsu

     jitsu deploy

*You will now be prompted for a `subdomain` to deploy your application on*

## Available Options:

`-p` Port to listen for connections on (defaults to 8080)

`-a` Address to bind to (defaults to '0.0.0.0')

`-d` Show directory listings (defaults to 'True')

`-i` Display autoIndex (defaults to 'True')

`-e` or `--ext` Default file extension (defaults to 'html')

`-s` or `--silent` In silent mode, log messages aren't logged to the console.

`-h` or `--help` Displays a list of commands and exits.

`-c` Set cache time (in seconds) for cache-control max-age header, e.g. -c10 for 10 seconds. To disable caching, use -c-1.
