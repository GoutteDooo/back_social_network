module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo")) errors.pseudo = "Pseudo incorrect.";

  if (err.message.includes("email")) errors.email = "Email incorrect.";
  console.log(err);

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire plus de 5 caractères.";

  if (err.code === 11000) {
    if (Object.keys(err.keyValue)[0].includes("pseudo"))
      errors.pseudo = "Ce pseudo est déjà pris.";

    if (Object.keys(err.keyValue)[0].includes("email"))
      errors.email = "Cet email est déjà pris.";
  }

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu.";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe ne correspond pas.";

  return errors;
};

module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };

  if (err.message.includes("invalid file"))
    errors.format = "Format incompatible.";

  if (err.message.includes("over max size"))
    errors.format = "Fichier trop volumineux, choisissez 500Ko ou moins svp.";

  return errors;
};
