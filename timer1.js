const args = process.argv;
const beepDelays = args.slice(2);

const howManyBeeps = function (beepsDelays) {
  for (x = beepDelays.length; x >= 0; x--) {
    beepDelays[x] = Number(beepDelays[x]);
    //console.log(beepDelays);

    if (!beepDelays[x] || beepDelays[x] <= 0) {
      beepDelays.splice(x, 1);
    }
  }
  return beepDelays;
};

const timer = function (numOfBeeps) {
  numOfBeeps = howManyBeeps(beepDelays);
  for (beep of numOfBeeps) {
    beep *= 1000;
    setTimeout(() => {
      process.stdout.write(".");
    }, beep);
  }
};
timer();
