module Experiments.Models {
    export class QuestionsViewModel extends kendo.data.ObservableObject {
        questions: Array<QuestionViewModel>;

        constructor(chapterId: number) {
            super();

            this.questions = [];

            $.ajax({
                url: '/api/v1/chapters/' + chapterId + '/questions/',
                contentType: 'application/json'
            }).done((response) => {

                var questionsPanel = $('.chapter[data-chapterid=' + chapterId + ']').find('.questions-panel');

                $.each(response,(index, item) => {

                    var questionModel = QuestionModel.createInstance(item);
                    if (questionModel != null) {
                        var questionViewModel = QuestionViewModel.createInstance(chapterId, questionModel);
                        if (QuestionsViewModel != null) {
                            var questionView = new kendo.View(questionViewModel.viewTemplate, { model: questionViewModel });
                            questionView.render(questionsPanel);

                            this.questions.push(questionViewModel);
                        }
                    }

                });

                kendo.fx(questionsPanel).slideIn("left").play();
            });
        }

        public getQuestionViewModel(questionId: number): QuestionViewModel {
            
            for (var i = 0; i < this.questions.length; i++) {
                if (this.questions[i].question.id == questionId)
                    return this.questions[i];
            }

            return null;
        }


    }
} 