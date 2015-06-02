module Experiments.Models {
    export class QuestionsViewModel extends kendo.data.ObservableObject {
        questionsDataSource: Experiments.Data.QuestionsDataSource;

        questions: kendo.data.ObservableArray;

        constructor(chapterId: number) {
            super();

            //this.questionsDataSource = new Experiments.Data.QuestionsDataSource(chapterId);

            this.questions = new kendo.data.ObservableArray([]);

            $.ajax({
                url: '/api/v1/chapters/' + chapterId + '/questions/',
                contentType: 'application/json'
            }).done((response) => {
                $.each(response,(index, item) => {
                    this.questions.push(new QuestionViewModel(chapterId, new QuestionModel(item)));
                });
            });
        }
    }

    export class QuestionViewModel extends kendo.data.ObservableObject {
        question: QuestionModel;

        constructor(chapterId: number, question?: QuestionModel) {
            super();
            this.question = question;
        }

        public showQuestionDetails(e: any) {
            console.log('showQuestionDetails', e);
            //var questionDetailsViewModel = new QuestionDetailsViewModel(this.chapterId, this.id);

            //var questionDetailsView = new kendo.View('#question-details-template', { model: questionDetailsViewModel });

            //layout.showIn('#question-details-view', questionDetailsView);
        }
    }
} 