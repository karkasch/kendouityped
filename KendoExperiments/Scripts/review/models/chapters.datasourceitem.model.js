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
                this.set('contentVisible', true);
            };
            ChapterDataSourceItemModel.prototype.toggleQuestionsVisibility = function (e) {
                this.set('contentVisible', !this.get('contentVisible'));
                if (this.contentVisible && this.get('questionsViewModel') == null) {
                    this.showQuestions(e);
                }
                reviewApp.updateRoute(this.id);
            };
            return ChapterDataSourceItemModel;
        })(kendo.data.Model);
        Models.ChapterDataSourceItemModel = ChapterDataSourceItemModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=chapters.datasourceitem.model.js.map