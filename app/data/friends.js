
  // ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
      customerName: "Steve Rodgers",
      "photo":"http://images6.fanpop.com/image/photos/37200000/Steve-Rogers-iamkyon-37226016-1086-1171.jpg",
      "scores":[
          "5",
          "1",
          "4",
          "4",
          "5",
          "1",
          "2",
          "5",
          "4",
          "1"
        ]
    }
   
];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  