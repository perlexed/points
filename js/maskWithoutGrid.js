
const inPoly = require('./inPoly');

/**
 * Построение маски - области, точки которой принадлежат заданному многоугольнику
 * Сетка строится автоматически, в зависимости от указанного количества столбцов (cols) и строк (rows)
 */

const xp = [90173559,90175733,90177925,90179315,90180266,90181674,90182155,90182927,90184026,90184354,90185607,90185934,90187033,90187361,90188145,90188472,90189096,90189423,90190201,90190528,90190837,90191800,90192109,90192757,90194017,90194344,90194653,90195931,90197338,90197666,90199691,90201265,90202037,90203556,90204636,90205241,90208014,90210668,90211150,90211613,90212872,90213039,90213662,90215261,90216680,90217168,90217477,90217489,90217798,90219563,90220822,90222747,90223531,90224179,90225438,90226246,90227190,90229757,90230380,90230553,90231188,90231201,90231676,90232015,90232656,90233119,90233458,90234575,90234587,90235389,90236012,90236494,90237159,90237474,90237819,90238461,90238639,90239441,90240064,90240872,90241181,90241822,90243069,90243698,90244025,90245432,90247997,90248306,90248965,90249274,90249452,90252344,90253009,90254286,90254618,90254927,90254939,90256542,90256554,90258145,90258977,90259772,90260123,90260746,90260758,90261713,90262058,90262366,90262699,90263174,90263186,90263969,90264147,90265097,90265109,90265590,90265898,90266409,90266717,90266890,90267198,90267703,90268005,90268017,90268979,90269121,90269750,90270255,90270279,90270735,90271056,90271388,90271418,90272534,90272564,90272878,90273383,90273691,90274018,90274214,90274510,90274855,90275163,90275039,90275341,90275525,90275377,90276178,90276730,90277211,90277277,90277917,90277461,90277473,90277935,90277639,90277680,90278001,90277882,90278203,90278215,90277764,90277782,90277948,90278256,90278132,90278619,90278488,90278666,90278204,90278055,90278222,90277925,90278702,90278572,90278750,90279212,90279385,90279248,90278934,90278910,90278293,90278471,90278341,90278655,90278940,90279142,90279610,90280109,90280121,90279806,90279818,90280287,90280263,90280577,90280607,90279830,90279065,90278757,90278614,90277683,90278182,90277559,90277571,90277114,90277096,90276165,90275993,90276444,90276414,90275952,90275727,90276195,90275881,90275869,90276486,90276676,90277132,90277150,90276688,90276700,90277008,90276860,90277026,90276723,90276551,90275947,90275638,90275472,90274707,90274541,90274565,90275028,90275039,90274731,90274417,90274227,90273764,90273936,90273492,90273516,90273860,90274002,90274310,90274346,90273890,90273908,90273445,90273125,90272935,90272626,90272040,90271933,90272242,90272260,90272722,90272846,90273309,90273007,90273036,90273677,90272758,90272592,90271981,90271050,90270748,90270760,90270137,90270345,90270037,90270049,90269420,90269384,90269242,90268934,90268946,90268637,90268774,90268311,90268643,90268501,90268193,90268229,90267606,90267464,90267636,90268247,90268271,90267328,90266569,90266741,90267049,90267061,90266753,90266783,90267091,90267263,90267886,90267121,90266475,90266172,90266006,90265698,90265722,90264797,90264631,90264507,90263730,90263410,90263428,90263742,90263143,90262977,90262669,90262699,90262397,90262877,90262747,90263209,90263043,90263506,90263381,90263838,90263708,90264668,90264052,90263607,90263293,90263145,90262510,90262480,90261704,90261740,90262350,90262362,90261598,90261283,90261265,90261568,90261235,90261111,90260495,90260483,90260174,90259818,90260280,90260423,90259936,90259628,90259296,90259153,90258845,90258975,90258513,90258851,90257938,90256675,90256213,90256195,90255886,90255904,90256687,90257019,90255330,90253112,90251724,90251552,90250313,90249370,90248889,90248877,90247786,90246771,90246302,90244700,90244392,90243745,90243116,90241420,90239806,90239498,90238697,90237279,90235411,90234332,90232920,90232267,90231484,90231317,90230701,90229271,90228334,90227674,90227051,90226885,90225942,90225171,90224696,90221607,90220349,90219738,90217247,90216328,90211844,90211394,90210777,90210481,90209556,90204992,90204375,90202408,90200256,90198535,90197573,90197561,90197099,90196137,90192862,90191326,90190235,90189637,90188095,90187953,90187787,90187478,90187497,90186880,90186701,90186553,90185930,90185949,90185320,90185184,90184567,90184086,90183155,90182514,90181114,90179356,90178573,90177925,90177617,90177604,90177296,90176488,90175544,90174736,90174859,90173613,90172793,90172589,90171602,90171201,90165746,
    90164580,90163938,90163919,90163599,90163740,90163432,90163259,90160538,90159698,90159229,90159217,90158908,90158742,90158118,90157322,90156860,90155582,90154965,90152929,90152602,90151972,90151799,90151176,90150836,90150194,90149515,90148546,90148533,90148058,90148045,90147570,90147558,90147082,90146736,90146686,90146365,90146340,90144833,90144776,90145091,90145035,90144424,90144355,90144657,90144459,90144507,90144815,90144784,90145234,90145222,90145531,90145209,90145332,90145789,90145906,90146652,90146596,90144392,90144058,90143829,90144093,90143426,90142957,90142469,90142271,90141956,90142091,90141707,90142010,90142183,90142639,90142410,90142700,90142662,90142958,90143075,90143525,90143488,90143938,90144480,90144782,90144893,90145202,90145183,90146207,90146818,90146947,90147713,90148157,90148144,90148601,90149193,90149181,90149490,90150076,90150687,90151279,90152939,90154316,90154458,90156477,90157434,90158212,90159237,90159224,90159675,90159662,90160261,90160249,90161878,90162934,90163372,90164897,90165928,90166391,90166378,90166835,90166977,90168051,90168644,90169255,90171867,90172954,90173559];
