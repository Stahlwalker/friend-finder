// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================
var friendsData = require("../data/friends.js");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------
  app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------
  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    var newFriend = req.body;
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
    console.log(req.body)
    if (friendsData.length < 25) {
      friendsData.push(req.body);
      // res.json(true);
    }
    // finalscore = 1 +2
    // finalscore = parseInt(person1score) + parseInt(person1score)
    // var newFreindSCores = req.body.scores;
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

    // var match = {
    //   name: "",
    //   photo: "",
    //   difference: 0
    // }
    // // function sum(scores){
    //   if (toString.call(scores) !=="[friendsArray]")
    //   return false;
    //     var total = 0;
    //     for(var i=0; i<scores.length; i++)
    //     {
    //       if(isNaN(scores[i])){
    //         total += Number(scores[i]);
    //       }
    //       return total;
    //     }
    // }
    // console.log(sum([]));
    // var totalDifference = {
    // }
// Loop through all the data
// if else statement
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
    res.json(match);
  });
  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!
  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   friendsData = [];
  //   console.log(friendsData);
  // });
}




// // ===============================================================================
// // LOAD DATA
// // We are linking our routes to a series of "data" sources.
// // These data sources hold arrays of information on table-data, waitinglist, etc.
// // ===============================================================================
// var friendsData = require("../data/friends");
// // ===============================================================================
// // ROUTING
// // ===============================================================================
// module.exports = function(app) {
//   // API GET Requests
//   app.get("/api/friends", function(req, res) {
//     res.json(friendsData);
//   });
//   // API POST Requests
//   app.post("/api/friends", function(req, res) {
//     console.log(req.body)
//     var bestMatch = {
// 			name: "",
// 			photo: "",
// 			friendDifference: 1000
// 		};

// 		// Here we take the result of the user's survey POST and parse it.
// 		var userData2 	= req.body;
// 		var userName 	= userData2.name;
// 		var userPhoto 	= userData2.photo;
// 		var userScores 	= userData2.scores;

// 		var totalDifference = 0;

// 		// Loop through all the friend possibilities in the database. 
// 		for  (var i=0; i< friendsData.length; i++) {

// 			console.log(friendsData[i].name);
// 			totalDifference = 0;

// 			// Loop through all the scores of each friend
// 			for (var j=0; j< friendsData[i].scores[j]; j++){

// 				// We calculate the difference between the scores and sum them into the totalDifference
// 				totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

// 				// If the sum of differences is less then the differences of the current "best match"
// 				if (totalDifference <= bestMatch.friendDifference){

// 					// Reset the bestMatch to be the new friend. 
// 					bestMatch.name = friendsData[i].name;
// 					bestMatch.photo = friendsData[i].photo;
// 					bestMatch.friendDifference = totalDifference;
// 				}
// 			}
// 		}

// 		// Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
// 		// the database will always return that the user is the user's best friend).
// 		friendsData.push(userData);

// 		// Return a JSON with the user's bestMatch. This will be used by the HTML in the next page. 
// 		res.json(bestMatch);

// 	});

// }
