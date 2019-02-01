//loops over the number of confetti items
for (var i = 0; i < 250; i++) {
  create(i);
}

//create confetti particles
function create(i) {
  
  //generates a random number to decide one of the three colors
  var colourIdx = Math.ceil(Math.random() * 5);
  var colour = "red";

  //select a color for the particle
  switch (colourIdx) {
    case 1:
      colour = "green";
      break;
    case 2:
      colour = "blue";
      break;
    case 3:
      colour = "yellow";
      break;
    case 4:
      colour = "purple";
      break;
    default:
      colour = "red";
  }

  // create a DOM object for particle
  $('<div class="confetti-' + i + " " + colour + '"></div>')
    .css({
      width: 5 + "px",
      height: 5 + "px",
      top: -Math.random() * 20 + "%",
      left: Math.random() * 100 + "%",
      opacity: Math.random() + 0.5,
      transform: "rotate(" + Math.random() * 360 + "deg)"
    })
    .appendTo(".wrapper");

  drop(i);
}

// function to drop a confetti
function drop(x) {
  $(".confetti-" + x).animate(
    {
      top: "100%",
      left: "+=" + Math.random() * 15 + "%"
    },
    Math.random() * 3000 + 2000,
    function() {
      reset(x);
    }
  );
}

// reset the particle so runs forever
function reset(x) {
  $(".confetti-" + x).animate(
    {
      top: -Math.random() * 20 + "%",
      left: "-=" + Math.random() * 15 + "%"
    },
    0,
    function() {
      drop(x);
    }
  );
}

function summerImg() {
  document.getElementById("bg-img").src = "images/sale-summer.jpg";
}
function winterImg() {
  document.getElementById("bg-img").src = "images/sale-winter.jpg";
}
