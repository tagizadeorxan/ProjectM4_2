import Deposit from './new.mjs'


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


let countGoals = 0;

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
                    console.log(data);
                    let answer = confirm(`It's best avaliable option for you is Bank with ${data.income} percent income, "Are you sure that you want create this goal?`);
                    if (answer) {
                        this.addData(object);
                    }
                }
                else {
                    alert("sorry there is no avaliable option for you ");
                }
            })
        } else {
            alert("wrong input");
        }
    }



    addData(object) {
        countGoals++;
        let goal = document.createElement("div");
        goal.innerText = countGoals+"";
        goal.classList.add("detailed");
        let title = document.createElement("span");
        title.innerText = object.title;
        let amount = document.createElement("span")
        amount.innerText = object.amount;
        amount.classList.add("displaynone");
        let term = document.createElement("span");
        term.innerText = object.term;
        term.classList.add("displaynone");
        let startamount = document.createElement("span")
        startamount.innerText = object.startamount;
        startamount.classList.add("displaynone");
        let moreinfoButton = document.createElement("button");
        moreinfoButton.innerText="more info";
        let editButton = document.createElement("button");
        editButton.innerText="edit";
        let deleteButton = document.createElement("button");
        deleteButton.innerText="delete";


        goal.append(title, amount, term, startamount,moreinfoButton,editButton,deleteButton);
        document.querySelector("#goalObjects").append(goal);
    }
}








// function delete(e) {
    //   e.preventDefault();
    //   e.target.remove();
// }

