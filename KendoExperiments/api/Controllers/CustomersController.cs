using KendoExperiments.api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KendoExperiments.api.Controllers
{
    public class CustomersController : ApiController
    {
        public List<CustomerModel> Get()
        {
            return Db.Customers;
        }
    }
}
