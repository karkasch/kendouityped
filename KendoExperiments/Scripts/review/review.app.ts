var router: kendo.Router;
var layout: kendo.Layout;

var reviewAppModel;
var chaptersViewModel;

function initApp() {

    layout = new kendo.Layout("layout-template", {});

    router = new kendo.Router({
        init: () => {
            layout.render($("#application"));
        },
        routeMissing: e => {
            console.log(e);

            router.navigate("/");
        }
    });

    router.route('/',() => {
        chaptersViewModel = new Experiments.Models.ChaptersViewModel();
        var chaptersView = new kendo.View('chapters-template', { model: chaptersViewModel });

        layout.showIn('#chapters-view', chaptersView);
    });

    router.start();
}

$(document).ready((e) => {
    initApp();
});