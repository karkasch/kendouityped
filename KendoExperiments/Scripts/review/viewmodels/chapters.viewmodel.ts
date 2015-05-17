module Experiments.Models {
    export class ChaptersViewModel extends kendo.data.ObservableObject {
        chapters: Experiments.Data.ChaptersDataSource;
        test: string;

        constructor() {
            super();

            this.chapters = new Experiments.Data.ChaptersDataSource();

            this.test = '34444';
        }
    }
} 