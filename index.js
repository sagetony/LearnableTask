const mastercardValidate =
  /^5[1-5]{1}[0-9]{2}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}$/;

const visaValidate = /^4{1}[0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}$/;

const expressValidate =
  /^3[4|7]{1}[0-9]{2}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{3}$/;

// NOTE: Card Type: VISA|MASTERCARD|EXPRESS
const ValidateCard = (cardType, cardNumber) => {
  if (cardType == "MASTERCARD") {
    const cardNumberValidate = mastercardValidate.test(cardNumber);
    if (cardNumberValidate == true) {
      console.log(`YOUR ${cardType} WITH CARD NUMBER ${cardNumber} IS VALID`);
    } else {
      ("INVALID CARD");
    }
  } else if (cardType == "VISA") {
    const cardNumberValidate = visaValidate.test(cardNumber);
    if (cardNumberValidate == true) {
      console.log(`YOUR ${cardType} WITH CARD NUMBER ${cardNumber} IS VALID`);
    } else {
      ("INVALID CARD");
    }
  } else if (cardType == "EXPRESS") {
    const cardNumberValidate = expressValidate.test(cardNumber);
    if (cardNumberValidate == true) {
      console.log(`YOUR ${cardType} WITH CARD NUMBER ${cardNumber} IS VALID`);
    } else {
      ("INVALID CARD");
    }
  } else {
    ("INVALID CARD");
  }
};


ValidateCard("VISA", 4056310682833213);
