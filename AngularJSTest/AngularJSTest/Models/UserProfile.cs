using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AngularJSTest.Models
{
    public class UserProfile
    {
        [Key]
        public int EmployeeId { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Country { get; set; }

        public string State { get; set; }

        public Nullable<bool> IsActive { get; set; }

        public string Description { get; set; }

        [DataType(DataType.DateTime)]
        public Nullable<DateTime> BirthDate { get; set; }
    }
}