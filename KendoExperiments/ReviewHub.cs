using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace KendoExperiments
{
    public class ReviewHub : Hub
    {
        public void UpdateQuestionHistory(string reviewId, int chapterId, int questionId, string item)
        {
            //Clients.All.hello();
            Clients.All.updateHistory(chapterId, questionId, item);     
        }
    }
}