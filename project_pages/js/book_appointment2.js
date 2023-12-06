function calendar() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    const currentDate = new Date();

    const daysElement = document.querySelector('.days');
    const currentMonthYearElement = document.getElementById('currentMonthYear');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const selectedDateDisplay = document.getElementById('selectedDateDisplay');

    let selectedDateElement = null;

    function updateCalendar(year, month) {

        daysElement.innerHTML = '';

        currentMonthYearElement.textContent = `${getMonthName(month)} ${year}`;

        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        weekdays.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            dayElement.classList.add('day-name');
            daysElement.appendChild(dayElement);
        });

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const totalDays = new Date(year, month + 1, 0).getDate();

        let startOffset = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

        for (let i = 0; i < startOffset; i++) {
            const emptyDayElement = document.createElement('div');
            emptyDayElement.classList.add('day-blank');
            daysElement.appendChild(emptyDayElement);
        }

        for (let day = 1; day <= totalDays; day++) {
            const date = new Date(year, month, day);
            const dayElement = document.createElement('div');
            dayElement.textContent = day;

            if (isSameDate(date, new Date())) {
                dayElement.classList.add('current-date');
            }

            dayElement.addEventListener('click', (event) => {
                const clickedDateElement = event.target;

                if (selectedDateElement) {
                    selectedDateElement.classList.remove('selected-date');
                }

                if (clickedDateElement !== daysElement) {
                    clickedDateElement.classList.add('selected-date');
                    selectedDateElement = clickedDateElement;

                    const selectedYear = year;
                    const selectedMonth = month;
                    const selectedDay = clickedDateElement.textContent;

                    updateSelectedDateDisplay(selectedYear, selectedMonth, selectedDay);
                }
            });

            daysElement.appendChild(dayElement);
        }

        updateSelectedDateDisplay(year, month, new Date().getDate());
    }

    function isSameDate(date1, date2) {
        return date1.toDateString() === date2.toDateString();
    }

    function getMonthName(monthIndex) {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months[monthIndex];
    }

    function updateSelectedDateDisplay(year, month, day) {
        const formattedDate = `${getMonthName(month)} ${day}, ${year} |`;

        selectedDateDisplay.value = formattedDate;
    }

    prevMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    nextMonthButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar(currentDate.getFullYear(), currentDate.getMonth());
    });

    updateCalendar(currentDate.getFullYear(), currentDate.getMonth());

    const timeBooked = document.querySelectorAll('.time');
    const displayTimeBooked = document.querySelector('.clicked-date');
    const doneBtn = document.querySelector('.doneBtn');
    doneBtn.disabled = true;

    timeBooked.forEach((each => {
        each.addEventListener('click', () => {
            let result = each.textContent;
            displayTimeBooked.innerHTML = result;
            doneBtn.disabled = false;
        })
    }));

    var modal = document.getElementById('myModal');
    var btn = document.getElementById('openModalBtn');
    var span = document.getElementsByClassName('close')[0];
    let loader = document.querySelector('.load');


    btn.onclick = function () {
        loader.style.display = 'block';
        localStorage.setItem('date', selectedDateDisplay.value);
        localStorage.setItem('time', displayTimeBooked.textContent);
        setTimeout(() => {
            modal.style.display = 'block';
        }, 3000);
    };

    span.onclick = function () {
        modal.style.display = 'none';
        window.location.href = './book-appointment3.html'
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            window.location.href = './book-appointment3.html'
        }
    };

}

calendar();