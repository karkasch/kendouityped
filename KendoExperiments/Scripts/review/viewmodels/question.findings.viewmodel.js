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
        var QuestionFindingsViewModel = (function (_super) {
            __extends(QuestionFindingsViewModel, _super);
            function QuestionFindingsViewModel(chapterId, questionId) {
                _super.call(this);
                if (chapterId == null || questionId == null)
                    return;
                this.chapterId = chapterId;
                this.questionId = questionId;
                //$.ajax({
                //    url: '/api/v1/chapters/' + chapterId + '/questions/' + questionId + '/findings',
                //    contentType: 'application/json'
                //}).done((response) => {
                //    //this.set('questionFindingsViewModel', new QuestionFindingsViewModel(response));
                //});
            }
            QuestionFindingsViewModel.prototype.createFinding = function (e) {
                console.log('createFinding', e);
                reviewApp.createFinding(this.chapterId, this.questionId);
            };
            return QuestionFindingsViewModel;
        })(kendo.data.ObservableObject);
        Models.QuestionFindingsViewModel = QuestionFindingsViewModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=question.findings.viewmodel.js.map