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

        public showQuestions(e: any, questionId?: number) {
            console.log('showQuestions');

            var questionsViewModel = this.get('questionsViewModel');
            if (questionsViewModel == null) {
                questionsViewModel = new Experiments.Models.QuestionsViewModel(this.id); //e.data.id);
                this.set('questionsViewModel', questionsViewModel);
            }

            this.set('contentVisible', true);
        }

        public toggleQuestionsVisibility(e: any) {
            this.set('contentVisible', !this.get('contentVisible'));

            if (this.contentVisible && this.get('questionsViewModel') == null) {
                this.showQuestions(e);
            }

            reviewApp.updateRoute(this.id);
        }
        
    }
} 