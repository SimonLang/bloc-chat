(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        // Room.all = rooms;

        // return Room;
        return {
            all: rooms
        };
    }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();