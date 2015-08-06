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
using angularDirectiveDemo.ViewModels;

namespace angularDirectiveDemo.Controllers
{
    public class UserProfilesController : Controller
    {
        private EmployeeContext db = new EmployeeContext();

        public string GetList()
        {
            var list = this.db.UserProfiles.Select(x => x);
            string obj = Newtonsoft.Json.JsonConvert.SerializeObject(list);
            return obj;
            //return this.Json(list, JsonRequestBehavior.AllowGet);
        }

        public string GetSingleList(int? id)
        {
            UserProfile userProfile = db.UserProfiles.Find(id);
            string userProfiles = Newtonsoft.Json.JsonConvert.SerializeObject(userProfile);
            return userProfiles;
        }

        public ActionResult List()
        {
            return View();
        }


        public string GetProvinces()
        {
            List<SelectListItem> provinces = new List<SelectListItem> { 
                  new SelectListItem { Text = "北京", Value="北京" },
                new SelectListItem { Text = "南京", Value="南京" },
                new SelectListItem { Text = "上海", Value="上海" },
                new SelectListItem { Text = "重庆", Value="重庆" }
            };

            //JavaScriptSerializer js = new JavaScriptSerializer();
            //var obj = js.Serialize(countries);
            string obj = Newtonsoft.Json.JsonConvert.SerializeObject(provinces);
            return obj;
        }

        public ActionResult ShareScope()
        {
            return View();
        }

        public ActionResult IsolateScope()
        {
            return View();
        }

        public ActionResult CreateIsolateScopeInDirective()
        {
            return View();
        }

        public ActionResult PartialScope1()
        {
            return View();
        }

        public ActionResult PartialScope2()
        {
            return View();
        }

        public ActionResult PartialScope3()
        {
            return View();
        }

        public string GetCities(string id)
        {
            List<SelectListItem> cities = new List<SelectListItem>();
            switch (id)
            {
                case "北京":
                    cities.Add(new SelectListItem { Text = "朝阳区", Value = "朝阳区" });
                    cities.Add(new SelectListItem { Text = "海淀区", Value = "海淀区" });
                    cities.Add(new SelectListItem { Text = "大兴区", Value = "大兴区" });
                    cities.Add(new SelectListItem { Text = "东城区", Value = "东城区" });
                    break;
                case "南京":
                    cities.Add(new SelectListItem { Text = "雨花台区", Value = "雨花台区" });
                    cities.Add(new SelectListItem { Text = "建邺区", Value = "建邺区" });
                    break;
                case "重庆":
                    cities.Add(new SelectListItem { Text = "万州区", Value = "万州区" });
                    cities.Add(new SelectListItem { Text = "江北区", Value = "江北区" });
                    break;
                case "上海":
                    cities.Add(new SelectListItem { Text = "黄浦区", Value = "黄浦区" });
                    cities.Add(new SelectListItem { Text = "松江区", Value = "松江区" });
                    break;
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            var obj = js.Serialize(cities);
            return obj;
        }

        public string GetTowns(ProvinceCityViewModel pvm)
        {
            List<SelectListItem> towns = new List<SelectListItem>();
            if (pvm != null)
            {
                switch (pvm.Province)
                {
                    case "北京":
                        switch (pvm.City)
                        {
                            case "朝阳区":
                                towns.Add(new SelectListItem { Text = "来广营", Value = "来广营" });
                                towns.Add(new SelectListItem { Text = "望京", Value = "望京" });
                                break;
                        }
                        break;
                    case "南京":
                        switch (pvm.City)
                        {
                            case "雨花台区":
                                towns.Add(new SelectListItem
                                {
                                    Text = "铁心桥",
                                    Value = "铁心桥"
                                });
                                break;
                        }
                        break;
                }
            }

            JavaScriptSerializer js = new JavaScriptSerializer();
            string obj = js.Serialize(towns);
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
