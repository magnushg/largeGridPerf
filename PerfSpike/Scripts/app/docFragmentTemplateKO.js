$(document).ready(function () {

    var viewModel = {
        people: getModels(),
        contentRendered: ko.observable(false),
        rendered: function() {
           // this.contentRendered(true);
           document.getElementById("rendering-message").style.display = "none";        
        }
        }
    var docFragmentHeader = document.createDocumentFragment();
    var docFragmentContent = document.createDocumentFragment();

    var headerTemplateStart = document.createComment("ko template: {name: 'header'}");
    var headerTemplateEnd = document.createComment("/ko");

    docFragmentHeader.appendChild(headerTemplateStart);
    docFragmentHeader.appendChild(headerTemplateEnd);

    var contentTempateStart = document.createComment("ko template: {name: 'main-table', afterRender: rendered.bind($root)}");
    var contentTemplateEnd = document.createComment("/ko");

    docFragmentContent.appendChild(contentTempateStart);
    docFragmentContent.appendChild(contentTemplateEnd);

    var header = document.getElementById('header-container');
    var content = document.getElementById('content-container');

    header.appendChild(docFragmentHeader);
    ko.applyBindings(viewModel, header);

    setTimeout(function() {
        content.appendChild(docFragmentContent);
        ko.applyBindings(viewModel, content);
    }, 200);

});