
//craete random password
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    document.getElementById('RoomPasswordText').innerHTML = result
    
}

generateString(12);



//copy the room passsword
var RoomPassword = document.getElementById('RoomPasswordText').innerHTML


    
    const copyPassword = async () => {
        try {
          await navigator.clipboard.writeText(RoomPassword);
          console.log('Content copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      
}