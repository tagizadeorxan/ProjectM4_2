export default class Deposit {
    constructor(object) {
        this.object = object;
    }
    calculate() {
        let finalResult = [];
        
        let array = fetch("https://bolta.herokuapp.com/deposits").then(data => data.json()).then(data => {
            let newData = [];
            let sum = Number(this.object.startamount);
            data.forEach(element => {
                if (Number(element.minTerm) <= Number(this.object.term) && Number(element.maxTerm) >= Number(this.object.term)
                    && Number(element.minSumm) <= Number(this.object.startamount)) {

                    for (let i = 0; i < this.object.term; i++) {
                        sum += sum * element.income /12/ 100;
                    }
                    if (sum > this.object.amount) {
                        newData.push(element)
                    }
                }
            })
            newData.sort((a, b) => a.income > b.income ? -1 : 1);
            if (newData.length < 1) {
                return 0;
            } else {
                return newData[0];
            }

        }).catch(() => alert("Right now server is not working properly please try it again later. Sorry for a bad connection"));

        return array;

    }
}