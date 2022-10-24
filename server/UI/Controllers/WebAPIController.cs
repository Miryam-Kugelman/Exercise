using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using static UI.Models.ModelView;
using BL;
using AutoMapper;
using DAL;
using static UI.App_Start.Conversion;
using System.Web.Http.Cors;

namespace UI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class WebAPIController : ApiController
    {
        //insert client
        [Route("api/WebAPI/InsertClient")]
        [HttpPost]
        public IHttpActionResult InsertClient(ClientView newClient)
        {
            try
            {
                MyBL.InsertClient(newClient.ID, newClient.FirstNameAndLastName, newClient.Address, newClient.DateOfBirth,
                    newClient.Phone, newClient.MobilePhone, newClient.DatePositiveResult, newClient.DateRecovery);
                return Ok<ClientView>(newClient);
            }
            catch (Exception ex)
            {
                return Ok<ClientView>(null);
            }
        }

        //insert vaccination
        [Route("api/WebAPI/InsertVaccination")]
        [HttpPost]
        public IHttpActionResult InsertVaccination(VaccinationView newVaccinations)
        {
            try
            {
                
                MyBL.InsertVaccination(newVaccinations.ClientID, newVaccinations.NumberVaccination, newVaccinations.DateVaccination, newVaccinations.VaccineManufacturer, newVaccinations.ID);
                return Ok<VaccinationView>(newVaccinations);
            }
            catch(Exception ex)
            {
                return Ok<VaccinationView>(null);
            }
           
        }
        //update Client
        [Route("api/WebAPI/UpdateClient")]
        [HttpPut]
        public IHttpActionResult UpdateClient(ClientView newClient)
        {
            try
            {
                MyBL.UpdateClient(newClient.ID, newClient.FirstNameAndLastName, newClient.Address, newClient.DateOfBirth,
                    newClient.Phone, newClient.MobilePhone, newClient.DatePositiveResult, newClient.DateRecovery);
                return Ok<ClientView>(newClient);
            }
            catch (Exception ex)
            {
                return Ok<ClientView>(null);
            }
        }
        //get client
        [Route("api/WebAPI/GetClients")]
        [HttpGet]
        public List<ClientView> GetClients()
        {
            return UI.App_Start.Conversion.ConversionListClientToListClientView(MyBL.ListClients());
          //  return Mapper.Map<List<Client>, List<ClientView>>(MyBL.ListClients());
        }
        //get vaccination
        [Route("api/WebAPI/GetVaccinations")]
        [HttpGet]
        public List<VaccinationView> GetVaccinations()
        {
            return UI.App_Start.Conversion.ConversionListVaccinationToListVaccinationView(MyBL.ListVaccinations());

          //  return Mapper.Map<List<Vaccination>, List<VaccinationView>>(MyBL.ListVaccinations());
        }

        //delete client
        [Route("api/WebAPI/DeleteClient")]
        [HttpDelete]
        public Boolean DeleteClient(string id)
        {
            return BL.MyBL.DeleteClient(id);
        }
    }
}
