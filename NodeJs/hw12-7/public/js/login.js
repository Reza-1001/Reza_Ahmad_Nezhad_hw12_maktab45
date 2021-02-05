$(document).ready(() => {
  $("#submit").on("click", () => {
    if ($("#name").val().trim() === "" || $("#pass").val().trim() == "") {
      alert("Fill in user and pass");
    }
    else{
      $.ajax({
        method: "POST",
        url: "/validate",
        data:'{"reza","reza"}',
        success: function (response) {
          
        },
      });
    }
  });
});
