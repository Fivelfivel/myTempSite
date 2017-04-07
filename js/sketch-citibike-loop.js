// ***** Global variables ***** //
var Citibikedata;
// var requesturl = "https://gbfs.citibikenyc.com/gbfs/en/station_status.json"


// ***** Setup function ***** //
function setup(){
    createCanvas(800, 800);
    loadJSON("https://gbfs.citibikenyc.com/gbfs/en/station_status.json", getCitibikeData);
}

function getCitibikeData(apiData){
    CitibikeData = apiData;
    stations = CitibikeData.data.stations;
}

// function bikesAvail(Citibikedata){
    // var kittens = Citibikedata.data.stations;
    // for (i = 0; i < 700; i++) {
    //     if (kittens[i].num_bikes_available > 14){
    //         console.log(kittens[i].station_id);
    //     }
    //     else {
    //         console.log("no bikes");
    //     }
    // }
// }


// ***** Draw function ***** //
function draw(){
    background(255);
    if (Citibikedata) {
        for (i = 0; i < 700; i++){
            if (stations[i].num_bikes_available > 14){
                text(stations[i].station_id);
                console.log(stations[i].station_id);
            }
            else{
                text("no bikes");
            }
        }
    }

}
