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
        var QuestionDetailsViewModel = (function (_super) {
            __extends(QuestionDetailsViewModel, _super);
            function QuestionDetailsViewModel(chapterId, questionId) {
                var _this = this;
                _super.call(this);
                $.ajax({
                    url: '/api/v1/chapters/' + chapterId + '/questions/' + questionId + '/details',
                    contentType: 'application/json'
                }).done(function (response) {
                    //super.init(response);
                    //this.init(response);
                    _this.set('name', response.name);
                    //this.trigger(
                    console.log('init', _this.name);
                });
            }
            return QuestionDetailsViewModel;
        })(kendo.data.ObservableObject);
        Models.QuestionDetailsViewModel = QuestionDetailsViewModel;
    })(Models = Experiments.Models || (Experiments.Models = {}));
})(Experiments || (Experiments = {}));
//# sourceMappingURL=question.details.viewmodel.js.map