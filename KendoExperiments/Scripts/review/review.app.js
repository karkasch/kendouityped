var router;
var layout;
var reviewAppModel;
var chaptersViewModel;
var questionDetailsViewModel;
function initApp() {
    layout = new kendo.Layout("layout-template", {});
    router = new kendo.Router({
        init: function () {
            layout.render($("#application"));
        },
        routeMissing: function (e) {
            router.navigate("/");
        }
    });
    router.route('/', function () {
        // chapters
        chaptersViewModel = new Experiments.Models.ChaptersViewModel();
        var chaptersView = new kendo.View('chapters-template', { model: chaptersViewModel });
        layout.showIn('#chapters-view', chaptersView);
        kendo.fx($("#chapters-view")).slideIn("up").play();
        // question details
        questionDetailsViewModel = new Experiments.Models.QuestionDetailsViewModel();
        var questionDetailsView = new kendo.View('question-details-template', { model: questionDetailsViewModel });
        layout.showIn('#question-details-view', questionDetailsView);
        kendo.fx($("#question-details-view")).slideIn("up").play();
    });
    router.route('/chapters/:id', function (id) {
        // chapters
        chaptersViewModel = new Experiments.Models.ChaptersViewModel();
        var chaptersView = new kendo.View('chapters-template', { model: chaptersViewModel });
        chaptersViewModel.chaptersDataSource.one('change', function (e) {
            console.log('change', e);
            var chapter = chaptersViewModel.chaptersDataSource.get(id);
            chapter.trigger('showQuestons', { data: chapter });
        });
        layout.showIn('#chapters-view', chaptersView);
        kendo.fx($("#chapters-view")).slideIn("up").play();
        // questions
    });
    router.start();
}
$(document).ready(function (e) {
    initApp();
});
//# sourceMappingURL=review.app.js.map