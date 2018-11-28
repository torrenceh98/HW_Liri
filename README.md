How To Start 

npm i 


Make a Node.js app that depends on user input from the command line
Integrate Twitter, Spotify, and OMDb APIs via the appropriate NPM modules
Use API calls and parse through returned JSON objects, outputting them in a specified format
Read commands and queries from file

Technologies Used

Node.js
JavaScript
Twitter API (via twitter npm module)
Spotify API (via spotify npm module)
OMDb API (via request npm module)

Code Explanation

Authentication keys for Twitter are stored in "keys.js", and we are exporting its contents to the main "liri.js" file
What our app does depends on what the user types, and there are 4 main functions: (1) prints latest tweets, (2) Spotify lookup for a song, (3) OMDb lookup for a movie

Get Started
Here's a quick example of the commands you can use in LIRI.

Get Tweets
Retrieves up to your latest 20 tweets:

node liri.js my-tweets

Get Song Info
Retrieves song information for a track:

node liri.js spotify-this-song "My Girl"

Get Movie Info
Retrieves movie information for a movie:

node liri.js movie-this "Lion King"
