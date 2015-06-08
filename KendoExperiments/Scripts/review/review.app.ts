module Experiments {
    export class ReviewApp {
        router: kendo.Router;
        layout: kendo.Layout;

        chaptersViewModel: Experiments.Models.ChaptersViewModel;
        questionDetailsViewModel: Experiments.Models.QuestionDetailsViewModel;
        
        constructor() {
            this.layout = new kendo.Layout("layout-template", {});

            this.router = new kendo.Router({
                init: () => {
                    this.layout.render($("#application"));
                },
                routeMissing: e => {
                    this.router.navigate("/");
                }
            });

        }

        public startApp(): void {

            this.router.route('/',() => {
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
            });

            this.router.route('/chapters/:id',(id: number) => {
                // chapters
                this.chaptersViewModel = new Experiments.Models.ChaptersViewModel();
                var chaptersView = new kendo.View('chapters-template', { model: this.chaptersViewModel });
                this.layout.showIn('#chapters-view', chaptersView);

                kendo.fx($("#chapters-view")).slideIn("up").play();

                this.chaptersViewModel.chaptersDataSource.one('change',(e) => {
                    console.log('change', e);

                    var chapter = <Experiments.Models.ChapterDataSourceItemModel>this.chaptersViewModel.chaptersDataSource.get(id);
                    chapter.showQuestions({ data: { id: id } });
                });
        
                // question details
                this.questionDetailsViewModel = new Experiments.Models.QuestionDetailsViewModel();
                var questionDetailsView = new kendo.View('question-details-template', { model: this.questionDetailsViewModel });
                this.layout.showIn('#question-details-view', questionDetailsView);

                kendo.fx($("#question-details-view")).slideIn("up").play();
            });

            this.router.start();
        }

        public showChapters() {

        }

        createFinding(chapterId: number, questionId: number): void {
            var chapter = <Experiments.Models.ChapterDataSourceItemModel>this.chaptersViewModel.chaptersDataSource.get(chapterId);

            var questionViewModel = chapter.questionsViewModel.getQuestionViewModel(questionId);
            questionViewModel.createFinding();
        }
    }
}