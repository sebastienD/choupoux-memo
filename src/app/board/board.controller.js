'use strict';

angular.module('choupouxMemo')
  .controller('BoardCtrl', function ($scope, $timeout) {

      var cardsPictureNameAnimal = [
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
      ];

    var cardsPictureNameMadeHome = [
        'balle_tennis.png',
        'batte.png',
        'cochon.png',
        'triangles.png',
        'lait.png'
    ];

    initCards(cardsPictureNameAnimal);

    $scope.makeFlip = makeFlip;

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
          $scope.chosenCards = [];

        } else {
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


