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
                _this.showChapters();
            });
            this.router.route('/chapters/:id', function (id) {
                _this.showChapterQuestions(id);
            });
            this.router.route('/chapters/:chapterId/questions/:questionId', function (chapterId, questionId) {
                _this.showChapterQuestion(chapterId, questionId);
            });
            this.router.start();
        };
        ReviewApp.prototype.showChapters = function () {
            // chapters
            this.chaptersViewModel = new Experiments.Models.ChaptersViewModel();
            var chaptersView = new kendo.View('chapters-template', { model: this.chaptersViewModel });
            this.layout.showIn('#chapters-view', chaptersView);
            kendo.fx($("#chapters-view")).slideIn("up").play();
            // question details
            this.questionDetailsViewModel = new Experiments.Models.QuestionDetailsViewModel();
            var questionDetailsView = new kendo.View('question-details-template', { model: this.questionDetailsViewModel });
            this.layout.showIn('#question-details-view', questionDetailsView);
            kendo.fx($("#question-details-view")).slideIn("up").play();
        };
        ReviewApp.prototype.showChapterQuestions = function (chapterId) {
            var _this = this;
            // chapters
            this.chaptersViewModel = new Experiments.Models.ChaptersViewModel();
            var chaptersView = new kendo.View('chapters-template', { model: this.chaptersViewModel });
            this.layout.showIn('#chapters-view', chaptersView);
            kendo.fx($("#chapters-view")).slideIn("up").play();
            this.chaptersViewModel.chaptersDataSource.one('change', function (e) {
                console.log('change', e);
                var chapter = _this.chaptersViewModel.chaptersDataSource.get(chapterId);
                chapter.showQuestions({ data: { id: chapterId } });
            });
            // question details
            this.questionDetailsViewModel = new Experiments.Models.QuestionDetailsViewModel();
            var questionDetailsView = new kendo.View('question-details-template', { model: this.questionDetailsViewModel });
            this.layout.showIn('#question-details-view', questionDetailsView);
            kendo.fx($("#question-details-view")).slideIn("up").play();
        };
        ReviewApp.prototype.showChapterQuestion = function (chapterId, questionId) {
            var _this = this;
            // chapters
            this.chaptersViewModel = new Experiments.Models.ChaptersViewModel();
            var chaptersView = new kendo.View('chapters-template', { model: this.chaptersViewModel });
            this.layout.showIn('#chapters-view', chaptersView);
            kendo.fx($("#chapters-view")).slideIn("up").play();
            this.chaptersViewModel.chaptersDataSource.one('change', function (e) {
                console.log('change', e);
                var chapter = _this.chaptersViewModel.chaptersDataSource.get(chapterId);
                chapter.showQuestions({ data: { id: chapterId } });
            });
            // question details
            this.questionDetailsViewModel = new Experiments.Models.QuestionDetailsViewModel();
            var questionDetailsView = new kendo.View('question-details-template', { model: this.questionDetailsViewModel });
            this.layout.showIn('#question-details-view', questionDetailsView);
            kendo.fx($("#question-details-view")).slideIn("up").play();
        };
        ReviewApp.prototype.showQuestionDetails = function (chapterId, questionId) {
            this.questionDetailsViewModel.showCurrent(chapterId, questionId);
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