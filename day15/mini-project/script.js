let transactions = [];

const balanceElement = document.getElementById('balance');
const incomeTotalElement = document.getElementById('income-total');
const expenseTotalElement = document.getElementById('expense-total');
const listElement = document.getElementById('transaction-list');
const formElement = document.getElementById('transaction-form');
const textInput = document.getElementById('text');
const typeInput = document.getElementById('type');
const amountInput = document.getElementById('amount');

function addTransaction(e) {
    e.preventDefault();

    const transaction = {
        id: Date.now(),
        text: textInput.value.trim(),
        type: typeInput.value,
        amount: parseFloat(amountInput.value)
    };

    transactions.push(transaction);
    updateUI();

    textInput.value = '';
    amountInput.value = '';
}


function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateUI();
}

function updateUI() {

    listElement.html = "";
    listElement.innerHTML = "";

    let totalIncome = 0;
    let totalExpenses = 0;

    transactions.forEach(transaction => {
        const isIncome = transaction.type === 'inc';
        const sign = isIncome ? '+' : '-';

        if (isIncome) {
            totalIncome += transaction.amount;
        } else {
            totalExpenses += transaction.amount;
        }

        const item = document.createElement('li');
        item.classList.add('transaction-item', transaction.type);

        item.innerHTML = `
                    <div>
                        <span>${transaction.text}</span>
                    </div>
                    <div>
                        <span>${sign}$${transaction.amount.toFixed(2)}</span>
                        <button class="delete-btn" onclick="removeTransaction(${transaction.id})">&times;</button>
                    </div>
                `;

        listElement.appendChild(item);
    });

    const netBalance = totalIncome - totalExpenses;

    balanceElement.innerText = `${netBalance < 0 ? '-' : ''}$${Math.abs(netBalance).toFixed(2)}`;
    incomeTotalElement.innerText = `+$${totalIncome.toFixed(2)}`;
    expenseTotalElement.innerText = `-$${totalExpenses.toFixed(2)}`;
}

formElement.addEventListener('submit', addTransaction);
updateUI();