var currentHour = new Date().getHours();

var greeting = 'Good ';
if (currentHour >= 5 && currentHour < 12) {
  greeting = greeting.concat('morning!');
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = greeting.concat('afternoon!');
} else {
  greeting = greeting.concat('evening!');
}

var timeOfTheDay = document.getElementById('greetings')
if (timeOfTheDay)
  timeOfTheDay.innerText = greeting;