var request = new XMLHttpRequest;
var url = "https://dummyjson.com/recipes?limit=30&skip=10&select=name,image";

request.open("GET", url)
request.send()

// console.log(request.readyState)

request.addEventListener("readystatechange", function () {
    if (request.readyState === 4) {
        let response = JSON.parse(request.response);
        console.log(response);
        let contaner = document.createElement('div')
        contaner.className = "container";


        for (let rsp of response.recipes) {
            let div = document.createElement("div");
            div.setAttribute('class', 'rsp');

            let img = document.createElement("img");
            img.src = rsp.image;
            div.appendChild(img);

            let title = document.createElement("h3");
            title.innerText = rsp.name
            div.appendChild(title);

            contaner.appendChild(div);

        }
        document.body.appendChild(contaner);
    }
})
