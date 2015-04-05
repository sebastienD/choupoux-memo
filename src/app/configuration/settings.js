
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

var player = (function() {

  return {
    'numberOfGameWin': 0,
    'numberOfGameLoose': 0,
    'avatar': ''
  };

})();


var settings = (function() {

  return {
    "numberOfSameCard": 2,
    "stackCards": [],
    "players": []
  };
})();

var game = (function () {

  this.settings = settings;
  this.players = initPlayers();

  function initPlayers() {
    var playersTab = [];
    settings.players.forEach(function(player) {
      playersTab.push({'player':player, 'numberOfRoundFound':0});
    });
    return playersTab;
  }

  function addRoundFound(player) {
    this.players.filter(function(playerElement) {return playerElement == player})
      .forEach(function(playerElement) { playerElement.numberOfRoundFound ++;});
  }

  function numberOfRoundFound(player) {
    return this.players.filter(function(playerElement) {return playerElement == player})[0].numberOfRoundFound;
  }

  return {
    'players': {},
    'settings': {},
    'numberOfRoundFound': numberOfRoundFound,
    'addRoundFound': addRoundFound
  };

})(settings);
