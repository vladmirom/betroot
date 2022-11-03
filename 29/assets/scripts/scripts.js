/**
 * Minimum tasks
 */

// Fixing floating point error.
let firstCalculation = (0.1 + 0.2).toFixed(1);
document.getElementById("floatingPointErrorResultOne").innerHTML = firstCalculation;

let secondCalculation = (0.1 * 10 + 0.2 * 10) / 10;
document.getElementById("floatingPointErrorResultTwo").innerHTML = secondCalculation;


// Calculation of string and integer
let myString = '1',
    myInteger = 2;

let thirdCalculation = myString + myInteger; // Normal concatenation.
let fourthdCalculation = Number(myString) + myString; // First convert into int, then add.
let fifthCalculation = parseInt(myString, 10) + myString; // First convert into int, then add.

document.getElementById("integerAndStringResultOne").innerHTML = thirdCalculation;
document.getElementById("integerAndStringResultTwo").innerHTML = fourthdCalculation;
document.getElementById("integerAndStringResultThree").innerHTML = fifthCalculation;

// Asking the side of quadrangle
document.querySelector('#flashDriveBtn').addEventListener('click', getFlashDriveCapacity);

function getFlashDriveCapacity( ) {
  let flashSize = prompt("What is the size of your flash drive in GB?");
  let flashSizeInMB = flashSize * 1000;
  let fileSize = 820;
  let numberOfFiles =  Math.round(flashSizeInMB / fileSize);
  
  const flashDriveStandardSizes = [64, 128, 256, 512];
  let message = `Huh? What size is this, I can't reognize this.`;

  if ( flashSize < 64 ) {
    message = `Pfff, do you call this a flash drive? You can hardly fit in just ${numberOfFiles} files! Pathetic!`;
  } else if ( flashSize >= 64 && flashSize < 128 ) {
    message = `Meh. Not that big, but could contain ${numberOfFiles} files.`;
  } else if ( flashSize >= 128 && flashSize < 256 ) {
    message = `Oh, wow, that's a decent size already! ${numberOfFiles} files will fit in easily!`;
  } else if ( flashSize >= 256 && flashSize < 512 ) {
    message = `Wooow, that's quite a lot to take. Do you have enough of files, because this little baby can fit in ${numberOfFiles} of them.`;
  } else if ( flashSize > 512 ) {
    message = `Duude, wait, are you from the planet Earth? We don't have such cool technologies here. You can upload ${numberOfFiles} files into this masterpiece. Where did you get it from? 👽`;
  }

  let flashDriveCapacityReply = document.getElementById("flashDriveResult");
  flashDriveCapacityReply.innerHTML = message;
}

/**
 * Medium tasks
 */

// Asking user for cash to buy chockolates.
document.querySelector('#cashBtn').addEventListener('click', getMoneyForChocolate);
const wonkaBarPrice = 5.5;

function getMoneyForChocolate( ) {
  let cash = prompt("How much money do you have with you?"),
      numberOfWonkaBars = cash / wonkaBarPrice,
      change = cash % wonkaBarPrice,
      message,
      giphy,
      willyWonkaGiphy = document.getElementById("willyWonkaGiphy"),
      willyWonkaReply = document.getElementById("willyWonkaReply");
console.log(numberOfWonkaBars);
  if ( numberOfWonkaBars < 1 ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/SKRcWlLOJWoAAAAC/wallet-broke.gif" alt="Wallet Broke GIF - Wallet Broke Poor GIFs">`;
    message = `No money, no honey. We can't buy anything with ${cash}€! The prices are insane!`;
  } else if ( numberOfWonkaBars >= 1 && numberOfWonkaBars < 2 ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/53jKY28Sm44AAAAd/violet-beauregarde-karate-girl.gif" alt="Wallet Broke GIF - Wallet Broke Poor GIFs">`;
    message = `We have enough just for one Wonka Bar. Let's be fit like Violet Beauregarde!`;
  } else if ( numberOfWonkaBars > 1 && numberOfWonkaBars < 5 ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/hDI8fRd1lvoAAAAC/gamer-game.gif" alt="Gamer Telekuk GIF - Gamer Game Telekuk GIFs">`;
    message = `${Math.round(numberOfWonkaBars)} is not enough bars! I understand that we have ${change}€ left, but we can't buy more.`;
  } else if ( numberOfWonkaBars >= 5 && numberOfWonkaBars <= 10 ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/lgA-GrnDeJ4AAAAd/charlie-and-the-chocolate-factory-chocolate.gif" alt="Charlie And The Chocolate Factory Chocolate GIF - Charlie And The Chocolate Factory Chocolate Golden Ticket GIFs">`;
    message = `You do love chocolate, you can buy ${Math.round(numberOfWonkaBars)} bars, and you will have ${change}€ left from your ${cash}.`;
  } else if ( numberOfWonkaBars > 10 ) {
    giphy = `<img class="section-medium__task-meme-image" src="https://media.tenor.com/jJDjKz_KjO4AAAAC/willy-wonka-and-the-chocolate-factory-veruca-salt.gif" alt="Charlie And The Chocolate Factory ">`;
    message = `Rich... You don't have to rub into our faces that you can buy ${Math.round(numberOfWonkaBars)} bars, and I'm sure that you don't care of ${change}€ change.`;
  }

  willyWonkaGiphy.innerHTML = giphy;
  willyWonkaReply.innerHTML = message;
}

/**
 * Difficult tasks
 */

// Asking the radius of circle
document.querySelector('#cRadiusBtn').addEventListener('click', getCircleRadius);

function getCircleRadius( ) {
  let cRadius = prompt("What is the radius of the circle in meters?");
  const piNumber = 3.14159265;
  let cArea = piNumber * (cRadius ** 2);
  let cAreaRounded = Math.round(cArea);
  let message = `The area of that building is ${cAreaRounded} meters.`;

  let qQuestionReply = document.getElementById("cRadiusReply");
  qQuestionReply.innerHTML = message;
}

// Asking the distance between cities and time in route.
document.querySelector('#speedBtn').addEventListener('click', getKmPerHour);

function getKmPerHour( ) {
  let distance = document.getElementById('speedCalculationDistance').value;
  let time = document.getElementById('speedCalculationTime').value;

  let kmPerHour = distance / time;
  let speedRounded = Math.round(kmPerHour);
  let message = `If you plan to travel ${distance} kilometers in ${time} hours, you should be traveling around ${speedRounded} kilometers per hour.`;

  console.log(message);

  let qQuestionReply = document.getElementById("kmPerHourReply");
  qQuestionReply.innerHTML = message;
}

// Converting USD to Eur.
document.querySelector('#convertBtn').addEventListener('click', convertUsdEuro);

function convertUsdEuro( ) {
  let usd = prompt("Add your amount of USD.");
  let convertionRate = 1.0036;

  let eur = usd * convertionRate;
  let eurRounded = Math.round(eur);
  let message = `If you exchange &#36;${usd} to €, you will receive <strong>${eurRounded}€<strong>.`;

  let qQuestionReply = document.getElementById("convertReply");
  qQuestionReply.innerHTML = message;
}