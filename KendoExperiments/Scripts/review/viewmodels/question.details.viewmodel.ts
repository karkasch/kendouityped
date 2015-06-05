module Experiments.Models {
    export class QuestionDetailsViewModel extends kendo.data.ObservableObject {
        chapterId: number;
        question: QuestionModel;
        questionFindingsViewModel: QuestionFindingsViewModel;

        constructor() {
            super();

            this.questionFindingsViewModel = new QuestionFindingsViewModel();
        
            this.bind('change', (e: any) => {
                //if (e.field == 'questionName')
                    //this.question.set('name', this.questionName);
            });    
        }

        public initData(chapterId: number, question: QuestionModel) {
            this.set('chapterId', chapterId);
            this.set('question', question);

            this.set('questionFindingsViewModel', new QuestionFindingsViewModel(chapterId, question.id));
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