import React, { Component } from 'react'
import Typing from 'react-typing-animation';
import {Link} from 'react-router-dom'


class QuestionTwo extends Component {



continue =  (e) => {
    e.preventDefault();
    if (this.props.questionTwo === '') 
    alert('Please answer the question!')
    else
    this.props.nextStep();
}

back =  (e) => {
    e.preventDefault();
    this.props.previousStep();
}

containsWord=()=>{
    const words = ['you?', 'u?', 'yourself?'];
    const input = this.props.questionOne
    const  worr = (words.some(word => input.toLowerCase().includes(word.toLowerCase())));

    if (worr === true) {
    return ("im good thanks for asking! Mind picking a country for me?") 
    }

    else return 'pick a country.'
}

render(){

const {values, handleChange } = this.props; 

    return (
        <div className="myForm">

        <h1 className="header-one">question two</h1>
     
        <label>{this.containsWord()} </label> 

            <br/>   <br/>
<form >
        <select className="dropdown" onChange={handleChange('questionTwo')}>
                <option value="All">select</option>
                <option value="ar-AE">Afghanistan</option>
                <option value="sv-SE">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="ar-DZ">Algeria</option>
                <option value="fr-EN">American Samoa</option>
                <option value="en-US">Andorra</option>
                <option value="pt-PT">Angola</option>
                <option value="en-US">Anguilla</option>
                <option value="en-US">Antarctica</option>
                <option value="en-US">Antigua and Barbuda</option>
                <option value="es-AR">Argentina</option>
                <option value="en-US">Armenia</option>
                <option value="nl-NL">Aruba</option>
                <option value="en-AU">Australia</option>
                <option value="de-AT">Austria</option>
                <option value="tr-TR">Azerbaijan</option>
                <option value="en-ZA">Bahamas</option>
                <option value="ar-AE">Bahrain</option>
                <option value="en-IN">Bangladesh</option>
                <option value="ar-AE">Barbados</option>
                <option value="ru-RU">Belarus</option>
                <option value="da-BE">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="en-US">Benin</option>
                <option value="en-US">Bermuda</option>
                <option value="en-NZ">Bhutan</option>
                <option value="es-BO">Bolivia</option>
                <option value="en-US">Bosnia and Herzegovina</option>
                <option value="en-US">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="pt-BR">Brazil</option>
                <option value="en-IE">British Indian Ocean Territory</option>
                <option value="ms-MY">Brunei Darussalam</option>
                <option value="bg-BG">Bulgaria</option>
                <option value="fr-FR">Burkina Faso</option>
                <option value="en-US">Burundi</option>
                <option value="km-KH">Cambodia</option>
                <option value="en-US">Cameroon</option>
                <option value="en-CA">Canada</option>
                <option value="pt-PT">Cape Verde</option>
                <option value="en-US">Cayman Islands</option>
                <option value="fr-FR">Central African Republic</option>
                <option value="ar-EG">Chad</option>
                <option value="es-CL">Chile</option>
                <option value="zh-Hans-CN">China</option>
                <option value="en-AU">Christmas Island</option>
                <option value="ms-MY">Cocos (Keeling) Islands</option>
                <option value="es-CO">Colombia</option>
                <option value="ar-EG">Comoros</option>
                <option value="fr-FR">Congo</option>
                <option value="fr-FR">Congo, The Democratic Republic of The</option>
                <option value="en-AU">Cook Islands</option>
                <option value="es-CR">Costa Rica</option>
                <option value="fr-FR">Cote D'ivoire</option>
                <option value="hr-HR">Croatia</option>
                <option value="es-CL">Cuba</option>
                <option value="tr-TR">Cyprus</option>
                <option value="cs-CZ">Czech Republic</option>
                <option value="da-DK">Denmark</option>
                <option value="fr-FR">Djibouti</option>
                <option value="es-DO">Dominica</option>
                <option value="es-DO">Dominican Republic</option>
                <option value="es-EC">Ecuador</option>
                <option value="ar-EG">Egypt</option>
                <option value="es-SV">El Salvador</option>
                <option value="es-ES">Equatorial Guinea</option>
                <option value="en-GH">Eritrea</option>
                <option value="ru-RU">Estonia</option>
                <option value="en-NZ">Ethiopia</option>
                <option value="en-US">Falkland Islands (Malvinas)</option>
                <option value="da-DK">Faroe Islands</option>
                <option value="en-IN">Fiji</option>
                <option value="fi-FI">Finland</option>
                <option value="fr-FR">France</option>
                <option value="fr-FR">French Guiana</option>
                <option value="fr-FR">French Polynesia</option>
                <option value="fr-FR">French Southern Territories</option>
/////////////////////////
                <option value="en-US">Gabon</option>
                <option value="en-NZ">Gambia</option>
                <option value="en-US">Georgia</option>
                <option value="de-DE">Germany</option>
                <option value="en-NG">Ghana</option>
                <option value="en-US">Gibraltar</option>
                <option value="el-GR">Greece</option>
                <option value="da-DK">Greenland</option>
                <option value="en-US">Grenada</option>
                <option value="fr-FR">Guadeloupe</option>
                <option value="fr-FR">Guam</option>
                <option value="es-GT">Guatemala</option>
                <option value="en-US">Guernsey</option>
                <option value="fr-FR">Guinea</option>
                <option value="en-TZ">Guinea-bissau</option>
                <option value="en-TZ">Guyana</option>
                <option value="en-US">Haiti</option>
                <option value="en-GB">Heard Island and Mcdonald Islands</option>
                <option value="it-IT">Holy See (Vatican City State)</option>
                <option value="es-HN">Honduras</option>
                <option value="zh-Hans-HK">Hong Kong</option>
                <option value="hu-HU">Hungary</option>
                <option value="dn-DK">Iceland</option>
                <option value="en-IN">India</option>
                <option value="en-IN">Indonesia</option>
                <option value="	ar-TN">Iran, Islamic Republic of</option>
                <option value="ar-IQ">Iraq</option>
                <option value="en-IE">Ireland</option>
                <option value="en-BG">Isle of Man</option>
                <option value="he-IL">Israel</option>
                <option value="it-IT">Italy</option>
                <option value="en-TZ">Jamaica</option>
                <option value="ja-JP">Japan</option>
                <option value="en-US">Jersey</option>
                <option value="ar-JO">Jordan</option>
                <option value="ru-RU">Kazakhstan</option>
                <option value="en-NZ">Kenya</option>
                <option value="en-NZ">Kiribati</option>
                <option value="ko-KR">North Korea</option>
                <option value="ko-KR">South Korea</option>
                <option value="ar-KW">Kuwait</option>
                <option value="ru-RU">Kyrgyzstan</option>
                <option value="	lo-LA">Lao People's Democratic Republic</option>
                <option value="lv-LV">Latvia</option>
                <option value="ar-LB">Lebanon</option>
                <option value="en-GB">Lesotho</option>
                <option value="ar-LY">Liberia</option>
                <option value="ar-LY">Libyan Arab Jamahiriya</option>
                <option value="de-DE">Liechtenstein</option>
                <option value="lt-LT">Lithuania</option>
                <option value="fr-LU">Luxembourg</option>
                <option value="	zh-HK">Macao</option>
                <option value="en-US">Macedonia, The Former Yugoslav Republic of</option>
                <option value="	fr-CA">Madagascar</option>
                <option value="en-UK">Malawi</option>
                <option value="ms-MY">Malaysia</option>
                <option value="en-US">Maldives</option>
                <option value="ms-MY">Mali</option>
                <option value="en-US">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="fr-FR">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="es-MX">Mexico</option>
                <option value="en-US">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="fr-FR">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="ar-MA">Morocco</option>
                <option value="pt-PT">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="nl-NL">Netherlands</option>
                <option value="nl-NL">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="en-NZ">New Zealand</option>
                <option value="es-NI">Nicaragua</option>
                <option value="en-NG">Niger</option>
                <option value="en-NG">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="en-GB">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="nb-NO">Norway</option>
                <option value="ar-OM">Oman</option>
                <option value="	ur-PK">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="ar-PS">Palestinian Territory, Occupied</option>
                <option value="es-PA">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="es-PY">Paraguay</option>

                <option value="es-PE">Peru</option>
                <option value="en-PH">Philippines</option>
                <option value="en-GB">Pitcairn</option>
                <option value="pl-PL">Poland</option>
                <option value="pt-PT">Portugal</option>
                <option value="es-PR">Puerto Rico</option>
                <option value="ar-QA">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="ro-RO">Romania</option>
                <option value="ru-RU">Russian Federation</option>
                <option value="en-GB">Rwanda</option>
                <option value="en-GB">Saint Helena</option>
                <option value="en-GB">Saint Kitts and Nevis</option>
                <option value="en-GB">Saint Lucia</option>
                <option value="fr-FR">Saint Pierre and Miquelon</option>
                <option value="en-GB">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="en-PH">Singapore</option>
                <option value="sk-SK">Slovakia</option>
                <option value="sl-SI">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="en-ZA">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="es-ES">Spain</option>
                <option value="en-IN">Sri Lanka</option>
                <option value="ar-SY">Sudan</option>
                <option value="nl-NL">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="fr-CH">Switzerland</option>
                <option value="ar-SA">Syrian Arab Republic</option>
                <option value="zh-Hans-TW">Taiwan, Province of China</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="en-KE">Trinidad and Tobago</option>
                <option value="ar-TN">Tunisia</option>
                <option value="tr-TR">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="en-KE">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="en-GB">United Kingdom</option>
                <option value="en-US">United States</option>
                <option value="en-US">United States Minor Outlying Islands</option>
                <option value="es-UY">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="es-HN">Venezuela</option>
                <option value="zh-Hans-CN">Viet Nam</option>
                <option value="en-US">Virgin Islands, British</option>
                <option value="	en-US">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="ar-YE">Yemen</option>
                <option value="en-ZA">Zambia</option>
                <option value="en-ZA">Zimbabwe</option>
        </select>
        </form>
                <br/>
                <br/>


        <button className="myOtherHomeButton" label="Continue" primary="true" onClick={this.continue}> next </button>

        <button className="myOtherHomeButton" label="Back" primary="true" onClick={this.back}> back </button>

    </div>
    )           
}
}


export default QuestionTwo


