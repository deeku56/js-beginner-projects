const bal1=document.getElementById('balance');
const in1=document.getElementById('income');
const exp1=document.getElementById('expense');
const emptylist=document.getElementById('list');
const form=document.getElementById('transaction-form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions=[];
form.addEventListener('submit',function(e){
    e.preventDefault();
    const transaction = {
        id: Date.now(),
        text: text.value,
        amount: Number(amount.value)
    };
    transactions.push(transaction);
    display(transaction);
    update();

    text.value = '';
    amount.value = '';

});

function display(transaction){
    const item=document.createElement('li');
    let sign;
    if(transaction.amount<0){
        item.classList.add('minus');
        sign='-';
    }
    else{
        item.classList.add('plus');
        sign='+';
    }
    item.innerHTML =
        transaction.text +
        '<span>' + sign + '₹' + Math.abs(transaction.amount) + '</span>';
    emptylist.appendChild(item);
}
function update(){
    let total=0;
    let income=0;
    let expense=0;
    for(let i=0;i<transactions.length;i++){
        let amt=transactions[i].amount;
        total=total+amt;
        if(amt>0)income+=amt;
        else{expense+=amt;}
    }
   bal1.innerText = '₹' + total;
in1.innerText = '₹' + income;
exp1.innerText = '₹' + Math.abs(expense);

}