export interface StateWiseDataModel {
    AN: An;
    AP: Ap;
    AR: Ar;
    AS: As;
    BR: Br;
    CH: Ch;
    CT: CT;
    DL: DL;
    DN: DN;
    GA: Ga;
    GJ: Gj;
    HP: HP;
    HR: Hr;
    JH: Jh;
    JK: Jk;
    KA: Ka;
    KL: Kl;
    LA: La;
    LD: Ld;
    MH: Mh;
    ML: Ml;
    MN: Mn;
    MP: Mp;
    MZ: Mz;
    NL: Nl;
    OR: Or;
    PB: Pb;
    PY: Py;
    RJ: Rj;
    SK: Sk;
    TG: Tg;
    TN: Tn;
    TR: Tr;
    TT: Tt;
    UN: Un;
    UP: Up;
    UT: Ut;
    WB: Wb;
}

export interface An {
    delta:     PurpleDelta;
    districts: ANDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface PurpleDelta {
    confirmed: number;
    recovered: number;
}

export interface ANDistricts {
    "North and Middle Andaman": NorthAndMiddleAndaman;
    "South Andaman":            NorthAndMiddleAndaman;
    Unknown:                    AgarMalwaClass;
}

export interface NorthAndMiddleAndaman {
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleDelta;
}

export interface NorthAndMiddleAndamanMeta {
    population: number;
}

export interface AgarMalwaClass {
    delta: PurpleDelta;
    total: PurpleTotal;
}

export interface PurpleTotal {
    confirmed:  number;
    migrated?:  number;
    recovered?: number;
    tested?:    number;
    deceased?:  number;
}

export interface ANMeta {
    last_updated?: Date;
    population:    number;
    tested:        Tested;
    notes?:        string;
}

export interface Tested {
    last_updated: Date;
    source:       string;
}

export interface Ap {
    delta:     PurpleTotal;
    districts: APDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface APDistricts {
    Anantapur:          Anantapur;
    Chittoor:           Anantapur;
    "East Godavari":    Anantapur;
    "Foreign Evacuees": ForeignEvacuees;
    Guntur:             Anantapur;
    Krishna:            Anantapur;
    Kurnool:            Anantapur;
    "Other State":      ForeignEvacuees;
    Prakasam:           Anantapur;
    "S.P.S. Nellore":   SPSNellore;
    Srikakulam:         Anantapur;
    Visakhapatnam:      Anantapur;
    Vizianagaram:       Anantapur;
    "West Godavari":    Anantapur;
    "Y.S.R. Kadapa":    Anantapur;
}

export interface Anantapur {
    delta: PurpleTotal;
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface AnantapurMeta {
    population: number;
    tested:     Tested;
}

export interface ForeignEvacuees {
    total: PurpleDelta;
}

export interface SPSNellore {
    delta: SPSNelloreDelta;
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface SPSNelloreDelta {
    confirmed: number;
    tested:    number;
}

export interface Ar {
    delta:     PurpleTotal;
    districts: ARDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface ARDistricts {
    Anjaw:                 Anjaw;
    "Capital Complex":     CapitalComplex;
    Changlang:             Changlang;
    "Dibang Valley":       CapitalComplex;
    "East Kameng":         EastKameng;
    "East Siang":          EastSiang;
    Kamle:                 EastKameng;
    "Kra-Daadi":           CapitalComplex;
    "Kurung Kumey":        KurungKumey;
    "Lepa Rada":           LepaRada;
    Lohit:                 SPSNellore;
    Longding:              EastSiang;
    "Lower Dibang Valley": SPSNellore;
    "Lower Siang":         EastSiang;
    "Lower Subansiri":     Changlang;
    Namsai:                Anantapur;
    "Pakke Kessang":       LepaRada;
    "Papum Pare":          Tt;
    "Shi Yomi":            KurungKumey;
    Siang:                 Anjaw;
    Tawang:                EastSiang;
    Tirap:                 SPSNellore;
    "Upper Siang":         UpperSiang;
    "Upper Subansiri":     UpperSiang;
    "West Kameng":         SPSNellore;
    "West Siang":          EastSiang;
}

export interface Anjaw {
    meta:  AnantapurMeta;
    total: SPSNelloreDelta;
}

export interface CapitalComplex {
    meta:  CapitalComplexMeta;
    total: CapitalComplexTotal;
}

export interface CapitalComplexMeta {
    tested: Tested;
}

export interface CapitalComplexTotal {
    tested: number;
}

export interface Changlang {
    delta: ChanglangDelta;
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface ChanglangDelta {
    recovered: number;
    tested:    number;
}

export interface EastKameng {
    delta: CapitalComplexTotal;
    meta:  AnantapurMeta;
    total: SPSNelloreDelta;
}

export interface EastSiang {
    delta: CapitalComplexTotal;
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface KurungKumey {
    meta:  AnantapurMeta;
    total: CapitalComplexTotal;
}

export interface LepaRada {
    meta:  CapitalComplexMeta;
    total: PurpleTotal;
}

export interface Tt {
    delta: PurpleTotal;
    meta:  ANMeta;
    total: PurpleTotal;
}

export interface UpperSiang {
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface As {
    delta:     PurpleTotal;
    districts: ASDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface ASDistricts {
    "Airport Quarantine":      AirportQuarantine;
    Baksa:                     Baksa;
    Barpeta:                   Baksa;
    Biswanath:                 NorthAndMiddleAndaman;
    Bongaigaon:                NorthAndMiddleAndaman;
    Cachar:                    Cachar;
    Charaideo:                 Charaideo;
    Chirang:                   NorthAndMiddleAndaman;
    Darrang:                   Baksa;
    Dhemaji:                   NorthAndMiddleAndaman;
    Dhubri:                    NorthAndMiddleAndaman;
    Dibrugarh:                 Baksa;
    "Dima Hasao":              NorthAndMiddleAndaman;
    Goalpara:                  NorthAndMiddleAndaman;
    Golaghat:                  Baksa;
    Hailakandi:                Baksa;
    Hojai:                     NorthAndMiddleAndaman;
    Jorhat:                    Baksa;
    Kamrup:                    Baksa;
    "Kamrup Metropolitan":     KamrupMetropolitan;
    "Karbi Anglong":           Baksa;
    Karimganj:                 Karimganj;
    Kokrajhar:                 Baksa;
    Lakhimpur:                 NorthAndMiddleAndaman;
    Majuli:                    NorthAndMiddleAndaman;
    Morigaon:                  NorthAndMiddleAndaman;
    Nagaon:                    Baksa;
    Nalbari:                   Karimganj;
    "Other State":             ForeignEvacuees;
    Sivasagar:                 Baksa;
    Sonitpur:                  Baksa;
    "South Salmara Mankachar": NorthAndMiddleAndaman;
    Tinsukia:                  Baksa;
    Udalguri:                  Baksa;
    Unknown:                   AgarMalwaClass;
    "West Karbi Anglong":      WestKarbiAnglong;
}

export interface AirportQuarantine {
    total: AirportQuarantineTotal;
}

export interface AirportQuarantineTotal {
    confirmed: number;
}

export interface Baksa {
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleTotal;
}

export interface Cachar {
    delta: AirportQuarantineTotal;
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleTotal;
}

export interface Charaideo {
    total: PurpleTotal;
}

export interface KamrupMetropolitan {
    delta: KamrupMetropolitanDelta;
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleTotal;
}

export interface KamrupMetropolitanDelta {
    confirmed: number;
    deceased:  number;
}

export interface Karimganj {
    delta: KarimganjDelta;
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleTotal;
}

export interface KarimganjDelta {
    deceased: number;
}

export interface WestKarbiAnglong {
    meta:  NorthAndMiddleAndamanMeta;
    total: AirportQuarantineTotal;
}

export interface Br {
    delta:     PurpleTotal;
    districts: BRDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface BRDistricts {
    Araria:           Araria;
    Arwal:            Arwal;
    Aurangabad:       Arwal;
    Banka:            Arwal;
    Begusarai:        Arwal;
    Bhagalpur:        Arwal;
    Bhojpur:          Arwal;
    Buxar:            Arwal;
    Darbhanga:        Arwal;
    "East Champaran": Arwal;
    Gaya:             Anantapur;
    Gopalganj:        Arwal;
    Jamui:            Arwal;
    Jehanabad:        Arwal;
    Kaimur:           Arwal;
    Katihar:          Arwal;
    Khagaria:         Arwal;
    Kishanganj:       Arwal;
    Lakhisarai:       Arwal;
    Madhepura:        Arwal;
    Madhubani:        Arwal;
    Munger:           Arwal;
    Muzaffarpur:      Anantapur;
    Nalanda:          Anantapur;
    Nawada:           Arwal;
    Patna:            Patna;
    Purnia:           Arwal;
    Rohtas:           Anantapur;
    Saharsa:          Arwal;
    Samastipur:       Arwal;
    Saran:            Arwal;
    Sheikhpura:       Arwal;
    Sheohar:          Arwal;
    Sitamarhi:        Arwal;
    Siwan:            Siwan;
    Supaul:           Anantapur;
    Vaishali:         Arwal;
    "West Champaran": Anantapur;
}

export interface Araria {
    delta: ArariaDelta;
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface ArariaDelta {
    recovered: number;
}

export interface Arwal {
    delta: PurpleDelta;
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface Patna {
    delta: PurpleTotal;
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleTotal;
}

export interface Siwan {
    delta: AirportQuarantineTotal;
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface Ch {
    delta:     PurpleTotal;
    districts: CHDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface CHDistricts {
    Chandigarh: Arwal;
}

export interface CT {
    delta:     PurpleTotal;
    districts: CTDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface CTDistricts {
    Balod:                      Arwal;
    "Baloda Bazar":             BalodaBazar;
    Balrampur:                  Siwan;
    Bametara:                   Arwal;
    Bastar:                     Siwan;
    Bijapur:                    Siwan;
    Bilaspur:                   Siwan;
    "Dakshin Bastar Dantewada": Siwan;
    Dhamtari:                   Siwan;
    Durg:                       Arwal;
    Gariaband:                  Siwan;
    "Gaurela Pendra Marwahi":   LepaRada;
    "Janjgir Champa":           Arwal;
    Jashpur:                    Arwal;
    Kabeerdham:                 Araria;
    Kondagaon:                  Siwan;
    Korba:                      Siwan;
    Koriya:                     Araria;
    Mahasamund:                 Siwan;
    Mungeli:                    Araria;
    Narayanpur:                 Arwal;
    "Other State":              Charaideo;
    Raigarh:                    Siwan;
    Raipur:                     Anantapur;
    Rajnandgaon:                Siwan;
    Sukma:                      UpperSiang;
    Surajpur:                   Siwan;
    Surguja:                    Arwal;
    "Uttar Bastar Kanker":      Arwal;
}

export interface BalodaBazar {
    delta: KamrupMetropolitanDelta;
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface DL {
    delta:     PurpleTotal;
    districts: DLDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface DLDistricts {
    "Central Delhi":    WestKarbiAnglong;
    "East Delhi":       WestKarbiAnglong;
    "New Delhi":        WestKarbiAnglong;
    "North Delhi":      WestKarbiAnglong;
    "North East Delhi": WestKarbiAnglong;
    "North West Delhi": NorthWestDelhi;
    Shahdara:           AirportQuarantine;
    "South Delhi":      WestKarbiAnglong;
    "South East Delhi": AirportQuarantine;
    "South West Delhi": WestKarbiAnglong;
    Unknown:            PurpleUnknown;
    "West Delhi":       WestKarbiAnglong;
}

export interface NorthWestDelhi {
    meta:  NorthAndMiddleAndamanMeta;
    total: KamrupMetropolitanDelta;
}

export interface PurpleUnknown {
    delta: PurpleTotal;
    total: PurpleTotal;
}

export interface DN {
    delta:     PurpleDelta;
    districts: DNDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface DNDistricts {
    "Dadra and Nagar Haveli": DadraAndNagarHaveli;
    Daman:                    DadraAndNagarHaveli;
    Diu:                      Diu;
}

export interface DadraAndNagarHaveli {
    delta: PurpleDelta;
    meta:  ANMeta;
    total: PurpleTotal;
}

export interface Diu {
    delta: AirportQuarantineTotal;
    meta:  ANMeta;
    total: PurpleTotal;
}

export interface Ga {
    delta:     PurpleTotal;
    districts: GADistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface GADistricts {
    "North Goa":   Baksa;
    "Other State": PurpleOtherState;
    "South Goa":   Baksa;
    Unknown:       FluffyUnknown;
}

export interface PurpleOtherState {
    meta:  PurpleMeta;
    total: PurpleDelta;
}

export interface PurpleMeta {
    notes: string;
}

export interface FluffyUnknown {
    delta: PurpleDelta;
    total: PurpleDelta;
}

export interface Gj {
    delta:     PurpleTotal;
    districts: GJDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface GJDistricts {
    Ahmedabad:         Anantapur;
    Amreli:            Anantapur;
    Anand:             Anantapur;
    Aravalli:          SPSNellore;
    Banaskantha:       SPSNellore;
    Bharuch:           SPSNellore;
    Bhavnagar:         Anantapur;
    Botad:             Anantapur;
    "Chhota Udaipur":  Anantapur;
    Dahod:             SPSNellore;
    Dang:              Changlang;
    "Devbhumi Dwarka": SPSNellore;
    Gandhinagar:       Anantapur;
    "Gir Somnath":     SPSNellore;
    Jamnagar:          Anantapur;
    Junagadh:          Anantapur;
    Kheda:             Anantapur;
    Kutch:             Anantapur;
    Mahisagar:         Anantapur;
    Mehsana:           Anantapur;
    Morbi:             Anantapur;
    Narmada:           Anantapur;
    Navsari:           Anantapur;
    "Other State":     FluffyOtherState;
    Panchmahal:        Anantapur;
    Patan:             Anantapur;
    Porbandar:         SPSNellore;
    Rajkot:            Anantapur;
    Sabarkantha:       Anantapur;
    Surat:             Anantapur;
    Surendranagar:     Anantapur;
    Tapi:              Anantapur;
    Unknown:           TentacledUnknown;
    Vadodara:          Anantapur;
    Valsad:            SPSNellore;
}

export interface FluffyOtherState {
    delta: ArariaDelta;
    meta:  CapitalComplexMeta;
    total: PurpleTotal;
}

export interface TentacledUnknown {
    total: HisarTotal;
}

export interface HisarTotal {
    deceased:  number;
    recovered: number;
}

export interface HP {
    delta:     PurpleTotal;
    districts: HPDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface HPDistricts {
    Bilaspur:           Arwal;
    Chamba:             Chamba;
    Hamirpur:           Siwan;
    Kangra:             Kangra;
    Kinnaur:            Kinnaur;
    Kullu:              Siwan;
    "Lahaul and Spiti": LahaulAndSpiti;
    Mandi:              Kinnaur;
    Shimla:             DadraAndNagarHaveli;
    Sirmaur:            Siwan;
    Solan:              Siwan;
    Una:                Kinnaur;
    Unknown:            StickyUnknown;
}

export interface Chamba {
    delta: ArariaDelta;
    meta:  ANMeta;
    total: PurpleTotal;
}

export interface Kangra {
    delta: PurpleTotal;
    meta:  KangraMeta;
    total: PurpleTotal;
}

export interface KangraMeta {
    notes:         string;
    population:    number;
    tested:        TestedClass;
    last_updated?: Date;
}

export interface TestedClass {
    last_updated: Date;
}

export interface Kinnaur {
    delta: AirportQuarantineTotal;
    meta:  KinnaurMeta;
    total: PurpleTotal;
}

export interface KinnaurMeta {
    population: number;
    tested:     TestedClass;
}

export interface LahaulAndSpiti {
    meta:  KinnaurMeta;
    total: PurpleTotal;
}

export interface StickyUnknown {
    total: FluffyTotal;
}

export interface FluffyTotal {
    migrated: number;
}

export interface Hr {
    delta:     PurpleTotal;
    districts: HRDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface HRDistricts {
    Ambala:             Arwal;
    Bhiwani:            Arwal;
    "Charkhi Dadri":    Arwal;
    Faridabad:          Anantapur;
    Fatehabad:          Siwan;
    "Foreign Evacuees": ForeignEvacuees;
    Gurugram:           Anantapur;
    Hisar:              Hisar;
    Italians:           ForeignEvacuees;
    Jhajjar:            Arwal;
    Jind:               UpperSiang;
    Kaithal:            Arwal;
    Karnal:             Arwal;
    Kurukshetra:        Arwal;
    Mahendragarh:       Mahendragarh;
    Nuh:                Anantapur;
    Palwal:             Arwal;
    Panchkula:          Panchkula;
    Panipat:            Arwal;
    Rewari:             Arwal;
    Rohtak:             Arwal;
    Sirsa:              Arwal;
    Sonipat:            Anantapur;
    Yamunanagar:        Arwal;
}

export interface Hisar {
    delta: HisarTotal;
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface Mahendragarh {
    delta: PurpleDelta;
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleTotal;
}

export interface Panchkula {
    delta: PurpleDelta;
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleDelta;
}

export interface Jh {
    delta:     PurpleTotal;
    districts: JHDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface JHDistricts {
    Bokaro:                Siwan;
    Chatra:                Panchkula;
    Deoghar:               UpperSiang;
    Dhanbad:               Cachar;
    Dumka:                 Arwal;
    "East Singhbhum":      Patna;
    Garhwa:                Patna;
    Giridih:               Siwan;
    Godda:                 Siwan;
    Gumla:                 Cachar;
    Hazaribagh:            KamrupMetropolitan;
    Jamtara:               LahaulAndSpiti;
    Khunti:                Baksa;
    Koderma:               Mahendragarh;
    Latehar:               NorthAndMiddleAndaman;
    Lohardaga:             Anantapur;
    Pakur:                 Siwan;
    Palamu:                Panchkula;
    Ramgarh:               Cachar;
    Ranchi:                Patna;
    Sahibganj:             Siwan;
    "Saraikela-Kharsawan": KamrupMetropolitan;
    Simdega:               Mahendragarh;
    "West Singhbhum":      Mahendragarh;
}

export interface Jk {
    delta:     PurpleTotal;
    districts: JKDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface JKDistricts {
    Anantnag:  Anantnag;
    Bandipora: Mahendragarh;
    Baramulla: Patna;
    Budgam:    Budgam;
    Doda:      Budgam;
    Ganderbal: Baksa;
    Jammu:     Patna;
    Kathua:    Mahendragarh;
    Kishtwar:  Panchkula;
    Kulgam:    Mahendragarh;
    Kupwara:   Budgam;
    Pulwama:   Anantapur;
    Punch:     Cachar;
    Rajouri:   Mahendragarh;
    Ramban:    Panchkula;
    Reasi:     Reasi;
    Samba:     Mahendragarh;
    Shopiyan:  Patna;
    Srinagar:  Patna;
    Udhampur:  Cachar;
}

export interface Anantnag {
    delta: HisarTotal;
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleTotal;
}

export interface Budgam {
    delta: ArariaDelta;
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleTotal;
}

export interface Reasi {
    delta: AirportQuarantineTotal;
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleDelta;
}

export interface Ka {
    delta:     PurpleTotal;
    districts: KADistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface KADistricts {
    Bagalkote:          Siwan;
    Ballari:            Anantapur;
    Belagavi:           BalodaBazar;
    "Bengaluru Rural":  Anantapur;
    "Bengaluru Urban":  Anantapur;
    Bidar:              Arwal;
    Chamarajanagara:    BalodaBazar;
    Chikkaballapura:    Anantapur;
    Chikkamagaluru:     Anantapur;
    Chitradurga:        Anantapur;
    "Dakshina Kannada": Anantapur;
    Davanagere:         Anantapur;
    Dharwad:            Anantapur;
    Gadag:              Anantapur;
    Hassan:             Anantapur;
    Haveri:             Anantapur;
    Kalaburagi:         Anantapur;
    Kodagu:             Anantapur;
    Kolar:              Anantapur;
    Koppal:             Anantapur;
    Mandya:             Arwal;
    Mysuru:             Anantapur;
    "Other State":      Charaideo;
    Raichur:            Anantapur;
    Ramanagara:         SPSNellore;
    Shivamogga:         BalodaBazar;
    Tumakuru:           Anantapur;
    Udupi:              Anantapur;
    "Uttara Kannada":   Anantapur;
    Vijayapura:         Arwal;
    Yadgir:             Siwan;
}

export interface Kl {
    delta:     PurpleTotal;
    districts: KLDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface KLDistricts {
    Alappuzha:          Patna;
    Ernakulam:          Mahendragarh;
    Idukki:             Mahendragarh;
    Kannur:             Mahendragarh;
    Kasaragod:          Patna;
    Kollam:             Mahendragarh;
    Kottayam:           Panchkula;
    Kozhikode:          Mahendragarh;
    Malappuram:         Mahendragarh;
    Palakkad:           Mahendragarh;
    Pathanamthitta:     Mahendragarh;
    Thiruvananthapuram: Patna;
    Thrissur:           Mahendragarh;
    Wayanad:            Mahendragarh;
}

export interface La {
    delta:     PurpleTotal;
    districts: LADistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface LADistricts {
    Kargil: Siwan;
    Leh:    Arwal;
}

export interface Ld {
    meta: TestedClass;
}

export interface Mh {
    delta:     PurpleTotal;
    districts: MHDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface MHDistricts {
    Ahmednagar:    Anantapur;
    Akola:         Mahendragarh;
    Amravati:      Mahendragarh;
    Aurangabad:    Anantapur;
    Beed:          Anantapur;
    Bhandara:      Arwal;
    Buldhana:      Arwal;
    Chandrapur:    Arwal;
    Dhule:         Anantapur;
    Gadchiroli:    Arwal;
    Gondia:        Siwan;
    Hingoli:       Anantapur;
    Jalgaon:       Anantapur;
    Jalna:         Anantapur;
    Kolhapur:      Patna;
    Latur:         Patna;
    Mumbai:        Anantapur;
    Nagpur:        Anantapur;
    Nanded:        Anantapur;
    Nandurbar:     Anantapur;
    Nashik:        Anantapur;
    Osmanabad:     Anantapur;
    "Other State": TentacledOtherState;
    Palghar:       Anantapur;
    Parbhani:      Anantapur;
    Pune:          Anantapur;
    Raigad:        Anantapur;
    Ratnagiri:     Patna;
    Sangli:        Mahendragarh;
    Satara:        Anantapur;
    Sindhudurg:    Mahendragarh;
    Solapur:       Anantapur;
    Thane:         Anantapur;
    Wardha:        Arwal;
    Washim:        Mahendragarh;
    Yavatmal:      Anantapur;
}

export interface TentacledOtherState {
    delta: KamrupMetropolitanDelta;
    total: KamrupMetropolitanDelta;
}

export interface Ml {
    delta:     PurpleTotal;
    districts: MLDistricts;
    meta:      KangraMeta;
    total:     PurpleTotal;
}

export interface MLDistricts {
    "East Garo Hills":       WestKarbiAnglong;
    "East Jaintia Hills":    Panchkula;
    "East Khasi Hills":      Patna;
    "North Garo Hills":      NorthAndMiddleAndaman;
    Ribhoi:                  Ribhoi;
    "South Garo Hills":      WestKarbiAnglong;
    "South West Garo Hills": NorthAndMiddleAndaman;
    Unknown:                 MahabubnagarClass;
    "West Garo Hills":       NorthAndMiddleAndaman;
    "West Jaintia Hills":    Reasi;
    "West Khasi Hills":      NorthAndMiddleAndaman;
}

export interface Ribhoi {
    delta: ArariaDelta;
    meta:  NorthAndMiddleAndamanMeta;
    total: PurpleDelta;
}

export interface MahabubnagarClass {
    delta: AirportQuarantineTotal;
    total: PurpleDelta;
}

export interface Mn {
    delta:     PurpleTotal;
    districts: MNDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface MNDistricts {
    Bishnupur:     NorthAndMiddleAndaman;
    Chandel:       NorthAndMiddleAndaman;
    Churachandpur: Reasi;
    "Imphal East": Reasi;
    "Imphal West": Reasi;
    Jiribam:       Reasi;
    Kakching:      NorthAndMiddleAndaman;
    Kamjong:       NorthAndMiddleAndaman;
    Kangpokpi:     ForeignEvacuees;
    Noney:         ForeignEvacuees;
    Pherzawl:      NorthAndMiddleAndaman;
    Senapati:      NorthAndMiddleAndaman;
    Tamenglong:    NorthAndMiddleAndaman;
    Tengnoupal:    ForeignEvacuees;
    Thoubal:       Reasi;
    Ukhrul:        Reasi;
    Unknown:       IndigoUnknown;
}

export interface IndigoUnknown {
    delta: ArariaDelta;
    total: ArariaDelta;
}

export interface Mp {
    delta:     PurpleTotal;
    districts: MPDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface MPDistricts {
    "Agar Malwa": AgarMalwaClass;
    Alirajpur:    Cachar;
    Anuppur:      UpperSiang;
    Ashoknagar:   Araria;
    Balaghat:     Arwal;
    Barwani:      Mahendragarh;
    Betul:        Arwal;
    Bhind:        Arwal;
    Bhopal:       Anantapur;
    Burhanpur:    Arwal;
    Chhatarpur:   Arwal;
    Chhindwara:   UpperSiang;
    Damoh:        Arwal;
    Datia:        Arwal;
    Dewas:        Arwal;
    Dhar:         Arwal;
    Dindori:      UpperSiang;
    Guna:         Araria;
    Gwalior:      Arwal;
    Harda:        Anantapur;
    Hoshangabad:  Siwan;
    Indore:       Anantapur;
    Jabalpur:     Anantapur;
    Jhabua:       Mahendragarh;
    Katni:        Arwal;
    Khandwa:      Arwal;
    Khargone:     Anantapur;
    Mandla:       Baksa;
    Mandsaur:     Arwal;
    Morena:       Anantapur;
    Narsinghpur:  Arwal;
    Neemuch:      Anantapur;
    Niwari:       LepaRada;
    Panna:        Reasi;
    Raisen:       Arwal;
    Rajgarh:      Arwal;
    Ratlam:       Araria;
    Rewa:         Mahendragarh;
    Sagar:        Anantapur;
    Satna:        Anantapur;
    Sehore:       Arwal;
    Seoni:        Arwal;
    Shahdol:      UpperSiang;
    Shajapur:     Araria;
    Sheopur:      Arwal;
    Shivpuri:     Araria;
    Sidhi:        Cachar;
    Singrauli:    Baksa;
    Tikamgarh:    Arwal;
    Ujjain:       Arwal;
    Umaria:       Araria;
    Vidisha:      Arwal;
}

export interface Mz {
    delta:     SPSNelloreDelta;
    districts: MZDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface MZDistricts {
    Aizawl:    NorthAndMiddleAndaman;
    Champhai:  NorthAndMiddleAndaman;
    Khawzawl:  ForeignEvacuees;
    Kolasib:   NorthAndMiddleAndaman;
    Lawngtlai: NorthAndMiddleAndaman;
    Lunglei:   Reasi;
    Mamit:     NorthAndMiddleAndaman;
    Saiha:     NorthAndMiddleAndaman;
    Saitual:   ForeignEvacuees;
    Serchhip:  NorthAndMiddleAndaman;
}

export interface Nl {
    delta:     PurpleTotal;
    districts: NLDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface NLDistricts {
    Dimapur:    Siwan;
    Kiphire:    UpperSiang;
    Kohima:     Arwal;
    Longleng:   NorthAndMiddleAndaman;
    Mokokchung: UpperSiang;
    Mon:        UpperSiang;
    Others:     ForeignEvacuees;
    Peren:      Siwan;
    Phek:       UpperSiang;
    Tuensang:   Siwan;
    Wokha:      UpperSiang;
    Zunheboto:  NorthAndMiddleAndaman;
}

export interface Or {
    delta:     PurpleTotal;
    districts: ORDistricts;
    meta:      KangraMeta;
    total:     PurpleTotal;
}

export interface ORDistricts {
    Angul:         Arwal;
    Balangir:      Siwan;
    Balasore:      Arwal;
    Bargarh:       Mahendragarh;
    Bhadrak:       Anantapur;
    Boudh:         Arwal;
    Cuttack:       Arwal;
    Deogarh:       UpperSiang;
    Dhenkanal:     Siwan;
    Gajapati:      Anantapur;
    Ganjam:        Anantapur;
    Jagatsinghpur: Arwal;
    Jajpur:        Arwal;
    Jharsuguda:    Arwal;
    Kalahandi:     Siwan;
    Kandhamal:     Siwan;
    Kendrapara:    Arwal;
    Kendujhar:     Mahendragarh;
    Khordha:       Patna;
    Koraput:       Arwal;
    Malkangiri:    Arwal;
    Mayurbhanj:    Siwan;
    Nabarangapur:  Mahendragarh;
    Nayagarh:      Anantapur;
    Nuapada:       Siwan;
    Puri:          Arwal;
    Rayagada:      Hisar;
    Sambalpur:     Arwal;
    Subarnapur:    Reasi;
    Sundargarh:    Mahendragarh;
}

export interface Pb {
    delta:     PurpleTotal;
    districts: PBDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface PBDistricts {
    Amritsar:                    Arwal;
    Barnala:                     Arwal;
    Bathinda:                    UpperSiang;
    Faridkot:                    Arwal;
    "Fatehgarh Sahib":           Arwal;
    Fazilka:                     Arwal;
    Ferozepur:                   Arwal;
    Gurdaspur:                   Arwal;
    Hoshiarpur:                  Anantapur;
    Jalandhar:                   Siwan;
    Kapurthala:                  Siwan;
    Ludhiana:                    Anantapur;
    Mansa:                       Arwal;
    Moga:                        Arwal;
    Pathankot:                   Pathankot;
    Patiala:                     BalodaBazar;
    Rupnagar:                    Siwan;
    "S.A.S. Nagar":              Arwal;
    Sangrur:                     Anantapur;
    "Shahid Bhagat Singh Nagar": Siwan;
    "Sri Muktsar Sahib":         Arwal;
    "Tarn Taran":                Arwal;
}

export interface Pathankot {
    delta: KarimganjDelta;
    meta:  AnantapurMeta;
    total: PurpleTotal;
}

export interface Py {
    delta:     PurpleTotal;
    districts: PYDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface PYDistricts {
    Karaikal:   Anantapur;
    Mahe:       SPSNellore;
    Puducherry: Tt;
    Yanam:      Yanam;
}

export interface Yanam {
    delta: CapitalComplexTotal;
    meta:  ANMeta;
    total: PurpleTotal;
}

export interface Rj {
    delta:     PurpleTotal;
    districts: RJDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface RJDistricts {
    Ajmer:            SPSNellore;
    Alwar:            Anantapur;
    "BSF Camp":       ForeignEvacuees;
    Banswara:         EastSiang;
    Baran:            SPSNellore;
    Barmer:           Anantapur;
    Bharatpur:        Anantapur;
    Bhilwara:         Anantapur;
    Bikaner:          Anantapur;
    Bundi:            Anantapur;
    Chittorgarh:      Anantapur;
    Churu:            SPSNellore;
    Dausa:            Anantapur;
    Dholpur:          Anantapur;
    Dungarpur:        SPSNellore;
    Evacuees:         ForeignEvacuees;
    Ganganagar:       Anantapur;
    Hanumangarh:      EastSiang;
    Italians:         ForeignEvacuees;
    Jaipur:           Anantapur;
    Jaisalmer:        EastSiang;
    Jalore:           Anantapur;
    Jhalawar:         Anantapur;
    Jhunjhunu:        Anantapur;
    Jodhpur:          Anantapur;
    Karauli:          Anantapur;
    Kota:             Anantapur;
    Nagaur:           Anantapur;
    "Other State":    Charaideo;
    Pali:             Anantapur;
    Pratapgarh:       SPSNellore;
    Rajsamand:        Anantapur;
    "Sawai Madhopur": SPSNellore;
    Sikar:            Anantapur;
    Sirohi:           Changlang;
    Tonk:             SPSNellore;
    Udaipur:          Anantapur;
}

export interface Sk {
    delta:     PurpleTotal;
    districts: SKDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface SKDistricts {
    "East Sikkim":  EastSikkim;
    "North Sikkim": NorthAndMiddleAndaman;
    "South Sikkim": Ribhoi;
    "West Sikkim":  Reasi;
}

export interface EastSikkim {
    delta: AirportQuarantineTotal;
    meta:  EastSikkimMeta;
    total: PurpleTotal;
}

export interface EastSikkimMeta {
    notes:      string;
    population: number;
}

export interface Tg {
    delta:     PurpleTotal;
    districts: TGDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface TGDistricts {
    Adilabad:                   Reasi;
    "Bhadradri Kothagudem":     Reasi;
    "Foreign Evacuees":         AirportQuarantine;
    Hyderabad:                  Cachar;
    Jagtial:                    Reasi;
    Jangaon:                    Reasi;
    "Jayashankar Bhupalapally": JayashankarBhupalapally;
    "Jogulamba Gadwal":         Cachar;
    Kamareddy:                  Reasi;
    Karimnagar:                 Reasi;
    Khammam:                    Reasi;
    "Komaram Bheem":            NorthAndMiddleAndaman;
    Mahabubabad:                Reasi;
    Mahabubnagar:               MahabubnagarClass;
    Mancherial:                 Mancherial;
    Medak:                      Reasi;
    "Medchal Malkajgiri":       Cachar;
    Mulugu:                     Reasi;
    Nagarkurnool:               Reasi;
    Nalgonda:                   Reasi;
    Narayanpet:                 NorthWestDelhi;
    Nirmal:                     Reasi;
    Nizamabad:                  Reasi;
    "Other State":              AirportQuarantine;
    Peddapalli:                 Reasi;
    "Rajanna Sircilla":         Reasi;
    "Ranga Reddy":              Cachar;
    Sangareddy:                 Reasi;
    Siddipet:                   Reasi;
    Suryapet:                   Reasi;
    Unknown:                    IndecentUnknown;
    Vikarabad:                  Cachar;
    Wanaparthy:                 JayashankarBhupalapally;
    "Warangal Rural":           JayashankarBhupalapally;
    "Warangal Urban":           Reasi;
    "Yadadri Bhuvanagiri":      JayashankarBhupalapally;
}

export interface JayashankarBhupalapally {
    delta: AirportQuarantineTotal;
    meta:  NorthAndMiddleAndamanMeta;
    total: AirportQuarantineTotal;
}

export interface Mancherial {
    delta: AirportQuarantineTotal;
    meta:  NorthAndMiddleAndamanMeta;
    total: KamrupMetropolitanDelta;
}

export interface IndecentUnknown {
    delta: HisarTotal;
    total: PurpleTotal;
}

export interface Tn {
    delta:     PurpleTotal;
    districts: TNDistricts;
    meta:      KangraMeta;
    total:     PurpleTotal;
}

export interface TNDistricts {
    "Airport Quarantine": AgarMalwaClass;
    Ariyalur:             Anantapur;
    Chengalpattu:         Anantapur;
    Chennai:              Tt;
    Coimbatore:           Anantapur;
    Cuddalore:            Arwal;
    Dharmapuri:           Arwal;
    Dindigul:             Anantapur;
    Erode:                Arwal;
    Kallakurichi:         Arwal;
    Kancheepuram:         Anantapur;
    Kanyakumari:          Anantapur;
    Karur:                Arwal;
    Krishnagiri:          Anantapur;
    Madurai:              Anantapur;
    Nagapattinam:         Anantapur;
    Namakkal:             Anantapur;
    Nilgiris:             Arwal;
    "Other State":        StickyOtherState;
    Perambalur:           Arwal;
    Pudukkottai:          Anantapur;
    "Railway Quarantine": ForeignEvacuees;
    Ramanathapuram:       Arwal;
    Ranipet:              BalodaBazar;
    Salem:                Anantapur;
    Sivaganga:            Anantapur;
    Tenkasi:              BalodaBazar;
    Thanjavur:            Arwal;
    Theni:                Anantapur;
    Thiruvallur:          Anantapur;
    Thiruvarur:           Arwal;
    Thoothukkudi:         Anantapur;
    Tiruchirappalli:      Anantapur;
    Tirunelveli:          Anantapur;
    Tirupathur:           Anantapur;
    Tiruppur:             Anantapur;
    Tiruvannamalai:       Anantapur;
    Vellore:              Anantapur;
    Viluppuram:           Arwal;
    Virudhunagar:         Anantapur;
}

export interface StickyOtherState {
    total: KarimganjDelta;
}

export interface Tr {
    delta:     PurpleTotal;
    districts: TRDistricts;
    meta:      KangraMeta;
    total:     PurpleTotal;
}

export interface TRDistricts {
    Dhalai:          Anantapur;
    Gomati:          Anantapur;
    Khowai:          Anantapur;
    "North Tripura": Anantapur;
    Sipahijala:      Anantapur;
    "South Tripura": Anantapur;
    Unokoti:         Anantapur;
    "West Tripura":  Anantapur;
}

export interface Un {
    meta: UNMeta;
}

export interface UNMeta {
    last_updated: Date;
    notes:        string;
}

export interface Up {
    delta:     PurpleTotal;
    districts: UPDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface UPDistricts {
    Agra:                  Anantapur;
    Aligarh:               Arwal;
    "Ambedkar Nagar":      Arwal;
    Amethi:                Arwal;
    Amroha:                Anantapur;
    Auraiya:               Arwal;
    Ayodhya:               Anantapur;
    Azamgarh:              Anantapur;
    Baghpat:               Arwal;
    Bahraich:              Anantapur;
    Ballia:                Arwal;
    Balrampur:             Siwan;
    Banda:                 Arwal;
    Barabanki:             Anantapur;
    Bareilly:              Anantapur;
    Basti:                 Arwal;
    Bhadohi:               Arwal;
    Bijnor:                Anantapur;
    Budaun:                Siwan;
    Bulandshahr:           Anantapur;
    Chandauli:             Anantapur;
    Chitrakoot:            Arwal;
    Deoria:                Arwal;
    Etah:                  Arwal;
    Etawah:                Arwal;
    Farrukhabad:           Arwal;
    Fatehpur:              Arwal;
    Firozabad:             Arwal;
    "Gautam Buddha Nagar": Arwal;
    Ghaziabad:             Arwal;
    Ghazipur:              Arwal;
    Gonda:                 Anantapur;
    Gorakhpur:             Anantapur;
    Hamirpur:              Arwal;
    Hapur:                 Arwal;
    Hardoi:                Arwal;
    Hathras:               Arwal;
    Jalaun:                Arwal;
    Jaunpur:               Anantapur;
    Jhansi:                Mahendragarh;
    Kannauj:               Arwal;
    "Kanpur Dehat":        Arwal;
    "Kanpur Nagar":        Anantapur;
    Kasganj:               Siwan;
    Kaushambi:             Arwal;
    Kushinagar:            Arwal;
    "Lakhimpur Kheri":     Anantapur;
    Lalitpur:              KamrupMetropolitan;
    Lucknow:               Anantapur;
    Maharajganj:           Arwal;
    Mahoba:                Arwal;
    Mainpuri:              Arwal;
    Mathura:               Anantapur;
    Mau:                   Arwal;
    Meerut:                Anantapur;
    Mirzapur:              Anantapur;
    Moradabad:             Anantapur;
    Muzaffarnagar:         Anantapur;
    Pilibhit:              Arwal;
    Pratapgarh:            Arwal;
    Prayagraj:             Anantapur;
    "Rae Bareli":          Siwan;
    Rampur:                Arwal;
    Saharanpur:            Anantapur;
    Sambhal:               Anantapur;
    "Sant Kabir Nagar":    Arwal;
    Shahjahanpur:          Arwal;
    Shamli:                Anantapur;
    Shrawasti:             Arwal;
    Siddharthnagar:        Arwal;
    Sitapur:               Arwal;
    Sonbhadra:             Arwal;
    Sultanpur:             Arwal;
    Unnao:                 Anantapur;
    Varanasi:              Anantapur;
}

export interface Ut {
    delta:     PurpleTotal;
    districts: UTDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface UTDistricts {
    Almora:              Anantapur;
    Bageshwar:           EastSiang;
    Chamoli:             EastSiang;
    Champawat:           SPSNellore;
    Dehradun:            Anantapur;
    Haridwar:            Anantapur;
    Nainital:            SPSNellore;
    "Pauri Garhwal":     EastSiang;
    Pithoragarh:         SPSNellore;
    Rudraprayag:         SPSNellore;
    "Tehri Garhwal":     Changlang;
    "Udham Singh Nagar": SPSNellore;
    Uttarkashi:          Anantapur;
}

export interface Wb {
    delta:     PurpleTotal;
    districts: WBDistricts;
    meta:      ANMeta;
    total:     PurpleTotal;
}

export interface WBDistricts {
    Alipurduar:          Mahendragarh;
    Bankura:             Panchkula;
    Birbhum:             Mahendragarh;
    "Cooch Behar":       Patna;
    "Dakshin Dinajpur":  Mahendragarh;
    Darjeeling:          Mahendragarh;
    Hooghly:             Patna;
    Howrah:              Patna;
    Jalpaiguri:          Patna;
    Jhargram:            NorthAndMiddleAndaman;
    Kalimpong:           Baksa;
    Kolkata:             Patna;
    Malda:               Mahendragarh;
    Murshidabad:         Patna;
    Nadia:               Mahendragarh;
    "North 24 Parganas": Patna;
    "Other State":       Charaideo;
    "Paschim Bardhaman": Mahendragarh;
    "Paschim Medinipur": Mahendragarh;
    "Purba Bardhaman":   Mahendragarh;
    "Purba Medinipur":   Mahendragarh;
    Purulia:             Reasi;
    "South 24 Parganas": Patna;
    "Uttar Dinajpur":    Patna;
}