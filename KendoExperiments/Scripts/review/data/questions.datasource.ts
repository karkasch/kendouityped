module Experiments.Data {
    export class QuestionsDataSource extends kendo.data.DataSource {

        constructor(chapterId: number) {
            super({
                transport: {
                    read: {
                        url: '/api/v1/chapters/' + chapterId + '/questions',
                        dataType: 'json'
                    }
                },
                schema: {
                    model: Experiments.Models.QuestionsDataSourceItemModel
                }
            });
        }
    }

} 