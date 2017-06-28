(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;

        this.selectRoom = function (roomId) {
                    this.currentRoom = roomId;
                    this.messages = Room.getMessages(this.currentRoom.$id);
        
                }

    

        this.openRoom = function() {

                var modalWindow = $uibModal.open({
                    templateUrl: '/templates/newRoomModal.html',
                    controller: function ($scope, $uibModalInstance) {
                        $scope.newRoom = null;
                        $scope.cancelAction = function() {
                            $uibModalInstance.dismiss('cancel');
                        };
                        
                        $scope.createRoom = function(room) {
                            console.log("createRoom");
                            Room.addRoom(room);
                            $uibModalInstance.close();
                        };
                    },
                    size: 'sm'
                });
                
                //  modalWindow.result.then(function(data){
                //      Room.addRoom(data);
                //  });
            }

        this.activeRoom = null;

        this.setRoom = function(room) {
            this.activeRoom = room;
            this.roomName = room.name;
            this.messages = Room.getMessages(this.currentRoom.$id);
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