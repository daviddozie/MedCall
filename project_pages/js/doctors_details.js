let modal = document.getElementById('myModal');
let btn = document.getElementById('openModalBtn');

btn.onclick = function () {
    modal.style.display = 'block';
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

for (let i = 1; i < 6; i++) {
    const rate = document.getElementsByClassName(`star-gray${i}`)[0];

    rate.addEventListener('click', () => {
        rate.classList.add('star-gold');
    })
}

const submit = document.getElementById('submit');
const loader = document.querySelector('.load');
const message = document.getElementById('message')

function validateMessage(area, event) {
    if (area.value === "") {
        area.nextElementSibling.innerHTML = "This is field required*";
        event.preventDefault();
        return false;
    } else {
        area.nextElementSibling.innerHTML = "";
        return true;
    }
}

function validate(e) {
    e.preventDefault();

    let result = validateMessage(message, e);
    if (result) {
        loader.style.display = "block";
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);
    }

    return true;
}

submit.addEventListener('submit', validate);

let count = 0;
const target = 6.5;
const increment = 0.1;

const rateElement = document.querySelector('.rate');

function updateCount() {
    if (count.toFixed(1) < target) {
        count += increment;
        rateElement.textContent = count.toFixed(1);
    } else {
        rateElement.textContent = target.toFixed(1);
        clearInterval(interval);
    }
}
const interval = setInterval(updateCount, 100);