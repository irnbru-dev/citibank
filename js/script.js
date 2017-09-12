$(function () {
    $('.list-item').on('click', function () {
        $('#myModal').modal("show");
    });

// Validation

    $('input#email, input#name').on("change", function () {

        var id = $(this).attr('id');
        var val = $(this).val();


        switch (id) {

            // Проверка email
            case 'email':
                var reg_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;

                if (val != '' && reg_email.test(val)) {
                    $(this).removeClass('error').addClass('not_error').tooltip('dispose');
                }
                else {
                    $(this).removeClass('not_error').addClass('error').tooltip('show');
                }
                break;

            // Проверка поля "Имя"
            case 'name':
                var reg_name = /^[a-zA-Zа-яА-Я- ]+$/;

                if (val != '' && reg_name.test(val)) {
                    $(this).removeClass('error').addClass('not_error').tooltip('dispose');
                }
                else {
                    $(this).removeClass('not_error').addClass('error').tooltip('show');
                }
                break;
        }
    });

    $('#requestForm').on("submit", function (e) {

        e.preventDefault();


        if ($('.not_error').length === 2 && $('#checkbox').prop('checked') && $('#select').val() !== '') {

            $.post('send.php', $(this).serialize(), function (response) {
                console.log(response);
            })
        }
        else {
            return false;
        }

    });
});


