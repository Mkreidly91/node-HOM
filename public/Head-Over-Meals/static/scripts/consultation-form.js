$(document).on("submit", "#consultation-form", function (e) {
  //preventDefault prevents the page from reloading on submit,as in prevents the submit event defualt behaviour.
  e.preventDefault();

  let emailDiv = document.getElementById("email-field");
  let thanks = document.getElementsByClassName("thanks");
  let submit = document.getElementById("form-submit");

  //This function executes on submit, it sends an ajax request with sends the email input value to the back end,
  //and returns a response based on the validity of the email according to the validate-email module.
  function validateInput() {
    $.ajax({
      type: "POST",
      url: "/",
      data: {
        name: $("#name").val(),
        lastname: $("#lastname").val(),
        email: $("#email").val(),
      },
      //executes code before sending request,in this case verifying class adds animation to the submit button.
      beforeSend: function () {
        submit.classList.add("verifying");
      },
      /*executes code after getting a response,here i used a custom html attribute called "data-error"
                          to display the error message,to be used as content for the email-field's pseudo element.*/
      success: function (response) {
        emailDiv.setAttribute("data-error", response);
        submit.classList.remove("verifying");
        //if response is empty, change border and text-color to red.
        if (response === "") {
          emailDiv.children[0].style.border = "1px solid red";
          emailDiv.children[0].style.color = "red";
        } else {
          /*else highlight border and text-color in green, then display "thanks message"
                            and clear the form mid animation for a smooth transition.*/
          let footer = document.getElementsByTagName("footer")[0];
          emailDiv.children[0].style.border = "1px solid green";
          emailDiv.children[0].style.color = "green";

          setTimeout(function () {
            thanks[0].style.display = "flex";
            footer.style.transformOrigin = "top";
            footer.style.animation =
              "white-footer 6s cubic-bezier(0, 0, 0.4, 1.74) forwards";
          }, 2000);

          let clearform = () => {
            document.getElementById("consultation-form").reset();
            emailDiv.children[0].style.border = "1px solid grey";
            emailDiv.children[0].style.color = "black";
            emailDiv.setAttribute("data-error", "");
          };

          setTimeout(clearform, 4000);
          thanks[0].onanimationend = () => {
            footer.style.animation = "none";
            thanks[0].style.display = "none";
          };
        }
      },
    });
  }

  validateInput();
});
