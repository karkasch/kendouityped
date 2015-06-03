module Experiments.Models {
    export class QuestionsViewModel extends kendo.data.ObservableObject {
        questionsDataSource: Experiments.Data.QuestionsDataSource;
        questions: kendo.data.ObservableArray;

        constructor(chapterId: number) {
            super();

            var x = 83;

            this.questions = new kendo.data.ObservableArray([]);

            $.ajax({
                url: '/api/v1/chapters/' + chapterId + '/questions/',
                contentType: 'application/json'
            }).done((response) => {
                $.each(response, (index, item) => {
                    var questionModel = QuestionModel.createInstance(item);
                    var questionViewModel = QuestionViewModel.createInstance(chapterId, questionModel);

                    var questionView = new kendo.View(questionViewModel.viewTemplate, { model: questionModel });
                    
                    questionView.render($('.chapter[data-chapterid=' + chapterId + ']').find('.questions-panel'));
                                        
                    this.questions.push(QuestionsViewModel);
                });
            });
        }
    }

} 