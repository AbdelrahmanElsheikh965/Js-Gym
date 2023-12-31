// List of all countries (available) codes - as .cca2 property is not accurate all the time.
const cc = {
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BA: "Bosnia and Herzegovina",
    BB: "Barbados",
    WF: "Wallis and Futuna",
    BL: "Saint Barthelemy",
    BM: "Bermuda",
    BN: "Brunei",
    BO: "Bolivia",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BT: "Bhutan",
    JM: "Jamaica",
    BV: "Bouvet Island",
    BW: "Botswana",
    WS: "Samoa",
    BQ: "Bonaire, Saint Eustatius and Saba ",
    BR: "Brazil",
    BS: "Bahamas",
    JE: "Jersey",
    BY: "Belarus",
    BZ: "Belize",
    RU: "Russia",
    RW: "Rwanda",
    RS: "Serbia",
    TL: "East Timor",
    RE: "Reunion",
    TM: "Turkmenistan",
    TJ: "Tajikistan",
    RO: "Romania",
    TK: "Tokelau",
    GW: "Guinea-Bissau",
    GU: "Guam",
    GT: "Guatemala",
    GS: "South Georgia and the South Sandwich Islands",
    GR: "Greece",
    GQ: "Equatorial Guinea",
    GP: "Guadeloupe",
    JP: "Japan",
    GY: "Guyana",
    GG: "Guernsey",
    GF: "French Guiana",
    GE: "Georgia",
    GD: "Grenada",
    GB: "United Kingdom",
    GA: "Gabon",
    SV: "El Salvador",
    GN: "Guinea",
    GM: "Gambia",
    GL: "Greenland",
    GI: "Gibraltar",
    GH: "Ghana",
    OM: "Oman",
    TN: "Tunisia",
    JO: "Jordan",
    HR: "Croatia",
    HT: "Haiti",
    HU: "Hungary",
    HK: "Hong Kong",
    HN: "Honduras",
    HM: "Heard Island and McDonald Islands",
    VE: "Venezuela",
    PR: "Puerto Rico",
    PS: "Palestinian Territory",
    PW: "Palau",
    PT: "Portugal",
    SJ: "Svalbard and Jan Mayen",
    PY: "Paraguay",
    IQ: "Iraq",
    PA: "Panama",
    PF: "French Polynesia",
    PG: "Papua New Guinea",
    PE: "Peru",
    PK: "Pakistan",
    PH: "Philippines",
    PN: "Pitcairn",
    PL: "Poland",
    PM: "Saint Pierre and Miquelon",
    ZM: "Zambia",
    EH: "Western Sahara",
    EE: "Estonia",
    EG: "Egypt",
    ZA: "South Africa",
    EC: "Ecuador",
    IT: "Italy",
    VN: "Vietnam",
    SB: "Solomon Islands",
    ET: "Ethiopia",
    SO: "Somalia",
    ZW: "Zimbabwe",
    SA: "Saudi Arabia",
    ES: "Spain",
    ER: "Eritrea",
    ME: "Montenegro",
    MD: "Moldova",
    MG: "Madagascar",
    MF: "Saint Martin",
    MA: "Morocco",
    MC: "Monaco",
    UZ: "Uzbekistan",
    MM: "Myanmar",
    ML: "Mali",
    MO: "Macao",
    MN: "Mongolia",
    MH: "Marshall Islands",
    MK: "Macedonia",
    MU: "Mauritius",
    MT: "Malta",
    MW: "Malawi",
    MV: "Maldives",
    MQ: "Martinique",
    MP: "Northern Mariana Islands",
    MS: "Montserrat",
    MR: "Mauritania",
    IM: "Isle of Man",
    UG: "Uganda",
    TZ: "Tanzania",
    MY: "Malaysia",
    MX: "Mexico",
    IL: "Israel",
    FR: "France",
    IO: "British Indian Ocean Territory",
    SH: "Saint Helena",
    FI: "Finland",
    FJ: "Fiji",
    FK: "Falkland Islands",
    FM: "Micronesia",
    FO: "Faroe Islands",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NA: "Namibia",
    VU: "Vanuatu",
    NC: "New Caledonia",
    NE: "Niger",
    NF: "Norfolk Island",
    NG: "Nigeria",
    NZ: "New Zealand",
    NP: "Nepal",
    NR: "Nauru",
    NU: "Niue",
    CK: "Cook Islands",
    XK: "Kosovo",
    CI: "Ivory Coast",
    CH: "Switzerland",
    CO: "Colombia",
    CN: "China",
    CM: "Cameroon",
    CL: "Chile",
    CC: "Cocos Islands",
    CA: "Canada",
    CG: "Republic of the Congo",
    CF: "Central African Republic",
    CD: "Democratic Republic of the Congo",
    CZ: "Czech Republic",
    CY: "Cyprus",
    CX: "Christmas Island",
    CR: "Costa Rica",
    CW: "Curacao",
    CV: "Cape Verde",
    CU: "Cuba",
    SZ: "Swaziland",
    SY: "Syria",
    SX: "Sint Maarten",
    KG: "Kyrgyzstan",
    KE: "Kenya",
    SS: "South Sudan",
    SR: "Suriname",
    KI: "Kiribati",
    KH: "Cambodia",
    KN: "Saint Kitts and Nevis",
    KM: "Comoros",
    ST: "Sao Tome and Principe",
    SK: "Slovakia",
    KR: "South Korea",
    SI: "Slovenia",
    KP: "North Korea",
    KW: "Kuwait",
    SN: "Senegal",
    SM: "San Marino",
    SL: "Sierra Leone",
    SC: "Seychelles",
    KZ: "Kazakhstan",
    KY: "Cayman Islands",
    SG: "Singapore",
    SE: "Sweden",
    SD: "Sudan",
    DO: "Dominican Republic",
    DM: "Dominica",
    DJ: "Djibouti",
    DK: "Denmark",
    VG: "British Virgin Islands",
    DE: "Germany",
    YE: "Yemen",
    DZ: "Algeria",
    US: "United States",
    UY: "Uruguay",
    YT: "Mayotte",
    UM: "United States Minor Outlying Islands",
    LB: "Lebanon",
    LC: "Saint Lucia",
    LA: "Laos",
    TV: "Tuvalu",
    TW: "Taiwan",
    TT: "Trinidad and Tobago",
    TR: "Turkey",
    LK: "Sri Lanka",
    LI: "Liechtenstein",
    LV: "Latvia",
    TO: "Tonga",
    LT: "Lithuania",
    LU: "Luxembourg",
    LR: "Liberia",
    LS: "Lesotho",
    TH: "Thailand",
    TF: "French Southern Territories",
    TG: "Togo",
    TD: "Chad",
    TC: "Turks and Caicos Islands",
    LY: "Libya",
    VA: "Vatican",
    VC: "Saint Vincent and the Grenadines",
    AE: "United Arab Emirates",
    AD: "Andorra",
    AG: "Antigua and Barbuda",
    AF: "Afghanistan",
    AI: "Anguilla",
    VI: "U.S. Virgin Islands",
    IS: "Iceland",
    IR: "Iran",
    AM: "Armenia",
    AL: "Albania",
    AO: "Angola",
    AQ: "Antarctica",
    AS: "American Samoa",
    AR: "Argentina",
    AU: "Australia",
    AT: "Austria",
    AW: "Aruba",
    IN: "India",
    AX: "Aland Islands",
    AZ: "Azerbaijan",
    IE: "Ireland",
    ID: "Indonesia",
    UA: "Ukraine",
    QA: "Qatar",
    MZ: "Mozambiqu"
};

