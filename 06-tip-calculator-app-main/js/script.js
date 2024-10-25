const bill = document.querySelector('#bill');
const btns = document.querySelectorAll('.btn');
const custom = document.querySelector('#btn');
const persons = document.querySelector('#persons');
const tipTotal = document.querySelector('.tipAmount');
const totalPerson = document.querySelector('.total-person');
const resetBtn = document.querySelector('#reset');
const personError = document.querySelector('.person-error')

let billValue;
let customValue;
let personValue;

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        billValue = parseInt(bill.value);
        personValue = parseInt(persons.value);

        // console.log(billValue, personValue);
        

        if(billValue && personValue) {

            if(btn.value === '5%') {
                let totalTip = billValue * 0.05;
                calculateTotalResult(billValue, personValue, totalTip)
            }
            if(btn.value === '10%') {
                let totalTip = billValue * 0.1;
                calculateTotalResult(billValue, personValue, totalTip)
            }
            if(btn.value === '15%') {
                let totalTip = billValue * 0.15;
                calculateTotalResult(billValue, personValue, totalTip)
            }
            if(btn.value === '25%') {
                let totalTip = billValue * 0.25;
                calculateTotalResult(billValue, personValue, totalTip)
            }
            if(btn.value === '50%') {
                let totalTip = billValue * 0.5;
                calculateTotalResult(billValue, personValue, totalTip)
            }
        }else {
            bill.style.borderColor = 'red';
            personError.innerHTML = `Can't be zero`;
           // persons.style.borderSize = '1px';
            persons.style.borderColor = 'red';    
        }
    });
});

resetBtn.addEventListener('click', () => {
    bill.value = '';
    custom.value = '';
    persons.value = '';
    tipTotal.innerHTML = `$0.00`;
    totalPerson.innerHTML = `$0.00`;
})

// if (billValue && personValue && customValue) {
    custom.addEventListener('keypress', (event) => {
        billValue = parseInt(bill.value);
        customValue = parseInt (custom.value);
        personValue = parseInt(persons.value);
        if (event.key === "Enter") {
            event.preventDefault();
            
            let totalTip = billValue * customValue / 100;                
            calculateTotalResult(billValue, personValue, totalTip)
        }
    });
// }else {
//     bill.style.borderColor = 'red';
//             personError.innerHTML = `Can't be zero`;
//            // persons.style.borderSize = '1px';
//             persons.style.borderColor = 'red'   
//     }


function calculateTotalResult(billValue, personValue, totalTip) {
    const tipTotalPerson = totalTip / personValue;    
    const totalBillPerPerson = (billValue + totalTip) / personValue;    
    
    tipTotal.innerHTML = `$${tipTotalPerson.toFixed(2)}`;        
    totalPerson.innerHTML = `$${totalBillPerPerson.toFixed(2)}`;
}


