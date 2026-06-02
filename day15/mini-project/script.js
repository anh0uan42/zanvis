let transactions = [];

const balanceEl = document.getElementById('balance');
const incomeTotalEl = document.getElementById('income-total');
const expenseTotalEl = document.getElementById('expense-total');
const listEl = document.getElementById('transaction-list');
const formEl = document.getElementById('transaction-form');
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

    listEl.html = "";
    listEl.innerHTML = "";

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

        listEl.appendChild(item);
    });

    const netBalance = totalIncome - totalExpenses;

    balanceEl.innerText = `${netBalance < 0 ? '-' : ''}$${Math.abs(netBalance).toFixed(2)}`;
    incomeTotalEl.innerText = `+$${totalIncome.toFixed(2)}`;
    expenseTotalEl.innerText = `-$${totalExpenses.toFixed(2)}`;
}

formEl.addEventListener('submit', addTransaction);
updateUI();