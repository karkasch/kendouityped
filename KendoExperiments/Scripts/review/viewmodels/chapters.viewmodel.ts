﻿module Experiments.Models {
    export class ChaptersViewModel extends kendo.data.ObservableObject {
        public chaptersDataSource: Experiments.Data.ChaptersDataSource;

        constructor(chapterId?: number) {
            super();

            this.chaptersDataSource = new Experiments.Data.ChaptersDataSource();
        }

        public getChapterViewModel(chapterId: number): Experiments.Models.ChapterDataSourceItemModel {
            return <Experiments.Models.ChapterDataSourceItemModel>this.chaptersDataSource.get(chapterId);
        }
        
        public showQuestions(chapterId: number, questionId?: number): void {
            if (this.chaptersDataSource.data().length > 0) {
                this.showChapterQuestions(chapterId, questionId);
            } else {
                this.chaptersDataSource.fetch((e: any) => {
                    this.showChapterQuestions(chapterId, questionId);
                });
            }
        }

        private showChapterQuestions(chapterId: number, questionId?: number) {
            var chapter = this.getChapterViewModel(chapterId);
            chapter.showQuestions(null, questionId);   
        }
    }
} 