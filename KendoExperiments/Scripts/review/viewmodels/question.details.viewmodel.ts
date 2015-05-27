module Experiments.Models {
    export class QuestionDetailsViewModel extends kendo.data.ObservableObject {
        questionDetailsModel: QuestionDetailsModel;

        constructor(chapterId: number, questionId: number) {
            super();

            $.ajax({
                url: '/api/v1/chapters/' + chapterId + '/questions/' + questionId + '/details',
                contentType: 'application/json'
            }).done((response) => {
                this.set('questionDetailsModel', response);
            });
        }
    }

    export class QuestionDetailsModel {
        id: number;
        name: string;
        createdDate: Date;
    }
} 