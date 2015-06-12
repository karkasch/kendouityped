using KendoExperiments.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KendoExperiments.api.Controllers
{
    public class QuestionsController : ApiController
    {
        public List<QuestionModel> Get(int chapterId)
        {
            return Db.Questions;
        }

        public QuestionModel Post([FromUri]int chapterId, [FromUri]int id, [FromBody]QuestionModel model)
        {
            model.ModifiedDate = DateTime.UtcNow;

            var hub = new ReviewHub.ReviewHub();
            hub.UpdateQuestionHistory("test-review", chapterId, id, "Question answered: " + model.Answer);

            return model;
        }

        [HttpGet]
        public object Details([FromUri]int chapterId, [FromUri]int id)
        {
            return new { Id = 23233, Name = "Details", CreatedDate = DateTime.UtcNow };
        }
    }
}
