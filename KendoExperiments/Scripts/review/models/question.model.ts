module Experiments.Models {
 
    export class QuestionModel extends kendo.data.ObservableObject {
        id: number;
        name: string;

        constructor(value?: any) {
            super(value);
        }
    }   
} 