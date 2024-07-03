function handleButtonClick(action) {
    console.log(action); // Perform action based on the button clicked
    // Add your action handling code here
}

function addColumn() {
    const table = document.querySelector('.requisitions');
    const headers = table.querySelector('thead tr');
    const rows = table.querySelectorAll('tbody tr');

    // Add new header cell
    const newHeader = document.createElement('th');
    newHeader.textContent = 'New Column';
    headers.appendChild(newHeader);

    // Add new cell to each row
    rows.forEach(row => {
        const newCell = document.createElement('td');
        newCell.textContent = '';
        row.appendChild(newCell);
    });
}
