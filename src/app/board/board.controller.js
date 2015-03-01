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

    initCards(cardsPictureNameAnimal, 6);

    $scope.makeFlip = makeFlip;

    function initCards(cardsPicture, nbColonne) {
      $scope.cardsPictureName = splitCardsPictureTabTab(cardsPicture, nbColonne);
      $scope.activated = [];
      $scope.countCh = [];
      cardsPicture.forEach(function(element) {
        $scope.activated[element] = false;
      });

    }

    function splitCardsPictureTabTab(cardsPicture, nbColonne) {
      var tabFinal = [];
      var row = [];
      cardsPicture.forEach(function(element, index) {
        if (row.length > 0 && index % nbColonne == 0) {
            tabFinal.push(row);
            row = [];
        }
        row.push(element);
      });

      if (row.length < nbColonne) {
        tabFinal.push(row);
      }

      return tabFinal;
    }

    function makeFlip(key) {
      $scope.activated[key] = ! $scope.activated[key];
      addChoice(key);
    }

    function addChoice(key) {
      $scope.countCh.push(key);
      if ($scope.countCh.length >= 2) {

        var allSame = true;
        var first = $scope.countCh[0];
        $scope.countCh.forEach(function(element) {
            if (first != element) {
              allSame = false;
            }
        });

        if (!allSame) {
          $timeout(function() {
            $scope.countCh.forEach(function(key) {
              $scope.activated[key] = ! $scope.activated[key];
            });
            $scope.countCh = [];
          }, 1000);
        } else {
          $scope.countCh = [];
        }

      }
    }

  });


