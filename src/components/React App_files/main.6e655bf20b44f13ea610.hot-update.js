webpackHotUpdate("main",{

/***/ "./src/components/QuestionTwo.js":
/*!***************************************!*\
  !*** ./src/components/QuestionTwo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_typing_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-typing-animation */ "./node_modules/react-typing-animation/dist/index.js");
/* harmony import */ var react_typing_animation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_typing_animation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/flatironaccesslabs/Documents/MOD4stuff/juststoryfrontend/src/components/QuestionTwo.js";



{
  /* <Link to="/home" className="currency-list">submit</Link> */
}

class QuestionTwo extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.continue = e => {
      e.preventDefault();
      if (this.props.questionTwo === '') alert('Please answer the question!');else this.props.nextStep();
    };

    this.back = e => {
      e.preventDefault();
      this.props.previousStep();
    };

    this.containsWord = () => {
      const words = ['you?', 'u?', 'yourself?'];
      const input = this.props.questionOne;
      const worr = words.some(word => input.toLowerCase().includes(word.toLowerCase()));

      if (worr === true) {
        return "im good thanks for asking! Mind picking a country for me?";
      } else return 'pick a country.';
    };
  }

  render() {
    const _this$props = this.props,
          values = _this$props.values,
          handleChange = _this$props.handleChange;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "myForm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "header-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "question two"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, this.containsWord(), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      onChange: handleChange('questionTwo'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "All",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Select"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-AE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Afghanistan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "sv-SE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "\xC5land Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Albania",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Albania"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-DZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Algeria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-EN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "American Samoa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Andorra"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "pt-PT",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Angola"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "Anguilla"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Antarctica"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "Antigua and Barbuda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-AR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Argentina"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Armenia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "nl-NL",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, "Aruba"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-AU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, "Australia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "de-AT",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Austria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "tr-TR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "Azerbaijan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-ZA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "Bahamas"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-AE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Bahrain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-IN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "Bangladesh"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-AE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "Barbados"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ru-RU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "Belarus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "da-BE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, "Belgium"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Belize",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "Belize"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Benin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, "Bermuda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-NZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Bhutan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-BO",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, "Bolivia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Bosnia and Herzegovina"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Botswana"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Bouvet Island",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, "Bouvet Island"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "pt-BR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, "Brazil"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-IE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "British Indian Ocean Territory"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ms-MY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Brunei Darussalam"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "bg-BG",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Bulgaria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "Burkina Faso"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "Burundi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "km-KH",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "Cambodia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "Cameroon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-CA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "Canada"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "pt-PT",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, "Cape Verde"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "Cayman Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Central African Republic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-EG",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, "Chad"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-CL",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Chile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "zh-Hans-CN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, "China"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-AU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Christmas Island"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ms-MY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "Cocos (Keeling) Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-CO",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Colombia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-EG",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Comoros"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "Congo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, "Congo, The Democratic Republic of The"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-AU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "Cook Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-CR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Costa Rica"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "Cote D'ivoire"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "hr-HR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Croatia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-CL",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Cuba"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "tr-TR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Cyprus"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "cs-CZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Czech Republic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "da-DK",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, "Denmark"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "Djibouti"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-DO",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "Dominica"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-DO",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, "Dominican Republic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-EC",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, "Ecuador"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-EG",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Egypt"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-SV",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, "El Salvador"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-ES",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, "Equatorial Guinea"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-GH",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Eritrea"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ru-RU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "Estonia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-NZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, "Ethiopia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Falkland Islands (Malvinas)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "da-DK",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, "Faroe Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-IN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Fiji"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fi-FI",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Finland"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "France"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, "French Guiana"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "French Polynesia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "French Southern Territories"), "/////////////////////////", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "Gabon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-NZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Gambia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Georgia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "de-DE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Germany"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-NG",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Ghana"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Gibraltar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "el-GR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "Greece"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "da-DK",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, "Greenland"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "Grenada"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, "Guadeloupe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "Guam"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-GT",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, "Guatemala"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "Guernsey"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-FR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, "Guinea"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-TZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, "Guinea-bissau"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-TZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Guyana"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, "Haiti"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Heard Island and Mcdonald Islands",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Heard Island and Mcdonald Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Holy See (Vatican City State)",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "Holy See (Vatican City State)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-HN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, "Honduras"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "zh-Hans-HK",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "Hong Kong"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "hu-HU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "Hungary"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "dn-DK",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, "Iceland"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-IN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "India"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-IN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "Indonesia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "\tar-TN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, "Iran, Islamic Republic of"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-IQ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, "Iraq"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-IE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, "Ireland"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-BG",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, "Isle of Man"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "he-IL",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, "Israel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "it-IT",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, "Italy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-TZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "Jamaica"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ja-JP",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Japan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, "Jersey"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-JO",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "Jordan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ru-RU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, "Kazakhstan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-NZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, "Kenya"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-NZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, "Kiribati"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ko-KR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, "Korea, Democratic People's Republic of"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ko-KR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, "Korea, Republic of"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-KW",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "Kuwait"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ru-RU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "Kyrgyzstan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "\tlo-LA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "Lao People's Democratic Republic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "lv-LV",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, "Latvia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-LB",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "Lebanon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-GB",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, "Lesotho"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-LY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "Liberia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-LY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, "Libyan Arab Jamahiriya"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "de-DE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "Liechtenstein"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "lt-LT",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "Lithuania"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-LU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, "Luxembourg"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "\tzh-HK",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "Macao"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, "Macedonia, The Former Yugoslav Republic of"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "\tfr-CA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "Madagascar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-UK",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, "Malawi"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ms-MY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, "Malaysia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "Maldives"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ms-MY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, "Mali"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "Malta"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Marshall Islands",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "Marshall Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Martinique",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "Martinique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Mauritania",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "Mauritania"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Mauritius",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, "Mauritius"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Mayotte",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "Mayotte"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-MX",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, "Mexico"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Micronesia, Federated States of",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "Micronesia, Federated States of"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Moldova, Republic of",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, "Moldova, Republic of"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Monaco",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, "Monaco"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Mongolia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "Mongolia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Montenegro",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "Montenegro"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Montserrat",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, "Montserrat"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-MA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, "Morocco"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Mozambique",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, "Mozambique"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Myanmar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, "Myanmar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Namibia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, "Namibia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Nauru",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, "Nauru"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Nepal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "Nepal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "nl-NL",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, "Netherlands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Netherlands Antilles",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "Netherlands Antilles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "New Caledonia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, "New Caledonia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-NZ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, "New Zealand"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-NI",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, "Nicaragua"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-NG",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "Niger"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-NG",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, "Nigeria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Niue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, "Niue"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Norfolk Island",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, "Norfolk Island"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Northern Mariana Islands",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "Northern Mariana Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "nb-NO",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, "Norway"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-OM",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, "Oman"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "\tur-PK",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }, "Pakistan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Palau",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219
      },
      __self: this
    }, "Palau"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-PS",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, "Palestinian Territory, Occupied"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-PA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221
      },
      __self: this
    }, "Panama"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Papua New Guinea",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222
      },
      __self: this
    }, "Papua New Guinea"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-PY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, "Paraguay"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-PE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, "Peru"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-PH",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226
      },
      __self: this
    }, "Philippines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Pitcairn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }, "Pitcairn"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "pl-PL",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228
      },
      __self: this
    }, "Poland"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "pt-PT",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, "Portugal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-PR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, "Puerto Rico"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-QA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, "Qatar"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Reunion",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, "Reunion"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ro-RO",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233
      },
      __self: this
    }, "Romania"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ru-RU",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, "Russian Federation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Rwanda",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    }, "Rwanda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Saint Helena",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, "Saint Helena"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Saint Kitts and Nevis",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, "Saint Kitts and Nevis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Saint Lucia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, "Saint Lucia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Saint Pierre and Miquelon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, "Saint Pierre and Miquelon"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Saint Vincent and The Grenadines",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, "Saint Vincent and The Grenadines"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Samoa",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241
      },
      __self: this
    }, "Samoa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "San Marino",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }, "San Marino"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Sao Tome and Principe",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "Sao Tome and Principe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Saudi Arabia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, "Saudi Arabia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Senegal",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, "Senegal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Serbia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, "Serbia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Seychelles",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, "Seychelles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Sierra Leone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, "Sierra Leone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-PH",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    }, "Singapore"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "sk-SK",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250
      },
      __self: this
    }, "Slovakia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "sl-SI",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251
      },
      __self: this
    }, "Slovenia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Solomon Islands",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252
      },
      __self: this
    }, "Solomon Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Somalia",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }, "Somalia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-ZA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254
      },
      __self: this
    }, "South Africa"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "South Georgia and The South Sandwich Islands",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, "South Georgia and The South Sandwich Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-ES",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, "Spain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-IN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, "Sri Lanka"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-SY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, "Sudan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "nl-NL",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }, "Suriname"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Svalbard and Jan Mayen",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, "Svalbard and Jan Mayen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Swaziland",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, "Swaziland"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Sweden",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }, "Sweden"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "fr-CH",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, "Switzerland"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-SA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264
      },
      __self: this
    }, "Syrian Arab Republic"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "zh-Hans-TW",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265
      },
      __self: this
    }, "Taiwan, Province of China"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Tajikistan",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266
      },
      __self: this
    }, "Tajikistan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Tanzania, United Republic of",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267
      },
      __self: this
    }, "Tanzania, United Republic of"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Thailand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, "Thailand"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Timor-leste",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269
      },
      __self: this
    }, "Timor-leste"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Togo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270
      },
      __self: this
    }, "Togo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Tokelau",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271
      },
      __self: this
    }, "Tokelau"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Tonga",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272
      },
      __self: this
    }, "Tonga"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-KE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273
      },
      __self: this
    }, "Trinidad and Tobago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-TN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274
      },
      __self: this
    }, "Tunisia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "tr-TR",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275
      },
      __self: this
    }, "Turkey"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Turkmenistan",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276
      },
      __self: this
    }, "Turkmenistan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Turks and Caicos Islands",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, "Turks and Caicos Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Tuvalu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278
      },
      __self: this
    }, "Tuvalu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-KE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279
      },
      __self: this
    }, "Uganda"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Ukraine",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280
      },
      __self: this
    }, "Ukraine"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "United Arab Emirates",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281
      },
      __self: this
    }, "United Arab Emirates"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-GB",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282
      },
      __self: this
    }, "United Kingdom"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283
      },
      __self: this
    }, "United States"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284
      },
      __self: this
    }, "United States Minor Outlying Islands"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-UY",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 285
      },
      __self: this
    }, "Uruguay"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Uzbekistan",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286
      },
      __self: this
    }, "Uzbekistan"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Vanuatu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287
      },
      __self: this
    }, "Vanuatu"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "es-HN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288
      },
      __self: this
    }, "Venezuela"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "zh-Hans-CN",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289
      },
      __self: this
    }, "Viet Nam"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290
      },
      __self: this
    }, "Virgin Islands, British"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "\ten-US",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291
      },
      __self: this
    }, "Virgin Islands, U.S."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Wallis and Futuna",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292
      },
      __self: this
    }, "Wallis and Futuna"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "Western Sahara",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293
      },
      __self: this
    }, "Western Sahara"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "ar-YE",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294
      },
      __self: this
    }, "Yemen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-ZA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 295
      },
      __self: this
    }, "Zambia"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "en-ZA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 296
      },
      __self: this
    }, "Zimbabwe")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }), "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "myOtherHomeButton",
      label: "Continue",
      primary: "true",
      onClick: this.continue,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, " next "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "myOtherHomeButton",
      label: "Back",
      primary: "true",
      onClick: this.back,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, " back "));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (QuestionTwo);

/***/ })

})
//# sourceMappingURL=main.6e655bf20b44f13ea610.hot-update.js.map