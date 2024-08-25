// import React, { useEffect, useState } from "react";
// import {
//     GetCountries,
//     GetState,
//     GetCity,
//     GetLanguages, //async functions
//   } from "react-country-state-city";
  
//   export const GetCityByCountry = () => {
//     const [countryid, setCountryid] = useState(0);
//     const [stateid, setStateid] = useState(0);
//     const [cityid, setCityid] = useState(0);
//     const [language, setLanguage] = useState(0);
  
//     const [countriesList, setCountriesList] = useState([]);
//     const [stateList, setStateList] = useState([]);
//     const [cityList, setCityList] = useState([]);
//     const [languageList, setLanguageList] = useState([]);
  
//     useEffect(() => {
//       GetCountries().then((result) => {
//         setCountriesList(result);
//       });
  
//       GetLanguages().then((result) => {
//         setLanguageList(result);
//       });
//     }, []);
//     return (
//       <div>
//         <h6>Country</h6>
//         <select
//           onChange={(e) => {
//             const country = countriesList[e.target.value]; //here you will get full country object.
//             setCountryid(country.id);
//             GetState(country.id).then((result) => {
//               setStateList(result);
//             });
//           }}
//           value={countryid}
//         >
//           {countriesList.map((item, index) => (
//             <option key={index} value={index}>
//               {item.name}
//             </option>
//           ))}
//         </select>
//         <h6>State</h6>
//         <select
//           onChange={(e) => {
//             const state = stateList[e.target.value]; //here you will get full state object.
//             setStateid(state.id);
//             GetCity
//             GetCity(countryid, state.id).then((result) => {
//               setCityList(result);
//             });
//           }}
//           value={stateid}
//         >
//           {stateList.map((item, index) => (
//             <option key={index} value={index}>
//               {item.name}
//             </option>
//           ))}
//         </select>
//         <h6>City</h6>
//         <select
//           onChange={(e) => {
//             const city = cityList[e.target.value]; //here you will get full city object.
//             setCityid(city.id);
//           }}
//           value={cityid}
//         >
//           {cityList.map((item, index) => (
//             <option key={index} value={index}>
//               {item.name}
//             </option>
//           ))}
//         </select>
//         <h6>Language</h6>
//         <select
//           onChange={(e) => {
//             setLanguage(e);
//           }}
//           value={language}
//         >
//           {languageList.map((item, index) => (
//             <option key={index} value={item.id}>
//               {item.name}
//             </option>
//           ))}
//         </select>
//       </div>
//     );
//   }