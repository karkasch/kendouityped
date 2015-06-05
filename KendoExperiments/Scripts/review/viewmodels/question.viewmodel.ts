module Experiments.Models {

    export class QuestionViewModel extends kendo.data.ObservableObject {
        chapterId: number;
        question: QuestionModel;
        viewTemplate: string;

        constructor(chapterId: number, question?: QuestionModel) {
            super();
            this.chapterId = chapterId;
            this.question = question;
        }

        public showQuestionDetails(e: any) {
            console.log('showQuestionDetails', e, this);

            questionDetailsViewModel.initData(this.chapterId, this.question);

            //var questionDetailsViewModel = new QuestionDetailsViewModel(this.chapterId, this.id);

            //var questionDetailsView = new kendo.View('#question-details-template', { model: questionDetailsViewModel });

            //layout.showIn('#question-details-view', questionDetailsView);
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

        public test(e: any) {
            console.log('showQuestionDetails L', e, this);
            super.showQuestionDetails(e);
        }
    }

    export class QuestionListViewModel extends QuestionViewModel {
        answer: Array<string>;

        constructor(chapterId: number, question?: QuestionModel) {
            super(chapterId, question);
            this.viewTemplate = 'question-list-template';
        }
    }
} 