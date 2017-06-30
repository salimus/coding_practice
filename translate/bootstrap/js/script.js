var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
    myKey = "trnsl.1.1.20170620T180229Z.db81dfefd4854f67.630b8f212c06a42c24d5b5bb2718a394e5c5acf4";

console.log(document.querySelector('#translate').innerHTML);
document.querySelector('#translate').addEventListener('click', function () {

    var xhr = new XMLHttpRequest(),
        textAPI = document.querySelector('#originalText').value,
        langAPI = document.querySelector('#lang').value,
        formatAPI = "plain";
        var data = "key="+myKey+"&text="+textAPI+"&lang="+langAPI+"&format="+formatAPI;

    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (this.readyState==4 && this.status==200) {
            var result = this.responseText;
            console.log(result);
            var json = JSON.parse(result);
            if(json.code == 200) {
                console.log(json.text[0]);
                document.querySelector('#translateText').value = json.text[0];
            }
        }
    }
}, false);