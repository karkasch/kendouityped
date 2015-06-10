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
        var ChapterDataSourceItemModel = (function (_super) {
            __extends(ChapterDataSourceItemModel, _super);
            function ChapterDataSourceItemModel(value) {
                _super.call(this, value);
            }
            ChapterDataSourceItemModel.prototype.showQuestions = function (e, questionId) {
                console.log('showQuestions');
                var questionsViewModel = this.get('questionsViewModel');
                if (questionsViewModel == null) {
                    questionsViewModel = new Experiments.Models.QuestionsViewModel(this.id); //e.data.id);
                    this.set('questionsViewModel', questionsViewModel);
                }
                this.set('contentVisible', !this.get('contentVisible'));
                kendo.fx($('div[data-chapterid="' + this.id + '"]').find('.questions-panel')).slideIn("left").play();
                var route = '/chapters/' + this.id;
                if (questionId != null)
                    route += '/questions/' + questionId;
                reviewApp.router.navigate(route, true);
            };
            return ChapterDataSourceItemModel;
        })(kendo.data.Model);
        Models.ChapterDataSourceItemModel = ChapterDataSourceItemModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=chapters.datasourceitem.model.js.map