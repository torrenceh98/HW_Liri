Make a Node.js app that depends on user input from the command line
Integrate Twitter, Spotify, and OMDb APIs via the appropriate NPM modules
Use API calls and parse through returned JSON objects, outputting them in a specified format
Read commands and queries from file

<strong> How To Start </strong>

npm i 

<strong>Technologies Used </strong>

Node.js

JavaScript

Twitter API (via twitter npm module)

Spotify API (via spotify npm module)

OMDb API (via request npm module)

<strong> Code Explanation </strong> 

Authentication keys for Twitter are stored in "keys.js", and we are exporting its contents to the main "liri.js" file
What our app does depends on what the user types, and there are 3 main functions: (1) prints latest tweets, (2) Spotify lookup for a song, (3) OMDb lookup for a movie

<strong> Get Started </strong> 

Here's a quick example of the commands you can use in LIRI.

<strong> Get Tweets </strong> 

Retrieves up to your latest 20 tweets:

node liri.js my-tweets

<strong> Get Song Info </strong> 

Retrieves song information for a track:

node liri.js spotify-this-song "My Girl"

<strong> Get Movie Info </strong> 

Retrieves movie information for a movie:

node liri.js movie-this "Lion King"
