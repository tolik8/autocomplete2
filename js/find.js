$(document).ready(function() {

    function DevBridgeAutocompleteInit() {
        //https://www.devbridge.com/sourcery/components/jquery-autocomplete/
        $('#find').devbridgeAutocomplete({
            serviceUrl: 'http://' + location.hostname + '/api/',
            type: 'GET',
            noCache: false,
            minChars: 2,
            onSelect: function (suggestion) {
                console.log(suggestion.data + ' ' + suggestion.value);
            }
        });
    }

    DevBridgeAutocompleteInit();

});