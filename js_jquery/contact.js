var currentHour = new Date().getHours();

var greeting = 'Good ';
if (currentHour >= 5 && currentHour < 12) {
  greeting = greeting.concat('morning!');
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = greeting.concat('afternoon!');
} else {
  greeting = greeting.concat('evening!');
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var files = event.dataTransfer.files;
  handleFiles(files);
}

function handleFiles(files) {
  var messageTextArea = document.getElementById('message');

  for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();

      reader.onload = function (e) {
          var fileContent = e.target.result;

          messageTextArea.value += '\n\n--- ' + file.name + ' ---\n' + fileContent;
      };

      reader.readAsText(file);
  }
}
