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

            if (reviewApp.questionDetailsViewModel.questionId != this.question.id)
                reviewApp.questionDetailsViewModel.showCurrent(this.chapterId, this.question.id);

            reviewApp.router.navigate('/chapters/' + this.chapterId + '/questions/' + this.question.id, true);
        }

        public createFinding() {
            this.set('hasFinding', !this.get('hasFinding'));
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