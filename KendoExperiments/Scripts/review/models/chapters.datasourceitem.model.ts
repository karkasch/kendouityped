module Experiments.Models {
    export class ChapterDataSourceItemModel extends kendo.data.Model {
        id: number;
        name: string;
        order: number;

        // view models
        questionsViewModel: Experiments.Models.QuestionsViewModel;

        contentVisible: boolean;

        constructor(value?: any) {
            super(value);
        }

        public showQuestions() {
            console.log('showQuestions');

            var questionsViewModel = this.get('questionsViewModel');
            if (questionsViewModel == null) {
                questionsViewModel = new Experiments.Models.QuestionsViewModel(this.id); //e.data.id);
                this.set('questionsViewModel', questionsViewModel);
            }

            this.set('contentVisible', !this.get('contentVisible'));

            kendo.fx($('div[data-chapterid="' + this.id + '"]').find('.questions-panel')).slideIn("left").play();

            reviewApp.router.navigate('/chapters/' + this.id, true);
        }
        
    }
} 