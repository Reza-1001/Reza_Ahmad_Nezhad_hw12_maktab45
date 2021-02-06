$(document).ready(() => {
  $("#submit").on("click", () => {
    if ($("#name").val().trim() === "" || $("#pass").val().trim() == "") {
      alert("Fill in user and pass");
    } else {
      let myBody = {
        userName: $("#name").val(),
        password: $("#pass").val(),
      };
      myBody = JSON.stringify(myBody);

      $.ajax({
        method: "POST",
        url: "http://127.0.0.1:5005/",
        contentType: "application/json",
        data: myBody,
        success: function (response) {
          if (+response === 1) {
            alert("ورود موفقیت آمیز");
          } else {
            alert("کاربری با این مشخصات وجود ندارد");
            $("#name").css("border", "2px solid red");
            $("#name").css("color", "red");
            $("#pass").css("border", "2px solid red");
            $("#pass").css("color", "red");
          }
        },
      });
    }
  });
  $("#name").on("change", () => {
    $("#name").css("border", "1px solid black");
    $("#name").css("color", "black");
    $("#pass").css("border", "1px solid black");
    $("#pass").css("color", "black");
  });
});
