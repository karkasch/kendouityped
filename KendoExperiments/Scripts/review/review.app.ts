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

            this.router.route('/', () => {
                this.showChapters();
            });

            this.router.route('/chapters/:id',(id: number) => {
                this.showChapterQuestions(id);
            });

            this.router.route('/chapters/:chapterId/questions/:questionId', (chapterId: number, questionId: number) => {
                this.showChapterQuestion(chapterId, questionId);
            });

            this.router.start();
        }

        public showChapters() {
            // chapters
            if (this.chaptersViewModel == null) {
                this.chaptersViewModel = new Experiments.Models.ChaptersViewModel();
                var chaptersView = new kendo.View('chapters-template', { model: this.chaptersViewModel });
                this.layout.showIn('#chapters-view', chaptersView);

                kendo.fx($("#chapters-view")).slideIn("up").play();
            }
        }

        public showChapterQuestions(chapterId: number, questionId?: number) {
            this.showChapters();
            this.chaptersViewModel.showQuestions(chapterId, questionId);
        }
      
        public showChapterQuestion(chapterId: number, questionId: number) {
            this.showChapterQuestions(chapterId);
            this.showQuestionDetails(chapterId, questionId);
        }

        public showQuestionDetails(chapterId?: number, questionId?: number) {

            if (this.questionDetailsViewModel == null) {
                // question details
                this.questionDetailsViewModel = new Experiments.Models.QuestionDetailsViewModel();
                var questionDetailsView = new kendo.View('question-details-template', { model: this.questionDetailsViewModel });
                this.layout.showIn('#question-details-view', questionDetailsView);

                kendo.fx($("#question-details-view")).slideIn("up").play();
            }

            if (chapterId != null && questionId != null) {
                this.questionDetailsViewModel.showCurrent(chapterId, questionId);
                reviewApp.router.navigate('/chapters/' + chapterId + '/questions/' + questionId, true);
            }
        }

        public createFinding(chapterId: number, questionId: number): void {
            var chapter = <Experiments.Models.ChapterDataSourceItemModel>this.chaptersViewModel.chaptersDataSource.get(chapterId);

            var questionViewModel = chapter.questionsViewModel.getQuestionViewModel(questionId);
            questionViewModel.createFinding();
        }
    }
}