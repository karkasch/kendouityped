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
        var QuestionsViewModel = (function (_super) {
            __extends(QuestionsViewModel, _super);
            function QuestionsViewModel(chapterId) {
                _super.call(this);
                this.test = 'questions test';
                this.questionsDataSource = new Experiments.Data.QuestionsDataSource(chapterId);
            }
            return QuestionsViewModel;
        })(kendo.data.ObservableObject);
        Models.QuestionsViewModel = QuestionsViewModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=questions.viewmodel.js.map