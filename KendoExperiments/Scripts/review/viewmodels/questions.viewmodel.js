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
                var _this = this;
                _super.call(this);
                //this.questionsDataSource = new Experiments.Data.QuestionsDataSource(chapterId);
                this.questions = new kendo.data.ObservableArray([]);
                $.ajax({
                    url: '/api/v1/chapters/' + chapterId + '/questions/',
                    contentType: 'application/json'
                }).done(function (response) {
                    $.each(response, function (index, item) {
                        _this.questions.push(new QuestionViewModel(chapterId, new Models.QuestionModel(item)));
                    });
                });
            }
            return QuestionsViewModel;
        })(kendo.data.ObservableObject);
        Models.QuestionsViewModel = QuestionsViewModel;
        var QuestionViewModel = (function (_super) {
            __extends(QuestionViewModel, _super);
            function QuestionViewModel(chapterId, question) {
                _super.call(this);
                this.question = question;
            }
            QuestionViewModel.prototype.showQuestionDetails = function (e) {
                console.log('showQuestionDetails', e);
                //var questionDetailsViewModel = new QuestionDetailsViewModel(this.chapterId, this.id);
                //var questionDetailsView = new kendo.View('#question-details-template', { model: questionDetailsViewModel });
                //layout.showIn('#question-details-view', questionDetailsView);
            };
            return QuestionViewModel;
        })(kendo.data.ObservableObject);
        Models.QuestionViewModel = QuestionViewModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=questions.viewmodel.js.map