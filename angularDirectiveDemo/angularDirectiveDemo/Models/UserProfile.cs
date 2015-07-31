using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace angularDirectiveDemo.Models
{
    public class UserProfile
    {
        [Key]
        public int EmployeeId { get; set; }

        [StringLength(20)]
        public string FirstName { get; set; }

        [StringLength(20)]
        public string LastName { get; set; }

        public string Country { get; set; }

        public string State { get; set; }

        public Nullable<bool> IsActive { get; set; }

        [StringLength(100)]
        public string Description { get; set; }

        [DataType(DataType.DateTime)]
        public Nullable<DateTime> BirthDate { get; set; }
    }
}