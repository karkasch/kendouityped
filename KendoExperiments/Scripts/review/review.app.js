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
            if (this.chaptersViewModel == null) {
                $('.left-panel').height($(window).height() - 80);
                this.chaptersViewModel = new Experiments.Models.ChaptersViewModel();
                var chaptersView = new kendo.View('chapters-template', { model: this.chaptersViewModel });
                this.layout.showIn('#chapters-view', chaptersView);
                kendo.fx($("#chapters-view")).slideIn("up").play();
            }
        };
        ReviewApp.prototype.showChapterQuestions = function (chapterId, questionId) {
            this.showChapters();
            this.chaptersViewModel.showQuestions(chapterId, questionId);
            if (questionId != null)
                this.showQuestionDetails(chapterId, questionId);
            this.updateRoute(chapterId, questionId);
        };
        ReviewApp.prototype.showChapterQuestion = function (chapterId, questionId) {
            this.showChapterQuestions(chapterId);
            this.showQuestionDetails(chapterId, questionId);
            this.updateRoute(chapterId, questionId);
        };
        ReviewApp.prototype.showQuestionDetails = function (chapterId, questionId) {
            if (this.questionDetailsViewModel == null) {
                // question details
                this.questionDetailsViewModel = new Experiments.Models.QuestionDetailsViewModel();
                var questionDetailsView = new kendo.View('question-details-template', { model: this.questionDetailsViewModel });
                this.layout.showIn('#question-details-view', questionDetailsView);
                kendo.fx($("#question-details-view")).slideIn("up").play();
            }
            if (chapterId != null && questionId != null)
                this.questionDetailsViewModel.showCurrent(chapterId, questionId);
            this.updateRoute(chapterId, questionId);
        };
        ReviewApp.prototype.questionAnswerChanged = function (chapterId, questionId, answer) {
            console.log('questionAnswerChanged', questionId, answer);
        };
        ReviewApp.prototype.createFinding = function (chapterId, questionId) {
            var chapter = this.chaptersViewModel.chaptersDataSource.get(chapterId);
            var questionViewModel = chapter.questionsViewModel.getQuestionViewModel(questionId);
            questionViewModel.createFinding();
        };
        ReviewApp.prototype.updateRoute = function (chapterId, questionId) {
            var route = '';
            if (chapterId != null)
                route += '/chapters/' + chapterId;
            if (questionId != null)
                route += '/questions/' + questionId;
            if (route != '')
                this.router.navigate(route, true);
        };
        return ReviewApp;
    })();
    Experiments.ReviewApp = ReviewApp;
})(Experiments || (Experiments = {}));
//# sourceMappingURL=review.app.js.map