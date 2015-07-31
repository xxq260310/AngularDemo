using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using System.Web;
using AngularJSTest.Models;

namespace AngularJSTest
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext()
            : base("name=EmployeeContext")
        {
            
        }

        public DbSet<UserProfile> UserProfiles { get; set; }
    }
}