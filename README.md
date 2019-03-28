# liri-node-app
a song, concert and move cli for console searches through Spotify and OMDB's API's.

# Directions
* **concert-this 'artist name'** will return next show information about where artist will be performing.
* **spotify-this-song 'song name'** will return information about the selected song
* **movie-this 'movie name'** will return information about seleceted movie
* **do-what-it-says** will run any of the previous cammands that are written in a seperate random.txt file

# gif of how it works
![](liri.gif)

# Node packages and APIs used
* axios
* spotify api
* spotify npm package
* file system
* OMDB api
* Bands in town API

# Download and Configuration instructions
After cloning this repo, you will need to run an npm install to get the dependencies listed in the package.json
After you have done this you must supply your own .env file that contains your own spofity api keys in this format

*# Spotify API keys
*SPOTIFY_ID=your-spotify-id
*SPOTIFY_SECRET=your-spotify-secret
