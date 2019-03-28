require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var term = process.argv.splice(3).join(" ");
console.log(term);



switch(command){
    case("concert-this"):
        axios.get("https://rest.bandsintown.com/artists/"+term+"/events?app_id=codingbootcamp").then((response) => {
            try{
                //console.log(response)
             console.log("Venue Name: "+response.data[0].venue.name);
             console.log("City: " + response.data[0].venue.city +", "+response.data[0].venue.country);
             console.log("Time: " + response.data[0].datetime);
            }
            catch(err){
                throw err;
            }
        })

    break;
    case("spotify-this-song"):
        spotify.search( {type: 'track', query: term }, (err, data) => {
            try{
                console.log("Artist: "+data.tracks.items[0].artists[0].name);
                console.log("Album:  "+data.tracks.items[0].album.name);
                console.log("Preview Link: " + data.tracks.items[0].external_urls.spotify)
            }

            catch(err){
                throw err
            }
        })

    break;
    case("movie-this"):

    break;
    case("do-what-it-says"):

    break;
    default:
    break;
}