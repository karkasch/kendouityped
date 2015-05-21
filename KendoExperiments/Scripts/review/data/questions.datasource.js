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
        var QuestionsDataSource = (function (_super) {
            __extends(QuestionsDataSource, _super);
            function QuestionsDataSource(chapterId) {
                _super.call(this, {
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
            return QuestionsDataSource;
        })(kendo.data.DataSource);
        Data.QuestionsDataSource = QuestionsDataSource;
    })(Data = Experiments.Data || (Experiments.Data = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=questions.datasource.js.map