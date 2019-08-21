const canCapture = ([yourRook, opponentsRook]) => {
  let myRook = yourRook.split(''),
  otherRook = opponentsRook.split('');
  if(myRook[0] == otherRook[0] || myRook[1] == otherRook[1]){
    return true;
  } else {
    return false;
  }

}


console.log(canCapture(["A8", "E8"]));
