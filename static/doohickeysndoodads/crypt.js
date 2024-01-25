const crypt = (salt, text) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
  
    return text
      .split("")
      .map(textToChars)
      .map(applySaltToChar)
      .map(byteHex)
      .join("");
  };


const decrypt = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
  };

  const userJaydenAttempt = (password) => {
      var output = document.getElementById("message");
        output.innerHTML = decrypt(password, "7a222f306635323f2a237b612427252d2134293328226b25292a29347c2227342d2134273f7d6625292a29347c66312e2f32237d6178660e2f660c273f2223286a7a243478660f662e293623663f2933662e2730236627662134232732667770322e66042f34322e22273f67660e2334236135663229662b27283f662b293423663123246621272b233566322966242366352334302334612267667a2434780e23233429226615272e3427232f7a69222f3078");
  }

  const userNathanAttempt = (password) => {
    var output = document.getElementById("message");
        output.innerHTML = decrypt(password, "5b030e114714131e0b025a400506040c0015081209034a04080b08155d0306150c0015061e5c4704080b08155d47100f0e13025c4059472f0617171e475651130f47250e15130f03061e472906130f060946475b05155947370b0206140247130f021e4710080913470b0213470a024700084b4714020903470f020b17465b051559472502141347300e140f02144b475b0515592f02021508034734060f1506020e5b48030e1159");
  }