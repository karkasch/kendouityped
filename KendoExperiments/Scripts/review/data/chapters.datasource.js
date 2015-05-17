var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Experiments;
(function (Experiments) {
    var Data;
    (function (Data) {
        var ChaptersDataSource = (function (_super) {
            __extends(ChaptersDataSource, _super);
            function ChaptersDataSource() {
                _super.call(this, {
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
            return ChaptersDataSource;
        })(kendo.data.DataSource);
        Data.ChaptersDataSource = ChaptersDataSource;
    })(Data = Experiments.Data || (Experiments.Data = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=chapters.datasource.js.map