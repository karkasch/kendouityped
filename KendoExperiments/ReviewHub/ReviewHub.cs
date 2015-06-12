using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace KendoExperiments.ReviewHub
{
    [HubName("Review")]
    public class ReviewHub : Hub
    {
        //private readonly ReviewConnection _review;

        private static Lazy<ReviewConnection> _instance = new Lazy<ReviewConnection>(
            () => new ReviewConnection(GlobalHost.ConnectionManager.GetHubContext<ReviewHub>().Clients));

        
        public void UpdateQuestionHistory(string reviewId, int chapterId, int questionId, string item)
        {
            _instance.Value.UpdateQuestionHistory(reviewId, chapterId, questionId, item);
        }
    }
}