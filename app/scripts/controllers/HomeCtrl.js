(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;

 
     this.openRoom = function() {
             var modalWindow = $uibModal.open({
                 templateUrl: '/templates/modal.html',
                 controller: function ($scope, $uibModalInstance) {
                     $scope.roomName = {name: ''};
                     $scope.cancelAction = function() {
                         $uibModalInstance.dismiss('cancel');
                     };
                     
                     $scope.createRoom = function() {
                         $uibModalInstance.close($scope.addRoom)
                     };
                 },
                 size: 'sm'
             });
             
             modalWindow.result.then(function(data){
                 Room.addRoom(data);
             });
         }
    }     

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();





   //     this.openRoom = function() {
    //         $uibModal.open({
    //             templateUrl: '/templates/modal.html',
    //             controller: 'ModalCtrl',
    //             controllerAs: 'modal'
    //         });
    //     }
    // }