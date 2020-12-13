$(function () {
    $("#contactForm input,#contactForm button")
        .jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {},
        submitSuccess: function ($form, event) {
            event.preventDefault();
            var name = $("input#name").val();
            var phone = $("input#phone").val();
            $this = $("#sendMessageButton");
            $this.prop("disabled", true);
            $.ajax({
                url: "./assets/mail/contact_me.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone
                },
                cache: false,
                success: function () {
                    $("#success").html("<div class='alert alert-success'>");
                    $("#success > .alert-success")
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $("#success > .alert-success").append(
                        "<strong>Звонок заказан. С Вами свяжутся.</strong>"
                    );
                    $("#success > .alert-success").append("</div>");
                    $("#contactForm").trigger("reset");
                },
                error: function () {
                    $("#success").html("<div class='alert alert-danger'>");
                    $("#success > .alert-danger")
                        .html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $("#success > .alert-danger").append(
                        $("<strong>").text("Не удалось заказать звонок.")
                    );
                    $("#success > .alert-danger").append("</div>");
                    $("#contactForm").trigger("reset");
                },
                complete: function () {
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                },
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $('a[data-toggle="tab"]').click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$("#name").focus(function () {
    $("#success").html("");
});
