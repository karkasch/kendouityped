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
            QuestionModel.createInstance = function (data) {
                if (data.questionType == "T")
                    return new QuestionAnswerTextModel(data);
                return new QuestionModel(data);
            };
            return QuestionModel;
        })(kendo.data.ObservableObject);
        Models.QuestionModel = QuestionModel;
        var QuestionAnswerModel = (function (_super) {
            __extends(QuestionAnswerModel, _super);
            function QuestionAnswerModel(value) {
                _super.call(this, value);
            }
            return QuestionAnswerModel;
        })(QuestionModel);
        Models.QuestionAnswerModel = QuestionAnswerModel;
        var QuestionAnswerTextModel = (function (_super) {
            __extends(QuestionAnswerTextModel, _super);
            function QuestionAnswerTextModel(value) {
                _super.call(this, value);
            }
            return QuestionAnswerTextModel;
        })(QuestionAnswerModel);
        Models.QuestionAnswerTextModel = QuestionAnswerTextModel;
        var QuestionAnswerListModel = (function (_super) {
            __extends(QuestionAnswerListModel, _super);
            function QuestionAnswerListModel(value) {
                _super.call(this, value);
            }
            return QuestionAnswerListModel;
        })(QuestionAnswerModel);
        Models.QuestionAnswerListModel = QuestionAnswerListModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=question.model.js.map