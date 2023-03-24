const form = document.querySelector("#user_form");
const successModal = new bootstrap.Modal("#sucessModal");
const errorModal = new bootstrap.Modal("#errorModal");
const dataModal = new bootstrap.Modal("#dataModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = {
    name: document.querySelector("#user_name").value,
    email: document.querySelector("#user_email").value,
    phone: document.querySelector("#user_phone").value,
    desc: document.querySelector("#user_desc").value,
  };

  console.log(userInput);

  if (
    userInput.name.length < 3 ||
    userInput.email.length < 8 ||
    userInput.phone.length < 11 ||
    userInput.desc.length < 3
  ) {
    dataModal.show();
  } else {
    const formData = new FormData();
    formData.append("name", userInput.name);
    formData.append("email", userInput.email);
    formData.append("phone", userInput.phone);
    formData.append("desc", userInput.desc);

    fetch("server/postForm.php", { method: "POST", body: formData })
      .then((response) => {
        console.log(response);
        successModal.show();
      })
      .catch((e) => {
        console.log(e);

        errorModal.show();
      });
  }
});
