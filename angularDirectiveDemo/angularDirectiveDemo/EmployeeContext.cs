using angularDirectiveDemo.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace angularDirectiveDemo
{
    public class EmployeeContext: DbContext
    {
        public EmployeeContext()
            : base("name=EmployeeContext")
        {
            //Database.SetInitializer<EmployeeContext>(new ());
        }

        public DbSet<UserProfile> UserProfiles { get; set; }
    }
}