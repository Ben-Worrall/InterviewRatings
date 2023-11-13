var JoinRoom = document.getElementById('JoinRoom')
var CreateRoom = document.getElementById('CreateRoom')


JoinRoom.addEventListener('mousedown', function(){

    window.location.assign(window.location.protocol + "JoinRoom/JoinRoom.html")
})

CreateRoom.addEventListener('mousedown', function(){
    window.location.assign(window.location.protocol + "CreateRoom/CreateRoom.html")
})