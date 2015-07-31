using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularRoute.Startup))]
namespace AngularRoute
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
