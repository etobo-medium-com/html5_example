let var_date = Date.now();

let readableDate = new Date(var_date).toLocaleString();

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('dateDisplay').textContent = readableDate;
});