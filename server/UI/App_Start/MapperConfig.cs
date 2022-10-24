using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using DAL;
using static UI.Models.ModelView;

namespace UI.App_Start
{
    public class MapperConfig
    {
        public static void createMapping()
        {
          //  var config = new MapperConfiguration(map =>
            Mapper.Initialize(map =>
            {
                map.CreateMap<ClientView, Client>().
                ForMember(dest => dest.ID, opt => opt.MapFrom(src => src.ID)).
                ForMember(dest => dest.FirstNameAndLastName, opt => opt.MapFrom(src => src.FirstNameAndLastName)).
                ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address)).
                ForMember(dest => dest.DateOfBirth, opt => opt.MapFrom(src => src.DateOfBirth)).
                ForMember(dest => dest.Phone, opt => opt.MapFrom(src => src.Phone)).
                ForMember(dest => dest.MobilePhone, opt => opt.MapFrom(src => src.MobilePhone)).
                ForMember(dest => dest.DatePositiveResult, opt => opt.MapFrom(src => src.DatePositiveResult)).
                ForMember(dest => dest.DateRecovery, opt => opt.MapFrom(src => src.DateRecovery));

                map.CreateMap<Client, ClientView>().
                ForMember(dest => dest.ID, opt => opt.MapFrom(src => src.ID)).
                ForMember(dest => dest.FirstNameAndLastName, opt => opt.MapFrom(src => src.FirstNameAndLastName)).
                ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address)).
                ForMember(dest => dest.DateOfBirth, opt => opt.MapFrom(src => src.DateOfBirth)).
                ForMember(dest => dest.Phone, opt => opt.MapFrom(src => src.Phone)).
                ForMember(dest => dest.MobilePhone, opt => opt.MapFrom(src => src.MobilePhone)).
                ForMember(dest => dest.DatePositiveResult, opt => opt.MapFrom(src => src.DatePositiveResult)).
                ForMember(dest => dest.DateRecovery, opt => opt.MapFrom(src => src.DateRecovery));

                map.CreateMap<VaccinationView, Vaccination>().
                ForMember(dest => dest.ClientID, opt => opt.MapFrom(src => src.ClientID)).
                ForMember(dest => dest.NumberVaccination, opt => opt.MapFrom(src => src.NumberVaccination)).
                ForMember(dest => dest.DateVaccination, opt => opt.MapFrom(src => src.DateVaccination)).
                ForMember(dest => dest.VaccineManufacturer, opt => opt.MapFrom(src => src.VaccineManufacturer));

                map.CreateMap<Vaccination, VaccinationView>().
                ForMember(dest => dest.ClientID, opt => opt.MapFrom(src => src.ClientID)).
                ForMember(dest => dest.NumberVaccination, opt => opt.MapFrom(src => src.NumberVaccination)).
                ForMember(dest => dest.DateVaccination, opt => opt.MapFrom(src => src.DateVaccination)).
                ForMember(dest => dest.VaccineManufacturer, opt => opt.MapFrom(src => src.VaccineManufacturer));
            }
            );
        }
    }
}