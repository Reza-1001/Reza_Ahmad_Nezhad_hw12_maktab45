var inputArray=[];
var uname = document.getElementById("name");
var pass = document.getElementById("pass")
var pass2 = document.getElementById("pass_repeat")
var form = document.getElementById("Reg")
inputArray.push(uname,pass,pass2);
form.addEventListener('submit', (e) => {
  for (let index in inputArray) {
    if (inputArray[index].value===""|| inputArray[index].value===null){
      inputArray[index].style.border = "2px solid red";
      inputArray[index].nextElementSibling.style.visibility = "visible";
      inputArray[index].nextElementSibling.innerText = "الزامی";
    }
    else{
      inputArray[index].style.border = "2px solid black";
      inputArray[index].nextElementSibling.style.visibility = "hidden";
  }
  }
  if (pass.value != ""){
    if(!pass.value.match(/[0-9]/g) || !pass.value.match(/[a-zA-Z]/g) || pass.value.length<8){
    pass.style.border = "2px solid red";
    pass.nextElementSibling.style.visibility = "visible";
    pass.nextElementSibling.innerText = "رمز عبور باید حداقل شامل 8 کاراکتر و یک حرف و عدد باشد";
    }
    if (pass.value!=pass2.value){
      pass2.style.border = "2px solid red";
      pass2.nextElementSibling.style.visibility = "visible";
      pass2.nextElementSibling.innerText = "رمزهای وارد شده یکسان نیستند";
      }
    else {
      pass2.style.border = "2px solid black";
          pass2.nextElementSibling.style.visibility = "hidden";
    }
  }
  e.preventDefault();
});

