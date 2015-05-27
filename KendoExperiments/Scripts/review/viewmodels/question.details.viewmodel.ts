module Experiments.Models {
    export class QuestionDetailsViewModel extends kendo.data.ObservableObject {
        name: string;

        constructor(chapterId: number, questionId: number) {
            super();

            $.ajax({
                url: '/api/v1/chapters/' + chapterId + '/questions/' + questionId + '/details',
                contentType: 'application/json'
            }).done((response) => {
                //super.init(response);

                //this.init(response);

                this.set('name', response.name);

                //this.trigger(

                console.log('init', this.name);
            });
        }
    }
} 