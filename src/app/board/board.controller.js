'use strict';

angular.module('choupouxMemo')
  .controller('BoardCtrl', function ($scope, $timeout) {

    var partie;

    initGame();
    initCards(stackCards.animal);

    $scope.makeFlip = makeFlip;

    function initGame() {
      var player1 = new player('sebastien', '');
      var player2 = new player('antoine', '');
      var params = new settings();
      params.players.push(player1);
      params.players.push(player2);

      partie = new game(params);
      $scope.currentPlayer = partie.players[0];
      $scope.currentPlayer.index = 0;
      $scope.partie = partie;
    }

    function initCards(cardsPictureName) {
      var cards = [];
      $scope.chosenCards = [];
      cardsPictureName.forEach(function(name) {
        cards.push({name: name, activated: false});
        cards.push({name: name, activated: false});
      });

      cards = scrumbleCards(cards);
      $scope.cards = scrumbleCards(cards);
    }

    function scrumbleCards(cards) {
      var scrumbledCards = [];

      while (cards.length > 0) {
        var numberCards = cards.length;
        var index = Math.floor(Math.random() * (numberCards - 1));
        var card = cards.splice(index, 1);
        scrumbledCards.push(card[0]);
      }

      return scrumbledCards;
    }

    function makeFlip(card) {
      if (card.activated) {
        return;
      }
      card.activated = true;
      makeActionOnActivate(card);
    }

    function makeActionOnActivate(card) {
      $scope.chosenCards.push(card);
      if ($scope.chosenCards.length >= 2) {

        var chosenCardsAreSame = $scope.chosenCards.every(hasSameNameThatFirstChosenCard);

        if (chosenCardsAreSame) {
          // coup gagne
          partie.addRound($scope.currentPlayer);
          $scope.chosenCards = [];

        } else {
          // coup perdu
          partie.addRound();

          // c'est au joueur suivant de jouer
          // rewrite with modulo
          var indexOfCurrentPlayer = $scope.currentPlayer.index;
          if (indexOfCurrentPlayer == (partie.players.length - 1)) {
            $scope.currentPlayer = partie.players[0];
            $scope.currentPlayer.index = 0;
          } else {
            $scope.currentPlayer = partie.players[indexOfCurrentPlayer + 1];
            $scope.currentPlayer.index = indexOfCurrentPlayer + 1;
          }

          $timeout(function() {
            while($scope.chosenCards.length > 0) {
              $scope.chosenCards.pop().activated = false;
            }
          }, 1000);

        }

      }
    }

    function hasSameNameThatFirstChosenCard(element) {
      var firstCard = $scope.chosenCards[0];
      return element.name === firstCard.name;
    }

  });


