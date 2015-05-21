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
                //this.id = 'id';
                //this.questionsViewModel = {};
            }
            ChapterDataSourceItemModel.prototype.showDetails = function (e) {
                console.log('showDetails', e, this);
                var questionsViewModel = this.get('questionsViewModel');
                if (questionsViewModel == null) {
                    questionsViewModel = new Experiments.Models.QuestionsViewModel(e.data.id);
                    this.set('questionsViewModel', questionsViewModel);
                    var questionsView = new kendo.View('#questions-template', { model: questionsViewModel });
                    questionsView.render($(e.target).closest('.chapter').find('.questions'));
                }
                this.set('contentVisible', !this.get('contentVisible'));
            };
            return ChapterDataSourceItemModel;
        })(kendo.data.Model);
        Models.ChapterDataSourceItemModel = ChapterDataSourceItemModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=chapters.datasourceitem.model.js.map