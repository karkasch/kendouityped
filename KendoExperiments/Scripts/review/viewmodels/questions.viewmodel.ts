module Experiments.Models {
    export class QuestionsViewModel extends kendo.data.ObservableObject {
        questionsDataSource: Experiments.Data.QuestionsDataSource;

        test: string = 'questions test';

        constructor(chapterId: number) {
            super();

            this.questionsDataSource = new Experiments.Data.QuestionsDataSource(chapterId);
        }
    }
} 