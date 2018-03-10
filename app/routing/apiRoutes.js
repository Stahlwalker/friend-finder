
var friendsData = require("../data/friends.js");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log(req.body)
    if (friendsData.length < 25) {
      friendsData.push(req.body);
    }
    var match = [0];
    var bestMatch = 1000;
    var newFreindScore = newFriend['scores[]'];
    console.log(newFreindScore);

    for ( var i = 0; i < friendsData.length -1; i++){
      var compScore = friendsData[i]['scores[]'];
      var currentDiff = 0;

      for (var j = 0; j < compScore.length; j++) {
        currentDiff += Math.abs(compScore[j] - newFreindScore[j]);
      }
      console.log(currentDiff);

      if(currentDiff < bestMatch) {
        bestMatch = currentDiff;
        match = friendsData[i];
      }
    }

    res.json(match);
  });
}
