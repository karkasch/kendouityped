module Experiments.Models {
    export class QuestionFindingsViewModel extends kendo.data.ObservableObject {
        chapterId: number;
        questionId: number;

        constructor(chapterId?: number, questionId?: number) {
            super();

            if (chapterId == null || questionId == null)
                return;

            this.chapterId = chapterId;
            this.questionId = questionId;

            //$.ajax({
            //    url: '/api/v1/chapters/' + chapterId + '/questions/' + questionId + '/findings',
            //    contentType: 'application/json'
            //}).done((response) => {
            //    //this.set('questionFindingsViewModel', new QuestionFindingsViewModel(response));
            //});
        }

        public createFinding(e: any) {
            console.log('createFinding', e);

            reviewApp.createFinding(this.chapterId, this.questionId);
        }
    }
} 