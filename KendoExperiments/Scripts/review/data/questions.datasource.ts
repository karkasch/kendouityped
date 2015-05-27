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
                    data: (data: Array<any>) => {

                        // add extra property
                        $.each(data,(index, item) => {
                            $.extend(item, { chapterId: chapterId });
                        });

                        return data;
                    },
                    model: Experiments.Models.QuestionsDataSourceItemModel                    
                }
            });
        }
    }
} 