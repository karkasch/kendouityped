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
    }
}
