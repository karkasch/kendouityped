using System.Web;
using System.Web.Optimization;

namespace KendoExperiments
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/scripts/kendo").Include(
                "~/kendo/js/data/chapters.datasource.js"));

            bundles.Add(new ScriptBundle("~/scripts/review/app").Include(
                "~/scripts/review/data/chapters.datasource.js",
                "~/scripts/review/data/questions.datasource.js",

                "~/scripts/review/models/chapters.datasourceitem.model.js",
                "~/scripts/review/models/questions.datasourceitem.model.js",
                "~/scripts/review/models/question.model.js",
                
                "~/Scripts/review/viewmodels/chapters.viewmodel.js",
                "~/Scripts/review/viewmodels/questions.viewmodel.js",
                "~/Scripts/review/viewmodels/question.viewmodel.js",
                "~/Scripts/review/viewmodels/question.details.viewmodel.js",
                
                "~/Scripts/review/review.app.js"));

            bundles.Add(new StyleBundle("~/Content/review").Include(
                "~/Content/review.css"
                ));
        }
    }
}
