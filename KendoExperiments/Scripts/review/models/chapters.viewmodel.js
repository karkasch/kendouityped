var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Experiments;
(function (Experiments) {
    var Models;
    (function (Models) {
        var ChaptersViewModel = (function (_super) {
            __extends(ChaptersViewModel, _super);
            function ChaptersViewModel() {
                _super.call(this);
                this.chapters = new Experiments.Data.ChaptersDataSource();
                this.test = '34444';
            }
            return ChaptersViewModel;
        })(kendo.data.ObservableObject);
        Models.ChaptersViewModel = ChaptersViewModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=chapters.viewmodel.js.map