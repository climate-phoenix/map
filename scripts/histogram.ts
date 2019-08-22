const countries = {
  "afg": {
    "country": "Afghanistan",
    "total1990": "2.546",
    "total2005": "1.063",
    "total2017": "11.422",
    "percent2017": "0.03",
    "percentage20171990": "448.6",
    "emissionIntensity2017": "18",
    "emissionPerCapita2017": "0.3"
  },
  "alb": {
    "country": "Albania",
    "total1990": "6.583",
    "total2005": "4.196",
    "total2017": "5.026",
    "percent2017": "0.01",
    "percentage20171990": "76.3",
    "emissionIntensity2017": "175",
    "emissionPerCapita2017": "1.7"
  },
  "dza": {
    "country": "Algeria",
    "total1990": "65.677",
    "total2005": "98.197",
    "total2017": "159.929",
    "percent2017": "0.43",
    "percentage20171990": "243.5",
    "emissionIntensity2017": "67",
    "emissionPerCapita2017": "3.9"
  },
  "ago": {
    "country": "Angola",
    "total1990": "5.851",
    "total2005": "15.975",
    "total2017": "30.876",
    "percent2017": "0.08",
    "percentage20171990": "527.7",
    "emissionIntensity2017": "25",
    "emissionPerCapita2017": "1.0"
  },
  "aia": {
    "country": "Anguilla",
    "total1990": "0.006",
    "total2005": "0.014",
    "total2017": "0.028",
    "percent2017": "0.00",
    "percentage20171990": "466.7",
    "emissionIntensity2017": "308",
    "emissionPerCapita2017": "1.9"
  },
  "atg": {
    "country": "Antigua and Barbuda",
    "total1990": "0.223",
    "total2005": "0.283",
    "total2017": "0.624",
    "percent2017": "0.00",
    "percentage20171990": "279.8",
    "emissionIntensity2017": "1,412",
    "emissionPerCapita2017": "6.1"
  },
  "arg": {
    "country": "Argentina",
    "total1990": "112.434",
    "total2005": "165.429",
    "total2017": "209.968",
    "percent2017": "0.57",
    "percentage20171990": "186.7",
    "emissionIntensity2017": "76",
    "emissionPerCapita2017": "4.7"
  },
  "arm": {
    "country": "Armenia",
    "total1990": "20.699",
    "total2005": "4.542",
    "total2017": "4.832",
    "percent2017": "0.01",
    "percentage20171990": "23.3",
    "emissionIntensity2017": "162",
    "emissionPerCapita2017": "1.6"
  },
  "abw": {
    "country": "Aruba",
    "total1990": "0.297",
    "total2005": "0.470",
    "total2017": "0.959",
    "percent2017": "0.00",
    "percentage20171990": "322.9",
    "emissionIntensity2017": "5,328",
    "emissionPerCapita2017": "9.1"
  },
  "aus": {
    "country": "Australia",
    "total1990": "275.408",
    "total2005": "391.590",
    "total2017": "402.253",
    "percent2017": "1.08",
    "percentage20171990": "146.1",
    "emissionIntensity2017": "52",
    "emissionPerCapita2017": "16.5"
  },
  "aut": {
    "country": "Austria",
    "total1990": "62.918",
    "total2005": "80.994",
    "total2017": "72.249",
    "percent2017": "0.19",
    "percentage20171990": "114.8",
    "emissionIntensity2017": "861",
    "emissionPerCapita2017": "8.3"
  },
  "aze": {
    "country": "Azerbaijan",
    "total1990": "58.077",
    "total2005": "30.485",
    "total2017": "32.544",
    "percent2017": "0.09",
    "percentage20171990": "56.0",
    "emissionIntensity2017": "376",
    "emissionPerCapita2017": "3.3"
  },
  "bhs": {
    "country": "Bahamas",
    "total1990": "1.524",
    "total2005": "2.068",
    "total2017": "2.997",
    "percent2017": "0.01",
    "percentage20171990": "196.7",
    "emissionIntensity2017": "215",
    "emissionPerCapita2017": "7.6"
  },
  "bhr": {
    "country": "Bahrain",
    "total1990": "11.988",
    "total2005": "23.388",
    "total2017": "35.775",
    "percent2017": "0.10",
    "percentage20171990": "298.4",
    "emissionIntensity2017": "46,643",
    "emissionPerCapita2017": "24.0"
  },
  "bgd": {
    "country": "Bangladesh",
    "total1990": "13.868",
    "total2005": "38.834",
    "total2017": "84.546",
    "percent2017": "0.23",
    "percentage20171990": "609.6",
    "emissionIntensity2017": "573",
    "emissionPerCapita2017": "0.5"
  },
  "brb": {
    "country": "Barbados",
    "total1990": "0.776",
    "total2005": "2.162",
    "total2017": "3.172",
    "percent2017": "0.01",
    "percentage20171990": "408.8",
    "emissionIntensity2017": "7,377",
    "emissionPerCapita2017": "11.1"
  },
  "blr": {
    "country": "Belarus",
    "total1990": "109.069",
    "total2005": "61.396",
    "total2017": "62.340",
    "percent2017": "0.17",
    "percentage20171990": "57.2",
    "emissionIntensity2017": "300",
    "emissionPerCapita2017": "6.6"
  },
  "bel": {
    "country": "Belgium",
    "total1990": "115.903",
    "total2005": "118.708",
    "total2017": "104.221",
    "percent2017": "0.28",
    "percentage20171990": "89.9",
    "emissionIntensity2017": "3,414",
    "emissionPerCapita2017": "9.1"
  },
  "blz": {
    "country": "Belize",
    "total1990": "0.188",
    "total2005": "0.440",
    "total2017": "0.440",
    "percent2017": "0.00",
    "percentage20171990": "234.0",
    "emissionIntensity2017": "19",
    "emissionPerCapita2017": "1.2"
  },
  "ben": {
    "country": "Benin",
    "total1990": "0.415",
    "total2005": "2.839",
    "total2017": "7.097",
    "percent2017": "0.02",
    "percentage20171990": "1,710.1",
    "emissionIntensity2017": "62",
    "emissionPerCapita2017": "0.6"
  },
  "bmu": {
    "country": "Bermuda",
    "total1990": "0.335",
    "total2005": "0.284",
    "total2017": "0.429",
    "percent2017": "0.00",
    "percentage20171990": "128.1",
    "emissionIntensity2017": "7,944",
    "emissionPerCapita2017": "7.0"
  },
  "btn": {
    "country": "Bhutan",
    "total1990": "0.208",
    "total2005": "0.515",
    "total2017": "1.454",
    "percent2017": "0.00",
    "percentage20171990": "699.0",
    "emissionIntensity2017": "38",
    "emissionPerCapita2017": "1.8"
  },
  "bol": {
    "country": "Bolivia",
    "total1990": "6.287",
    "total2005": "9.998",
    "total2017": "20.462",
    "percent2017": "0.06",
    "percentage20171990": "325.5",
    "emissionIntensity2017": "19",
    "emissionPerCapita2017": "1.9"
  },
  "bih": {
    "country": "Bosnia and Herzegovina",
    "total1990": "24.559",
    "total2005": "16.890",
    "total2017": "25.618",
    "percent2017": "0.07",
    "percentage20171990": "104.3",
    "emissionIntensity2017": "500",
    "emissionPerCapita2017": "7.3"
  },
  "bwa": {
    "country": "Botswana",
    "total1990": "2.818",
    "total2005": "4.465",
    "total2017": "7.913",
    "percent2017": "0.02",
    "percentage20171990": "280.8",
    "emissionIntensity2017": "14",
    "emissionPerCapita2017": "3.5"
  },
  "bra": {
    "country": "Brazil",
    "total1990": "228.603",
    "total2005": "380.765",
    "total2017": "492.791",
    "percent2017": "1.33",
    "percentage20171990": "215.6",
    "emissionIntensity2017": "58",
    "emissionPerCapita2017": "2.4"
  },
  "vgb": {
    "country": "British Virgin Islands",
    "total1990": "0.026",
    "total2005": "0.032",
    "total2017": "0.149",
    "percent2017": "0.00",
    "percentage20171990": "573.1",
    "emissionIntensity2017": "987",
    "emissionPerCapita2017": "4.8"
  },
  "brn": {
    "country": "Brunei",
    "total1990": "3.397",
    "total2005": "5.174",
    "total2017": "6.711",
    "percent2017": "0.02",
    "percentage20171990": "197.6",
    "emissionIntensity2017": "1,164",
    "emissionPerCapita2017": "15.7"
  },
  "bgr": {
    "country": "Bulgaria",
    "total1990": "82.271",
    "total2005": "52.032",
    "total2017": "49.568",
    "percent2017": "0.13",
    "percentage20171990": "60.2",
    "emissionIntensity2017": "447",
    "emissionPerCapita2017": "7.0"
  },
  "bfa": {
    "country": "Burkina Faso",
    "total1990": "0.380",
    "total2005": "1.038",
    "total2017": "3.399",
    "percent2017": "0.01",
    "percentage20171990": "894.5",
    "emissionIntensity2017": "12",
    "emissionPerCapita2017": "0.2"
  },
  "bdi": {
    "country": "Burundi",
    "total1990": "0.210",
    "total2005": "0.307",
    "total2017": "0.289",
    "percent2017": "0.00",
    "percentage20171990": "137.6",
    "emissionIntensity2017": "10",
    "emissionPerCapita2017": "0.0"
  },
  "khm": {
    "country": "Cambodia",
    "total1990": "0.407",
    "total2005": "2.686",
    "total2017": "10.560",
    "percent2017": "0.03",
    "percentage20171990": "2,594.6",
    "emissionIntensity2017": "58",
    "emissionPerCapita2017": "0.7"
  },
  "cmr": {
    "country": "Cameroon",
    "total1990": "7.097",
    "total2005": "5.520",
    "total2017": "9.768",
    "percent2017": "0.03",
    "percentage20171990": "137.6",
    "emissionIntensity2017": "21",
    "emissionPerCapita2017": "0.4"
  },
  "can": {
    "country": "Canada",
    "total1990": "455.827",
    "total2005": "581.267",
    "total2017": "617.301",
    "percent2017": "1.66",
    "percentage20171990": "135.4",
    "emissionIntensity2017": "62",
    "emissionPerCapita2017": "16.9"
  },
  "cpv": {
    "country": "Cape Verde",
    "total1990": "0.049",
    "total2005": "0.227",
    "total2017": "0.955",
    "percent2017": "0.00",
    "percentage20171990": "1,949.0",
    "emissionIntensity2017": "237",
    "emissionPerCapita2017": "1.7"
  },
  "cym": {
    "country": "Cayman Islands",
    "total1990": "0.148",
    "total2005": "0.188",
    "total2017": "0.493",
    "percent2017": "0.00",
    "percentage20171990": "333.1",
    "emissionIntensity2017": "1,867",
    "emissionPerCapita2017": "8.0"
  },
  "caf": {
    "country": "Central African Republic",
    "total1990": "0.159",
    "total2005": "0.246",
    "total2017": "0.486",
    "percent2017": "0.00",
    "percentage20171990": "305.7",
    "emissionIntensity2017": "1",
    "emissionPerCapita2017": "0.1"
  },
  "tcd": {
    "country": "Chad",
    "total1990": "0.268",
    "total2005": "0.383",
    "total2017": "0.925",
    "percent2017": "0.00",
    "percentage20171990": "345.1",
    "emissionIntensity2017": "1",
    "emissionPerCapita2017": "0.1"
  },
  "chl": {
    "country": "Chile",
    "total1990": "32.654",
    "total2005": "59.747",
    "total2017": "90.325",
    "percent2017": "0.24",
    "percentage20171990": "276.6",
    "emissionIntensity2017": "119",
    "emissionPerCapita2017": "5.0"
  },
  "chn": {
    "country": "China",
    "total1990": "2,397.048",
    "total2005": "6,263.064",
    "total2017": "10,877.218",
    "percent2017": "29.34",
    "percentage20171990": "453.8",
    "emissionIntensity2017": "1,133",
    "emissionPerCapita2017": "7.7"
  },
  "col": {
    "country": "Colombia",
    "total1990": "51.919",
    "total2005": "60.610",
    "total2017": "74.954",
    "percent2017": "0.20",
    "percentage20171990": "144.4",
    "emissionIntensity2017": "66",
    "emissionPerCapita2017": "1.5"
  },
  "com": {
    "country": "Comoros",
    "total1990": "0.049",
    "total2005": "0.115",
    "total2017": "0.206",
    "percent2017": "0.00",
    "percentage20171990": "420.4",
    "emissionIntensity2017": "111",
    "emissionPerCapita2017": "0.3"
  },
  "cok": {
    "country": "Cook Islands",
    "total1990": "0.043",
    "total2005": "0.058",
    "total2017": "0.047",
    "percent2017": "0.00",
    "percentage20171990": "109.3",
    "emissionIntensity2017": "199",
    "emissionPerCapita2017": "2.7"
  },
  "cri": {
    "country": "Costa Rica",
    "total1990": "2.913",
    "total2005": "6.306",
    "total2017": "8.138",
    "percent2017": "0.02",
    "percentage20171990": "279.4",
    "emissionIntensity2017": "159",
    "emissionPerCapita2017": "1.7"
  },
  "hrv": {
    "country": "Croatia",
    "total1990": "25.164",
    "total2005": "23.634",
    "total2017": "17.466",
    "percent2017": "0.05",
    "percentage20171990": "69.4",
    "emissionIntensity2017": "309",
    "emissionPerCapita2017": "4.2"
  },
  "cub": {
    "country": "Cuba",
    "total1990": "37.109",
    "total2005": "26.165",
    "total2017": "31.277",
    "percent2017": "0.08",
    "percentage20171990": "84.3",
    "emissionIntensity2017": "285",
    "emissionPerCapita2017": "2.7"
  },
  "cuw": {
    "country": "Curaçao",
    "total1990": "5.474",
    "total2005": "4.774",
    "total2017": "7.519",
    "percent2017": "0.02",
    "percentage20171990": "137.4",
    "emissionIntensity2017": "16,935",
    "emissionPerCapita2017": "46.8"
  },
  "cyp": {
    "country": "Cyprus",
    "total1990": "4.540",
    "total2005": "7.883",
    "total2017": "7.035",
    "percent2017": "0.02",
    "percentage20171990": "155.0",
    "emissionIntensity2017": "760",
    "emissionPerCapita2017": "6.0"
  },
  "cze": {
    "country": "Czechia",
    "total1990": "162.835",
    "total2005": "127.157",
    "total2017": "109.756",
    "percent2017": "0.30",
    "percentage20171990": "67.4",
    "emissionIntensity2017": "1,392",
    "emissionPerCapita2017": "10.3"
  },
  "cod": {
    "country": "DR Congo",
    "total1990": "3.441",
    "total2005": "2.589",
    "total2017": "3.496",
    "percent2017": "0.01",
    "percentage20171990": "101.6",
    "emissionIntensity2017": "1",
    "emissionPerCapita2017": "0.0"
  },
  "dnk": {
    "country": "Denmark",
    "total1990": "53.705",
    "total2005": "51.485",
    "total2017": "33.573",
    "percent2017": "0.09",
    "percentage20171990": "62.5",
    "emissionIntensity2017": "779",
    "emissionPerCapita2017": "5.9"
  },
  "dji": {
    "country": "Djibouti",
    "total1990": "1.101",
    "total2005": "1.469",
    "total2017": "1.014",
    "percent2017": "0.00",
    "percentage20171990": "92.1",
    "emissionIntensity2017": "44",
    "emissionPerCapita2017": "1.1"
  },
  "dma": {
    "country": "Dominica",
    "total1990": "0.033",
    "total2005": "0.035",
    "total2017": "0.122",
    "percent2017": "0.00",
    "percentage20171990": "369.7",
    "emissionIntensity2017": "162",
    "emissionPerCapita2017": "1.7"
  },
  "dom": {
    "country": "Dominican Republic",
    "total1990": "8.024",
    "total2005": "19.409",
    "total2017": "23.111",
    "percent2017": "0.06",
    "percentage20171990": "288.0",
    "emissionIntensity2017": "475",
    "emissionPerCapita2017": "2.1"
  },
  "tls": {
    "country": "Timor-Leste",
    "total1990": "0.130",
    "total2005": "0.272",
    "total2017": "0.422",
    "percent2017": "0.00",
    "percentage20171990": "324.6",
    "emissionIntensity2017": "28",
    "emissionPerCapita2017": "0.3"
  },
  "ecu": {
    "country": "Ecuador",
    "total1990": "16.119",
    "total2005": "28.320",
    "total2017": "39.507",
    "percent2017": "0.11",
    "percentage20171990": "245.1",
    "emissionIntensity2017": "143",
    "emissionPerCapita2017": "2.4"
  },
  "egy": {
    "country": "Egypt",
    "total1990": "90.783",
    "total2005": "176.329",
    "total2017": "258.668",
    "percent2017": "0.70",
    "percentage20171990": "284.9",
    "emissionIntensity2017": "258",
    "emissionPerCapita2017": "2.7"
  },
  "slv": {
    "country": "El Salvador",
    "total1990": "2.633",
    "total2005": "6.905",
    "total2017": "7.857",
    "percent2017": "0.02",
    "percentage20171990": "298.4",
    "emissionIntensity2017": "373",
    "emissionPerCapita2017": "1.2"
  },
  "gnq": {
    "country": "Equatorial Guinea",
    "total1990": "0.097",
    "total2005": "3.371",
    "total2017": "2.469",
    "percent2017": "0.01",
    "percentage20171990": "2,545.4",
    "emissionIntensity2017": "88",
    "emissionPerCapita2017": "1.9"
  },
  "eri": {
    "country": "Eritrea",
    "total1990": "0.214",
    "total2005": "0.688",
    "total2017": "0.737",
    "percent2017": "0.00",
    "percentage20171990": "344.4",
    "emissionIntensity2017": "6",
    "emissionPerCapita2017": "0.1"
  },
  "est": {
    "country": "Estonia",
    "total1990": "38.467",
    "total2005": "19.643",
    "total2017": "17.890",
    "percent2017": "0.05",
    "percentage20171990": "46.5",
    "emissionIntensity2017": "396",
    "emissionPerCapita2017": "13.7"
  },
  "swz": {
    "country": "Eswatini",
    "total1990": "0.602",
    "total2005": "1.541",
    "total2017": "1.247",
    "percent2017": "0.00",
    "percentage20171990": "207.1",
    "emissionIntensity2017": "72",
    "emissionPerCapita2017": "0.9"
  },
  "eth": {
    "country": "Ethiopia",
    "total1990": "2.390",
    "total2005": "5.327",
    "total2017": "14.900",
    "percent2017": "0.04",
    "percentage20171990": "623.4",
    "emissionIntensity2017": "13",
    "emissionPerCapita2017": "0.1"
  },
  "flk": {
    "country": "Falkland Islands",
    "total1990": "0.013",
    "total2005": "0.016",
    "total2017": "0.038",
    "percent2017": "0.00",
    "percentage20171990": "292.3",
    "emissionIntensity2017": "3",
    "emissionPerCapita2017": "13.1"
  },
  "fro": {
    "country": "Faroe Islands",
    "total1990": "0.001",
    "total2005": "0.002",
    "total2017": "0.002",
    "percent2017": "0.00",
    "percentage20171990": "200.0",
    "emissionIntensity2017": "1",
    "emissionPerCapita2017": "0.0"
  },
  "fji": {
    "country": "Fiji",
    "total1990": "1.028",
    "total2005": "2.174",
    "total2017": "1.440",
    "percent2017": "0.00",
    "percentage20171990": "140.1",
    "emissionIntensity2017": "79",
    "emissionPerCapita2017": "1.6"
  },
  "fin": {
    "country": "Finland",
    "total1990": "57.242",
    "total2005": "58.360",
    "total2017": "46.846",
    "percent2017": "0.13",
    "percentage20171990": "81.8",
    "emissionIntensity2017": "138",
    "emissionPerCapita2017": "8.5"
  },
  "fra": {
    "country": "France",
    "total1990": "386.214",
    "total2005": "408.158",
    "total2017": "338.193",
    "percent2017": "0.91%",
    "percentage20171990": "87.6%",
    "emissionIntensity2017": "528",
    "emissionPerCapita2017": "5.2"
  },
  "guf": {
    "country": "French Guiana",
    "total1990": "0.371",
    "total2005": "0.491",
    "total2017": "0.719",
    "percent2017": "0.00",
    "percentage20171990": "193.8",
    "emissionIntensity2017": "9",
    "emissionPerCapita2017": "2.5"
  },
  "pyf": {
    "country": "French Polynesia",
    "total1990": "0.839",
    "total2005": "0.785",
    "total2017": "0.636",
    "percent2017": "0.00",
    "percentage20171990": "75.8",
    "emissionIntensity2017": "153",
    "emissionPerCapita2017": "2.2"
  },
  "gab": {
    "country": "Gabon",
    "total1990": "4.857",
    "total2005": "6.394",
    "total2017": "6.564",
    "percent2017": "0.02",
    "percentage20171990": "135.1",
    "emissionIntensity2017": "25",
    "emissionPerCapita2017": "3.2"
  },
  "geo": {
    "country": "Georgia",
    "total1990": "34.745",
    "total2005": "4.979",
    "total2017": "11.558",
    "percent2017": "0.03",
    "percentage20171990": "33.3",
    "emissionIntensity2017": "166",
    "emissionPerCapita2017": "3.0"
  },
  "deu": {
    "country": "Germany",
    "total1990": "1,018.097",
    "total2005": "837.284",
    "total2017": "796.529",
    "percent2017": "2.15",
    "percentage20171990": "78.2",
    "emissionIntensity2017": "2,230",
    "emissionPerCapita2017": "9.7"
  },
  "gha": {
    "country": "Ghana",
    "total1990": "3.195",
    "total2005": "7.329",
    "total2017": "18.626",
    "percent2017": "0.05",
    "percentage20171990": "583.0",
    "emissionIntensity2017": "78",
    "emissionPerCapita2017": "0.6"
  },
  "gib": {
    "country": "Gibraltar",
    "total1990": "0.144",
    "total2005": "0.406",
    "total2017": "0.627",
    "percent2017": "0.00",
    "percentage20171990": "435.4",
    "emissionIntensity2017": "104,500",
    "emissionPerCapita2017": "18.1"
  },
  "grc": {
    "country": "Greece",
    "total1990": "79.201",
    "total2005": "104.835",
    "total2017": "72.145",
    "percent2017": "0.19",
    "percentage20171990": "91.1",
    "emissionIntensity2017": "547",
    "emissionPerCapita2017": "6.5"
  },
  "grl": {
    "country": "Greenland",
    "total1990": "0.003",
    "total2005": "0.631",
    "total2017": "0.518",
    "percent2017": "0.00",
    "percentage20171990": "17,266.7",
    "emissionIntensity2017": "0",
    "emissionPerCapita2017": "9.2"
  },
  "grd": {
    "country": "Grenada",
    "total1990": "0.075",
    "total2005": "0.125",
    "total2017": "0.280",
    "percent2017": "0.00",
    "percentage20171990": "373.3",
    "emissionIntensity2017": "814",
    "emissionPerCapita2017": "2.6"
  },
  "glp": {
    "country": "Guadeloupe",
    "total1990": "0.875",
    "total2005": "1.035",
    "total2017": "2.257",
    "percent2017": "0.01",
    "percentage20171990": "257.9",
    "emissionIntensity2017": "1,386",
    "emissionPerCapita2017": "5.0"
  },
  "gtm": {
    "country": "Guatemala",
    "total1990": "3.874",
    "total2005": "11.674",
    "total2017": "17.760",
    "percent2017": "0.05",
    "percentage20171990": "458.4",
    "emissionIntensity2017": "163",
    "emissionPerCapita2017": "1.1"
  },
  "gin": {
    "country": "Guinea",
    "total1990": "1.074",
    "total2005": "1.119",
    "total2017": "2.731",
    "percent2017": "0.01",
    "percentage20171990": "254.3",
    "emissionIntensity2017": "11",
    "emissionPerCapita2017": "0.2"
  },
  "gnb": {
    "country": "Guinea-Bissau",
    "total1990": "0.196",
    "total2005": "0.289",
    "total2017": "0.409",
    "percent2017": "0.00",
    "percentage20171990": "208.7",
    "emissionIntensity2017": "11",
    "emissionPerCapita2017": "0.2"
  },
  "guy": {
    "country": "Guyana",
    "total1990": "0.337",
    "total2005": "0.725",
    "total2017": "1.771",
    "percent2017": "0.00",
    "percentage20171990": "525.5",
    "emissionIntensity2017": "8",
    "emissionPerCapita2017": "2.3"
  },
  "hti": {
    "country": "Haiti",
    "total1990": "1.147",
    "total2005": "2.234",
    "total2017": "3.521",
    "percent2017": "0.01",
    "percentage20171990": "307.0",
    "emissionIntensity2017": "127",
    "emissionPerCapita2017": "0.3"
  },
  "hnd": {
    "country": "Honduras",
    "total1990": "2.351",
    "total2005": "7.806",
    "total2017": "10.562",
    "percent2017": "0.03",
    "percentage20171990": "449.3",
    "emissionIntensity2017": "94",
    "emissionPerCapita2017": "1.1"
  },
  "hkg": {
    "country": "Hong Kong",
    "total1990": "34.182",
    "total2005": "41.916",
    "total2017": "44.715",
    "percent2017": "0.12",
    "percentage20171990": "130.8",
    "emissionIntensity2017": "16,230",
    "emissionPerCapita2017": "6.1"
  },
  "hun": {
    "country": "Hungary",
    "total1990": "71.929",
    "total2005": "59.758",
    "total2017": "50.856",
    "percent2017": "0.14",
    "percentage20171990": "70.7",
    "emissionIntensity2017": "547",
    "emissionPerCapita2017": "5.2"
  },
  "isl": {
    "country": "Iceland",
    "total1990": "2.346",
    "total2005": "3.170",
    "total2017": "4.097",
    "percent2017": "0.01",
    "percentage20171990": "174.6",
    "emissionIntensity2017": "40",
    "emissionPerCapita2017": "12.2"
  },
  "ind": {
    "country": "India",
    "total1990": "605.968",
    "total2005": "1,210.754",
    "total2017": "2,454.774",
    "percent2017": "6.62",
    "percentage20171990": "405.1",
    "emissionIntensity2017": "747",
    "emissionPerCapita2017": "1.8"
  },
  "idn": {
    "country": "Indonesia",
    "total1990": "162.000",
    "total2005": "359.989",
    "total2017": "511.327",
    "percent2017": "1.38",
    "percentage20171990": "315.6",
    "emissionIntensity2017": "268",
    "emissionPerCapita2017": "1.9"
  },
  "irn": {
    "country": "Iran",
    "total1990": "206.780",
    "total2005": "467.905",
    "total2017": "671.450",
    "percent2017": "1.81",
    "percentage20171990": "324.7",
    "emissionIntensity2017": "407",
    "emissionPerCapita2017": "8.3"
  },
  "irq": {
    "country": "Iraq",
    "total1990": "69.262",
    "total2005": "89.103",
    "total2017": "199.296",
    "percent2017": "0.54",
    "percentage20171990": "287.7",
    "emissionIntensity2017": "455",
    "emissionPerCapita2017": "5.2"
  },
  "irl": {
    "country": "Ireland",
    "total1990": "32.852",
    "total2005": "47.277",
    "total2017": "38.914",
    "percent2017": "0.10",
    "percentage20171990": "118.5",
    "emissionIntensity2017": "554",
    "emissionPerCapita2017": "8.2"
  },
  "isr": {
    "country": "Israel",
    "total1990": "35.291",
    "total2005": "62.149",
    "total2017": "66.916",
    "percent2017": "0.18",
    "percentage20171990": "189.6",
    "emissionIntensity2017": "3,222",
    "emissionPerCapita2017": "8.0"
  },
  "ita": {
    "country": "Italy",
    "total1990": "430.762",
    "total2005": "498.205",
    "total2017": "361.176",
    "percent2017": "0.97",
    "percentage20171990": "83.8",
    "emissionIntensity2017": "1,198",
    "emissionPerCapita2017": "6.1"
  },
  "civ": {
    "country": "Ivory Coast",
    "total1990": "3.020",
    "total2005": "6.392",
    "total2017": "12.505",
    "percent2017": "0.03",
    "percentage20171990": "414.1",
    "emissionIntensity2017": "39",
    "emissionPerCapita2017": "0.5"
  },
  "jam": {
    "country": "Jamaica",
    "total1990": "7.525",
    "total2005": "10.631",
    "total2017": "7.546",
    "percent2017": "0.02",
    "percentage20171990": "100.3",
    "emissionIntensity2017": "687",
    "emissionPerCapita2017": "2.6"
  },
  "jpn": {
    "country": "Japan",
    "total1990": "1,149.400",
    "total2005": "1,276.863",
    "total2017": "1,320.776",
    "percent2017": "3.56",
    "percentage20171990": "114.9",
    "emissionIntensity2017": "3,494",
    "emissionPerCapita2017": "10.4"
  },
  "jor": {
    "country": "Jordan",
    "total1990": "10.208",
    "total2005": "19.755",
    "total2017": "24.565",
    "percent2017": "0.07",
    "percentage20171990": "240.6",
    "emissionIntensity2017": "275",
    "emissionPerCapita2017": "2.5"
  },
  "kaz": {
    "country": "Kazakhstan",
    "total1990": "250.382",
    "total2005": "182.369",
    "total2017": "266.207",
    "percent2017": "0.72",
    "percentage20171990": "106.3",
    "emissionIntensity2017": "98",
    "emissionPerCapita2017": "14.6"
  },
  "ken": {
    "country": "Kenya",
    "total1990": "6.467",
    "total2005": "8.787",
    "total2017": "18.594",
    "percent2017": "0.05",
    "percentage20171990": "287.5",
    "emissionIntensity2017": "32",
    "emissionPerCapita2017": "0.4"
  },
  "kir": {
    "country": "Kiribati",
    "total1990": "0.020",
    "total2005": "0.033",
    "total2017": "0.030",
    "percent2017": "0.00",
    "percentage20171990": "150.0",
    "emissionIntensity2017": "37",
    "emissionPerCapita2017": "0.3"
  },
  "kwt": {
    "country": "Kuwait",
    "total1990": "31.414",
    "total2005": "75.218",
    "total2017": "97.151",
    "percent2017": "0.26",
    "percentage20171990": "309.3",
    "emissionIntensity2017": "5,452",
    "emissionPerCapita2017": "23.5"
  },
  "kgz": {
    "country": "Kyrgyzstan",
    "total1990": "23.696",
    "total2005": "5.475",
    "total2017": "11.180",
    "percent2017": "0.03",
    "percentage20171990": "47.2",
    "emissionIntensity2017": "56",
    "emissionPerCapita2017": "1.8"
  },
  "lao": {
    "country": "Laos",
    "total1990": "0.211",
    "total2005": "1.038",
    "total2017": "2.818",
    "percent2017": "0.01",
    "percentage20171990": "1,335.5",
    "emissionIntensity2017": "12",
    "emissionPerCapita2017": "0.4"
  },
  "lva": {
    "country": "Latvia",
    "total1990": "20.141",
    "total2005": "8.242",
    "total2017": "8.049",
    "percent2017": "0.02",
    "percentage20171990": "40.0",
    "emissionIntensity2017": "125",
    "emissionPerCapita2017": "4.1"
  },
  "lbn": {
    "country": "Lebanon",
    "total1990": "5.977",
    "total2005": "16.505",
    "total2017": "23.102",
    "percent2017": "0.06",
    "percentage20171990": "386.5",
    "emissionIntensity2017": "2,210",
    "emissionPerCapita2017": "3.8"
  },
  "lso": {
    "country": "Lesotho",
    "total1990": "0.100",
    "total2005": "0.175",
    "total2017": "0.754",
    "percent2017": "0.00",
    "percentage20171990": "754.0",
    "emissionIntensity2017": "25",
    "emissionPerCapita2017": "0.3"
  },
  "lbr": {
    "country": "Liberia",
    "total1990": "0.416",
    "total2005": "0.473",
    "total2017": "1.129",
    "percent2017": "0.00",
    "percentage20171990": "271.4",
    "emissionIntensity2017": "10",
    "emissionPerCapita2017": "0.2"
  },
  "lby": {
    "country": "Libya",
    "total1990": "37.143",
    "total2005": "56.700",
    "total2017": "57.584",
    "percent2017": "0.16",
    "percentage20171990": "155.0",
    "emissionIntensity2017": "33",
    "emissionPerCapita2017": "9.0"
  },
  "ltu": {
    "country": "Lithuania",
    "total1990": "35.314",
    "total2005": "14.075",
    "total2017": "15.311",
    "percent2017": "0.04",
    "percentage20171990": "43.4",
    "emissionIntensity2017": "234",
    "emissionPerCapita2017": "5.3"
  },
  "lux": {
    "country": "Luxembourg",
    "total1990": "11.750",
    "total2005": "12.156",
    "total2017": "9.540",
    "percent2017": "0.03",
    "percentage20171990": "81.2",
    "emissionIntensity2017": "3,689",
    "emissionPerCapita2017": "16.4"
  },
  "mac": {
    "country": "Macau",
    "total1990": "0.982",
    "total2005": "1.624",
    "total2017": "1.280",
    "percent2017": "0.00",
    "percentage20171990": "130.3",
    "emissionIntensity2017": "40,895",
    "emissionPerCapita2017": "2.1"
  },
  "mdg": {
    "country": "Madagascar",
    "total1990": "0.700",
    "total2005": "2.220",
    "total2017": "4.156",
    "percent2017": "0.01",
    "percentage20171990": "593.7",
    "emissionIntensity2017": "7",
    "emissionPerCapita2017": "0.2"
  },
  "mwi": {
    "country": "Malawi",
    "total1990": "0.457",
    "total2005": "1.437",
    "total2017": "1.572",
    "percent2017": "0.00",
    "percentage20171990": "344.0",
    "emissionIntensity2017": "13",
    "emissionPerCapita2017": "0.1"
  },
  "mys": {
    "country": "Malaysia",
    "total1990": "59.225",
    "total2005": "182.503",
    "total2017": "258.783",
    "percent2017": "0.70",
    "percentage20171990": "436.9",
    "emissionIntensity2017": "782",
    "emissionPerCapita2017": "8.2"
  },
  "mdv": {
    "country": "Maldives",
    "total1990": "0.065",
    "total2005": "0.479",
    "total2017": "0.964",
    "percent2017": "0.00",
    "percentage20171990": "1,483.1",
    "emissionIntensity2017": "3,213",
    "emissionPerCapita2017": "2.2"
  },
  "mli": {
    "country": "Mali",
    "total1990": "0.383",
    "total2005": "0.543",
    "total2017": "0.951",
    "percent2017": "0.00",
    "percentage20171990": "248.3",
    "emissionIntensity2017": "1",
    "emissionPerCapita2017": "0.1"
  },
  "mlt": {
    "country": "Malta",
    "total1990": "2.352",
    "total2005": "2.769",
    "total2017": "1.876",
    "percent2017": "0.01",
    "percentage20171990": "79.8",
    "emissionIntensity2017": "5,937",
    "emissionPerCapita2017": "4.4"
  },
  "mtq": {
    "country": "Martinique",
    "total1990": "0.944",
    "total2005": "1.120",
    "total2017": "2.374",
    "percent2017": "0.01",
    "percentage20171990": "251.5",
    "emissionIntensity2017": "2,105",
    "emissionPerCapita2017": "6.2"
  },
  "mrt": {
    "country": "Mauritania",
    "total1990": "0.684",
    "total2005": "2.911",
    "total2017": "2.962",
    "percent2017": "0.01",
    "percentage20171990": "433.0",
    "emissionIntensity2017": "3",
    "emissionPerCapita2017": "0.7"
  },
  "mus": {
    "country": "Mauritius",
    "total1990": "1.191",
    "total2005": "2.977",
    "total2017": "3.993",
    "percent2017": "0.01",
    "percentage20171990": "335.3",
    "emissionIntensity2017": "1,957",
    "emissionPerCapita2017": "3.2"
  },
  "mex": {
    "country": "Mexico",
    "total1990": "290.355",
    "total2005": "448.171",
    "total2017": "507.183",
    "percent2017": "1.37",
    "percentage20171990": "174.7",
    "emissionIntensity2017": "258",
    "emissionPerCapita2017": "3.9"
  },
  "mda": {
    "country": "Moldova",
    "total1990": "31.957",
    "total2005": "8.139",
    "total2017": "8.263",
    "percent2017": "0.02",
    "percentage20171990": "25.9",
    "emissionIntensity2017": "244",
    "emissionPerCapita2017": "2.0"
  },
  "mng": {
    "country": "Mongolia",
    "total1990": "13.151",
    "total2005": "11.083",
    "total2017": "25.747",
    "percent2017": "0.07",
    "percentage20171990": "195.8",
    "emissionIntensity2017": "16",
    "emissionPerCapita2017": "8.4"
  },
  "mar": {
    "country": "Morocco",
    "total1990": "22.386",
    "total2005": "44.368",
    "total2017": "61.584",
    "percent2017": "0.17",
    "percentage20171990": "275.1",
    "emissionIntensity2017": "138",
    "emissionPerCapita2017": "1.7"
  },
  "moz": {
    "country": "Mozambique",
    "total1990": "1.183",
    "total2005": "2.703",
    "total2017": "7.754",
    "percent2017": "0.02",
    "percentage20171990": "655.5",
    "emissionIntensity2017": "10",
    "emissionPerCapita2017": "0.3"
  },
  "mmr": {
    "country": "Myanmar",
    "total1990": "4.401",
    "total2005": "11.146",
    "total2017": "28.462",
    "percent2017": "0.08",
    "percentage20171990": "646.7",
    "emissionIntensity2017": "42",
    "emissionPerCapita2017": "0.5"
  },
  "nam": {
    "country": "Namibia",
    "total1990": "1.542",
    "total2005": "2.504",
    "total2017": "4.299",
    "percent2017": "0.01",
    "percentage20171990": "278.8",
    "emissionIntensity2017": "5",
    "emissionPerCapita2017": "1.7"
  },
  "npl": {
    "country": "Nepal",
    "total1990": "1.066",
    "total2005": "3.298",
    "total2017": "8.218",
    "percent2017": "0.02",
    "percentage20171990": "770.9",
    "emissionIntensity2017": "56",
    "emissionPerCapita2017": "0.3"
  },
  "nld": {
    "country": "Netherlands",
    "total1990": "161.447",
    "total2005": "181.433",
    "total2017": "174.770",
    "percent2017": "0.47",
    "percentage20171990": "108.3",
    "emissionIntensity2017": "4,176",
    "emissionPerCapita2017": "10.3"
  },
  "ncl": {
    "country": "New Caledonia",
    "total1990": "1.623",
    "total2005": "2.453",
    "total2017": "5.912",
    "percent2017": "0.02",
    "percentage20171990": "364.3",
    "emissionIntensity2017": "318",
    "emissionPerCapita2017": "21.4"
  },
  "nzl": {
    "country": "New Zealand",
    "total1990": "24.006",
    "total2005": "36.746",
    "total2017": "36.795",
    "percent2017": "0.10",
    "percentage20171990": "153.3",
    "emissionIntensity2017": "136",
    "emissionPerCapita2017": "7.8"
  },
  "nic": {
    "country": "Nicaragua",
    "total1990": "1.945",
    "total2005": "4.312",
    "total2017": "5.919",
    "percent2017": "0.02",
    "percentage20171990": "304.3",
    "emissionIntensity2017": "45",
    "emissionPerCapita2017": "1.0"
  },
  "ner": {
    "country": "Niger",
    "total1990": "0.875",
    "total2005": "0.796",
    "total2017": "2.497",
    "percent2017": "0.01",
    "percentage20171990": "285.4",
    "emissionIntensity2017": "2",
    "emissionPerCapita2017": "0.1"
  },
  "nga": {
    "country": "Nigeria",
    "total1990": "68.581",
    "total2005": "100.196",
    "total2017": "94.847",
    "percent2017": "0.26",
    "percentage20171990": "138.3",
    "emissionIntensity2017": "103",
    "emissionPerCapita2017": "0.5"
  },
  "prk": {
    "country": "North Korea",
    "total1990": "131.365",
    "total2005": "79.568",
    "total2017": "37.774",
    "percent2017": "0.10",
    "percentage20171990": "28.8",
    "emissionIntensity2017": "313",
    "emissionPerCapita2017": "1.5"
  },
  "mkd": {
    "country": "North Macedonia",
    "total1990": "11.189",
    "total2005": "9.694",
    "total2017": "8.049",
    "percent2017": "0.02",
    "percentage20171990": "71.9",
    "emissionIntensity2017": "313",
    "emissionPerCapita2017": "3.9"
  },
  "nor": {
    "country": "Norway",
    "total1990": "36.463",
    "total2005": "44.191",
    "total2017": "46.943",
    "percent2017": "0.13",
    "percentage20171990": "128.7",
    "emissionIntensity2017": "145",
    "emissionPerCapita2017": "8.8"
  },
  "omn": {
    "country": "Oman",
    "total1990": "11.884",
    "total2005": "32.964",
    "total2017": "78.421",
    "percent2017": "0.21",
    "percentage20171990": "659.9",
    "emissionIntensity2017": "253",
    "emissionPerCapita2017": "16.9"
  },
  "pak": {
    "country": "Pakistan",
    "total1990": "66.270",
    "total2005": "130.354",
    "total2017": "197.297",
    "percent2017": "0.53",
    "percentage20171990": "297.7",
    "emissionIntensity2017": "224",
    "emissionPerCapita2017": "1.0"
  },
  "plw": {
    "country": "Palau",
    "total1990": "2.155",
    "total2005": "1.734",
    "total2017": "1.411",
    "percent2017": "0.00",
    "percentage20171990": "65.5",
    "emissionIntensity2017": "3,074",
    "emissionPerCapita2017": "64.9"
  },
  "pan": {
    "country": "Panama",
    "total1990": "2.735",
    "total2005": "7.204",
    "total2017": "12.256",
    "percent2017": "0.03",
    "percentage20171990": "448.1",
    "emissionIntensity2017": "163",
    "emissionPerCapita2017": "3.0"
  },
  "png": {
    "country": "Papua New Guinea",
    "total1990": "2.307",
    "total2005": "4.379",
    "total2017": "4.351",
    "percent2017": "0.01",
    "percentage20171990": "188.6",
    "emissionIntensity2017": "9",
    "emissionPerCapita2017": "0.5"
  },
  "pry": {
    "country": "Paraguay",
    "total1990": "2.263",
    "total2005": "3.934",
    "total2017": "6.535",
    "percent2017": "0.02",
    "percentage20171990": "288.8",
    "emissionIntensity2017": "16",
    "emissionPerCapita2017": "1.0"
  },
  "per": {
    "country": "Peru",
    "total1990": "21.039",
    "total2005": "31.692",
    "total2017": "55.931",
    "percent2017": "0.15",
    "percentage20171990": "265.8",
    "emissionIntensity2017": "44",
    "emissionPerCapita2017": "1.7"
  },
  "phl": {
    "country": "Philippines",
    "total1990": "43.623",
    "total2005": "81.261",
    "total2017": "137.154",
    "percent2017": "0.37",
    "percentage20171990": "314.4",
    "emissionIntensity2017": "457",
    "emissionPerCapita2017": "1.3"
  },
  "pol": {
    "country": "Poland",
    "total1990": "371.139",
    "total2005": "316.256",
    "total2017": "319.028",
    "percent2017": "0.86",
    "percentage20171990": "86.0",
    "emissionIntensity2017": "1,020",
    "emissionPerCapita2017": "8.4"
  },
  "prt": {
    "country": "Portugal",
    "total1990": "43.672",
    "total2005": "68.077",
    "total2017": "56.771",
    "percent2017": "0.15",
    "percentage20171990": "130.0",
    "emissionIntensity2017": "616",
    "emissionPerCapita2017": "5.5"
  },
  "pri": {
    "country": "Puerto Rico",
    "total1990": "2.064",
    "total2005": "2.272",
    "total2017": "2.164",
    "percent2017": "0.01",
    "percentage20171990": "104.8",
    "emissionIntensity2017": "238",
    "emissionPerCapita2017": "0.6"
  },
  "qat": {
    "country": "Qatar",
    "total1990": "16.291",
    "total2005": "43.435",
    "total2017": "97.787",
    "percent2017": "0.26",
    "percentage20171990": "600.3",
    "emissionIntensity2017": "8,440",
    "emissionPerCapita2017": "37.1"
  },
  "reu": {
    "country": "Réunion",
    "total1990": "1.010",
    "total2005": "2.367",
    "total2017": "2.916",
    "percent2017": "0.01",
    "percentage20171990": "288.7",
    "emissionIntensity2017": "1,161",
    "emissionPerCapita2017": "3.3"
  },
  "rou": {
    "country": "Romania",
    "total1990": "187.142",
    "total2005": "104.713",
    "total2017": "81.131",
    "percent2017": "0.22",
    "percentage20171990": "43.4",
    "emissionIntensity2017": "340",
    "emissionPerCapita2017": "4.1"
  },
  "rus": {
    "country": "Russia",
    "total1990": "2,378.921",
    "total2005": "1,733.950",
    "total2017": "1,764.866",
    "percent2017": "4.76",
    "percentage20171990": "74.2",
    "emissionIntensity2017": "103",
    "emissionPerCapita2017": "12.3"
  },
  "rwa": {
    "country": "Rwanda",
    "total1990": "0.525",
    "total2005": "0.748",
    "total2017": "1.106",
    "percent2017": "0.00",
    "percentage20171990": "210.7",
    "emissionIntensity2017": "42",
    "emissionPerCapita2017": "0.1"
  },
  "shn": {
    "country": "Saint Helena, Ascension and Tristan da Cunha",
    "total1990": "0.010",
    "total2005": "0.010",
    "total2017": "0.015",
    "percent2017": "0.00",
    "percentage20171990": "150.0",
    "emissionIntensity2017": "49",
    "emissionPerCapita2017": "3.7"
  },
  "kna": {
    "country": "Saint Kitts and Nevis",
    "total1990": "0.034",
    "total2005": "0.063",
    "total2017": "0.238",
    "percent2017": "0.00",
    "percentage20171990": "700.0",
    "emissionIntensity2017": "912",
    "emissionPerCapita2017": "4.3"
  },
  "lca": {
    "country": "Saint Lucia",
    "total1990": "0.076",
    "total2005": "0.158",
    "total2017": "0.364",
    "percent2017": "0.00",
    "percentage20171990": "478.9",
    "emissionIntensity2017": "591",
    "emissionPerCapita2017": "2.0"
  },
  "spm": {
    "country": "Saint Pierre and Miquelon",
    "total1990": "0.148",
    "total2005": "0.031",
    "total2017": "0.075",
    "percent2017": "0.00",
    "percentage20171990": "50.7",
    "emissionIntensity2017": "310",
    "emissionPerCapita2017": "11.9"
  },
  "vct": {
    "country": "Saint Vincent and the Grenadines",
    "total1990": "0.038",
    "total2005": "0.095",
    "total2017": "0.179",
    "percent2017": "0.00",
    "percentage20171990": "471.1",
    "emissionIntensity2017": "460",
    "emissionPerCapita2017": "1.6"
  },
  "wsm": {
    "country": "Samoa",
    "total1990": "0.129",
    "total2005": "0.121",
    "total2017": "0.147",
    "percent2017": "0.00",
    "percentage20171990": "114.0",
    "emissionIntensity2017": "52",
    "emissionPerCapita2017": "0.7"
  },
  "stp": {
    "country": "São Tomé and Príncipe",
    "total1990": "0.047",
    "total2005": "0.057",
    "total2017": "0.157",
    "percent2017": "0.00",
    "percentage20171990": "334.0",
    "emissionIntensity2017": "163",
    "emissionPerCapita2017": "0.8"
  },
  "sau": {
    "country": "Saudi Arabia",
    "total1990": "166.172",
    "total2005": "339.441",
    "total2017": "638.762",
    "percent2017": "1.72",
    "percentage20171990": "384.4",
    "emissionIntensity2017": "297",
    "emissionPerCapita2017": "19.4"
  },
  "sen": {
    "country": "Senegal",
    "total1990": "2.397",
    "total2005": "5.800",
    "total2017": "9.689",
    "percent2017": "0.03",
    "percentage20171990": "404.2",
    "emissionIntensity2017": "49",
    "emissionPerCapita2017": "0.6"
  },
  "srb": {
    "country": "Serbia",
    "total1990": "66.388",
    "total2005": "61.497",
    "total2017": "62.487",
    "percent2017": "0.17",
    "percentage20171990": "94.1",
    "emissionIntensity2017": "612",
    "emissionPerCapita2017": "6.6"
  },
  "mne": {
    "country": "Montenegro",
    "total1990": "66.388",
    "total2005": "61.497",
    "total2017": "62.487",
    "percent2017": "0.17",
    "percentage20171990": "94.1",
    "emissionIntensity2017": "612",
    "emissionPerCapita2017": "6.6"
  },
  "syc": {
    "country": "Seychelles",
    "total1990": "0.288",
    "total2005": "0.678",
    "total2017": "0.968",
    "percent2017": "0.00",
    "percentage20171990": "336.1",
    "emissionIntensity2017": "2,142",
    "emissionPerCapita2017": "10.2"
  },
  "sle": {
    "country": "Sierra Leone",
    "total1990": "0.741",
    "total2005": "0.493",
    "total2017": "1.309",
    "percent2017": "0.00",
    "percentage20171990": "176.7",
    "emissionIntensity2017": "18",
    "emissionPerCapita2017": "0.2"
  },
  "sgp": {
    "country": "Singapore",
    "total1990": "31.623",
    "total2005": "42.998",
    "total2017": "55.018",
    "percent2017": "0.15",
    "percentage20171990": "174.0",
    "emissionIntensity2017": "76,841",
    "emissionPerCapita2017": "9.6"
  },
  "svk": {
    "country": "Slovakia",
    "total1990": "60.537",
    "total2005": "42.194",
    "total2017": "37.855",
    "percent2017": "0.10",
    "percentage20171990": "62.5",
    "emissionIntensity2017": "772",
    "emissionPerCapita2017": "6.9"
  },
  "svn": {
    "country": "Slovenia",
    "total1990": "16.623",
    "total2005": "18.300",
    "total2017": "15.209",
    "percent2017": "0.04",
    "percentage20171990": "91.5",
    "emissionIntensity2017": "750",
    "emissionPerCapita2017": "7.3"
  },
  "slb": {
    "country": "Solomon Islands",
    "total1990": "0.133",
    "total2005": "0.187",
    "total2017": "0.146",
    "percent2017": "0.00",
    "percentage20171990": "109.8",
    "emissionIntensity2017": "5",
    "emissionPerCapita2017": "0.2"
  },
  "som": {
    "country": "Somalia",
    "total1990": "0.695",
    "total2005": "0.765",
    "total2017": "0.927",
    "percent2017": "0.00",
    "percentage20171990": "133.4",
    "emissionIntensity2017": "1",
    "emissionPerCapita2017": "0.1"
  },
  "zaf": {
    "country": "South Africa",
    "total1990": "312.463",
    "total2005": "433.170",
    "total2017": "467.654",
    "percent2017": "1.26",
    "percentage20171990": "149.7",
    "emissionIntensity2017": "383",
    "emissionPerCapita2017": "8.2"
  },
  "kor": {
    "country": "South Korea",
    "total1990": "270.056",
    "total2005": "514.946",
    "total2017": "673.324",
    "percent2017": "1.82",
    "percentage20171990": "249.3",
    "emissionIntensity2017": "6,719",
    "emissionPerCapita2017": "13.2"
  },
  "esp": {
    "country": "Spain",
    "total1990": "229.966",
    "total2005": "368.948",
    "total2017": "282.364",
    "percent2017": "0.76",
    "percentage20171990": "122.8",
    "emissionIntensity2017": "558",
    "emissionPerCapita2017": "6.1"
  },
  "lka": {
    "country": "Sri Lanka",
    "total1990": "4.187",
    "total2005": "14.421",
    "total2017": "23.978",
    "percent2017": "0.06",
    "percentage20171990": "572.7",
    "emissionIntensity2017": "365",
    "emissionPerCapita2017": "1.1"
  },
  "sdn": {
    "country": "Sudan",
    "total1990": "5.536",
    "total2005": "10.773",
    "total2017": "21.056",
    "percent2017": "0.00",
    "percentage20171990": "380.3",
    "emissionIntensity2017": "8",
    "emissionPerCapita2017": "0.4"
  },
  "sur": {
    "country": "Suriname",
    "total1990": "0.908",
    "total2005": "1.686",
    "total2017": "2.213",
    "percent2017": "0.01",
    "percentage20171990": "243.7",
    "emissionIntensity2017": "14",
    "emissionPerCapita2017": "3.9"
  },
  "swe": {
    "country": "Sweden",
    "total1990": "58.117",
    "total2005": "55.877",
    "total2017": "50.874",
    "percent2017": "0.14",
    "percentage20171990": "87.5",
    "emissionIntensity2017": "113",
    "emissionPerCapita2017": "5.1"
  },
  "che": {
    "country": "Switzerland",
    "total1990": "44.955",
    "total2005": "47.161",
    "total2017": "39.738",
    "percent2017": "0.11",
    "percentage20171990": "88.4",
    "emissionIntensity2017": "959",
    "emissionPerCapita2017": "4.7"
  },
  "syr": {
    "country": "Syria",
    "total1990": "33.876",
    "total2005": "25.582",
    "total2017": "28.377",
    "percent2017": "0.08",
    "percentage20171990": "83.8",
    "emissionIntensity2017": "153",
    "emissionPerCapita2017": "1.6"
  },
  "twn": {
    "country": "Taiwan",
    "total1990": "124.383",
    "total2005": "269.099",
    "total2017": "279.740",
    "percent2017": "0.75",
    "percentage20171990": "224.9",
    "emissionIntensity2017": "7,729",
    "emissionPerCapita2017": "11.8"
  },
  "tjk": {
    "country": "Tajikistan",
    "total1990": "12.267",
    "total2005": "3.263",
    "total2017": "5.699",
    "percent2017": "0.02",
    "percentage20171990": "46.5",
    "emissionIntensity2017": "40",
    "emissionPerCapita2017": "0.6"
  },
  "tza": {
    "country": "Tanzania",
    "total1990": "2.096",
    "total2005": "5.780",
    "total2017": "14.650",
    "percent2017": "0.04",
    "percentage20171990": "699.0",
    "emissionIntensity2017": "16",
    "emissionPerCapita2017": "0.3"
  },
  "tha": {
    "country": "Thailand",
    "total1990": "93.009",
    "total2005": "225.613",
    "total2017": "279.296",
    "percent2017": "0.75",
    "percentage20171990": "300.3",
    "emissionIntensity2017": "544",
    "emissionPerCapita2017": "4.0"
  },
  "gmb": {
    "country": "Gambia",
    "total1990": "0.149",
    "total2005": "0.235",
    "total2017": "0.554",
    "percent2017": "0.00",
    "percentage20171990": "371.8",
    "emissionIntensity2017": "49",
    "emissionPerCapita2017": "0.3"
  },
  "tgo": {
    "country": "Togo",
    "total1990": "0.765",
    "total2005": "1.327",
    "total2017": "2.843",
    "percent2017": "0.01",
    "percentage20171990": "371.6",
    "emissionIntensity2017": "50",
    "emissionPerCapita2017": "0.4"
  },
  "ton": {
    "country": "Tonga",
    "total1990": "0.064",
    "total2005": "0.120",
    "total2017": "0.136",
    "percent2017": "0.00",
    "percentage20171990": "212.5",
    "emissionIntensity2017": "182",
    "emissionPerCapita2017": "1.3"
  },
  "tto": {
    "country": "Trinidad and Tobago",
    "total1990": "14.895",
    "total2005": "34.450",
    "total2017": "37.745",
    "percent2017": "0.10",
    "percentage20171990": "253.4",
    "emissionIntensity2017": "7,358",
    "emissionPerCapita2017": "27.6"
  },
  "tun": {
    "country": "Tunisia",
    "total1990": "14.705",
    "total2005": "23.355",
    "total2017": "31.630",
    "percent2017": "0.09",
    "percentage20171990": "215.1",
    "emissionIntensity2017": "193",
    "emissionPerCapita2017": "2.7"
  },
  "tur": {
    "country": "Turkey",
    "total1990": "149.893",
    "total2005": "246.169",
    "total2017": "429.563",
    "percent2017": "1.16",
    "percentage20171990": "286.6",
    "emissionIntensity2017": "548",
    "emissionPerCapita2017": "5.3"
  },
  "tkm": {
    "country": "Turkmenistan",
    "total1990": "45.628",
    "total2005": "52.851",
    "total2017": "72.474",
    "percent2017": "0.20",
    "percentage20171990": "158.8",
    "emissionIntensity2017": "148",
    "emissionPerCapita2017": "12.6"
  },
  "tca": {
    "country": "Turks and Caicos Islands",
    "total1990": "0.007",
    "total2005": "0.005",
    "total2017": "0.165",
    "percent2017": "0.00",
    "percentage20171990": "2,357.1",
    "emissionIntensity2017": "174",
    "emissionPerCapita2017": "4.7"
  },
  "uga": {
    "country": "Uganda",
    "total1990": "0.644",
    "total2005": "1.664",
    "total2017": "5.042",
    "percent2017": "0.01",
    "percentage20171990": "782.9",
    "emissionIntensity2017": "21",
    "emissionPerCapita2017": "0.1"
  },
  "ukr": {
    "country": "Ukraine",
    "total1990": "783.210",
    "total2005": "354.429",
    "total2017": "205.723",
    "percent2017": "0.55",
    "percentage20171990": "26.3",
    "emissionIntensity2017": "341",
    "emissionPerCapita2017": "4.7"
  },
  "are": {
    "country": "United Arab Emirates",
    "total1990": "56.922",
    "total2005": "122.395",
    "total2017": "202.802",
    "percent2017": "0.55",
    "percentage20171990": "356.3",
    "emissionIntensity2017": "2,426",
    "emissionPerCapita2017": "21.6"
  },
  "gbr": {
    "country": "United Kingdom",
    "total1990": "589.038",
    "total2005": "561.543",
    "total2017": "379.150",
    "percent2017": "1.02",
    "percentage20171990": "64.4",
    "emissionIntensity2017": "1,564",
    "emissionPerCapita2017": "5.7"
  },
  "usa": {
    "country": "United States",
    "total1990": "5,085.897",
    "total2005": "5,971.571",
    "total2017": "5,107.393",
    "percent2017": "13.77",
    "percentage20171990": "100.4",
    "emissionIntensity2017": "519",
    "emissionPerCapita2017": "15.7"
  },
  "ury": {
    "country": "Uruguay",
    "total1990": "3.893",
    "total2005": "5.483",
    "total2017": "6.930",
    "percent2017": "0.02",
    "percentage20171990": "178.0",
    "emissionIntensity2017": "39",
    "emissionPerCapita2017": "2.0"
  },
  "uzb": {
    "country": "Uzbekistan",
    "total1990": "123.106",
    "total2005": "116.386",
    "total2017": "95.350",
    "percent2017": "0.26",
    "percentage20171990": "77.5",
    "emissionIntensity2017": "213",
    "emissionPerCapita2017": "3.0"
  },
  "vut": {
    "country": "Vanuatu",
    "total1990": "0.130",
    "total2005": "0.063",
    "total2017": "0.091",
    "percent2017": "0.00",
    "percentage20171990": "70.0",
    "emissionIntensity2017": "7",
    "emissionPerCapita2017": "0.3"
  },
  "ven": {
    "country": "Venezuela",
    "total1990": "109.268",
    "total2005": "152.464",
    "total2017": "145.877",
    "percent2017": "0.39",
    "percentage20171990": "133.5",
    "emissionIntensity2017": "159",
    "emissionPerCapita2017": "4.6"
  },
  "vnm": {
    "country": "Vietnam",
    "total1990": "20.182",
    "total2005": "99.231",
    "total2017": "218.729",
    "percent2017": "0.59",
    "percentage20171990": "1,083.8",
    "emissionIntensity2017": "660",
    "emissionPerCapita2017": "2.3"
  },
  "esh": {
    "country": "Western Sahara",
    "total1990": "0.144",
    "total2005": "0.227",
    "total2017": "0.276",
    "percent2017": "0.00",
    "percentage20171990": "191.7",
    "emissionIntensity2017": "1",
    "emissionPerCapita2017": "0.5"
  },
  "yem": {
    "country": "Yemen",
    "total1990": "6.887",
    "total2005": "21.768",
    "total2017": "12.503",
    "percent2017": "0.03",
    "percentage20171990": "181.5",
    "emissionIntensity2017": "24",
    "emissionPerCapita2017": "0.4"
  },
  "zmb": {
    "country": "Zambia",
    "total1990": "2.955",
    "total2005": "2.457",
    "total2017": "4.967",
    "percent2017": "0.01",
    "percentage20171990": "168.1",
    "emissionIntensity2017": "7",
    "emissionPerCapita2017": "0.3"
  },
  "zwe": {
    "country": "Zimbabwe",
    "total1990": "17.178",
    "total2005": "11.388",
    "total2017": "12.087",
    "percent2017": "0.03",
    "percentage20171990": "70.4",
    "emissionIntensity2017": "31",
    "emissionPerCapita2017": "0.7"
  }
}

const emissions = Object.keys(countries).map((c, index) => Number(countries[c].emissionPerCapita2017))

import { writeFile } from 'fs'
writeFile('histogram.json', JSON.stringify(emissions), 'utf8', () => {})