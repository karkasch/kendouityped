module Experiments.Models {

    export class QuestionViewModel extends kendo.data.ObservableObject {
        chapterId: number;
        question: QuestionModel;
        viewTemplate: string;
        answer: any;

        hasFinding: boolean = false;

        constructor(chapterId: number, question?: QuestionModel) {
            super();
            this.chapterId = chapterId;
            this.question = question;
            this.answer = question.answer;

            this.bind('change',(e) => {
                this.question.set('answer', this.answer);
            });
        }

        public showQuestionDetails(e: any) {
            console.log('showQuestionDetails', e, this);

            reviewApp.showQuestionDetails(this.chapterId, this.question.id);
        }

        public createFinding() {
            this.set('hasFinding', !this.get('hasFinding'));
        }

        public answerChanged(e: any) {
            console.log('answerChanged', e);

            this.question.set('answer', this.answer);

            $.ajax({
                url: '/api/v1/chapters/' + this.chapterId + '/questions/' + this.question.id,
                contentType: 'application/json',
                type: 'POST',
                data: JSON.stringify(this.question)
            }).done((response: any) => {
                reviewApp.questionAnswerChanged(this.chapterId, this.question.id, this.answer);
            });
        }

        static createInstance(chapterId: number, question: QuestionModel): QuestionViewModel {
            if (question.questionType == "T")
                return new QuestionTextViewModel(chapterId, question);

            if (question.questionType == "L")
                return new QuestionListViewModel(chapterId, question);
            
            return null;
        }
    }

    export class QuestionTextViewModel extends QuestionViewModel {

        constructor(chapterId: number, question?: QuestionModel) {
            super(chapterId, question);
            this.viewTemplate = 'question-text-template';
        }
    }

    export class QuestionListViewModel extends QuestionViewModel {
        availableList: Array<string>;

        constructor(chapterId: number, question?: QuestionModel) {
            super(chapterId, question);
            this.viewTemplate = 'question-list-template';

            this.availableList = question.availableList.split('\n');
        }
    }
} 