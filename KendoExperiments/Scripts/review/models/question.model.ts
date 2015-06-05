module Experiments.Models {
 
    export class QuestionModel extends kendo.data.ObservableObject {
        id: number;
        name: string;
        questionType: string;
        availableList: string;
        answer: string;

        constructor(value?: any) {
            super(value);
        }

        static createInstance(data: any): QuestionModel {
            if (data.questionType == "T")
                return new QuestionAnswerTextModel(data);

            return new QuestionModel(data);
        }
    }
    
    export class QuestionAnswerModel extends QuestionModel {
        answer: any;

        constructor(value?: any) {
            super(value);
        }
    }
    
    export class QuestionAnswerTextModel extends QuestionAnswerModel {
        answer: string;

        constructor(value?: any) {
            super(value);
        }
    }
    
    export class QuestionAnswerListModel extends QuestionAnswerModel {
        answer: Array<any>;

        constructor(value?: any) {
            super(value);

        }
    }   
} 