using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UI.Models
{
    public class ModelView
    {
        public class ClientView
        {
            public string ID { get; set; }
            public string FirstNameAndLastName { get; set; }
            public string Address { get; set; }
            public Nullable<System.DateTime> DateOfBirth { get; set; }
            public string Phone { get; set; }
            public string MobilePhone { get; set; }
            public Nullable<System.DateTime> DatePositiveResult { get; set; }
            public Nullable<System.DateTime> DateRecovery { get; set; }

        }
        public class VaccinationView
        {
            public string ClientID { get; set; }
            public int NumberVaccination { get; set; }
            public System.DateTime DateVaccination { get; set; }
            public string VaccineManufacturer { get; set; }
            public int ID { get; set; }


        }
    }
}