using KendoExperiments.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoExperiments.api
{
    public class Db
    {
        static Db()
        {
            Customers = new List<CustomerModel>()
            {
                new CustomerModel() { Id = 1, Name = "EasyJet", Description = "Test customer"},
                new CustomerModel() { Id = 2, Name = "AerCap", Description = "Test customer"},
                new CustomerModel() { Id = 3, Name = "Test", Description = "Test customer"},
                new CustomerModel() { Id = 4, Name = "KLM", Description = "Test customer"},
            };

            Chapters = new List<ChapterModel>()
            {
                new ChapterModel() { Id = 1, Name = "Test", Order = 1 },
                new ChapterModel() { Id = 2, Name = "Upload", Order = 2 },
                new ChapterModel() { Id = 3, Name = "Engine", Order = 3 },
            };

            Questions = new List<QuestionModel>()
            {
                new QuestionModel() { Id = 1, Name = "Age?", Order = 1 },
                new QuestionModel() { Id = 2, Name = "Name?", Order = 2 },
                new QuestionModel() { Id = 3, Name = "Engine date", Order = 3 },
                new QuestionModel() { Id = 4, Name = "Yes/No", Order = 4 },
            };
        }


        public static List<CustomerModel> Customers { get; set; }
        public static List<ChapterModel> Chapters { get; set; }
        public static List<QuestionModel> Questions { get; set; }
    }
}