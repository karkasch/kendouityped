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

            //this.id = 'id';
            //this.questionsViewModel = {};
        }

        showDetails(e: any) {
            console.log('showDetails', e, this);

            var questionsViewModel = this.get('questionsViewModel');
            if (questionsViewModel == null) {
                questionsViewModel = new Experiments.Models.QuestionsViewModel(e.data.id);
                this.set('questionsViewModel', questionsViewModel);

                var questionsView = new kendo.View('#questions-template', { model: questionsViewModel });
                questionsView.render($(e.target).closest('.chapter').find('.questions-panel'));
            }

            this.set('contentVisible', !this.get('contentVisible'));
        }
    }
} 