﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KendoExperiments.api.Models
{
    public class QuestionModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }
        public string Answer { get; set; }
        public string QuestionType { get; set; }
        public string AvailableList { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}