import Deposit from './new.mjs'


let inputs = document.getElementsByTagName("input");

for(let i=0;i<4;i++){
    inputs[i].addEventListener("keydown",handler);
    
}
let count =0;
let goals =[];

function handler(e){
    
    if(this.type=="number") {
        
       
       if(Number(e.keyCode) >=96 && Number(e.keyCode) <=106 || Number(e.keyCode)==8 || 
       Number(e.keyCode)==46) {
        
        if(this.value.length >0){
            
            this.previousSibling.classList.remove("pulse");
            this.previousSibling.classList.remove("slideRight");
           
          } else {
              this.previousSibling.classList.add("pulse");
              this.previousSibling.classList.remove("slideRight");
        
          } 
       }
    } else {
  
     if(this.value.length >0){
       this.previousSibling.classList.remove("pulse");
       this.previousSibling.classList.remove("slideRight");
     } else {
         this.previousSibling.classList.add("pulse");
         this.previousSibling.classList.remove("slideRight");
     }}
     
}


let addgoal = document.querySelector("#addgoal");
addgoal.addEventListener("click", function () { new GetData });

let clear = document.querySelector("#clear");
clear.addEventListener("click", clearData);

function clearData() {
    document.querySelector("#title").value = "";
    document.querySelector("#amount").value = "";
    document.querySelector("#term").value = "";
    document.querySelector("#startamount").value = "";
}




class GetData {
    constructor() {
        let title = document.querySelector("#title").value;
        let amount = document.querySelector("#amount").value;
        let term = document.querySelector("#term").value;
        let startamount = document.querySelector("#startamount").value;
        let object = { title, amount, term, startamount };
        if (Number(startamount) < Number(amount)) {
            let deposit = new Deposit(object);
            let result = deposit.calculate();
            result.then(data => {
                if (data != 0) {
                   
                    let answer = confirm(`It's best avaliable option for you is Bank with ${data.income} percent income, "Are you sure that you want create this goal?`);
                    if (answer) {
                        this.addData(object,data);
                       document.querySelector("#title").value="";
                        document.querySelector("#amount").value="";
                    document.querySelector("#term").value="";
                    document.querySelector("#startamount").value="";
                    }
                }
                else {
                    alert("sorry there is no avaliable option for you ");
                }
            }).catch(()=>console.log("error type 1: not getting data"));
        } else {
            alert("wrong input");
        }
    }



    addData(object,data) {
       
        let goal = document.createElement("div");
      
        goal.classList.add("detailed");
        let title = document.createElement("span");
        let newString = object.title.charAt(0).toUpperCase() +  object.title.slice(1);
        title.innerText = newString;
        let buttons = document.createElement("div");
        let moreinfoButton = document.createElement("button");
        moreinfoButton.addEventListener("click",display);
        //moreinfoButton.innerText = "more info";
        moreinfoButton.classList.add("fa");
        moreinfoButton.classList.add("fa-bars");
        let editButton = document.createElement("button");
       // editButton.innerText = "edit";
        editButton.addEventListener("click",editData);
        editButton.classList.add("fa");
        editButton.classList.add("fa-edit");
        let deleteButton = document.createElement("button");
       // deleteButton.innerText = "delete";
        deleteButton.addEventListener("click",deleteData);
        deleteButton.classList.add("fa");
        deleteButton.classList.add("fa-trash")
        buttons.append(moreinfoButton, editButton, deleteButton);
        goal.append(title, buttons);

        let goalObject = document.createElement("div");
        goalObject.append(goal);
        

        let moreinfo = document.createElement("div");
        let info = document.createElement("ul");
        info.classList.add("displaynone");
        info.innerHTML = `<li>title: ${object.title}</li>
       <li>amount: ${object.amount}</li>
        <li>term: ${object.term}</li>
        <li>startamount: ${object.startamount}</li>
        <li>deposit: ${data.deposit}</li>
        <li>currency: ${data.currency}</li>
        <li>income: ${data.income}</li>
        <li>minTerm: ${data.minTerm}</li>
        <li>maxTerm: ${data.maxTerm}</li>
        <li>minSumm: ${data.minSumm}</li>`
        moreinfo.append(info);
        goalObject.append(moreinfo);
        goalObject.classList.add("goalObject");
        document.querySelector("#goalObjects").append(goalObject);
    }
}





function display(e){
     e.preventDefault();
     e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[0].classList.toggle("display");
     
}

function deleteData(e){
    e.preventDefault();
    e.target.parentNode.parentNode.parentNode.remove();
}


