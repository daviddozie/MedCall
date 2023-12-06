const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

document.addEventListener('DOMContentLoaded', function() {
    const savedDate = localStorage.getItem('date');
    const displayDate = document.getElementById('displayDate');
    const savedTime = localStorage.getItem('time');
    const displayTime = document.getElementById('displayTime');

    const checked = true;

    if (checked) {
      displayDate.innerText = `${savedDate}`;
      displayTime.innerText = `${savedTime}`;
    } else {
      displayDate.innerText = 'No date saved';
      displayTime.innerText = 'No time picked';
    }
});
