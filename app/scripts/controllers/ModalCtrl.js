(function () {
    function ModalCtrl(Room, $uibModalInstance) {
        // this.addRoom = Room.addRoom;
        this.ok = function(roomName){
            Room.addRoom(roomName);
            $uibModalInstance.close();
            //dismiss the modal
        }
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl])
})();