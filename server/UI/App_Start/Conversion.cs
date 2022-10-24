using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using static UI.Models.ModelView;
using DAL;
namespace UI.App_Start
{
    public class Conversion
    {
        public static ClientView ConversionClientToClientView (Client client)
        {
            ClientView newClient = new ClientView()
            {
                ID = client.ID,
                FirstNameAndLastName = client.FirstNameAndLastName,
                Address = client.Address,
                DateOfBirth = client.DateOfBirth,
                Phone = client.Phone,
                MobilePhone = client.MobilePhone,
                DatePositiveResult = client.DatePositiveResult,
                DateRecovery = client.DateRecovery
            };
            return newClient;
        }

        public static Client ConversionClientViewToClient(ClientView client)
        {
            Client newClient = new Client()
            {
                ID = client.ID,
                FirstNameAndLastName = client.FirstNameAndLastName,
                Address = client.Address,
                DateOfBirth = client.DateOfBirth,
                Phone = client.Phone,
                MobilePhone = client.MobilePhone,
                DatePositiveResult = client.DatePositiveResult,
                DateRecovery = client.DateRecovery
            };
            return newClient;
        }
        public static List<Client> ConversionListClientViewToListClient(List<ClientView> listClient)
        {
            List<Client> newList = new List<Client>();
            foreach(var item in listClient)
            {
                newList.Add(ConversionClientViewToClient(item));
            }
            return newList;
        }

        public static List<ClientView> ConversionListClientToListClientView(List<Client> listClient)
        {
            List<ClientView> newList = new List<ClientView>();
            foreach (var item in listClient)
            {
                newList.Add(ConversionClientToClientView(item));
            }
            return newList;
        }

        public static VaccinationView ConversionVaccinationToVaccinationView(Vaccination vaccination)
        {
            VaccinationView newVaccination = new VaccinationView()
            {
                ClientID = vaccination.ClientID,
                NumberVaccination = vaccination.NumberVaccination,
                DateVaccination = vaccination.DateVaccination,
                VaccineManufacturer = vaccination.VaccineManufacturer,
                ID = vaccination.ID
            };
            return newVaccination;
        }

        public static Vaccination ConversionVaccinationViewToVaccination(VaccinationView vaccination)
        {
            Vaccination newVaccination = new Vaccination()
            {
                ClientID = vaccination.ClientID,
                NumberVaccination = vaccination.NumberVaccination,
                DateVaccination = vaccination.DateVaccination,
                VaccineManufacturer = vaccination.VaccineManufacturer,
                ID = vaccination.ID
            };
            return newVaccination;
        }
        public static List<Vaccination> ConversionListVaccinationViewToListVaccination(List<VaccinationView> listVaccination)
        {
            List<Vaccination> newList = new List<Vaccination>();
            foreach (var item in listVaccination)
            {
                newList.Add(ConversionVaccinationViewToVaccination(item));
            }
            return newList;
        }

        public static List<VaccinationView> ConversionListVaccinationToListVaccinationView(List<Vaccination> listVaccination)
        {
            List<VaccinationView> newList = new List<VaccinationView>();
            foreach (var item in listVaccination)
            {
                newList.Add(ConversionVaccinationToVaccinationView(item));
            }
            return newList;
        }

    }
}