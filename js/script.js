$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$('.list-item').on('click', function () {
    $('#myModal').modal("show");
});

// Validation

// Устанавливаем обработчик потери фокуса для всех полей ввода текста
$('input#email, input#name').on("change", function () {

    // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
    var id = $(this).attr('id');
    var val = $(this).val();

    // После того, как поле потеряло фокус, перебираем значения id, совпадающие с id данного поля
    switch (id) {
        // Проверка поля "Имя"
        case 'name':
            var rv_name = /^[a-zA-Zа-яА-Я]+$/; // используем регулярное выражение

            // Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
            // то добавляем этому полю класс .not_error,
            // и ниже в контейнер для ошибок выводим слово " Принято", т.е. валидация для этого поля пройдена успешно

            if (val.length > 2 && val != '' && rv_name.test(val)) {
                $(this).addClass('not_error');
            }

            // Иначе, мы удаляем класс not-error и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
            // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

            else {
                $(this).removeClass('not_error').addClass('error');
                $(this).next('.error-box').text('Enter correct Name')
                    .css('color', '#fff')
            }
            break;

        // Проверка email
        case 'email':
            var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
            if (val != '' && rv_email.test(val)) {
                $(this).addClass('not_error');
            }
            else {
                $(this).removeClass('not_error').addClass('error');
                $(this).next('.error-box').text('Enter correct Email')
                    .css('color', '#fff')
            }
            break;

    } // end switch(...)

}); // end blur()

// Теперь отправим наше письмо с помощью AJAX
// $('#requestForm').on("submit", function (e) {
//
//     // Запрещаем стандартное поведение для кнопки submit
//     e.preventDefault();
//
//     // После того, как мы нажали кнопку "Отправить", делаем проверку,
//     // если кол-во полей с классом .not_error равно 3 (так как у нас всего 3 поля), то есть все поля заполнены верно,
//     // выполняем наш Ajax сценарий и отправляем письмо адресату
//
//     if ($('.not_error').length == 2) {
//         // Eще одним моментом является то, что в качестве указания данных для передачи обработчику send.php, мы обращаемся $(this) к нашей форме,
//         // и вызываем метод .serialize().
//         // Это очень удобно, т.к. он сразу возвращает сгенерированную строку с именами и значениями выбранных элементов формы.
//
//         $.ajax({
//             url: 'send.php',
//             type: 'post',
//             data: $(this).serialize(),
//
//             beforeSend: function (xhr, textStatus) {
//                 $('form#feedback-form :input').attr('disabled', 'disabled');
//             },
//
//             success: function (response) {
//                 $('form#feedback-form :input').removeAttr('disabled');
//                 $('form#feedback-form :text').val('').removeClass().next('.error-box').text('');
//                 alert(response);
//             }
//         }); // end ajax({...})
//     }
//
//     // Иначе, если количество полей с данным классом не равно значению 3, мы возвращаем false,
//     // останавливая отправку сообщения в невалидной форме
//     else {
//         return false;
//     }
//
// }); // end submit()

// $("#requestForm").on("submit", function (e) {
//     e.preventDefault();
//
//     if ($("#name").val() == '' || $("#email").val() == '') {
//         $(this).css("backgroundColor", "#ff5e42");
//     }
// })


