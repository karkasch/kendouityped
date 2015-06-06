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

        public showQuestions(e: any) {
            console.log('showDetails', e);

            var questionsViewModel = this.get('questionsViewModel');
            if (questionsViewModel == null) {
                questionsViewModel = new Experiments.Models.QuestionsViewModel(this.id); //e.data.id);
                this.set('questionsViewModel', questionsViewModel);
            }

            this.set('contentVisible', !this.get('contentVisible'));

            kendo.fx($('div[data-chapterid="' + this.id + '"]').find('.questions-panel')).slideIn("left").play();

            router.navigate('/chapters/' + this.id, true);
        }

    }
} 