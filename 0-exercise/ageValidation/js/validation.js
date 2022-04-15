function ageValidation() {
    let username = prompt("Please enter your username:");
    if (username != null) {
      let age = prompt("Please enter your age:");
      if (age >= 18) {
        document.getElementById("app").innerHTML =
          "Hello " + username + " are of legal age!";
      } else {
        document.getElementById("app").innerHTML =
          "Hello " + username + " are underage!";
      }
    }
  }