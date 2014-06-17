function getModels() {
    return _.chain(_.range(100))
        .map(function (index) {
            return { name: "Generator" + index, values: _.range(3 * 96) };
        }).value();
}