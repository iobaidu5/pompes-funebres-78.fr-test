jQuery(document).ready(function ($) {
  var successMessage = `<i class="fa fa-info-circle"></i><b>Succès:</b> Votre demande est envoyée avec succès`;
  var ErrorMessage = `<i class="fa fa-info-circle"></i><b>Erreur:</b> Veuillez vérifier vos données d'entrée`;

  $("#contactForm").on("submit", function (e) {
    sendFormData(e, "#contactForm", "contact");
  });

  $("#devisForm").on("submit", function (e) {
    sendFormData(e, "#devisForm", "devis");
  });

  function sendFormData(e, id, type) {
    e.preventDefault();
    var redirectUrl = $(id)[0]["redirectUrl"]["value"];
    $.ajax({
      url: $(id)[0]["action"],
      type: "POST",
      data: $(id).serialize(),
      datatype: "json",
      success: function (data, response, message) {
        if (type === "contact") {
          document
            .querySelector("#contact-form-response")
            .classList.add("success");
          document.querySelector(
            "#contact-form-response"
          ).innerHTML = successMessage;
        }
        if (type === "devis") {
          document.querySelector("#devis-form-response").classList.add("success");
          document.querySelector(
            "#devis-form-response"
          ).innerHTML = successMessage;
        }
        window.location.href = redirectUrl;
        location.href = redirectUrl;
        localStorage.removeItem('calc_list');
        localStorage.removeItem('calc_volume');
      },
      error: function (jqXHR, textStatus, errorThrown) {
        return;
        if (type === "contact") {
          document.querySelector("#contact-form-response").classList.add("error");
          document.querySelector(
            "#contact-form-response"
          ).innerHTML = ErrorMessage;
        }
        if (type === "devis") {
          document.querySelector("#devis-form-response").classList.add("error");
          document.querySelector(
            "#devis-form-response"
          ).innerHTML = ErrorMessage;
          console.log(textStatus);
        }
      },
    });
  }
  // $("#clone_g_re_captcha").html($("#g_re_captcha").clone(true, true));
  $("#contact-form").prop("disabled", true);
});

var CaptchaCallback = function () {
  jQuery(".g-recaptcha").each(function () {
    grecaptcha.render(this, {
      sitekey: "",
      callback: correctCaptcha,
    });
  });
};

function correctCaptcha() {
  if (grecaptcha === undefined) {
    return;
  }
  console.log(grecaptcha.getResponse());
  document.querySelectorAll(".g-recaptcha").forEach((checkbox) => {
    checkbox.classList.add("hidden");
  });
  document.querySelectorAll(".form-submit").forEach((button) => {
    button.innerHTML = "Envoyer";
    button.disabled = false
  });
}