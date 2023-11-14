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