module Experiments.Models {
    export class QuestionsViewModel extends kendo.data.ObservableObject {
        //questionsDataSource: Experiments.Data.QuestionsDataSource;
        //questions: kendo.data.ObservableArray;
        questions: Array<QuestionViewModel>;

        constructor(chapterId: number) {
            super();

            var x = 83;

            //this.questions = new kendo.data.ObservableArray([]);
            this.questions = [];

            $.ajax({
                url: '/api/v1/chapters/' + chapterId + '/questions/',
                contentType: 'application/json'
            }).done((response) => {
                $.each(response,(index, item) => {

                    var questionModel = QuestionModel.createInstance(item);
                    var questionViewModel = QuestionViewModel.createInstance(chapterId, questionModel);

                    var questionView = new kendo.View(questionViewModel.viewTemplate, { model: questionViewModel });
                    
                    questionView.render($('.chapter[data-chapterid=' + chapterId + ']').find('.questions-panel'));
                                        
                    this.questions.push(questionViewModel);
                });
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