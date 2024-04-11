let string = " ";
let buttons = document.querySelectorAll('.button');
let input = document.getElementById('inputBox');

let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML=='='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'reset') {
            string = "";
            input.value = string;
        }
        else if(e,target.innerHTML == 'del'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string = string + e.target.innerHTML;
            input.value = string;
        }
        //console.log(e.target)
        
    })
})
