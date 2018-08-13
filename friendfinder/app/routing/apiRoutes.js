//LOAD DATA
var friends = require('../data/friends.js');
var path = require('path');

//ROUTING
module.exports = function(app) {
app.get('/api/friends', function(req, res){
    res.json(friends);
});

app.post('/api/friends', function(req, res){
    var userData = req.body;
// console.log(userData);

    var userResponses = userData.scores;
    // console.log('userResponses = ' + userResponses);

    var matchName = '';
    var matchPhoto = '';
    var totalDifference = 10000;

    for (var i = 0; i < friends.length; i++) {
        // console.log(friends[i]);
        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
            diff += Math.abs(friends[i].scores[i] - userResponses[j]);
        }
        // console.log('diff = ' + diff);

        if (diff < totalDifference) {
            // console.log(diff);
            // console.log(friends[i].name);
            // console.log(friends[i].photo);

            totalDifference = diff;
            matchName = friends[i].name;
            matchPhoto = friends[i].photo;
        }
    }

    friends.push(userData);

    res.json({status: 'OK', matchName: matchName, matchPhoto: matchPhoto});

});
    
};