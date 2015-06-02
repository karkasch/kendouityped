﻿var router: kendo.Router;
var layout: kendo.Layout;

var reviewAppModel;
var chaptersViewModel: Experiments.Models.ChaptersViewModel;

function initApp() {

    layout = new kendo.Layout("layout-template", { });

    router = new kendo.Router({
        init: () => {
            layout.render($("#application"));
        },
        routeMissing: e => {
            router.navigate("/");
        }
    });

    router.route('/',() => {
        // chapters
        chaptersViewModel = new Experiments.Models.ChaptersViewModel();
        var chaptersView = new kendo.View('chapters-template', { model: chaptersViewModel });

        layout.showIn('#chapters-view', chaptersView);

        kendo.fx($("#chapters-view")).slideIn("up").play();
    });

    router.route('/chapters/:id', (id: number) => {
        // chapters
        chaptersViewModel = new Experiments.Models.ChaptersViewModel();
        var chaptersView = new kendo.View('chapters-template', { model: chaptersViewModel });

        chaptersViewModel.chaptersDataSource.one('change', (e) => {
            console.log('change', e);

            var chapter = chaptersViewModel.chaptersDataSource.get(id);
            chapter.trigger('showQuestons', { data: chapter });
        });


        layout.showIn('#chapters-view', chaptersView);

        kendo.fx($("#chapters-view")).slideIn("up").play();


        // questions

    });

    router.start();
}

$(document).ready((e) => {
    initApp();
});