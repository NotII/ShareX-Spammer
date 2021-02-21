var request = require("request")
var fs = require("fs")
const count = { count: 0 }
setInterval(function () {
    count.count = count.count+1
    var options = {
        method: "POST",
        url: 'https://pays.host/api/images/upload',
        headers: {
            "Content-Type": "multipart/form-data"
            },
            formData : {
                "file" : fs.createReadStream("./xd.jpg"),
                "key": "notii_0LU7Cn"
            }
    }
    request(options, function (err, res, body) {
        if (err) console.log(err);
        console.log(body, count.count);
    });
}, 1200)
