using System.Web;
using System.Web.Optimization;

namespace AngularJSTest
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/MyAngularMVCApp")
                .IncludeDirectory("~/App/controllers", "*.js")
                .IncludeDirectory("~/App/services", "*.js")
                .Include("~/App/app/MyAngularMVCApp.js")
                .IncludeDirectory("~/App/directives", "*.js")
                .IncludeDirectory("~/App/filters", "*.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                "~/Scripts/jquery-{version}.js",
                "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js",
                      "~/Scripts/jquery.validate.min.js",
                      "~/Scripts/jquery.validate.unobtrusive.min.js",
                      "~/Scripts/angular.js",
                      "~/Scripts/angular-route.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/themes/base/all.css",
                      "~/Content/site.css",
                       "~/Content/themes/base/all.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                     "~/Content/themes/base/all.css"));

            BundleTable.EnableOptimizations = true;
        }
    }
}
