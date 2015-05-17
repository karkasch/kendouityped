module Experiments.Data {
    export class ChaptersDataSource extends kendo.data.DataSource {

        constructor() {
            super({
                transport: {
                    read: {
                        url: '/api/v1/chapters',
                        dataType: 'json'
                    }
                },
                schema: {
                    data: function (response) {
                        console.log('schema data', response);

                        return response;
                    },
                    model: Experiments.Models.ChapterDataSourceItemModel
                    //model: {
                    //    id: "id",
                    //    fields: {
                    //        name: {
                    //        },
                    //        order: {
                    //        }
                    //    }
                    //}
                }
            });

            //this.init({
            //    transport: {
            //        read: {
            //            url: '/api/v1/chapters',
            //            dataType: 'application/json'
            //        }
            //    },
            //    schema: {
            //        model: Experiments.Data.ChapterDataSourceItemModel,
            //        data: function (data: any) {
            //            console.log('data', data);
            //            return data;
            //        }
            //    }
            //});
        }
    }

    
} 