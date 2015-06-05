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
                var x = 83;
                //this.questions = new kendo.data.ObservableArray([]);
                this.questions = [];
                $.ajax({
                    url: '/api/v1/chapters/' + chapterId + '/questions/',
                    contentType: 'application/json'
                }).done(function (response) {
                    $.each(response, function (index, item) {
                        var questionModel = Models.QuestionModel.createInstance(item);
                        var questionViewModel = Models.QuestionViewModel.createInstance(chapterId, questionModel);
                        var questionView = new kendo.View(questionViewModel.viewTemplate, { model: questionViewModel });
                        questionView.render($('.chapter[data-chapterid=' + chapterId + ']').find('.questions-panel'));
                        _this.questions.push(questionViewModel);
                    });
                });
            }
            QuestionsViewModel.prototype.getQuestionViewModel = function (questionId) {
                for (var i = 0; i < this.questions.length; i++) {
                    if (this.questions[i].question.id == questionId)
                        return this.questions[i];
                }
                return null;
            };
            return QuestionsViewModel;
        })(kendo.data.ObservableObject);
        Models.QuestionsViewModel = QuestionsViewModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=questions.viewmodel.js.map