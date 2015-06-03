module Experiments.Models {
    export class QuestionDetailsViewModel extends kendo.data.ObservableObject {
        chapterId: number;
        question: QuestionModel;
        questionDetailsModel: QuestionDetailsModel;
        questionName: string = 'tes trr';

        constructor() {
            super();
        
            this.bind('change', (e: any) => {
                if (e.field == 'questionName')
                    this.question.set('name', this.questionName);
            });    
        }

        public initData(chapterId: number, question: QuestionModel) {
            this.set('chapterId', chapterId);
            this.set('question', question);

            $.ajax({
                url: '/api/v1/chapters/' + chapterId + '/questions/' + question.id + '/details',
                contentType: 'application/json'
            }).done((response) => {
                this.set('questionDetailsModel', response);
            });
        }

        public updateValues(e: any) {
            console.log('updateValues', e, this);
        }
    }

    export class QuestionDetailsModel {
        id: number;
        name: string;
        createdDate: Date;
    }
} 