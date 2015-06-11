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
        var QuestionDetailsViewModel = (function (_super) {
            __extends(QuestionDetailsViewModel, _super);
            function QuestionDetailsViewModel(chapterId, questionId) {
                _super.call(this);
                if (chapterId != null && questionId != null)
                    this.showCurrent(chapterId, questionId);
                else {
                    this.questionFindingsViewModel = new Models.QuestionFindingsViewModel();
                }
            }
            QuestionDetailsViewModel.prototype.showCurrent = function (chapterId, questionId) {
                this.set('chapterId', chapterId);
                this.set('questionId', questionId);
                var chapter = reviewApp.chaptersViewModel.chaptersDataSource.get(chapterId);
                this.set('questionFindingsViewModel', new Models.QuestionFindingsViewModel(chapterId, questionId));
            };
            QuestionDetailsViewModel.prototype.updateValues = function (e) {
                console.log('updateValues', e, this);
            };
            QuestionDetailsViewModel.prototype.updateHistory = function (chapterId, question) {
                if (this.chapterId != chapterId || this.questionId != question.id)
                    return;
                // TODO: update
            };
            return QuestionDetailsViewModel;
        })(kendo.data.ObservableObject);
        Models.QuestionDetailsViewModel = QuestionDetailsViewModel;
        var QuestionDetailsModel = (function () {
            function QuestionDetailsModel() {
            }
            return QuestionDetailsModel;
        })();
        Models.QuestionDetailsModel = QuestionDetailsModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=question.details.viewmodel.js.map