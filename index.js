var JoinRoom = document.getElementById('JoinRoom')
var CreateRoom = document.getElementById('CreateRoom')


JoinRoom.addEventListener('click', function(){

    window.location.assign(window.location.protocol + "JoinRoom/JoinRoom.html")
})

CreateRoom.addEventListener('click', function(){
    console.log('CreateRoom')
})