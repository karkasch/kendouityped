module Experiments.Models {
    export class QuestionsDataSourceItemModel extends kendo.data.Model {
        id: number;
        name: string;
        order: number;
        value: string;

        constructor(data?: any) {
            super(data);

        }
    }
} 