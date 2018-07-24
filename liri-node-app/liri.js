var twitter = require('twitter');
var spotify = require('node-spotify-api')
var request = require('request');

//twitter keys
var keys = require('./keys.js');
var twitterkeys = keys.twitterKeys;

//command line
var cmdArgs = process.argv;
var liriCommand = cmdArgs[2];

//allows spaces
var liriArg = '';
for (var i = 3; i < cmdArgs.length; i++) {
    liriArg += cmdArgs[i] + ' ';
}

function getTweets() {

    var client = new twitter(twitterkeys);

    //screen name
    var params = {screen_name: "wjcoop27", count: 10};

    //Get last 10 tweets
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            var errorMess = 'This did not work. ERROR: ' + error;
            
            fs.appendFile('./log.txt', errorMess, (err) => {
                if (err) throw err;
            console.log(errorMess);
        });
        return;
        } else {
            var outputTweets = '-------\n' + 'Your Tweets:\n' + '-------\n\n';

            for (var i = 0; i<tweets.length; i++) {
                outputTweets += 
                'Tweeted on: ' + tweets[i].created_at + '\n' + 
                'Content: ' + tweets[i].text + '\n' +
                '-------\n'
            }

            //Append tweets to log file
            fs.appendFile('./log.txt', outputTweets + '\n', (err) => {
                if (err) throw err;
                console.log(outputTweets);
            });
        }
        
    });

}

// function getSpotify() {
//     var spotify = new Spotify({
//         id: '1ec1606d0ccc46c99bf8138ba507074c',
//         secret: '5c36fb68a30f47fab907e79f2e2eeb2b',
//       });
       
//       spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
//         if (err) {
//           return console.log('Error occurred: ' + err);
//         }
       
//       console.log(data); 
//       });

// }
// getSpotify();


var fs = require('fs');

function takeCommands() {
	// Append the command to the log file
	fs.appendFile('./log.txt', 'User Command: node liri.js do-what-it-says\n\n', (err) => {
		if (err) throw err;
	});

	// Read in the file containing the command
	fs.readFile('./random.txt', 'utf8', function (error, data) {
		if (error) {
			console.log('ERROR: Reading random.txt -- ' + error);
			return;
		} else {
			// Split out the command name and the parameter name
			var cmdString = data.split(',');
			var command = cmdString[0].trim();
			var param = cmdString[1].trim();

			switch(command) {
				case 'tweets':
					getTweets(); 
					break;

				case 'spotify':
					getSpotify(param);
					break;

				case 'movie-this':
					retrieveOBDBInfo(param);
					break;
			}
		}
	});
}


if (liriCommand === 'tweets') {
    getTweets();

} else if (liriCommand === 'spotify') {
    getSpotify();

}else if (liriCommand ===  `Take Commands`) {
	takeCommands();

} else {
		// If the user types in a command that LIRI does not recognize, output the Usage menu 
		// which lists the available commands.
		output = 'LIRI: Please input one of the following options:\n' + 
                   '    node liri.js tweets\n'
console.log(output);
}

