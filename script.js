var c = document.getElementById("demo");
var context = c.getContext("2d");
// context.transform(1, 0, 0, -1, 0, context.canvas.height);
// https://fq.fitqbe.com/feed/item/74162/
var pathHorizontal = '[{"latitude":52.244626,"longitude":20.960096,"distance":0,"timestamp":1509032048},{"latitude":52.244752,"longitude":20.960818,"distance":0.05111153755026868,"timestamp":1509032068},{"latitude":52.244704,"longitude":20.96154,"distance":0.10055450233361979,"timestamp":1509032087},{"latitude":52.244421,"longitude":20.962232,"distance":0.15720842743306154,"timestamp":1509032107},{"latitude":52.24352,"longitude":20.962151,"distance":0.2575419017160524,"timestamp":1509032143},{"latitude":52.243619,"longitude":20.961032,"distance":0.3345168520500833,"timestamp":1509032174},{"latitude":52.243047,"longitude":20.960487,"distance":0.4081495719691406,"timestamp":1509032211},{"latitude":52.242593,"longitude":20.960471,"distance":0.4586412990901323,"timestamp":1509032228},{"latitude":52.242494,"longitude":20.95948,"distance":0.5270042131664769,"timestamp":1509032256},{"latitude":52.242751,"longitude":20.958975,"distance":0.5717110442455624,"timestamp":1509032283},{"latitude":52.24281,"longitude":20.958884,"distance":0.5807339592457711,"timestamp":1509032302},{"latitude":52.2431,"longitude":20.958476,"distance":0.6232938525332978,"timestamp":1509032326},{"latitude":52.243114,"longitude":20.958494,"distance":0.6252760643813344,"timestamp":1509032352},{"latitude":52.242926,"longitude":20.958188,"distance":0.6547886834474272,"timestamp":1509032377},{"latitude":52.243573,"longitude":20.957537,"distance":0.739285566302772,"timestamp":1509032429},{"latitude":52.243559,"longitude":20.956439,"distance":0.8140557963213821,"timestamp":1509032456},{"latitude":52.243599,"longitude":20.955631,"distance":0.8692455872167831,"timestamp":1509032477},{"latitude":52.24353,"longitude":20.954675,"distance":0.9347826587388093,"timestamp":1509032501},{"latitude":52.24342,"longitude":20.953844,"distance":0.9926659662242768,"timestamp":1509032519},{"latitude":52.243335,"longitude":20.95307,"distance":1.0462025218343391,"timestamp":1509032539},{"latitude":52.243186,"longitude":20.952496,"distance":1.0886485557670516,"timestamp":1509032556},{"latitude":52.242991,"longitude":20.950416,"distance":1.2319109805079718,"timestamp":1509032613},{"latitude":52.242828,"longitude":20.949835,"distance":1.275421577568377,"timestamp":1509032634},{"latitude":52.242659,"longitude":20.950057,"distance":1.2995369728860697,"timestamp":1509032650},{"latitude":52.242631,"longitude":20.950877,"distance":1.3554522207908757,"timestamp":1509032670},{"latitude":52.242457,"longitude":20.951926,"distance":1.429446082086454,"timestamp":1509032713},{"latitude":52.242262,"longitude":20.952766,"distance":1.4906087369528342,"timestamp":1509032732},{"latitude":52.242569,"longitude":20.952744,"distance":1.524776943153365,"timestamp":1509032747},{"latitude":52.242932,"longitude":20.951006,"distance":1.6498000665538144,"timestamp":1509032809},{"latitude":52.243003,"longitude":20.949828,"distance":1.7303894357992242,"timestamp":1509032842},{"latitude":52.243098,"longitude":20.950044,"distance":1.7484958395945511,"timestamp":1509032865},{"latitude":52.243078,"longitude":20.950305,"distance":1.766403811741698,"timestamp":1509032895},{"latitude":52.243041,"longitude":20.950509,"distance":1.7808893827152694,"timestamp":1509032913},{"latitude":52.242803,"longitude":20.951072,"distance":1.8274677819593732,"timestamp":1509033007},{"latitude":52.242953,"longitude":20.950545,"distance":1.86703454147681,"timestamp":1509033023},{"latitude":52.242955,"longitude":20.94985,"distance":1.914352725789275,"timestamp":1509033044},{"latitude":52.243026,"longitude":20.950189,"distance":1.9387456752966654,"timestamp":1509033070},{"latitude":52.24309,"longitude":20.950542,"distance":1.963810264684632,"timestamp":1509033087},{"latitude":52.243139,"longitude":20.950696,"distance":1.9756259949237285,"timestamp":1509033102},{"latitude":52.243116,"longitude":20.951049,"distance":1.9997947697912883,"timestamp":1509033117},{"latitude":52.242804,"longitude":20.952457,"distance":2.101739767061791,"timestamp":1509033172},{"latitude":52.242698,"longitude":20.95026,"distance":2.251782404022157,"timestamp":1509033207},{"latitude":52.242733,"longitude":20.950016,"distance":2.268844601879438,"timestamp":1509033225},{"latitude":52.242936,"longitude":20.950097,"distance":2.2920801465977396,"timestamp":1509033263},{"latitude":52.243057,"longitude":20.950424,"distance":2.3180925525806115,"timestamp":1509033296},{"latitude":52.242805,"longitude":20.950993,"distance":2.3659029709639006,"timestamp":1509033317},{"latitude":52.242012,"longitude":20.953184,"distance":2.5391851798392717,"timestamp":1509033368},{"latitude":52.242321,"longitude":20.95331,"distance":2.574597523514942,"timestamp":1509033384},{"latitude":52.242826,"longitude":20.952953,"distance":2.6357830121688752,"timestamp":1509033405},{"latitude":52.243247,"longitude":20.95318,"distance":2.685079033289938,"timestamp":1509033428},{"latitude":52.243519,"longitude":20.953747,"distance":2.734118175826808,"timestamp":1509033450},{"latitude":52.243712,"longitude":20.954302,"distance":2.777572296480548,"timestamp":1509033467},{"latitude":52.243713,"longitude":20.955402,"distance":2.8524624151721882,"timestamp":1509033502},{"latitude":52.243757,"longitude":20.956366,"distance":2.9182753650134443,"timestamp":1509033522},{"latitude":52.243577,"longitude":20.957296,"distance":2.984679394066854,"timestamp":1509033548},{"latitude":52.244516,"longitude":20.957611,"distance":3.091266103210798,"timestamp":1509033596},{"latitude":52.244591,"longitude":20.957623,"distance":3.099644782203338,"timestamp":1509033599},{"latitude":52.244813,"longitude":20.95766,"distance":3.1244571401630092,"timestamp":1509033611},{"latitude":52.245301,"longitude":20.957653,"distance":3.1787196653201604,"timestamp":1509033634},{"latitude":52.24554,"longitude":20.957597,"distance":3.2055661027731843,"timestamp":1509033650},{"latitude":52.246076,"longitude":20.957465,"distance":3.2658373985680984,"timestamp":1509033666},{"latitude":52.24651,"longitude":20.957047,"distance":3.321859239212486,"timestamp":1509033684},{"latitude":52.246854,"longitude":20.957226,"distance":3.362002705342419,"timestamp":1509033701},{"latitude":52.24731,"longitude":20.957374,"distance":3.41369665043897,"timestamp":1509033720},{"latitude":52.247417,"longitude":20.957659,"distance":3.436455686769974,"timestamp":1509033742},{"latitude":52.247534,"longitude":20.957725,"distance":3.4502190058651374,"timestamp":1509033762},{"latitude":52.245664,"longitude":20.963562,"distance":3.898698382595982,"timestamp":1509033918},{"latitude":52.245337,"longitude":20.964096,"distance":3.950114394664115,"timestamp":1509033933},{"latitude":52.244838,"longitude":20.964833,"distance":4.024920412684964,"timestamp":1509033955},{"latitude":52.244424,"longitude":20.965843,"distance":4.107667561438353,"timestamp":1509033992},{"latitude":52.245008,"longitude":20.966702,"distance":4.195054843912536,"timestamp":1509034026}]';
// https://fq.fitqbe.com/feed/item/58040327/
var pathVertical = '[{"latitude":52.226803,"longitude":21.023271,"distance":0,"timestamp":1509043776},{"latitude":52.22688,"longitude":21.023269,"distance":0.008562730846309593,"timestamp":1509043806},{"latitude":52.226919,"longitude":21.023269,"distance":0.012898478273673224,"timestamp":1509043874},{"latitude":52.226953,"longitude":21.023264,"distance":0.016694520675924363,"timestamp":1509043895},{"latitude":52.227654,"longitude":21.022968,"distance":0.09720328025363797,"timestamp":1509043959},{"latitude":52.227818,"longitude":21.022835,"distance":0.11756409628301534,"timestamp":1509043977},{"latitude":52.227826,"longitude":21.022777,"distance":0.12161397965858842,"timestamp":1509043998},{"latitude":52.228195,"longitude":21.022488,"distance":0.16711987468447853,"timestamp":1509044040},{"latitude":52.228565,"longitude":21.022533,"distance":0.2083740222085942,"timestamp":1509044076},{"latitude":52.22878,"longitude":21.022461,"distance":0.2327774986157666,"timestamp":1509044095},{"latitude":52.229359,"longitude":21.022203,"distance":0.2995110338823904,"timestamp":1509044155},{"latitude":52.229678,"longitude":21.022033,"distance":0.33682207182393314,"timestamp":1509044190},{"latitude":52.229866,"longitude":21.022054,"distance":0.3577746840972172,"timestamp":1509044208},{"latitude":52.231179,"longitude":21.020867,"distance":0.5246527562293694,"timestamp":1509044305},{"latitude":52.231586,"longitude":21.020679,"distance":0.5716831494007555,"timestamp":1509044333},{"latitude":52.231673,"longitude":21.020417,"distance":0.5919792419076975,"timestamp":1509044354},{"latitude":52.231799,"longitude":21.020262,"distance":0.6095206326150732,"timestamp":1509044399},{"latitude":52.231841,"longitude":21.02021,"distance":0.6153817884576559,"timestamp":1509044414},{"latitude":52.232169,"longitude":21.020083,"distance":0.652863441607108,"timestamp":1509044434},{"latitude":52.232491,"longitude":21.019932,"distance":0.6901138054548207,"timestamp":1509044465},{"latitude":52.235054,"longitude":21.018726,"distance":0.9866900790491726,"timestamp":1509044658},{"latitude":52.235358,"longitude":21.018446,"distance":1.025498407257318,"timestamp":1509044676},{"latitude":52.235981,"longitude":21.018278,"distance":1.0957077533913213,"timestamp":1509044719},{"latitude":52.236335,"longitude":21.01816,"distance":1.1358806170675495,"timestamp":1509044744},{"latitude":52.236569,"longitude":21.018058,"distance":1.1628101747754986,"timestamp":1509044760},{"latitude":52.236927,"longitude":21.017814,"distance":1.2059443630089275,"timestamp":1509044792},{"latitude":52.237085,"longitude":21.017759,"distance":1.22390710356621,"timestamp":1509044808},{"latitude":52.23739,"longitude":21.017824,"distance":1.2581074720554661,"timestamp":1509044832},{"latitude":52.237954,"longitude":21.01778,"distance":1.320889923441771,"timestamp":1509044871},{"latitude":52.238154,"longitude":21.017698,"distance":1.343818004143891,"timestamp":1509044893},{"latitude":52.238662,"longitude":21.017527,"distance":1.401489887912775,"timestamp":1509044938},{"latitude":52.239037,"longitude":21.017337,"distance":1.4451468784995478,"timestamp":1509044962},{"latitude":52.239576,"longitude":21.017013,"distance":1.509009371124468,"timestamp":1509044995},{"latitude":52.23981,"longitude":21.016864,"distance":1.5369357913269073,"timestamp":1509045012},{"latitude":52.240604,"longitude":21.016319,"distance":1.632701750446272,"timestamp":1509045065},{"latitude":52.241109,"longitude":21.015925,"distance":1.6949314329565666,"timestamp":1509045099},{"latitude":52.241297,"longitude":21.015644,"distance":1.7232685342959584,"timestamp":1509045124},{"latitude":52.241498,"longitude":21.015437,"distance":1.7496903335624334,"timestamp":1509045142},{"latitude":52.241755,"longitude":21.015407,"distance":1.7783389747905103,"timestamp":1509045163},{"latitude":52.242356,"longitude":21.015211,"distance":1.8464833054926508,"timestamp":1509045262},{"latitude":52.242567,"longitude":21.015049,"distance":1.8724075653368177,"timestamp":1509045284},{"latitude":52.243018,"longitude":21.014694,"distance":1.928074787079542,"timestamp":1509045313},{"latitude":52.243389,"longitude":21.01431,"distance":1.9769128422652713,"timestamp":1509045335},{"latitude":52.243777,"longitude":21.014116,"distance":2.022030912836374,"timestamp":1509045362},{"latitude":52.243973,"longitude":21.01412,"distance":2.0438259418133784,"timestamp":1509045379},{"latitude":52.244669,"longitude":21.013955,"distance":2.1220249546366343,"timestamp":1509045431},{"latitude":52.244937,"longitude":21.013958,"distance":2.151824435250582,"timestamp":1509045447},{"latitude":52.245514,"longitude":21.013828,"distance":2.216588486758662,"timestamp":1509045479},{"latitude":52.24586,"longitude":21.013765,"distance":2.2552983473471495,"timestamp":1509045497},{"latitude":52.246243,"longitude":21.013732,"distance":2.297943065838594,"timestamp":1509045521},{"latitude":52.246675,"longitude":21.01375,"distance":2.3459926468576726,"timestamp":1509045569},{"latitude":52.246659,"longitude":21.013878,"distance":2.3548862935391672,"timestamp":1509045603},{"latitude":52.246616,"longitude":21.013979,"distance":2.3632606691523823,"timestamp":1509045621},{"latitude":52.246597,"longitude":21.014024,"distance":2.3669823896706856,"timestamp":1509045638},{"latitude":52.246652,"longitude":21.013973,"distance":2.3740149566051763,"timestamp":1509045666},{"latitude":52.247063,"longitude":21.013727,"distance":2.42268582272905,"timestamp":1509045692},{"latitude":52.247625,"longitude":21.013551,"distance":2.4863126447280957,"timestamp":1509045749},{"latitude":52.248003,"longitude":21.013512,"distance":2.5284261680261806,"timestamp":1509045778},{"latitude":52.24826,"longitude":21.013429,"distance":2.5575552106213206,"timestamp":1509045796},{"latitude":52.248455,"longitude":21.013304,"distance":2.5808471187622266,"timestamp":1509045814},{"latitude":52.248858,"longitude":21.012907,"distance":2.6331755689799374,"timestamp":1509045858},{"latitude":52.249249,"longitude":21.012288,"distance":2.6937202425986797,"timestamp":1509045880},{"latitude":52.249507,"longitude":21.012185,"distance":2.7232516350633666,"timestamp":1509045900},{"latitude":52.249714,"longitude":21.012003,"distance":2.749390532028129,"timestamp":1509045925},{"latitude":52.249803,"longitude":21.011844,"distance":2.7640560241578456,"timestamp":1509045943},{"latitude":52.249891,"longitude":21.011613,"distance":2.7825765206733744,"timestamp":1509045961},{"latitude":52.250056,"longitude":21.0111,"distance":2.8220234091575733,"timestamp":1509045993},{"latitude":52.250235,"longitude":21.010555,"distance":2.864124091139533,"timestamp":1509046047}]';

