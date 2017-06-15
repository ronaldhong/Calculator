const cal_keys=[
  {
    "type":"button",
    "name": "clear",
    "value":  "c",
    "class":""
  },

  {
    "type" : "button",
    "name" : "seven",
    "value": "7",
    "class": ""
  },

  {
    "type":"button",
    "name": "eight",
    "value": "8",
    "class": ""
  },

  {
    "type":"button",
    "name": "nine",
    "value":"9",
    "class":""
  },

  {
    "type":"button",
    "name": "div",
    "value":"/",
    "class": "operator"
  },

  {
    "type":"button",
    "name": "four",
    "value":"4",
    "class":""
  },

  {
    "type":"button",
    "name": "five",
    "value": "5",
    "class": ""
  },

  {
    "type":"button",
    "name": "six",
    "value": "6",
    "class":""
  },

  {
    "type":"button",
    "name": "times",
    "value": "x",
    "class": "operator"
  },

  {
    "type":"button",
    "name": "one",
    "value": "1",
    "class": ""
  },

  {
    "type":"button",
    "name": "two",
    "value": "2",
    "class": ""
  },

  {
    "type":"button",
    "name": "three",
    "value": "3",
    "class": ""
  },

  {
    "type":"button",
    "name": "minus",
    "value": "-",
    "class": "operator"
  },

  {
    "type":"button",
    "name": "zero",
    "value": "0",
    "class": ""
  },

  {
    "type":"button",
    "name": "dec",
    "value": ".",
    "class": ""
  },

  {
    "type":"button",
    "name": "doIt",
    "value": "=",
    "class": ""
  },

  {
    "type":"button",
    "name":"plus",
    "value": "+",
    "class": "operator"
  }



]


let calculator="";
let form = document.createElement('form');
let scriptTag = document.querySelector('script');
let table = document.createElement('table');
let tr = document.createElement("tr");
let td = document.createElement('td');
let br=document.createElement('br');
let input=document.createElement("input");


// Create table
document.body.insertBefore(form, scriptTag);
form.appendChild(table);
table.appendChild(tr);
tr.appendChild(td);

// create "C"  and append to td
input= document.createElement('input');
input.type=cal_keys[0].type;
input.value=cal_keys[0].value;
input.addEventListener("click", function(){
  calculator=""
  input_display.value="";
});
td.appendChild(input);

// create "display" and append to td
input_display= document.createElement('input');
input_display.type="text";
input_display.name="input";
input_display.setAttribute("id","display");
input_display.value ="";
td.appendChild(input_display);
td.appendChild(br);

// create keys  and append it to td
for (let i=1;i<17;i++){
  //FAIL ATTEMPT>
  // const html=`
  //   <input type=${cal_keys[i].type} value="${cal_keys[i].value}" onClick=${cal_keys[i].onClick}
  // `
  // console.log(html)
  // document.querySelector('td').insertAdjacentHTML('beforeend', html)
  input= document.createElement('input');
  input.type =cal_keys[i].type;
  input.value= cal_keys[i].value;
  if (input.value=="="){
    input.className="equal"
  }else{
    input.className = "button";
  }


///////CALCULATION and display it to calculator//////
  input.addEventListener("click",function(){
    if (this.value=="="){
      calculator=eval(calculator);
      input_display.value=calculator;
    }else{
      if (this.value=="x"){
        calculator+="*";
      }else{
      calculator+=this.value;
    }
    input_display.value=calculator;
  }
});
////edit the layout///
  td.appendChild(input);
  if (i===4 || i==8 || i==12){
    br=document.createElement("br");
    td.appendChild(br);
  }
}
