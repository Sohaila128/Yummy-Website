// Loading 
// document.addEventListener("DOMContentLoaded", function() {
//   var loader = document.querySelector('.loader');
//   if (loader) {
//     loader.style.display = 'block';
    
//       setTimeout(function(){
//           loader.style.opacity = '0';
//           setTimeout(function(){
//             loader.style.display = 'none';
//           }, 2000);
//         }, 2000);
//   }
// });
  //===== Back to top =====//
//Get the button
let mybutton = document.querySelector(".back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Animation on scroll function
    function initAOS() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
window.addEventListener("load", () => {
      initAOS();
});

// COUNTDOWN
window.onload = function () {
  const controller = new AbortController();
  // Set the date we're counting down to
  const countDownDate = new Date("June 1, 2024 08:00:00").getTime();
  const clockDaysElement = document.querySelector(".clock-days");
  const clockHoursElement = document.querySelector(".clock-hours");
  const clockMinutesElement = document.querySelector(".clock-minutes");
  const clockSecondsElement = document.querySelector(".clock-seconds");
  // Create an animation callback every second:
  animationInterval(1000, controller.signal, (time) => {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    clockDaysElement.textContent = days;
    clockHoursElement.textContent = hours;
    clockMinutesElement.textContent = minutes;
    clockSecondsElement.textContent = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      controller.abort();
      document.querySelector(".clock-container").innerHTML = "EXPIRED";
    }
  });
};

function animationInterval(ms, signal, callback) {
  // Prefer currentTime, as it'll better sync animtions queued in the
  // same frame, but if it isn't supported, performance.now() is fine.
  const start = document.timeline
    ? document.timeline.currentTime
    : performance.now();

  function frame(time) {
    if (signal.aborted) return;
    callback(time);
    scheduleFrame(time);
  }

  function scheduleFrame(time) {
    const elapsed = time - start;
    const roundedElapsed = Math.round(elapsed / ms) * ms;
    const targetNext = start + roundedElapsed + ms;
    const delay = targetNext - performance.now();
    setTimeout(() => requestAnimationFrame(frame), delay);
  }

  scheduleFrame(start);
}


// heart icon on click 
document.addEventListener("DOMContentLoaded", function() {
    // Change heart icon on hover
    var heartIcons = document.querySelectorAll('.heartIcon');

    heartIcons.forEach(function(icon) {
        icon.addEventListener('mouseover', function() {
            if (!icon.classList.contains('clicked')) {
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
        });

        icon.addEventListener('mouseout', function() {
            if (!icon.classList.contains('clicked')) {
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        });

        icon.addEventListener('click', function() {
            icon.classList.toggle('clicked');
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        });
    });
});


const inputWrappers = document.querySelectorAll('.input-wrapper');

inputWrappers.forEach(inputWrapper => {
const incrementButton = inputWrapper.querySelector('.increment');
const decrementButton = inputWrapper.querySelector('.decrement');
const quantityInput = inputWrapper.querySelector('.quantity');

incrementButton.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

decrementButton.addEventListener("click", () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
    }
});
});



document.addEventListener("DOMContentLoaded", function() {
  var togglePasswordElements = document.querySelectorAll(".toggle-password");

  togglePasswordElements.forEach(function(togglePasswordElement) {
      togglePasswordElement.addEventListener("click", function() {
          // Toggle the icon classes
          togglePasswordElement.classList.toggle("fa-eye");
          togglePasswordElement.classList.toggle("fa-eye-slash");

          // Find the associated input field
          var input = togglePasswordElement.parentElement.querySelector("input");

          // Toggle the input field type between password and text
          if (input.type === "password") {
              input.type = "text";
          } else {
              input.type = "password";
          }
      });
  });
});


function copyText() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  document.execCommand("copy");
  var copyMessage = document.getElementById("copyMessage");
  copyMessage.innerText = "Copied! " + copyText.value;
  copyMessage.style.display = "block";
  setTimeout(function(){
    copyMessage.style.display = "none";
  }, 2000);
  
  event.preventDefault();
}

// My Profile Club 
function editField(field) {
  document.getElementById(field + 'Container').style.display = 'none';
  document.getElementById('edit' + capitalizeFirstLetter(field) + 'Form').style.display = 'block';
  document.getElementById('new' + capitalizeFirstLetter(field) + 'Input').value = document.getElementById(field + 'Text').innerText;
  event.preventDefault();
}

function updateField(field) {
  var newValue = document.getElementById('new' + capitalizeFirstLetter(field) + 'Input').value;
  document.getElementById(field + 'Text').innerText = newValue;
  document.getElementById(field + 'Container').style.display = 'flex';
  document.getElementById('edit' + capitalizeFirstLetter(field) + 'Form').style.display = 'none';
  event.preventDefault();
}

