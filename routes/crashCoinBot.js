var sphero = require("sphero"),
  CrashCoinBot = sphero("F3:F2:6D:55:71:09"); // change BLE address accordingly

CrashCoinBot.connect(function() {
  // roll BB-8 in a random direction, changing direction every second
  setInterval(function() {
    var direction = Math.floor(Math.random() * 360);
    CrashCoinBot.roll(150, direction);
  }, 1000);
});



async function onCollision() {
  // code to execute on collision
}
registerEvent(EventType.onCollision, onCollision);


orb.connect(function() {
  // turn Sphero green
  orb.color("green");

  // roll Sphero forward
  orb.roll(150, 0);

  // have Sphero tell you when it detect collisions
  orb.detectCollisions();

  // when Sphero detects a collision, turn red for a second, then back to green
  orb.on("collision", function(data) {
    console.log("collision detected");
    console.log("  data:", data);

    orb.color("red");

    setTimeout(function() {
      orb.color("green");
    }, 100);
  });
});
