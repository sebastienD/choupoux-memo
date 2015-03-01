'use strict';

angular.module('choupouxMemo')
  .controller('BoardCtrl', function ($scope) {

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
    }

  });


