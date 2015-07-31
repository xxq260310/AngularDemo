using AngularJSTest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularJSTest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult List()
        {
            return View();
        }

        public ActionResult Edit(int? id)
        {
            return View();
        }

        [HttpPost]
        public ActionResult Edit(UserProfile user)
        {
            return View();
        }

        public ActionResult Delete(int? id)
        {
            return View();
        }

        [HttpPost]
        [ActionName("Delete")]
        public ActionResult DeleteConfirmed(UserProfile user)
        {
            return View();
        }

        public ActionResult Details(int? id)
        {
            return View();
        }
    }
}