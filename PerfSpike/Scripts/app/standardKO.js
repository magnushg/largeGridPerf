$(document).ready(function () {

    var viewModel = {
        people: getModels()
    }
    
    ko.applyBindings(viewModel);
});