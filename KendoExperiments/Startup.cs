﻿using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(KendoExperiments.Startup))]
namespace KendoExperiments
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            //app.MapSignalR();
            Microsoft.AspNet.SignalR.StockTicker.Startup.ConfigureSignalR(app);
        }
    }
}
