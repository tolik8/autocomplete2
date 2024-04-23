$(document).ready(function() {

    function DevBridgeAutocompleteInit() {
        //https://www.devbridge.com/sourcery/components/jquery-autocomplete/
        $('#find').devbridgeAutocomplete({
            serviceUrl: window.location + 'api/',
            type: 'GET',
            noCache: false,
            minChars: 2,
            onSelect: function (suggestion) {
                //console.log(suggestion.data + ' ' + suggestion.value);
                
                // Створення нового елемента div
                var nameBlock = $('<div class="name-block"></div>');

                // Створення нового елемента input
                var newInput = $('<input type="text" name="pib[' + suggestion.data + ']" class="dynamic-input" value="' + suggestion.value + '" readonly>');
                
                // Створення div для видалення інпута
                //var deleteButton = $('<span class="delete-button">X</span>');
                var deleteButton = $('<img class="delete-button" src="/img/del.png">');
                
                // Додавання інпута та кнопки в блок імені
                nameBlock.append(newInput); // Додати інпут до блоку імені
                nameBlock.append(deleteButton); // Додати кнопку видалення до блоку імені

                // Додати блок імені з усіма елементами в контейнер
                $('#input-container').append(nameBlock);
                
                // Очищення поля, в якому ведеться пошук
                $('#find').val('')
                
                // Обробник події для видалення новостворених елементів
                deleteButton.click(function() {
                    nameBlock.remove();
                });
            }
        });
    }

    DevBridgeAutocompleteInit();
    
    // Обробник події для видалення
    $('.delete-button').click(function() {
        $(this).parent().remove();
    });

});