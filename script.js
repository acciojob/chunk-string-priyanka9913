function stringChop(str, size) {
  // your code here
	let arr = [];
  let res = "";
  if(str == null || str == ""){
    return [];
  }
  if(str.length < size){
    arr.push(str);
    return arr;
  }
  for(let i = 0; i < str.length; i++){
    res += str.charAt(i);
    if(res.length == size){
      arr.push(res);
      res = "";
    }
  }
  if(res.length != 0){
    arr.push(res);
  }
  return arr;
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