const yp = [54540363,54540234,54539835,54539868,54539530,54539294,54539035,54539053,54538809,54538547,54538306,54538044,54537800,54537538,54537376,54537114,54537039,54536777,54536705,54536443,54536450,54535933,54535940,54535506,54535175,54534913,54534920,54534321,54534084,54533821,54533599,54533186,54533203,54533598,54533623,54533817,54533971,54533583,54533324,54533335,54533004,54532828,54532753,54531980,54531564,54531215,54531222,54531043,54531050,54530102,54529771,54528736,54528574,54528140,54527809,54527288,54527040,54525661,54525585,54525319,54525064,54524884,54524716,54524274,54523929,54523939,54523498,54522984,54522804,54522373,54522297,54522039,54521335,54521252,54520720,54520375,54520020,54519589,54519513,54518992,54518999,54518654,54518503,54518337,54518075,54517837,54516457,54516464,54515850,54515857,54515502,54513859,54513155,54512555,54512203,54512210,54512030,54511167,54510988,54510305,54509425,54509083,54508462,54508386,54508206,54507778,54507247,54507254,54506902,54506733,54506553,54506391,54506035,54505697,54505518,54505259,54505266,54504558,54504565,54504299,54504306,54503688,54503785,54503606,54503088,54503271,54503105,54502487,54502128,54502229,54502056,54501704,54501255,54500741,54500292,54500209,54499591,54499598,54499336,54498711,54498897,54498366,54498373,54497920,54498017,54497572,54497479,54497047,54495711,54495452,54494465,54494119,54494019,54493840,54493850,54493664,54493035,54492863,54492321,54492148,54491968,54491778,54491509,54491333,54491340,54490888,54490539,54490176,54489821,54489810,54489717,54489541,54489355,54489282,54488920,54488564,54488574,54488309,54488036,54488119,54488478,54488464,54488108,54487746,54487663,54488029,54487314,54487235,54486707,54486527,54486610,54486430,54486351,54486710,54486627,54486178,54486251,54486144,54486137,54485954,54486023,54485495,54485570,54485391,54485291,54485560,54485629,54485895,54486085,54486534,54486523,54485259,54485180,54485263,54485442,54485456,54484921,54485021,54484752,54484742,54484562,54484569,54484476,54484300,54484203,54484469,54484275,54484268,54484444,54484337,54484513,54484154,54484165,54483985,54483978,54484061,54484596,54484586,54484320,54484040,54483681,54483149,54483332,54483339,54482801,54482701,54482431,54482421,54482593,54483129,54483122,54482659,54481937,54481944,54481675,54481685,54482138,54482148,54482051,54481602,54481257,54481147,54481323,54481219,54481288,54481191,54481012,54481087,54480283,54480276,54480096,54480262,54480801,54480618,54480611,54480431,54480424,54480697,54480687,54480334,54480151,54480144,54479606,54479682,54479499,54479233,54479337,54478977,54479226,54479029,54478763,54478770,54478590,54478583,54478135,54478142,54477876,54477800,54477693,54478128,54478031,54478207,54478200,54477841,54477820,54477996,54477544,54477616,54477789,54477519,54477436,54477153,54477329,54477322,54476873,54476777,54476518,54476155,54476166,54476342,54476352,54475900,54476000,54475638,54475120,54475106,54474826,54474909,54474816,54475071,54475520,54475592,54475054,54475157,54474978,54474871,54474953,54475223,54475319,54475671,54475219,54475205,54475385,54475378,54476089,54476099,54476282,54476631,54476624,54476976,54476793,54476786,54477149,54477138,54476696,54476496,54476917,54476906,54477175,54477168,54476899,54476737,54476385,54476257,54477105,54477074,54477340,54477401,54477649,54477908,54478088,54478243,54479568,54479647,54480510,54480503,54480938,54481103,54481064,54482106,54482099,54482531,54482948,54483175,54483150,54483477,54484002,54484164,54484340,54484325,54484922,54485080,54485695,54485770,54485946,54486194,54486177,54486345,54486364,54486695,54486591,54486893,54486782,54486859,54486668,54486654,54486468,54486446,54485442,54485427,54484842,54484703,54485022,54485539,54485719,54485708,54486225,54486689,54486563,54486718,54486434,54486398,54486215,54486391,54486384,54486114,54486100,54486456,54486362,54486438,54486168,54486333,54486061,54486046,54486305,54486373,54486718,54486865,54487723,54487884,54488319,54488312,54488491,54488484,54489004,54489252,54489773,54490225,54490376,54491076,54491790,54492666,54494005,54496934,
    54498166,54498510,54498780,54498952,54499135,54499128,54499393,54500768,54501737,54501816,54501996,54501988,54502164,54502240,54502581,54502570,54503169,54503154,54503556,54503818,54503983,54504249,54504324,54504765,54505110,54505993,54506599,54506779,54506947,54507127,54507296,54507475,54507644,54508175,54508893,54509065,54509424,54511097,54511905,54511822,54512630,54512526,54513513,54513610,54514235,54515765,54515772,54516221,54516411,54516591,54516598,54516770,54517223,54517323,54517865,54518243,54519051,54519628,54519980,54521053,54521689,54522392,54522471,54522819,54523444,54523526,54523799,54524869,54524966,54524700,54524801,54525875,54526151,54526690,54526876,54527419,54527609,54528148,54528338,54529430,54529527,54530159,54530166,54530435,54531269,54531373,54531736,54531844,54532124,54532304,54532404,54532778,54532957,54532965,54533428,54533532,54533906,54534484,54534697,54534880,54534748,54534320,54534249,54535082,54535262,54535452,54535632,54535915,54536095,54537122,54537507,54537876,54538182,54538925,54538936,54539116,54539216,54539400,54539515,54539888,54539992,54540233,54540169,54540363];

const cols = 2000;
const rows = 2000;

const xMin = Math.min(...xp) - 10;
const xMax = Math.max(...xp) + 10;
const yMin = Math.min(...yp) - 10;
const yMax = Math.max(...yp) + 10;

const xStep = parseInt((xMax - xMin) / cols);
const yStep = parseInt((yMax - yMin) / rows);


for (let j = yMax; j >= yMin; j -= yStep) {
    let resultString = '';

    for (let i = xMin; i <= xMax; i += xStep) {
        resultString += inPoly(xp, yp, i, j) ? ' ' : 'X';
    }

    console.log(resultString);
}
