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
                
                // Створення нового елемента input
                var newInput = $('<input type="text" name="pib[]" class="dynamic-input" value="' + suggestion.value + '">');
                
                // Створення div для видалення інпута
                var deleteButton = $('<div class="delete-button">X</div>');
                
                // Додавання інпута та кнопки в контейнер (наприклад, body)
                $('#input-container').append(newInput);
                newInput.after(deleteButton);
                
                // Очищення поля, в якому ведеться пошук
                $('#find').val('')
                
                // Обробник події для видалення
                deleteButton.click(function() {
                    newInput.remove();
                    deleteButton.remove();
                });
            }
        });
    }

    DevBridgeAutocompleteInit();

});