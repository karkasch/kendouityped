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
        var ChaptersViewModel = (function (_super) {
            __extends(ChaptersViewModel, _super);
            function ChaptersViewModel(chapterId) {
                _super.call(this);
                this.chaptersDataSource = new Experiments.Data.ChaptersDataSource();
            }
            ChaptersViewModel.prototype.getChapterViewModel = function (chapterId) {
                return this.chaptersDataSource.get(chapterId);
            };
            ChaptersViewModel.prototype.showQuestions = function (chapterId, questionId) {
                var _this = this;
                if (this.chaptersDataSource.data().length > 0) {
                    this.showChapterQuestions(chapterId, questionId);
                }
                else {
                    this.chaptersDataSource.fetch(function (e) {
                        _this.showChapterQuestions(chapterId, questionId);
                    });
                }
            };
            ChaptersViewModel.prototype.showChapterQuestions = function (chapterId, questionId) {
                var chapter = this.getChapterViewModel(chapterId);
                chapter.showQuestions(null, questionId);
            };
            return ChaptersViewModel;
        })(kendo.data.ObservableObject);
        Models.ChaptersViewModel = ChaptersViewModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=chapters.viewmodel.js.map