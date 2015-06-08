var Experiments;
(function (Experiments) {
    var ReviewApp = (function () {
        function ReviewApp() {
            var _this = this;
            this.layout = new kendo.Layout("layout-template", {});
            this.router = new kendo.Router({
                init: function () {
                    _this.layout.render($("#application"));
                },
                routeMissing: function (e) {
                    _this.router.navigate("/");
                }
            });
        }
        ReviewApp.prototype.startApp = function () {
            var _this = this;
            this.router.route('/', function () {
                // chapters
                _this.chaptersViewModel = new Experiments.Models.ChaptersViewModel();
                var chaptersView = new kendo.View('chapters-template', { model: _this.chaptersViewModel });
                _this.layout.showIn('#chapters-view', chaptersView);
                kendo.fx($("#chapters-view")).slideIn("up").play();
                // question details
                _this.questionDetailsViewModel = new Experiments.Models.QuestionDetailsViewModel();
                var questionDetailsView = new kendo.View('question-details-template', { model: _this.questionDetailsViewModel });
                _this.layout.showIn('#question-details-view', questionDetailsView);
                kendo.fx($("#question-details-view")).slideIn("up").play();
            });
            this.router.route('/chapters/:id', function (id) {
                // chapters
                _this.chaptersViewModel = new Experiments.Models.ChaptersViewModel();
                var chaptersView = new kendo.View('chapters-template', { model: _this.chaptersViewModel });
                _this.layout.showIn('#chapters-view', chaptersView);
                kendo.fx($("#chapters-view")).slideIn("up").play();
                _this.chaptersViewModel.chaptersDataSource.one('change', function (e) {
                    console.log('change', e);
                    var chapter = _this.chaptersViewModel.chaptersDataSource.get(id);
                    chapter.showQuestions({ data: { id: id } });
                });
                // question details
                _this.questionDetailsViewModel = new Experiments.Models.QuestionDetailsViewModel();
                var questionDetailsView = new kendo.View('question-details-template', { model: _this.questionDetailsViewModel });
                _this.layout.showIn('#question-details-view', questionDetailsView);
                kendo.fx($("#question-details-view")).slideIn("up").play();
            });
            this.router.start();
        };
        ReviewApp.prototype.showChapters = function () {
        };
        ReviewApp.prototype.createFinding = function (chapterId, questionId) {
            var chapter = this.chaptersViewModel.chaptersDataSource.get(chapterId);
            var questionViewModel = chapter.questionsViewModel.getQuestionViewModel(questionId);
            questionViewModel.createFinding();
        };
        return ReviewApp;
    })();
    Experiments.ReviewApp = ReviewApp;
})(Experiments || (Experiments = {}));
//# sourceMappingURL=review.app.js.map