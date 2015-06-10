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
              
            };

            Chapters = new List<ChapterModel>()
            {
                new ChapterModel() { Id = 1, Name = "Start", Order = 1 },
                new ChapterModel() { Id = 2, Name = "Upload", Order = 2 },
                new ChapterModel() { Id = 3, Name = "Prologue", Order = 3 },
                new ChapterModel() { Id = 4, Name = "Content", Order = 3 },
                new ChapterModel() { Id = 5, Name = "Final", Order = 3 },
            };

            Questions = new List<QuestionModel>()
            {
                new QuestionModel() { Id = 1, Name = "Age?", Order = 1, QuestionType = "T", Answer = "29" },
                new QuestionModel() { Id = 2, Name = "Name?", Order = 2, QuestionType = "T" },
                new QuestionModel() { Id = 3, Name = "Date", Order = 3, QuestionType = "T" },
                new QuestionModel() { Id = 4, Name = "Yes/No", Order = 4, QuestionType = "L", AvailableList = "Yes\nNo\nMaybe", Answer = "No" },
                new QuestionModel() { Id = 5, Name = "Source", Order = 4, QuestionType = "L", AvailableList = "Books\nNews\nMagazine", Answer = "" },
            };
        }


        public static List<CustomerModel> Customers { get; set; }
        public static List<ChapterModel> Chapters { get; set; }
        public static List<QuestionModel> Questions { get; set; }
    }
}