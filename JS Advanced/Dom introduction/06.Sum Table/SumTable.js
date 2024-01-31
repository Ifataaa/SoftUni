function sumTable() {
    let tableRows = document.querySelectorAll("table tr");

    let total = 0;

    for (let i = 1; i < tableRows.length; i++) {
        let columns = tableRows[i].children;
        let cost = columns[columns.length - 1].textContent;
        total += Number(cost);
    }

    document.getElementById('sum').textContent = total;
}