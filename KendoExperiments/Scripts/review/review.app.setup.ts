var reviewApp: Experiments.ReviewApp;

$(document).ready((e) => {
    reviewApp = new Experiments.ReviewApp();
    reviewApp.startApp();

    var signalrConnection = (<any>$).connection;
    var reviewHub = signalrConnection.Review;
    reviewHub.client.updateQuestionHistory = (chapterId, questionId, item) => {
        reviewApp.updateQuestionHistory(chapterId, questionId, item);
    }

    signalrConnection.hub.start();
});