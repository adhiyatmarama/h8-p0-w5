function changeVocals (str) { 
  var result = '';
  for(var i = 0; i < str.length; i++){
    a = str.charCodeAt(i);
    if(a == 65 || a == 69 || a == 73 || a == 79 || a == 85 ){
      a = a+1;
      result += String.fromCharCode(a);
    }else if(a == 97 || a == 101 || a == 105 || a == 111 || a == 117){
      a = a+1;
      result += String.fromCharCode(a);
    }else{
      result += str[i];
    }
  }
  //console.log(result)
  return result;
}

function reverseWord (str) {
  var result = '';
  for(var i = str.length-1; i >= 0; i--){
    result += str[i];
  }
  //console.log(result)
  return result;
}

function setLowerUpperCase (str) {
  var result = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      result += str[i].toLowerCase();
    }else{
      result += str[i].toUpperCase();
    }
  }
  return result;
}

function removeSpaces (str) {
  var result = '';
  for(var i = 0; i < str.length; i++){
    if(str[i] !== ' '){
      result += str[i]
    }
  }
  return result;
}

function passwordGenerator (name) {
  if(name.length < 5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  result = changeVocals(name);
  result = reverseWord(result);
  result = setLowerUpperCase(result);
  result = removeSpaces(result);
  return result;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'