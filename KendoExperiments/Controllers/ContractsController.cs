using KendoExperiments.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KendoExperiments.Controllers
{
    public class ContractsController : Controller
    {
        // GET: DataSource
        public ActionResult Index()
        {
            var model = new BasicModel();
            return View(model);
        }
    }
}