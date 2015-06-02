module Experiments.Models {
    export class QuestionsDataSourceItemModel extends kendo.data.Model {
        id: number;
        name: string;
        order: number;
        value: string;
        chapterId: number;

        constructor(data?: any) {
            super(data);

            this.fields = {
                id: 'id',
                name: { type: 'string' },
                value: { type: 'string' }
            };

            this.bind('change',(e: any) => {
                console.log('question model change', e);
            });
        }

        public showQuestionDetails(e: any) {
            console.log('showQuestionDetails', e);
            var questionDetailsViewModel = new QuestionDetailsViewModel(this.chapterId, this.id);

            var questionDetailsView = new kendo.View('#question-details-template', { model: questionDetailsViewModel });

            layout.showIn('#question-details-view', questionDetailsView);
        }
    }
} 