function palindrome(str) {
  let patt = /[\W_]/g;
  let newStr = str.toLowerCase().replace(patt, "");
  console.log(newStr);
    
  let rev = newStr.split("").reverse().join("");
 
    if(rev === newStr)  return true;

    return false;


  }

   console.log(palindrome("eye24)(7"));