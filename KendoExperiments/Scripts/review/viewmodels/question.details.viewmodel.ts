module Experiments.Models {
    export class QuestionDetailsViewModel extends kendo.data.ObservableObject {
        chapterId: number;
        questionId: number;
        questionFindingsViewModel: QuestionFindingsViewModel;

        constructor(chapterId?: number, questionId?: number) {
            super();

            if (chapterId != null && questionId != null)
                this.showCurrent(chapterId, questionId);
            else {
                this.questionFindingsViewModel = new QuestionFindingsViewModel();
            }
        }

        public showCurrent(chapterId: number, questionId: number) {
            this.set('chapterId', chapterId);
            this.set('question', questionId);

            this.set('questionFindingsViewModel', new QuestionFindingsViewModel(chapterId, questionId));
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