// lat - horizontal
// lng - vertical

var pathArr = JSON.parse(pathVertical);

var minLat, maxLat, minLng, maxLng;

minLat = pathArr[0]['latitude'];
maxLat = pathArr[0]['latitude'];
minLng = pathArr[0]['longitude'];
maxLng = pathArr[0]['longitude'];

for (var i = 1; i < pathArr.length; i++) {
    if (pathArr[i]['latitude'] < minLat) {
        minLat = pathArr[i]['latitude']
    }
    if (pathArr[i]['latitude'] > maxLat) {
        maxLat = pathArr[i]['latitude']
    }
    if (pathArr[i]['longitude'] < minLng) {
        minLng = pathArr[i]['longitude']
    }
    if (pathArr[i]['longitude'] > maxLng) {
        maxLng = pathArr[i]['longitude']
    }
}

var diffHorizontal = maxLat - minLat;
var diffVertical = maxLng - minLng;
var scale = 0;

var isHorizontal = diffHorizontal > diffVertical;
if (isHorizontal) {
    scale = context.canvas.width / diffHorizontal
}
else {
    scale = context.canvas.height / diffVertical;
}

var area = drawArea();

context.beginPath();
var prevX = getX(pathArr[0]['longitude'], area);
var prevY = getY(pathArr[0]['latitude'], area);

for (var j = 1; j < pathArr.length; j++) {
    context.moveTo(prevX, prevY);
    var currentX = getX(pathArr[j]['longitude'], area);
    var currentY = getY(pathArr[j]['latitude'], area);
    context.lineTo(currentX, currentY);
    prevX = currentX;
    prevY = currentY;
}

context.stroke();

function getX(lng) {
    return (lng - minLng) * scale + area.x;
}

function getY(lat) {
    return (area.h - (lat - minLat) * scale) + area.y;
}

function drawArea() {

    var x = 0, y = 0;
    var w = diffVertical * scale;
    var h = diffHorizontal * scale;

    if (isHorizontal) {
        x = (context.canvas.width - w) / 2;
    }
    else {
        y = (context.canvas.height - h) / 2;
    }

    context.fillStyle = "#f2f2f2";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    context.rect(x, y, w, h);

    context.lineWidth = 1;
    context.stroke();

    return {
        x: x,
        y: y,
        w: w,
        h: h
    }
}