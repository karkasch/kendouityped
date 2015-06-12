using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR.Hubs;

namespace KendoExperiments.ReviewHub
{
    public class ReviewConnection
    {
        public ReviewConnection(IHubConnectionContext<dynamic> clients)
        {
            Clients = clients;
        }

        private IHubConnectionContext<dynamic> Clients
        {
            get;
            set;
        }

        public void UpdateQuestionHistory(string reviewId, int chapterId, int questionId, string item)
        {
            Clients.All.updateQuestionHistory(chapterId, questionId, item);
        }
    }
}