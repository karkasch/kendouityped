var router: kendo.Router;
var layout: kendo.Layout;

//var reviewAppModel;
var chaptersViewModel: Experiments.Models.ChaptersViewModel;
var questionDetailsViewModel: Experiments.Models.QuestionDetailsViewModel;

function initApp() {

    layout = new kendo.Layout("layout-template", { });

    router = new kendo.Router({
        init: () => {
            layout.render($("#application"));
        },
        routeMissing: e => {
            router.navigate("/");
        }
    });

    router.route('/',() => {
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

    router.route('/chapters/:id', (id: number) => {
        // chapters
        chaptersViewModel = new Experiments.Models.ChaptersViewModel();
        var chaptersView = new kendo.View('chapters-template', { model: chaptersViewModel });

        chaptersViewModel.chaptersDataSource.one('change', (e) => {
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

function createFinding(chapterId: number, questionId: number) {
    var chapter = <Experiments.Models.ChapterDataSourceItemModel>chaptersViewModel.chaptersDataSource.get(chapterId);

    var questionViewModel = chapter.questionsViewModel.getQuestionViewModel(questionId);
    questionViewModel.createFinding();
}

$(document).ready((e) => {
    initApp();
});