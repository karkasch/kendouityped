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
        var QuestionsDataSourceItemModel = (function (_super) {
            __extends(QuestionsDataSourceItemModel, _super);
            function QuestionsDataSourceItemModel(data) {
                _super.call(this, data);
            }
            QuestionsDataSourceItemModel.prototype.showQuestionDetails = function (e) {
                console.log('showQuestionDetails', e);
                var questionDetailsViewModel = new Models.QuestionDetailsViewModel(this.chapterId, this.id);
                var questionDetailsView = new kendo.View('#question-details-template', { model: questionDetailsViewModel });
                layout.showIn('#question-details-view', questionDetailsView);
            };
            return QuestionsDataSourceItemModel;
        })(kendo.data.Model);
        Models.QuestionsDataSourceItemModel = QuestionsDataSourceItemModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=questions.datasourceitem.model.js.map