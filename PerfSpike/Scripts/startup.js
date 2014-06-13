$(document).ready(function() {


    var viewModel = {
        people: getModels()
    }

    var docFragment = document.createDocumentFragment();
    var tableContainer = document.createElement("table");
    tableContainer.setAttribute("class", "table table-condensed")
    
    var tableHead = document.createElement("thead");

    var tableBody = document.createElement("tbody");
    tableBody.setAttribute("data-bind", "foreach:people");

    var tableRow = document.createElement("tr");

    var tableCellName = document.createElement("td");
    tableCellName.setAttribute("data-bind", "text:name");

    var tableValuesBindingComment = document.createComment("ko foreach: values");

    var tableCellValues = document.createElement("td");
    tableCellValues.setAttribute("data-bind", "text:$data");

    var tableValuesBindingClosingComment = document.createComment("/ko");

    tableContainer.appendChild(tableHead);
    tableContainer.appendChild(tableBody);
    tableBody.appendChild(tableRow);
    tableRow.appendChild(tableCellName);
    tableRow.appendChild(tableValuesBindingComment);
    tableRow.appendChild(tableCellValues);
    tableRow.appendChild(tableValuesBindingClosingComment);
    var el = document.getElementById('main-table');
    docFragment.appendChild(tableContainer);
    ko.applyBindings(viewModel, tableContainer);
    el.appendChild(docFragment);
});

function getModels() {
    return _.chain(_.range(100))
        .map(function(index) {
            return { name: "Generator" + index, values: _.range(3 * 96) };
        }).value();
}