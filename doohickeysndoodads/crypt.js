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

  const userAttempt = (password) => {
      var output = document.getElementById("message");
        output.innerHTML = decrypt(password, "7a222f306635323f2a237b612427252d2134293328226b25292a29347c2227342d2134273f7d6625292a29347c66312e2f32237d6178660e2f660c273f2223286a7a243478660f662e293623663f2933662e2730236627662134232732667770322e66042f34322e22273f67667a2434780e23233429226615272e3427232f");
  }