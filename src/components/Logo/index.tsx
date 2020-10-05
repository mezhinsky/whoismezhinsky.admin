import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
  .box {
    border: 1px solid #1c90ff47;
    background-color: #40a9ff4f;
		box-shadow: rgba(0, 21, 41, 0.08) 0px 1px 4px;
    border-radius: 100px;
    height: 120px;
    width: 120px;
    overflow: hidden;
    display: flex;
    align-items: end;
    justify-content: center;
    
    svg {
      position: relative;
    }
  }

`;

const Avatar: React.FunctionComponent<any> = () => {


  return (
    <Wrapper>
      <div className="box">
        <svg width={'100%'} height={'100%'} viewBox="-5 -2 100 100"  preserveAspectRatio="none" x="0px" y="0px">
          <desc>ME</desc>
          <title>Me</title>

          <g
            id="Symbols"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="portrait" transform="translate(-19.000000, -6.000000)">
              <g id="me" transform="translate(15.000000, 0.000000)">
                <g id="body/Killer" transform="translate(0.000000, 50.000000)">
                  <path
                    d="M63.4442567,10.2750014 C60.7198313,7.76247749 61.5945257,5.33901228 60.6839633,2.2775116 C58.9236822,-1.51042838 55.2921051,-5.24106958 51.0870807,-6.04914598 C48.9873741,-7.26890041 46.2428142,-6.57749523 44.8082054,-4.66480764 C43.4607359,-4.31064666 43.416176,-2.46246112 42.9657359,-1.36909141 C42.1331809,0.778357435 41.4966895,2.96629741 40.9747335,5.19723874 C24.7553692,8.54676126 12.3150147,19.5014134 9.72140831,36.1164202 C9.27800978,38.5309359 8.91514914,40.9616044 8.5742934,43.3922729 C8.37459902,45.4862428 7.31726406,48.8091351 9.49079707,50.1641146 C9.55296088,51.6662156 9.73472127,53.1831596 10.3112494,54.5971842 C10.5326186,56.0061883 10.7115183,57.4244693 11.1793423,58.7827231 C12.2107115,61.1344829 12.3696968,63.7142374 13.5279242,66.0585757 C14.3372641,67.7880164 15.5254181,69.1763929 16.9947946,70.385779 C17.6155526,70.9253697 18.468132,71.5107995 18.598511,72.3551105 C18.5595623,73.6276889 19.5329487,75.4670341 21.0703203,74.8693806 C22.1614328,75.2763656 23.3331932,75.3822319 24.489,75.3739372 C44.0756626,74.5339918 63.7033643,74.4629413 83.290687,75.4020955 C83.9775697,75.4338554 84.6297946,74.780322 84.6011883,74.1019045 C84.2890489,66.7058881 83.5178875,59.3309359 82.3046479,52.0268158 C79.5976064,36.9017954 76.7057237,19.984251 63.4442567,10.2750014 L63.4442567,10.2750014 Z"
                    id="🎨-Background"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M42.4891748,2.76056732 L42.5624413,2.56024011 C43.0059499,1.34441473 43.5493606,1.2538281 43.2875024,2.4325457 L43.2478957,2.61012743 C43.0211146,3.6186286 42.7497946,4.6608131 42.1939694,5.54305048 C41.2356565,7.06457844 38.7247885,7.62872578 37.0503264,8.16995362 C37.0557176,8.20826194 37.0557176,8.24657026 37.0513166,8.28258663 C38.074544,8.43756617 39.1252775,8.92640655 39.982368,9.47440109 C40.7668423,9.97742974 41.4753998,10.5416862 42.0035171,11.2914816 L44.5870012,10.1782483 C45.4396907,9.81153615 46.2988716,9.37497408 47.2252775,9.22763438 C48.5312677,9.02026739 50.5447152,9.71440109 50.390791,11.3483438 C50.3708765,11.5686985 50.2311455,11.7324093 50.0596174,11.8131733 C50.1904364,11.8023683 50.3225758,11.7988759 50.4533949,11.8033506 C51.326989,11.8328186 52.5614633,12.6000764 52.1049719,13.611809 C51.9882359,13.8725457 51.6516711,13.7013042 51.6251553,13.4830232 C51.4524169,12.0479345 49.9571846,12.3851787 48.9197641,12.6197217 C47.9811455,12.8314543 47.0537494,13.0912087 46.1460477,13.4086985 C45.175522,13.7482347 44.2370134,14.1804311 43.371121,14.7359563 C42.4778325,15.3099263 41.6427469,16.006352 41.6977592,17.1523274 C41.6998496,17.1763383 41.6614511,17.1883438 41.6503386,17.1653151 C41.1893362,16.189708 42.0871357,15.160513 42.8167078,14.5984393 C43.8728325,13.7854516 45.1096174,13.2003492 46.3593851,12.7441419 C47.0020065,12.5100355 47.6645501,12.3258052 48.3294858,12.1626142 L48.482967,12.1253151 C48.8735538,12.0314543 49.2783337,11.9234052 49.6854242,11.8579209 C49.5350351,11.8213825 49.4036718,11.7130475 49.3452556,11.5172513 L49.3377469,11.4900082 C48.7502164,9.18179536 45.6013166,11.0383847 44.3262433,11.5959836 C43.4140306,11.9943465 42.4909254,12.3763383 41.588835,12.7987121 L41.4725898,12.8536679 C40.7731829,13.1865824 40.0442712,13.57994 39.5741773,14.2066248 C38.3683093,15.8109905 39.4509499,17.9774297 39.8316345,19.6712906 C39.9405587,20.1569659 40.0450819,20.6721091 40.0516834,21.1709905 C40.0569993,21.5793024 39.9307833,21.9643011 39.8286097,22.3571672 L39.7690306,22.5886166 L39.7690306,22.5886166 C39.8217323,22.5898172 39.8756443,22.6443874 39.8580403,22.69994 C39.4301553,24.0860246 38.7060844,25.4001855 38.0008276,26.6640327 C37.2812677,27.9539645 36.5408032,29.2375662 35.7464267,30.4827503 C32.9209988,34.9116726 29.68628,39.0928458 26.1379914,42.9749741 C24.4370134,44.8359291 22.5974046,46.5722456 20.9371357,48.47009 C20.1647641,49.353146 19.4420134,50.2786576 18.8389694,51.287116 C18.5132971,51.8317271 18.220632,52.397075 17.9741773,52.9831596 L17.925529,53.0991988 C17.7234906,53.5781282 17.5249108,54.0004301 17.1489939,54.3834325 C16.9620623,54.5744284 16.5878692,54.4936644 16.528456,54.2208131 C16.2522946,52.9373206 17.1678081,51.551236 17.8323557,50.503487 C18.5496051,49.3727913 19.3879914,48.3184939 20.2791895,47.3176753 C20.5311455,47.03391 20.7875024,46.7546194 21.0471601,46.4782756 C19.885412,46.7948922 18.6618301,46.8788213 17.477967,47.0862974 C16.2654976,47.29803 15.0607298,47.5501446 13.8857787,47.9168568 C12.8063289,48.2530095 11.7787005,48.6972115 10.7962922,49.2538281 C10.3252775,49.5212224 9.86438509,49.8148104 9.43308924,50.1433233 C9.39227017,50.1738827 9.35266137,50.2066248 9.31305257,50.2383847 C10.017209,51.9933643 10.5585293,53.813719 11.124055,55.6135553 C11.5101465,56.8439743 11.8875439,58.0776007 12.2624674,59.3120519 L13.1044951,62.0899536 C13.7119401,64.092573 14.2179425,66.2710177 15.2885905,68.0926821 C15.7506932,68.8783847 16.375522,69.5887804 17.0906809,70.158603 C17.437368,70.4358199 17.8147518,70.6464611 18.2063289,70.8505539 C18.4527836,70.9793397 18.670632,71.1463247 18.8994829,71.2990123 C19.0501378,71.1286244 19.2786475,71.0230849 19.5590665,71.0676292 L19.5904364,71.0732005 C20.4761333,71.2456426 21.3894462,70.9345921 22.1771112,70.5504175 C22.9978936,70.1487804 23.8154853,69.6772933 24.5096296,69.083678 C25.875033,67.9146739 27.0071846,66.457648 28.1108399,65.0519181 C32.0452042,60.0358199 35.3955587,54.5416862 38.1262555,48.7943465 C39.5136638,45.8715634 40.8087616,42.8996671 42.025522,39.9025593 C42.6340672,38.4053697 43.2335905,36.9046876 43.8178203,35.3973479 L43.8949335,35.195845 C44.4183396,33.8128159 44.8765881,32.311387 45.7179425,31.0917544 C45.724544,31.0807312 45.733456,31.0721091 45.7432482,31.0656698 C45.7454487,31.0306357 45.7565611,30.9978936 45.774165,30.9695171 C46.034923,30.5558745 46.534324,30.4346194 46.9668301,30.2426412 C47.4541284,30.0253424 47.9404364,29.8093533 48.4267445,29.5933643 C48.8097396,29.4229959 49.3707543,29.2789304 49.6579181,28.9559836 C49.9835905,28.5925457 50.0926247,27.9452333 50.2509499,27.4955744 C50.6097396,26.4794761 50.9980159,25.4753834 51.3864022,24.4701992 C51.727478,23.5872524 52.0224535,22.6399127 52.5009499,21.8171023 C52.9095017,21.1151385 53.4933282,20.7449509 54.1682604,20.340666 L54.314759,20.2529637 C54.5967836,20.0824229 54.8976125,19.8781119 55.0095073,19.5588759 C55.1921479,19.0371842 54.7861577,18.5383029 54.3548619,18.2895716 C53.3965489,17.7383029 52.2489939,18.3745921 51.4085171,18.8604857 C50.5634193,19.3493261 49.7394462,19.936502 48.8360355,20.3153288 C48.8162311,20.3228595 48.8019279,20.2933915 48.8162311,20.2802947 C49.5423924,19.6204143 50.4298952,19.0767783 51.2638675,18.5403673 L51.471121,18.406352 C52.024544,18.0471705 52.6550941,17.6969386 53.3217323,17.5998035 C53.1832115,17.5539645 53.226011,17.3760655 53.3580403,17.3598035 C54.6695318,17.2013315 56.0009377,17.404442 57.2992262,17.1010314 C58.4576736,16.8303629 59.4687983,16.1809768 60.2785782,15.3264065 C61.0421479,14.5209495 61.6472824,13.5888895 62.2117078,12.6394761 C62.5396907,12.087116 62.8598619,11.5304993 63.1920257,10.980322 C63.2415367,10.8974843 63.2911577,10.8058063 63.3417689,10.7074707 C62.7475269,10.571045 62.1423924,10.1324093 61.7386027,9.79189086 C61.1114633,9.26365075 60.6537616,8.54987176 60.3348007,7.80553342 C59.5866345,6.05819372 59.6459377,4.05983083 60.2060721,2.27210914 C60.2400697,2.16296862 60.4030159,2.1575116 60.434923,2.27210914 C60.8650086,3.80335061 60.9035171,5.46348704 61.5790672,6.92367804 C61.8497274,7.50867121 62.2272213,8.03472851 62.6914144,8.48220464 C62.9268667,8.70812551 63.1645196,8.89792087 63.4527836,9.05519236 C63.7619523,9.22436016 64.0920257,9.27991269 64.3373802,9.5485075 C64.3516834,9.56378718 64.3648863,9.57906685 64.376989,9.59543793 C64.5207543,9.57618554 64.6444883,9.59667388 64.7434499,9.65805651 L64.7642751,9.67183629 L64.768676,9.665397 C64.3252775,9.36526057 63.8796785,9.06828922 63.4076736,8.80635198 C63.2823557,8.73650205 63.373676,8.56951705 63.4989939,8.59134516 L63.8095398,8.64582604 C64.8470844,8.82919933 65.9042284,9.03772988 66.8514389,9.49502865 C67.9022824,10.0036235 68.9055954,10.5907995 69.8628081,11.2554652 C71.7486271,12.5628595 73.4650086,14.107307 74.9668423,15.8350014 C77.7372579,19.0229959 79.6956932,22.8560109 80.9070623,26.8745648 C82.4209988,31.8961201 83.0063289,37.1708813 83.6456809,42.358221 C83.951173,44.8414497 84.2253241,47.3291722 84.4689818,49.8197911 L84.5346785,50.4991214 C84.6566956,51.7804311 84.7887249,53.059558 84.9130526,54.3375935 C85.1331015,54.6802947 85.1486149,55.0873888 85.018676,55.4411132 C85.1143973,56.4767476 85.2003264,57.5135825 85.2685416,58.5536917 C85.4423802,61.237457 85.5544951,63.9299536 85.6030159,66.6202674 C85.6513166,69.3487804 85.5511944,72.0729277 85.5192873,74.8014407 C85.5061944,75.949708 83.7522946,75.9452333 83.7247885,74.8014407 C83.6544829,71.7869795 83.4365244,68.771427 83.28139,65.7591487 C83.1295562,62.8189031 82.9887249,59.8798581 82.8072946,56.9417954 C82.7895807,56.6622865 82.773077,56.3817954 82.7576736,56.1023956 C82.5018414,56.1991109 82.1849788,56.239099 81.9161227,56.2919776 L81.8499719,56.3055061 C81.3093851,56.4194579 80.7678738,56.5014035 80.218743,56.5512588 L80.0408815,56.5661213 C79.5427275,56.6002501 76.9890917,56.6546445 75.4795562,56.3817954 C75.5994829,58.3037599 75.7205098,60.2257244 75.8536394,62.1465975 C76.0054731,64.3370477 76.0340795,66.5307722 76.1453142,68.7234052 C76.2013166,69.819176 76.2684315,70.907307 76.4092628,71.9965293 C76.4734857,72.4923391 76.5391635,72.9888706 76.6176594,73.4828934 L76.6580281,73.7296808 C76.7284438,74.1542374 76.8163533,74.5176753 76.634813,74.8963929 C76.7932482,75.3820682 76.5467934,75.9943465 75.8977592,75.9452333 C71.7365244,75.6363656 67.5654976,75.505397 63.3933704,75.4869523 C56.1903181,75.4530483 48.9914905,75.7392747 41.7916025,75.9357253 L39.8457976,75.9879827 C33.1016917,76.1709929 26.3242943,76.3664221 19.6114511,75.626543 C19.5970379,76.4789304 17.9906809,76.4692169 18.0765,75.5184939 L18.097572,75.2892745 C18.1942101,74.2548361 18.3195288,73.1833384 18.6431259,72.1875252 C18.3746663,72.1951651 18.1051064,72.1843602 17.8520501,72.1013042 C17.4923802,71.984633 17.1467934,71.7727913 16.834324,71.5632415 C16.1389694,71.0983029 15.5514389,70.5253151 15.0443362,69.8639236 C14.0485049,68.5662428 13.3872579,67.0285621 12.8646418,65.4928458 C12.3089633,63.8561279 11.8005291,62.2005887 11.3255088,60.539336 L10.8142679,58.7401487 C10.1652856,56.4519268 9.5280372,54.1289168 9.14141443,51.7804311 C9.09971516,51.8350014 9.04239242,51.8819318 8.96658557,51.9157653 C6.89801589,52.8325457 5.12882274,50.9520546 4.77894499,49.0508267 C4.57296404,47.9296149 4.62106419,46.7820515 4.63858771,45.6471359 L4.64031418,45.525588 C4.65791809,44.2181937 4.66341932,42.9105812 4.73064425,41.6041692 C4.95278362,37.2363656 5.97931174,33.0040055 7.5757665,28.9351378 C9.07980073,25.1052879 10.8974046,21.2450969 13.238835,17.8431869 C14.3510721,16.2279072 15.6339572,14.6759291 17.1798007,13.4480982 C18.8103631,12.1547831 20.6434804,11.1713179 22.5634071,10.3703356 C24.525143,9.55178172 26.5593851,8.90457844 28.5960477,8.29339154 C30.8427469,7.61901228 33.1158521,7.03936698 35.4274658,6.63227285 C35.5956932,6.60280491 35.7607298,6.65191814 35.8543606,6.80471487 C35.9356687,6.93895771 36.0115856,7.07647476 36.085302,7.21617462 C36.4010721,7.01972169 36.88628,6.97169986 37.2021601,6.87565621 C38.1933704,6.57115416 39.9768667,6.3888895 40.7625513,5.6947558 C41.6583196,4.90388582 42.0889595,3.84941889 42.4891748,2.76056732 Z M8.96427506,50.5427776 C8.82465403,50.6693806 8.68481296,50.7959836 8.54079095,50.9149468 C8.72882274,50.8363656 8.89936064,50.8887531 9.02478851,51.004442 C9.00289364,50.8505539 8.98297922,50.6966658 8.96427506,50.5427776 Z M54.4395807,21.0258336 C54.2261333,21.156693 54.0148863,21.2876617 53.8223435,21.444824 C53.1307023,22.0122865 52.8968784,22.9386654 52.6086557,23.7464956 L52.5901797,23.7978936 C52.235791,24.7757926 51.8782115,25.7558745 51.5030281,26.7261337 C51.385412,27.0306357 51.2753875,27.3569659 51.1575513,27.6854789 C52.7441039,29.1980573 54.3659743,30.6944829 56.0635416,32.0838417 C59.170632,34.6257244 62.5560844,36.8336371 66.1538839,38.6322729 C68.0035049,39.5577844 69.9134193,40.4003492 71.878456,41.054101 C72.5882237,41.2898445 73.3109743,41.4972115 74.0449474,41.6510996 L74.0460477,41.6400764 L74.0460477,41.6400764 C74.0492384,41.6139918 74.0922579,41.6019864 74.0966589,41.6336371 L74.1010599,41.663105 L74.1010599,41.663105 C74.4156198,41.727498 74.7326002,41.7820682 75.0505709,41.824633 C75.6533949,41.9043056 76.2629303,41.9402128 76.8713655,41.9349741 C77.2487494,41.9315907 77.6228325,41.8856426 77.9947152,41.9043056 C76.3477592,40.432 74.6917812,38.9706085 73.0315122,37.5157653 C69.884813,34.756693 66.7206198,32.0194488 63.5507054,29.2865703 C62.1433704,28.0729277 60.7203875,26.873945 59.3189254,25.6520622 L57.9693075,24.4695996 C56.7765707,23.4233234 55.5912722,22.3603686 54.5581085,21.164424 L54.4395807,21.0258336 Z M40.3751443,29.1370805 C40.279423,29.0203001 40.4247653,28.871869 40.5424914,28.9711869 C41.2455477,29.561528 42.0398142,29.8203001 42.8837017,30.137899 C43.0806455,30.2121146 43.0653521,30.5231651 42.8321002,30.5198909 C41.8516724,30.5024284 40.968176,29.873779 40.3751443,29.1370805 Z M50.22461,14.5994652 L50.2949089,14.571605 C51.2862638,14.1860095 52.5724038,13.9942963 53.3526051,14.8887967 C53.9181308,15.5381828 54.0621528,16.767105 53.325099,17.3335443 C53.1479597,17.46997 52.7726663,17.3531896 52.8850012,17.0792469 C53.2083631,16.2967094 53.2766883,15.2717708 52.2589621,14.9706521 C51.3761866,14.7092116 50.3435602,15.2191893 49.5396767,15.5739347 L49.3096957,15.6746375 C47.7417915,16.3650664 46.18466,17.2017254 45.2239988,18.6638581 C45.1986932,18.7009659 45.1314682,18.6770641 45.1480819,18.6322074 C45.9148423,16.5259045 48.2628741,15.3918254 50.22461,14.5994652 Z M38.6093729,10.0887531 L38.2282253,9.94577368 C37.258887,9.58681321 36.0518325,9.22230832 35.4505709,10.2557381 C35.2252504,10.6420006 35.0313374,11.120131 34.9474995,11.5650048 L34.9367567,11.6254516 C34.9136516,11.7628595 34.883835,11.9103083 34.982967,12.0161746 C35.135791,12.1820682 35.6331015,12.2627231 35.833346,12.3348649 L37.0925391,12.7884044 L37.0925391,12.7884044 L37.7213655,13.0159018 C38.0074291,13.1195853 38.3771112,13.2232688 38.5883582,13.4513724 C39.3277225,12.4887531 40.5038839,11.9408677 41.6140306,11.459558 C40.6139083,10.9978936 39.6447029,10.4752196 38.6093729,10.0887531 Z"
                    id="🖍-Ink"
                    fill="#000000"
                  ></path>
                </g>
                <g
                  id="head/Medium-3"
                  transform="translate(24.000000, 0.000000)"
                >
                  <path
                    d="M43.3305886,22.8686727 C43.4504195,21.7615298 42.1474182,18.8079023 42.17886,19.4070169 C40.0898452,16.2032462 36.0130672,14.943345 32.4956465,13.8857365 C25.0286444,11.4339481 19.1978283,14.3949675 13.9514351,19.6428794 C10.854082,22.520576 7.90690233,25.7350628 6.35206934,29.7186995 C3.29330402,37.318128 7.87820888,45.9834755 14.8507163,49.6138106 C15.4133717,49.916703 16.0264879,50.2042868 16.5623188,50.5701633 C19.4446359,52.226449 22.8292533,52.7994296 26.0410503,53.5203573 C32.0497438,54.8864349 39.5961201,54.2353802 43.1371772,48.5453767 C45.5389615,44.5071757 44.9008896,39.6118 44.7128981,35.1303044 C44.430471,31.2037471 43.9346901,26.7664716 43.3305886,22.8686727 Z"
                    id="🎨-Background"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M11.212948,11.6623093 C15.1058021,8.0426903 20.8595526,6.28831993 26.1202376,6.59514885 C28.9694638,6.76135697 31.7154596,7.47145926 34.2903941,8.69144868 C35.0956795,9.0729619 35.8804068,9.51953686 36.6040093,10.0453887 C37.0921277,10.2719566 37.5693624,10.5171136 38.0316457,10.7837026 C40.3469099,12.1177414 42.1366774,14.1383728 43.2822165,16.5352688 C43.8290623,17.6792899 44.2605948,18.8856767 44.5049757,20.1286622 L44.5443075,20.3332802 C44.6690187,20.9570206 44.9155075,21.7788158 44.6036541,22.3625034 C44.3969734,22.749484 43.9638233,22.9934381 43.5537598,22.9606339 C43.6428085,23.3192935 43.7494469,23.6778437 43.8176076,24.0387996 L44.0032783,25.0229266 C44.0340605,25.1869478 44.0645984,25.350969 44.0946478,25.5149901 C44.2738444,26.4925563 44.4387493,27.4689196 44.5706732,28.45414 C44.846614,30.5056074 45.09617,32.5613393 45.3160431,34.6203517 C45.4736189,36.0928972 45.6212698,37.5669615 45.7647218,39.0406461 L45.8503349,39.9247961 C45.9976499,41.4468032 46.1130833,42.9821506 46.0129311,44.5108279 C45.862208,46.8039531 45.1531171,48.8960977 43.7768211,50.5980907 C43.9079755,50.9118085 43.95217,51.2650007 44.050893,51.655043 C44.1875442,52.194782 44.3655315,52.7232582 44.5549522,53.2471418 C44.6435611,53.453043 44.7323899,53.6590536 44.8202292,53.8655016 L45.0512059,54.4123481 L45.0512059,54.4123481 L45.2314438,54.7708794 C45.4267108,55.1609513 45.6155944,55.5566691 45.7355611,55.9603799 C46.5132524,56.3733852 47.148356,57.0471841 47.1794681,57.9704046 C47.2069522,58.8047256 46.7716034,59.6882529 46.0361277,60.1135051 C45.3104364,60.5337273 44.5633074,60.3682847 43.8683983,60.0474593 C43.2625378,60.2228526 42.614022,60.2450501 42.0138782,60.0577379 C41.5518148,60.4736956 40.9558486,60.7609513 40.2952397,60.8384787 C39.2992893,60.956134 38.3537371,60.6788216 37.4401133,60.3141504 L37.3764237,60.2885704 C37.3478402,60.2775263 37.3192567,60.2654981 37.2917725,60.2535792 C36.2407789,60.2032794 35.1941827,59.7898367 34.4487027,59.0573182 C34.2058529,58.8200342 33.995874,58.5488526 33.8265717,58.2448667 C33.2119163,57.1392547 33.1163814,55.7822529 33.7210326,54.6856074 C33.5913074,54.6910748 33.4604829,54.6964328 33.3307577,54.6998226 C31.6009296,54.7488768 29.868084,54.6610685 28.1427078,54.5479791 L27.7359082,54.5205259 C26.6194266,54.4405489 24.9728296,54.2523182 24.9414977,52.8759072 C24.9369903,52.6998578 25.1195949,52.5675474 25.2866985,52.6145668 C25.9210326,52.7926938 26.5443729,53.0727326 27.2017937,53.1733323 C28.0614977,53.3056427 28.951874,53.3198578 29.8204829,53.3679707 L30.0702494,53.3817984 C31.8217215,53.4770988 33.6359816,53.5352226 35.3590875,53.1897344 C36.6452355,52.9327679 37.9854723,52.4646515 39.1639924,51.8851101 C40.2952397,51.3275474 41.3231467,50.5982 42.1520685,49.6457838 C43.978115,47.5506868 44.2199755,44.5950254 44.1309268,41.9444434 C44.023189,38.7787256 43.6492947,35.6176004 43.4383264,32.4563658 L43.3428515,31.036188 C43.264133,29.8518882 43.1922256,28.6659148 43.1623856,27.4810571 C43.1403983,26.6161189 43.1545801,25.7489937 43.1589776,24.8840554 C43.1611763,24.452133 43.1557894,24.0180236 43.1656837,23.5861012 C43.1711805,23.3433499 43.1997641,23.106066 43.220652,22.8686727 C43.1239078,22.8184822 43.0337598,22.7483905 42.9524068,22.6555545 C42.8886436,22.5822917 42.8391721,22.504655 42.8050918,22.4259249 C42.3950283,22.3066268 42.2048381,22.148073 41.9387915,21.7884293 C41.7145209,21.4855369 41.4605674,21.2056074 41.1890241,20.9431735 C40.6107577,20.3855016 39.9500389,19.9295228 39.2518317,19.5324822 C37.8084744,18.7113922 36.2275865,18.1624681 34.6335061,17.7119566 C32.1928042,17.0230677 29.6577767,16.668782 27.1809057,16.1153746 C26.4981996,17.0623235 25.7748169,17.9809513 25.0184533,18.869946 C22.6580051,21.6429972 19.9514765,24.1152335 17.0512397,26.3197873 C16.4609903,26.7692053 15.8628254,27.2120624 15.2560854,27.6416885 C14.4567091,28.8539416 13.6489158,30.0604181 12.8290229,31.2587738 L12.4768888,31.7718508 L12.471392,31.7816921 C12.4230199,31.8549549 12.3767366,31.9282176 12.3306732,32.0014804 C12.2328296,32.1567538 12.122893,32.3065598 12.0063603,32.4519919 C11.930504,32.5623235 11.8535484,32.6727644 11.7754934,32.7833146 C11.9250072,32.8630289 12.0613285,32.9528032 12.167967,33.0523093 C12.3856414,33.2566797 12.3492524,33.581551 12.167967,33.7893111 C11.5831044,34.4607044 10.6574385,33.5859249 9.98462664,33.3530148 C9.25574715,33.5737873 8.64779789,34.436648 8.3454723,35.0959037 C7.91012347,36.0462423 7.73532431,37.1920942 7.93211078,38.2210536 C8.11229683,39.1614416 8.59832643,39.9740025 9.40636025,40.4835616 C9.43494376,40.5009478 9.46561607,40.5196462 9.49540888,40.535939 C9.49650825,40.5382353 9.49650825,40.5382353 9.49760761,40.5370325 C9.52509175,40.554528 9.55367526,40.5710395 9.58225877,40.5863481 C9.96153996,40.7941083 10.3781996,40.9165774 10.8101404,40.9459919 C11.0574977,40.9635968 11.3159586,40.9503658 11.5633159,40.9799989 C11.8172693,41.0094134 12.0261488,41.125431 12.270208,41.1866656 C12.5395526,41.2554451 12.7132524,41.6153076 12.5438402,41.8568561 C12.4603983,41.9760448 12.381244,42.0898755 12.2964829,42.1915686 C12.5747323,42.517424 12.8164829,42.8771771 13.0353666,43.2193252 C13.3342841,43.6884257 13.5993412,44.186066 13.8412017,44.6934381 C14.0643729,44.9853958 14.2776499,45.2828208 14.4843307,45.5868067 C15.6551552,47.3123093 16.5511383,49.2346374 17.1019205,51.2432406 C17.6472059,53.2300836 17.9880093,55.4618649 17.4834004,57.4903693 C17.0183687,59.3558367 15.660652,60.900916 13.6510114,61.0004222 C13.2316034,61.0209795 12.8191214,60.9743975 12.4312651,60.8684399 C11.5792567,61.3918861 10.5234258,61.6551947 9.57852093,61.6859213 C8.81402199,61.7108526 7.97718478,61.5507679 7.35285497,61.0909619 C6.61221226,61.4115686 5.80879577,61.5935228 5.11014884,61.6349654 C4.32838985,61.6813287 3.51024186,61.4694134 2.87293953,61.0497379 C2.26652939,61.5664046 1.61218689,62.0024822 0.868685835,62.3016568 C-0.409876533,62.8154804 -1.93139873,62.7520589 -3.10222326,61.9834557 C-4.27524651,61.2136497 -4.87220211,59.8314981 -4.51380888,58.4601718 C-4.18399915,57.1962247 -3.14729725,56.2689584 -2.1732592,55.4706127 L-1.98080202,55.3137282 C-1.01734053,54.5315343 -0.0443374207,53.7745382 0.574055814,52.672521 C1.23037717,51.5035968 1.4700389,50.1455016 1.53490148,48.8223975 C1.6756203,45.9093817 1.07976406,43.0226092 0.89836871,40.1249019 C0.711476533,37.1320624 0.815916279,34.1303658 1.2259797,31.1593958 C2.02301987,25.3881471 4.12060973,19.7305104 7.9156203,15.2318473 C8.46464355,14.5809019 9.05236448,13.9604646 9.67174715,13.372394 C10.145134,12.7565492 10.6567789,12.1793041 11.212948,11.6623093 Z M61.6932288,44.6146861 C61.7141167,44.6157795 61.7339053,44.616873 61.7525945,44.6245273 C61.7651273,44.629776 61.7756812,44.6381739 61.7854436,44.6473591 L61.8779222,44.7393422 C61.9109032,44.7721464 61.9087044,44.8224462 61.8779222,44.8552504 C61.8509378,44.8850725 61.8021477,44.8859762 61.7703727,44.8628908 L61.7613894,44.8552504 L61.6656215,44.7599292 C61.6551467,44.7486498 61.6461759,44.7364335 61.6415586,44.7207531 C61.6371611,44.7054444 61.6371611,44.6879489 61.6360617,44.6715467 C61.6349624,44.6420229 61.6635459,44.6146861 61.6932288,44.6146861 Z M10.1132085,35.6810219 C10.9948998,35.4151982 12.0524896,36.0473358 12.5779865,36.7143552 C12.8418342,37.0489584 12.9165911,37.5071242 12.5779865,37.83626 C12.2899526,38.1161894 11.7270774,38.1674734 11.4489378,37.83626 C11.1334199,37.4590113 10.8761683,36.9362212 10.4254283,36.6946727 C9.93621057,36.4322388 9.28098858,36.4978473 9.16555518,37.1374205 C9.1457666,37.2457838 8.98965666,37.2095898 8.98306047,37.1123799 C8.9401852,36.465043 9.51075603,35.8613358 10.1132085,35.6810219 Z"
                    id="🖍-Ink"
                    fill="#000000"
                  ></path>
                </g>
                <g
                  id="accessories/Glasses-5"
                  transform="translate(28.000000, 26.000000)"
                  fill="#000000"
                >
                  <path
                    d="M38.7203372,11.5647174 C37.0740515,12.3503696 34.7772811,11.1915652 33.6703602,9.97776087 C33.2674546,9.53580435 32.9565821,8.27134783 33.1115796,7.4693913 C33.5313781,5.29754348 35.108776,3.99406522 36.7740388,3.54895652 C39.0824367,2.93178261 41.4055337,4.49526087 41.1346995,6.34026087 C40.8779061,8.08884783 40.4888219,10.6252609 38.7203372,11.5647174 M27.514998,7.39276087 C27.3830362,9.7596087 25.4648194,11.8312391 23.1722173,12.4450435 C19.4783857,13.4663478 17.6528602,10.893413 16.8259878,8.12156522 C16.743827,7.84613043 16.5506561,7.00547826 17.0689597,6.2843913 C19.107401,3.44797826 24.0669903,3.93145652 26.5440974,4.71015217 C27.269174,5.39721739 27.5655668,6.38884783 27.514998,7.39276087 M40.5090056,3.31047826 C40.5079087,3.3118913 40.5065923,3.31308696 40.5054954,3.3145 C40.497049,3.3093913 40.4887122,3.30417391 40.4800464,3.29917391 C40.4895898,3.30308696 40.4996816,3.30645652 40.5090056,3.31047826 M43.5995209,3.58406522 C43.3849597,1.17428261 35.7543245,2.097 34.8621842,2.2945 C32.4274189,3.00406522 30.3244776,4.9345 27.6023143,4.08591304 C24.7817556,0.970369565 15.2834724,1.86384783 13.2923092,3.45091304 C12.915401,3.3043913 12.4571,3.38297826 11.9714852,3.52123913 C9.47770459,3.432 -1.9067648,4.28384783 0.421816837,7.43765217 C0.77525051,7.68058696 1.1283551,7.43341304 1.13811786,6.93297826 C13.2771714,2.59091304 12.1004852,6.65797826 13.5401077,6.18297826 C13.7599342,6.24569565 13.9893041,6.28536957 14.1899342,6.3271087 C15.3042046,6.68232609 15.6825388,6.57254348 15.8293092,7.812 C16.837725,17.3827609 29.6998806,14.0795 28.6449546,6.22906522 C29.6894597,6.1721087 30.6031,5.7246087 31.7076077,6.16156522 C32.4744776,13.5568913 38.480327,13.8553696 40.2877531,11.2917826 C41.6506995,9.51243478 41.1102378,6.82721739 42.9836995,5.42743478 C43.7232556,6.04069565 43.7708628,3.97091304 43.5995209,3.58406522"
                    id="🖍-Ink"
                  ></path>
                </g>
                <g
                  id="facial-hair/Moustache-6"
                  transform="translate(34.000000, 37.000000)"
                  fill="#000000"
                >
                  <path
                    d="M28.6229421,4.0478913 C27.6208671,3.5878913 26.5438386,3.31408696 25.43736,3.21702174 C24.9588529,3.17495652 24.0188886,3.04223913 23.509935,3.34865217 C23.2718993,3.49213043 23.0707314,3.69256522 22.9111921,3.93734783 C22.8489707,3.8528913 22.7670421,3.78093478 22.7152279,3.68963043 C22.43656,3.1981087 20.7262457,3.1878913 20.2098743,3.22963043 C18.9853743,3.32854348 17.793535,3.61082609 16.6711136,4.0853913 C14.6560029,4.93756522 12.9631814,6.7081087 13.4954957,8.95593478 C13.5707814,9.27430435 13.934035,9.3981087 14.2332957,9.3431087 C16.2503993,8.97191304 18.2675029,8.6006087 20.2847171,8.22941304 C20.7529279,8.14332609 21.2212493,8.05713043 21.68946,7.97093478 C22.1129421,7.893 22.6319707,7.86832609 23.0338636,7.68897826 C23.1955064,7.75680435 23.3755279,7.79984783 23.5677279,7.83723913 C25.9946957,8.3105 28.4247636,8.76963043 30.8532814,9.23582609 C31.14446,9.29180435 31.5264243,9.14680435 31.5786814,8.83006522 C31.92721,6.71658696 30.556235,4.93528261 28.6229421,4.0478913"
                    id="🖍-Ink"
                  ></path>
                </g>
                <g
                  id="facial-hair/Chin"
                  transform="translate(38.000000, 37.000000)"
                  fill="#000000"
                >
                  <path
                    d="M23.2012857,15.0069422 C19.924881,15.479605 17.553381,15.3819253 16.0867857,14.7139034 C13.8935357,13.7150084 11.7600714,12.7485383 9.77053571,11.4253946 C7.73228571,10.0698261 6.00292857,8.46008846 4.76846429,6.39954064 C3.62035714,4.48228979 2.666,2.44789105 1.705,0.429181759 C1.64884128,0.311212837 1.09717857,-0.861537031 0.902321429,-1.25481926 C0.602285714,-1.8646159 -0.274877167,-1.67320538 -0.274877167,-0.726607757 C-0.274877167,0.21998987 -0.31775,7.38863179 1.36732143,10.208549 C2.88742857,12.7554698 5.46375,14.5350437 8.02346429,16.0882993 C10.8555357,17.8057711 14.6176071,19.6623561 17.9966071,20.1529129 C21.0545357,20.5964014 24.54425,19.350659 26.7585357,17.2974329 C29.0735714,15.1500701 29.729,12.2327938 30.9236071,9.43902563 C31.1904286,8.8145855 30.2445131,8.43798879 29.9670357,9.05210373 C29.618689,9.82306725 27.363439,11.8080134 23.2012857,15.0069422 Z"
                    id="🖍-Ink"
                  ></path>
                </g>
                <g
                  id="face/Smile"
                  transform="translate(40.000000, 21.000000)"
                  fill="#000000"
                >
                  <path
                    d="M16.2310385,26.3127977 C15.4867035,26.0132918 14.8225685,25.5136962 14.3370217,24.8754953 C14.1682149,24.6536304 14.1244462,24.4193446 14.1598582,24.2050602 C14.1996765,23.9641126 14.3441977,23.7457365 14.5412923,23.5992565 C14.7389974,23.4523228 14.9863014,23.3798588 15.2253928,23.4167989 C15.4331492,23.4488977 15.6399608,23.5610962 15.8036367,23.793792 L15.8378327,23.8403256 C16.1264986,24.2255217 16.5026569,24.5415706 16.9312631,24.7452823 C17.3443697,24.9416273 17.8063877,25.0332691 18.2845009,24.9799775 C19.1950983,24.8785188 19.8227279,24.392781 20.4898297,23.7331571 C20.5725189,23.649878 20.6552611,23.5639881 20.7384043,23.4767157 C20.790911,23.3976037 20.863777,23.3467583 20.9446781,23.3200806 C21.0345044,23.2904597 21.1361188,23.2921357 21.22919,23.324172 C21.3189575,23.3550712 21.3992052,23.4136239 21.4530134,23.4915536 C21.5041538,23.5656195 21.5331488,23.6571179 21.5237406,23.7623637 C21.4626796,24.4459559 21.1003432,25.0560327 20.5856593,25.5350719 C20.0140371,26.0671061 19.2563101,26.435171 18.5429433,26.5642628 C17.7570225,26.7064625 16.9561902,26.6045846 16.2310385,26.3127977 L16.2310385,26.3127977 Z M18.9136945,15.7670612 C19.7498333,16.2683632 21.0238521,17.4373014 20.1243592,18.6800899 C19.06557,19.7758976 17.5411526,18.5194793 16.7899462,17.9512502 C16.0933923,17.5108694 15.3107751,18.6434957 15.9570381,19.1577145 C21.3852718,23.1216993 23.5881639,15.8981447 19.3366019,15.1776531 C18.8684896,15.098258 18.6946315,15.611978 18.9136945,15.7670612 Z M9.18624775,11.1559208 C9.27863013,10.02486 11.0250851,9.76801638 11.1988152,10.8872519 C11.3543862,11.8898457 11.1712443,12.810856 10.7133896,13.7135181 C10.2759087,14.5758799 9.17633579,14.1735475 9.09318008,13.3882915 C8.98171331,12.3356885 9.12878062,11.8595054 9.18624775,11.1559208 Z M22.4804983,10.6551809 C22.7239862,10.3406416 23.0755433,10.1259249 23.4967474,10.2472628 C24.8127336,10.6265666 24.4248581,12.4693515 23.9626851,13.3663345 C23.7115571,13.8534334 22.8998201,13.9769556 22.5329827,13.5480683 C21.9350588,12.8486553 21.6487197,11.4519044 22.4088581,10.7629761 C22.4294533,10.727372 22.4523737,10.6914403 22.4804983,10.6551809 Z M10.694854,6.20674403 L10.902729,6.17085652 C11.5458071,6.06115604 12.3454007,5.95574608 12.8003211,6.46569283 C13.0415945,6.73610922 13.1246394,7.23871672 12.8003211,7.49755631 C12.2298574,7.95298294 11.5991585,7.77649147 10.9155322,7.81504437 C10.352155,7.84693515 9.81070173,7.9388942 9.26803045,8.09190444 C8.07749758,8.42752218 7.10742145,9.04021843 6.09061869,9.71298294 C5.95719308,9.80122867 5.82099931,9.63292833 5.88466713,9.509843 C6.47162907,8.37586348 7.60912388,7.4443686 8.74850104,6.87655973 C9.35661176,6.57348805 10.0220789,6.32207509 10.694854,6.20674403 Z M21.2808721,5.6987727 L21.4399785,5.73089075 C23.1714372,6.08787189 25.4210074,6.80097104 26.2409366,8.47845416 C26.2721797,8.71565621 26.2391684,8.76649335 26.2123243,8.79970744 L26.2033866,8.81075997 C26.1812671,8.83912285 26.1636174,8.87822093 26.0593807,8.91050455 C26.030455,8.90370679 26.0012414,8.89650704 25.9717184,8.88887576 C25.5958772,8.79172619 25.2985141,8.657889 25.0106351,8.51901693 L24.6985012,8.36733918 C24.3363636,8.19219996 23.9710286,8.02343499 23.5838573,7.89884631 C22.7576006,7.63302297 21.9077245,7.44576702 21.0446812,7.3457766 C20.8576232,7.32412292 20.6774981,7.26185276 20.5353924,7.15513187 C20.4005055,7.05383233 20.2974606,6.91358075 20.2504779,6.72715584 C20.1895883,6.48589224 20.2070867,6.3032359 20.3383267,6.08558079 C20.437011,5.92212647 20.5782126,5.80883127 20.7403477,5.74377331 C20.9056374,5.67744954 21.0938181,5.66181373 21.2808721,5.6987727 Z"
                    id="🖍-Ink"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </Wrapper>
  );
};

export default Avatar;
