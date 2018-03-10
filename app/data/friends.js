
  // ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    customerName: "Batman",
    "photo":"https://rfathead-res.cloudinary.com/image/upload/c_scale,f_auto,h_600,q_auto,w_600/v1506311513/assets/web/97-97013_batman_justice_league_pdp_left_prod_01.png",
    "scores[]":[
        5,
        1,
        2,
        4,
        3,
        1,
        2,
        1,
        1,
        1
      ]
  },
  {
    customerName: "Captian America",
    "photo":"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/94/Captain_America_%28Official_IW_Concept_Art_-_Infobox_Crop%29.jpg/revision/latest/scale-to-width-down/350?cb=20170731141222",
    "scores[]":[
        5,
        1,
        4,
        2,
        5,
        1,
        3,
        5,
        4,
        1
      ]
  },
  {
    customerName: "Hulk",
    "photo":"https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png",
    "scores[]":[
        3,
        1,
        4,
        3,
        5,
        1,
        2,
        4,
        2,
        1
      ]
  }, 
  {
    customerName: "Logan",
    "photo":"https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Wolverine_AKA_James_%22Logan%22_Howlett.png/170px-Wolverine_AKA_James_%22Logan%22_Howlett.png",
    "scores[]":[
        5,
        1,
        1,
        3,
        5,
        5,
        2,
        4,
        5,
        5
      ]
  }, 
  {
    customerName: "Deadpool",
    "photo":"https://vignette.wikia.nocookie.net/p__/images/2/23/A8YQjGe_700b.jpg/revision/latest?cb=20170204024423&path-prefix=protagonist",
    "scores[]":[
        5,
        1,
        4,
        2,
        2,
        1,
        4,
        5,
        4,
        2
      ]
  }, 
  {
    customerName: "Spider Man",
    "photo":"https://static.rogerebert.com/uploads/blog_post/primary_image/balder-and-dash/superheroes-always-make-three-point-landings/primary_spidey-thumb-350x264-47395.jpg",
    "scores[]":[
        5,
        4,
        4,
        3,
        3,
        1,
        2,
        3,
        4,
        2
      ]
  }, 
  {
    customerName: "Black Lightening",
    "photo":"https://i.guim.co.uk/img/media/8508c7ee28c918cfdd76e4be23de659b3057fd16/0_58_800_480/master/800.jpg?w=460&q=55&auto=format&usm=12&fit=max&s=2618305b60a99c11c7bc7bd75f7ae25b",
    "scores[]":[
        5,
        5,
        4,
        2,
        5,
        3,
        2,
        3,
        3,
        1
      ]
  }, 
  {
    customerName: "Wonder Woman",
    "photo":"https://cms-ringer.s3.amazonaws.com/public/media/superheroes/47-Wonder-Woman-1-medium.png",
    "scores[]":[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
      ]
  }, 
  {
    customerName: "Jack",
    "photo":"https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/94/Captain_America_%28Official_IW_Concept_Art_-_Infobox_Crop%29.jpg/revision/latest/scale-to-width-down/350?cb=20170731141222",
    "scores[]":[
        5,
        1,
        4,
        2,
        5,
        4,
        2,
        3,
        4,
        2
      ]
  }, 
  {
    customerName: "Iron Man",
    "photo":"https://cdn2.list25.com/wp-content/uploads/2011/12/ironman.gif",
    "scores[]":[
        5,
        1,
        4,
        3,
        5,
        5,
        4,
        5,
        5,
        1
      ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
