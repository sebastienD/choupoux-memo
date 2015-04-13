
var stackCards = (function() {

  return {
    'animal': [
      'chat.jpg',
      'cheval.jpg',
      'chien.jpg',
      'cochon.jpg',
      'kangourou.jpg',
      'lapin.jpg',
      'lion.jpg',
      'mouton.jpg',
      'ours.jpg',
      'panda.jpg',
      'pingoo.jpg',
      'souris.jpg',
      'vache.jpg',
      'zebre.jpg'
    ],
    'madeHome': [
      'balle_tennis.png',
      'batte.png',
      'cochon.png',
      'triangles.png',
      'lait.png'
    ]
  }
})();

var player = function(name, avatar) {


    return {
      'numberOfGameWin': 0,
      'numberOfGameLoose': 0,
      'name': name,
      'avatar': avatar
    };
};


var settings = function() {

  var players = [];

  function playersSize() {
    return players.length;
  }

  return {
    "numberOfSameCard": 2,
    "stackCards": stackCards.animal,
    "players": players,
    "numberOfPlayers": playersSize
  };
};

var game = function (settings) {

  var settings = settings;
  var players = initPlayers();
  var numberOfRounds = 0;

  function initPlayers() {
    var playersTab = [];
    settings.players.forEach(function(player) {
      playersTab.push({'identity':player, 'numberOfRoundFound':0});
    });
    return playersTab;
  }

  function addRound(player) {
    numberOfRounds++;
    if (angular.isDefined(player)) {
      this.players.filter(function (playerElement) {
          return playerElement == player
        }
      ).forEach(function (playerElement) {
          playerElement.numberOfRoundFound++;
        }
      );
    }
  }

  return {
    'players': players,
    'numberOfRoundPlayed': numberOfRounds,
    'addRound': addRound
  };

};
