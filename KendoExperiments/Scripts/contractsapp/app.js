var router;
var layout;
var contractsViewModel;
function initApp() {
    layout = new kendo.Layout("layout-template", {});
    router = new kendo.Router({
        init: function () {
            layout.render("#application");
        },
        routeMissing: function (e) {
            console.log(e);
            router.navigate("/");
        }
    });
    router.route('/', function () {
        contractsViewModel = new Cms.Models.ContractsViewModel();
    });
}
$(document).ready(function (e) {
    initApp();
});
//# sourceMappingURL=app.js.map