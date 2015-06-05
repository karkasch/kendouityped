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
            function QuestionDetailsViewModel() {
                _super.call(this);
                this.questionFindingsViewModel = new Models.QuestionFindingsViewModel();
                this.bind('change', function (e) {
                    //if (e.field == 'questionName')
                    //this.question.set('name', this.questionName);
                });
            }
            QuestionDetailsViewModel.prototype.initData = function (chapterId, question) {
                this.set('chapterId', chapterId);
                this.set('question', question);
                this.set('questionFindingsViewModel', new Models.QuestionFindingsViewModel(chapterId, question.id));
            };
            QuestionDetailsViewModel.prototype.updateValues = function (e) {
                console.log('updateValues', e, this);
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