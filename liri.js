    var fs = require('fs');  
    var Keys = require("./keys.js");
    var request = require('request');
    var Twitter = require('twitter');
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(Keys.spotify); 
    var client = new Twitter(Keys.twitter);
    var commandLine = process.argv; 
    var liriSay = commandLine[2];
    var liriArgv = commandLine[3];
    

    for (var i = 3 ; i < commandLine.length; i++) {

    if (i > 3 && i < commandLine.length) {
  
      arg = arg + "+" + commandLine[i];
        }; 
    };

function searchSpotify(){ 

    spotify.search({ type: 'track', query: liriArgv }, function(err, data) {
     
if (err) {
    return console.log('Error occurred: ' + err);
    }  

    var songInfo = data.tracks.items;

    for (var i = 0 ; i < songInfo.length; i++) {
        if (i > 3 && i < songInfo.length) {
        }  

    console.log ("\nSong Information" + '------------------------\n' + 
    "\nSong Name: " + songInfo[i].name + 
    "\nArtist: " + songInfo[i].artists[0].name + 
    "\nAlbum: " + songInfo[i].album.name + 
    "\nPreview Song: " + songInfo[i].preview_url )
    };
});
};

function getTweets(){
  
    var params = {screen_name: 'TSmith62628065'};

    client.get('statuses/user_timeline', params, function(error, tweets, response){

    for (var i = 0; i < tweets.length; i++) {
        
        console.log("\n" + "@TSmith62628065- " + 
        tweets[i].text + 
        "\n" + tweets[i].created_at); 
     
    };   
    });
};

function getMovie(search){

    if (liriArgv === "none"){
        search = "Mr+nobody"

    } else {
        search = liriArgv
    }

queryUrl = "http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrl);

    request(queryUrl, function(error, response, body) {
 
if (!error && response.statusCode === 200) {

    console.log("\nMovie Title: " +  JSON.parse(body).Title + 
    "\nRelease Year: " + JSON.parse(body).Year + 
    "\nIMBD Rating: " + JSON.parse(body).imdbRating + 
    "\nRotten Tomatoes Rating: " +  JSON.parse(body).Ratings[1].Value + 
    "\nCountry Produced: " + JSON.parse(body).Country +
    "\nLanguage: " + JSON.parse(body).Language +
    "\nPlot: " + JSON.parse(body).Plot +
    "\nActors: "+ JSON.parse(body).Actors)
};
});
};

if (liriSay === 'my-tweets') {
    getTweets(); 

} 
else if (liriSay === 'spotify-this-song') {
    searchSpotify();

}  
else if (liriSay === 'movie-this'){
    getMovie();

}
