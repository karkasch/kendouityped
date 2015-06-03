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
        var QuestionViewModel = (function (_super) {
            __extends(QuestionViewModel, _super);
            function QuestionViewModel(chapterId, question) {
                _super.call(this);
                this.chapterId = chapterId;
                this.question = question;
            }
            QuestionViewModel.prototype.showQuestionDetails = function (e) {
                console.log('showQuestionDetails', e, this);
                questionDetailsViewModel.initData(this.chapterId, this.question);
                //var questionDetailsViewModel = new QuestionDetailsViewModel(this.chapterId, this.id);
                //var questionDetailsView = new kendo.View('#question-details-template', { model: questionDetailsViewModel });
                //layout.showIn('#question-details-view', questionDetailsView);
            };
            QuestionViewModel.createInstance = function (chapterId, question) {
                if (question.questionType == "T")
                    return new QuestionTextViewModel(chapterId, question);
                if (question.questionType == "L")
                    return new QuestionListViewModel(chapterId, question);
                return null;
            };
            return QuestionViewModel;
        })(kendo.data.ObservableObject);
        Models.QuestionViewModel = QuestionViewModel;
        var QuestionTextViewModel = (function (_super) {
            __extends(QuestionTextViewModel, _super);
            function QuestionTextViewModel(chapterId, question) {
                _super.call(this, chapterId, question);
                this.viewTemplate = 'question-text-template';
            }
            return QuestionTextViewModel;
        })(QuestionViewModel);
        Models.QuestionTextViewModel = QuestionTextViewModel;
        var QuestionListViewModel = (function (_super) {
            __extends(QuestionListViewModel, _super);
            function QuestionListViewModel(chapterId, question) {
                _super.call(this, chapterId, question);
                this.viewTemplate = 'question-list-template';
            }
            return QuestionListViewModel;
        })(QuestionViewModel);
        Models.QuestionListViewModel = QuestionListViewModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=question.viewmodel.js.map