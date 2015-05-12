var router;
var layout;
var reviewAppModel;
var chaptersViewModel;
function initApp() {
    layout = new kendo.Layout("layout-template", {});
    router = new kendo.Router({
        init: function () {
            layout.render($("#application"));
        },
        routeMissing: function (e) {
            console.log(e);
            router.navigate("/");
        }
    });
    router.route('/', function () {
        chaptersViewModel = new Experiments.Models.ChaptersViewModel();
        var chaptersView = new kendo.View('chapters-template', { model: chaptersViewModel });
        layout.showIn('#chapters-view', chaptersView);
    });
    router.start();
}
$(document).ready(function (e) {
    initApp();
});
//# sourceMappingURL=review.app.js.map