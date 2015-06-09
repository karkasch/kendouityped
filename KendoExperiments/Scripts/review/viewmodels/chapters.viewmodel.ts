module Experiments.Models {
    export class ChaptersViewModel extends kendo.data.ObservableObject {
        public chaptersDataSource: Experiments.Data.ChaptersDataSource;

        constructor(chapterId?: number) {
            super();

            this.chaptersDataSource = new Experiments.Data.ChaptersDataSource();
        }

        public getChapterViewModel(chapterId: number): Experiments.Models.ChapterDataSourceItemModel {
            return <Experiments.Models.ChapterDataSourceItemModel>this.chaptersDataSource.get(chapterId);
        }
    }
} 