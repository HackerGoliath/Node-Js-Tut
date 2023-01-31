// req package : npm  i requests
const http = require('http')
const fs = require('fs')
const requests = require('requests')

const API_Key = "your api here"
// console.log(API_Key);
const city = "Lucknow"
const homeFile = fs.readFileSync('home.html', 'utf-8')

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp - 273.15);
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min);
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max);
    temperature = temperature.replace("{%location%}", orgVal.name);
    temperature = temperature.replace("{%country%}", orgVal.sys.country);
    temperature = temperature.replace("{%tempstatus%}", orgVal.weather[0].main);
    return temperature
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`)
            .on("data", (chunk) => {
                // convert json data to object
                const objData = JSON.parse(chunk);
                // convert object into array of an object
                const arrData = [objData]
                // console.log(arrData[0].main.temp);
                const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("")
                res.write(realTimeData);
                // console.log(realTimeData);
            })
            .on("end", (err) => {
                if (err) return console.log("Connection closed due to errors", err)
                res.end();
            })
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listenig at http://localhost:8000");
})