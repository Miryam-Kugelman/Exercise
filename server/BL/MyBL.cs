using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace BL
{
    public class MyBL
    {
        public static int ID = 1;
        public static ExerciseH2Entities DB = new ExerciseH2Entities();

        //insert a new client
        public static void InsertClient(string id, string firstnameandlastname, string address, Nullable<System.DateTime> dateofbirth,
            string phone, string mobilephone, Nullable<System.DateTime> datepositiveresult, Nullable<System.DateTime> daterecovery)
        {
            Client client = new Client();

            client.ID = id;
            client.FirstNameAndLastName = firstnameandlastname;
            client.Address = address;
            client.DateOfBirth = dateofbirth;
            client.Phone = phone;
            client.MobilePhone = mobilephone;
            client.DatePositiveResult = datepositiveresult;
            client.DateRecovery = daterecovery;

            DB.Client.Add(client);
            DB.SaveChanges();
        }
        //insert a new vaccination
        public static void InsertVaccination(string clientID, int numbervaccination, System.DateTime datevaccination,
        string vaccinemanufacturer, int id)
        {
            Vaccination vaccination = new Vaccination();

            vaccination.ClientID = clientID;
            vaccination.NumberVaccination = numbervaccination;
            vaccination.DateVaccination = datevaccination;
            vaccination.VaccineManufacturer = vaccinemanufacturer;
            vaccination.ID = ID;
            ID++;
            DB.Vaccination.Add(vaccination);
            DB.SaveChanges();
        }


        //update a client
        public static void UpdateClient(string id, string firstnameandlastname, string address, Nullable<System.DateTime> dateofbirth,
            string phone, string mobilephone, Nullable<System.DateTime> datepositiveresult, Nullable<System.DateTime> daterecovery)
        {
            Client client = DB.Client.FirstOrDefault(x => x.ID == id);

            client.FirstNameAndLastName = firstnameandlastname;
            client.Address = address;
            client.DateOfBirth = dateofbirth;
            client.Phone = phone;
            client.MobilePhone = mobilephone;
            client.DatePositiveResult = datepositiveresult;
            client.DateRecovery = daterecovery;

            DB.SaveChanges();
        }

        //get a clients
        public static List<Client> ListClients()
        {
            return DB.Client.ToList();
        }
        //get a vaccination
        public static List<Vaccination> ListVaccinations()
        {
            return DB.Vaccination.ToList();
        }

        //delete a client
        public static Boolean DeleteClient(string id)
        {
            try
            {
                Client clientRemove = DB.Client.FirstOrDefault(x => x.ID == id);
                Vaccination vaccinationRemove1 = DB.Vaccination.FirstOrDefault(x => x.ClientID == id && x.NumberVaccination == 1);
                Vaccination vaccinationRemove2 = DB.Vaccination.FirstOrDefault(x => x.ClientID == id && x.NumberVaccination == 2);
                Vaccination vaccinationRemove3 = DB.Vaccination.FirstOrDefault(x => x.ClientID == id && x.NumberVaccination == 3);
                Vaccination vaccinationRemove4 = DB.Vaccination.FirstOrDefault(x => x.ClientID == id && x.NumberVaccination == 4);

                DB.Client.Remove(clientRemove);
                if(vaccinationRemove1 != null)
                {
                    DB.Vaccination.Remove(vaccinationRemove1);

                }
                if (vaccinationRemove2 != null)
                {
                    DB.Vaccination.Remove(vaccinationRemove2);

                }
                if (vaccinationRemove3 != null)
                {
                    DB.Vaccination.Remove(vaccinationRemove3);

                }
                if (vaccinationRemove4 != null)
                {
                    DB.Vaccination.Remove(vaccinationRemove4);

                }
            
                DB.SaveChanges();

                return true;
            }
            catch (Exception ex)
            {
                return false;
            }

        }

    }
}
