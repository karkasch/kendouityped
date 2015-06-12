var reviewApp;
$(document).ready(function (e) {
    reviewApp = new Experiments.ReviewApp();
    reviewApp.startApp();
    var signalrConnection = $.connection;
    var reviewHub = signalrConnection.Review;
    reviewHub.client.updateQuestionHistory = function (chapterId, questionId, item) {
        reviewApp.updateQuestionHistory(chapterId, questionId, item);
    };
    signalrConnection.hub.start();
});
//# sourceMappingURL=review.app.setup.js.map