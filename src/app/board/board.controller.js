'use strict';

angular.module('choupouxMemo')
  .controller('BoardCtrl', function ($scope) {

      $scope.cardsPictureNameAnimal = [
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

    $scope.cardsPictureNameMadeHome = [
        'balle_tennis.png',
        'batte.png',
        'cochon.png',
        'triangles.png',
        'lait.png'
    ];

  });