// This 👇 was a trial to make the above object in a separate file. 

// export default cc;
// import { cc } from './CounryCodes.js'
// const cc = require('./CountryCodes.js')

let mapLinkElement = document.getElementById("mapLink");

// Fetch all countries data from restcountries API. 
countries = document.getElementById("countriesData");
fetch("https://restcountries.com/v3.1/all?fields=name")
    .then((response) => response.json())
    .then((data) => {
        data.forEach((country) => {
            countries.innerHTML += `<option>${country.name.common}</option>`;
        });
    })
    .catch((err) => alert(err));

// Get key of value from the countries-code (cc) object above.
function getObjectKey(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
}

/** Handling scrolling part
 * 1) Scroll to a certain point right after the select tag 
 * 2) Stop scrolling until changing select countries option
 */
const element = document.getElementById("stop");
const rect = element.getBoundingClientRect();
window.scrollTo(rect.left + window.scrollX, rect.top + window.scrollY);
const body = document.body;
body.classList.add('no-scroll');

// Once a country is chosen.
countries.addEventListener("change", function () {
    // Enable the scrolling again.
    body.classList.remove('no-scroll');
    targetCountry = this.value;
    fetch("https://restcountries.com/v3.1/name/" + targetCountry)
        .then((response) => response.json())
        .then((data) => {
            // filling data of chosen country
            console.log(data[0].flags.png);
            document
                .getElementById("flagImage")                 
                .setAttribute("src", data[0].flags.png);
            document
                .getElementById("COA")      
                .setAttribute("src", data[0].coatOfArms.png);
            $("#pop").html(data[0].population.toLocaleString());     
            $("#reg").html(data[0].region);         
            $("#sow").html(data[0].startOfWeek);    
            $("#tz").html(data[0].timezones[0]);    
            $("#cap").html(data[0].capital);        
            if (data[0].unMember == true) {
                document.getElementById("un").innerHTML = `<i class="fas fa-check"></i>`;
            } else {
                document.getElementById("un").innerHTML = `<i class="fas fa-times"></i>`;
            }

            if (data[0].independent == true) {
                document.getElementById("in").innerHTML = `<i class="fas fa-check"></i>`;
            } else {
                document.getElementById("in").innerHTML = `<i class="fas fa-times"></i>`;
            }

            // Prepare URL for Google Maps iframe.
            const Url = `https://www.google.com/maps?q=${targetCountry}&hl=en&z=6&output=embed`;
            
            // Preview the iframe map
            mapLinkElement.src = Url;

            // This is for the button 'See On Google Maps'
            document
                .getElementById("mapRefLink").href = `https://www.google.com/maps?q=${targetCountry}`;

        });

    // Assign code of the target selected country
    var cCode = getObjectKey(cc, targetCountry);
    
    fetch(`https://api.worldnewsapi.com/search-news?api-key=PASTE-YOUR-KEY-HERE&source-countries=${cCode}`)
        .then((response) => response.json())
        .then((data) => {

            data.news.forEach(function (newsUnit) {

                document.getElementById("newsData").innerHTML +=
                    ` <!--News Box Start-->
                <div class="col-md-3 col-sm-6">
                    <div class="news-box">
                        <div class="new-thumb"> <span class="cat c1">News</span> <img id="newsUnitPhoto" src="${newsUnit.image}" alt=""> </div>
                        <div class="new-txt">
                        <ul class="news-meta">
                            <li>${newsUnit.publish_date}</li>
                        </ul>
                        <h6><a href="index.html#">${newsUnit.title}</a></h6>
                        <p> ${newsUnit.text.slice(0, 100)} ... </p>
                        </div>
                        <div class="news-box-f"> 
                        <img
                        src="" 
                        alt=""> ${newsUnit.authors[0]} <a href="index.html#"><i class="fas fa-arrow-right"></i></a> </div>
                    </div>
                </div>
            <!--News Box End--> `;
            });
        });



});

// This if for email configuration. - Public Key
emailjs.init('YOUR-PUBLIC-KEY');

document.getElementById("contact-form").addEventListener('submit', function (event) {
    event.preventDefault();

    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;

    // these IDs from the Dashboard of "dashboard.emailjs.com"
    emailjs.sendForm('EMAILJS-EMAIL-SERVICE_ID', 'EMAILJS-TEMPLATE_ID', this)
        .then(function () {
            console.log('SUCCESS!');
        }, function (error) {
            console.log('FAILED...', error);
        });
});
