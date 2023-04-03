const loadAnims = url => {
  dropdown = document.getElementById("dropdown");
  jQuery.get({
      url: url,
      success: data => {
          data.forEach((weapon, i) => {
            var lines = data.split("\n");
            // Loop through the lines and add them as options to the select element
            for (var i = 0; i < lines.length; i++) {
              var option = document.createElement("option");
              option.text = lines[i];
              dropdown.add(option);
            }
          })
      },
  })
}

$(document).ready(function () {
  loadAnims("https://raw.githubusercontent.com/Flexlion/flexlion.github.io/master/assets/animations.txt")
})