using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using angularDirectiveDemo;
using angularDirectiveDemo.Models;
using System.Web.Script.Serialization;

namespace angularDirectiveDemo.Controllers
{
    public class UserProfilesController : Controller
    {
        private EmployeeContext db = new EmployeeContext();

        public JsonResult GetList()
        {
            var list = this.db.UserProfiles.Select(x => x);
            return this.Json(list, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetSingleList(int? id)
        {
            UserProfile userProfile = db.UserProfiles.Find(id);
            return this.Json(userProfile, JsonRequestBehavior.AllowGet);
        }

        public ActionResult List()
        {
            return View();
        }

        public string GetCountries()
        {
            List<SelectListItem> countries = new List<SelectListItem> { 
                  new SelectListItem { Text = "India", Value="IN" },
                new SelectListItem { Text = "United States", Value="US" },
                new SelectListItem { Text = "United Kingdom", Value="UK" },
                new SelectListItem { Text = "Australlia", Value="CA" }
            };

            JavaScriptSerializer js = new JavaScriptSerializer();
            var obj = js.Serialize(countries);
            return obj;
        }

        public string GetStates(string id)
        {
            List<SelectListItem> states = new List<System.Web.Mvc.SelectListItem>();
            switch (id)
            {
                case "IN":
                    states.Add(new SelectListItem { Text = "Uttar Pradesh", Value = "UP" });
                    states.Add(new SelectListItem { Text = "Madhya Pradesh", Value = "MP" });
                    states.Add(new SelectListItem { Text = "Delhi", Value = "DL" });
                    states.Add(new SelectListItem { Text = "Kanpur", Value = "KN" });
                    break;
                case "US":
                    states.Add(new SelectListItem { Text = "California", Value = "CA" });
                    states.Add(new SelectListItem { Text = "Newyork", Value = "NY" });
                    break;
                case "UK":
                    states.Add(new SelectListItem { Text = "London", Value = "LN" });
                    states.Add(new SelectListItem { Text = "Paris", Value = "PR" });
                    break;
                case "CA":
                    states.Add(new SelectListItem { Text = "Sydney", Value = "SD" });
                    states.Add(new SelectListItem { Text = "Melbourne", Value = "MB" });
                    break;
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            var obj = js.Serialize(states);
            return obj;
        }

        // GET: UserProfiles
        public ActionResult Index()
        {
            return View(db.UserProfiles.ToList());
        }

        // GET: UserProfiles/Details/5
        public ActionResult Details(int? id)
        {
            return View();
        }

        // GET: UserProfiles/Create
        public ActionResult Create()
        {
            return View();
        }

        // GET: UserProfiles/Edit/5
        public ActionResult Edit(int? id)
        {
            return View();
        }

        public void Update(UserProfile userProfile)
        {
            if (userProfile.EmployeeId != 0)
            {
                db.Entry(userProfile).State = EntityState.Modified;
                db.SaveChanges();
            }

            else
            {
                db.UserProfiles.Add(userProfile);
                db.SaveChanges();
            }

        }

        // GET: UserProfiles/Delete/5
        public ActionResult Delete(int? id)
        {
            return View();
        }

        public void DeleteConfirmed(int id)
        {
            UserProfile userProfile = db.UserProfiles.Find(id);
            db.UserProfiles.Remove(userProfile);
            db.SaveChanges();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