document.getElementById("edit").addEventListener("click",editComplete);

let editTarget;

function editComplete() {
    
    

    let title = document.querySelector("#title").value;
    let amount = document.querySelector("#amount").value;
    let term = document.querySelector("#term").value;
    let startamount = document.querySelector("#startamount").value;
    let object = {title,amount,term,startamount};

    if (Number(startamount) < Number(amount)) {
        let deposit = new Deposit(object);
        let result = deposit.calculate();
        result.then(data => {
            if (data != 0) {
                
                let answer = confirm(`It's best avaliable option for you is Bank with ${data.income} percent income, "Are you sure to edit your informations?`);
                if (answer) {

                    let newString = title.charAt(0).toUpperCase() +  object.title.slice(1);
                    editTarget.parentNode.parentNode.childNodes[0].childNodes[0].innerText = newString;

                    // title: n
                    // amount: 102000
                    // term: 10
                    // startamount: 100000
                    // deposit: Пополняй (6-12 мес)
                    // currency: RUB
                    // income: 3.5
                    // minTerm: 6
                    // maxTerm: 12
                    // minSumm: 100000

                 editTarget.childNodes[0].value=`title: ${title}`;
                 editTarget.childNodes[2].value=`amount: ${amount}`;
                 editTarget.childNodes[4].value=`term: ${term}`;
                 editTarget.childNodes[6].value=`startamount: ${startamount}`;
                 editTarget.childNodes[8].value=`deposit: ${data.deposit}`;
                 editTarget.childNodes[10].value = `currency: ${data.currency}`;
                 editTarget.childNodes[12].value=`income: ${data.income}`;
                 editTarget.childNodes[14].value =`minTerm: ${data.minTerm}`;
                 editTarget.childNodes[16].value =`maxTerm: ${data.maxTerm}`;
                 editTarget.childNodes[18].value =`minSumm: ${data.minSumm}`;
                 document.querySelector("#title").value="";
                 document.querySelector("#amount").value="";
             document.querySelector("#term").value="";
             document.querySelector("#startamount").value="";         
                  
    document.getElementById("edit").classList.remove("box-2");
    document.getElementById("edit").classList.add("displaynone");
    document.getElementById("cancel").classList.remove("box-2");
    document.getElementById("cancel").classList.add("displaynone");
    document.getElementById("added").classList.remove("displaynone");
    document.getElementById("added").classList.add("box-2");
    document.getElementById("cleared").classList.remove("displaynone");
    document.getElementById("cleared").classList.add("box-2");
                }
            }
            else {
                alert("sorry there is no avaliable option for you ");
            }
        }).catch(()=>console.log("error type 1: not getting data"));
    } else {
        alert("wrong input");
    }
    

   

    

}

function cancelEditing() {
    document.getElementById("edit").classList.remove("box-2");
    document.getElementById("edit").classList.add("displaynone");
    document.getElementById("cancel").classList.remove("box-2");
    document.getElementById("cancel").classList.add("displaynone");
    document.getElementById("added").classList.remove("displaynone");
    document.getElementById("added").classList.add("box-2");
    document.getElementById("cleared").classList.remove("displaynone");
    document.getElementById("cleared").classList.add("box-2");
    document.querySelector("#title").value="";
                 document.querySelector("#amount").value="";
             document.querySelector("#term").value="";
             document.querySelector("#startamount").value="";   
}


function editData(e) {
    e.preventDefault();
   
   document.getElementById("cancel").addEventListener("click",cancelEditing);
    document.getElementById("edit").classList.add("box-2");
    document.getElementById("edit").classList.remove("displaynone");
    document.getElementById("cancel").classList.add("box-2");
    document.getElementById("cancel").classList.remove("displaynone");
    document.getElementById("added").classList.add("displaynone");
    document.getElementById("added").classList.remove("box-2");
    document.getElementById("cleared").classList.add("displaynone");
    document.getElementById("cleared").classList.remove("box-2");
    let target = e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[0];
    
    editTarget = target;
    let title = target.childNodes[0].innerText.split(': ')[1];
    let amount = target.childNodes[2].innerText.split(': ')[1];
    let term = target.childNodes[4].innerText.split(': ')[1];
    let startamount = target.childNodes[6].innerText.split(': ')[1];
    document.querySelector("#title").value = title;
    document.querySelector("#amount").value = amount;
    document.querySelector("#term").value = term;
    document.querySelector("#startamount").value = startamount;
}