function cancelEdit(field) {
  document.getElementById(field + 'Container').style.display = 'flex';
  document.getElementById('edit' + capitalizeFirstLetter(field) + 'Form').style.display = 'none';
  event.preventDefault();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function toggleFamilyPart() {
  event.preventDefault();
  var familyPart = document.getElementById("familyPart");
  if (familyPart.style.display === "none") {
    familyPart.style.display = "block";
  } else {
    familyPart.style.display = "none";
  }
}

 // Function to toggle between personal info and family edits sections
 function toggleSections() {
  event.preventDefault();
  var personalInfoSection = document.querySelector('.personal-info');
  var familyEditsSection = document.querySelector('.family-edits');

  personalInfoSection.style.display = 'none';
  familyEditsSection.style.display = 'block';
}

function backToProfile() {
  var personalInfoSection = document.querySelector('.personal-info');
  var familyEditsSection = document.querySelector('.family-edits');

  personalInfoSection.style.display = 'block';
  familyEditsSection.style.display = 'none';
}
function toggleSectionsTwo() {
  event.preventDefault();
  var saveInformationSection = document.querySelector('.save-information');
  var updateProfileSection = document.querySelector('.update-profile');

  saveInformationSection.style.display = 'none';
  updateProfileSection.style.display = 'block';
}

function backToUpdateSection() {
  event.preventDefault();
  var saveInformationSection = document.querySelector('.save-information');
  var updateProfileSection = document.querySelector('.update-profile');

  saveInformationSection.style.display = 'block';
  updateProfileSection.style.display = 'none';
}



// membership 
document.addEventListener("DOMContentLoaded", function() {
  var confirmButton = document.querySelector(".btn.btn-bg-black-primary");

  confirmButton.addEventListener("click", function(event) {
      event.preventDefault(); 

      var selectedOption = document.querySelector('input[name="appointment"]:checked');

      $('#men-popup').modal('hide');

      if (selectedOption.id === "appointment-one" || selectedOption.id === "appointment-two") {
          $('#men-popup-fixed').modal('show');
      } else if (selectedOption.id === "appointment-three") {
          $('#men-popup-flexible').modal('show'); 
      }
  });

  // Back button functionality
var backButton = document.querySelectorAll(".back-button");

if (backButton) {
  backButton.forEach(function(button) {
      button.addEventListener("click", function(event) {
          event.preventDefault();
          var currentModal = button.closest('.modal');
          var previousModal = currentModal.previousElementSibling;

          $(currentModal).modal('hide');

          if (previousModal) {
              $(previousModal).modal('show');
          }
      });
  });
}   
});


// calender 
const isLeapYear = (year) => {
  return (
    (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  );
};

const getFebDays = (year) => {
  return isLeapYear(year) ? 29 : 28;
};

let calendar = document.querySelector('.calendar');
const month_names = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
let month_picker = document.querySelector('#month-picker');
const dayTextFormate = document.querySelector('.day-text-formate');
const timeFormate = document.querySelector('.time-formate');
const dateFormate = document.querySelector('.date-formate');

month_picker.onclick = () => {
  month_list.classList.remove('hideonce');
  month_list.classList.remove('hide');
  month_list.classList.add('show');
  dayTextFormate.classList.remove('showtime');
  dayTextFormate.classList.add('hidetime');
  timeFormate.classList.remove('showtime');
  timeFormate.classList.add('hideTime');
  dateFormate.classList.remove('showtime');
  dateFormate.classList.add('hideTime');
};

const generateCalendar = (month, year) => {
  let calendar_days = document.querySelectorAll('.calendar-days');
  calendar_days.forEach(calendarDays => {
    calendarDays.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
      31,
      getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    let currentDate = new Date();

    month_picker.innerHTML = month_names[month];

    calendar_header_year.innerHTML = year;

    let first_day = new Date(year, month);

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
      let day = document.createElement('div');

      if (i >= first_day.getDay()) {
        day.innerHTML = i - first_day.getDay() + 1;

        if (
          i - first_day.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add('current-date');
        }
      }
      calendarDays.appendChild(day);
    }
  });
};

let month_list = calendar.querySelector('.month-list');
month_names.forEach((e, index) => {
  let month = document.createElement('div');
  month.innerHTML = `<div>${e}</div>`;

  month_list.append(month);
  month.onclick = () => {
    currentMonth.value = index;
    generateCalendar(currentMonth.value, currentYear.value);
    month_list.classList.replace('show', 'hide');
    dayTextFormate.classList.remove('hideTime');
    dayTextFormate.classList.add('showtime');
    timeFormate.classList.remove('hideTime');
    timeFormate.classList.add('showtime');
    dateFormate.classList.remove('hideTime');
    dateFormate.classList.add('showtime');
  };
});

(function () {
  month_list.classList.add('hideonce');
})();
document.querySelector('#pre-year').onclick = () => {
  --currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector('#next-year').onclick = () => {
  ++currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
};

let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector('.time-formate');
const todayShowDate = document.querySelector('.date-formate');

const currshowDate = new Date();
const showCurrentDateOption = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
const currentDateFormate = new Intl.DateTimeFormat('en-US', showCurrentDateOption).format(currshowDate);
todayShowDate.textContent = currentDateFormate;
setInterval(() => {
  const timer = new Date();
  const option = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
  let time = `${`${timer.getHours()}`.padStart(
    2,
    '0'
  )}:${`${timer.getMinutes()}`.padStart(
    2,
    '0'
  )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
  todayShowTime.textContent = formateTimer;
}, 1000);




// Animation on scroll function
function initAOS() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
window.addEventListener("load", () => {
      initAOS();
});

