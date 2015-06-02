var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Experiments;
(function (Experiments) {
    var Models;
    (function (Models) {
        var QuestionModel = (function (_super) {
            __extends(QuestionModel, _super);
            function QuestionModel(value) {
                _super.call(this, value);
            }
            return QuestionModel;
        })(kendo.data.ObservableObject);
        Models.QuestionModel = QuestionModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=question.model.js.map