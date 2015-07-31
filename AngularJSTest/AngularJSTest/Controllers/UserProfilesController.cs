using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Runtime.Serialization;

namespace AngularJSTest.Controllers
{
    public class UserProfilesController : Controller
    {
        private EmployeeContext db = new EmployeeContext();

        // GET: Angular
        [HttpGet]
        public JsonResult Index()
        {
            var list = this.db.UserProfiles.Select(x => x);
            return this.Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}