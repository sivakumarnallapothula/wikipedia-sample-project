let input = document.getElementById("inp")
let spin = document.getElementById("spin")
let search1 = document.getElementById("searching")
let division2 = document.getElementById("division2")
document.getElementById("image").onclick = function() {
    document.getElementById("image").classList.toggle("imag")
}
search1.onclick = function() {
    function ram(results1) {
        spin.classList.add("d-none")
        let {
            description,
            link,
            title
        } = results1;
        //create container
        let divi1 = document.createElement("div")
        divi1.classList.add("result-item")
        division2.appendChild(divi1)
        //create anchortitle
        let heading = document.createElement("a")
        heading.classList.add("result-title")
        heading.href = link
        heading.target = "_blank"
        heading.textContent = title
        divi1.appendChild(heading)
        //create break
        let brel = document.createElement("br")
        divi1.appendChild(brel)
        //create anchor url
        let urlel = document.createElement("a")
        urlel.classList.add("result-url")
        urlel.href = link
        urlel.target = "_blank"
        urlel.textContent = link
        divi1.appendChild(urlel)
        //break
        let brel2 = document.createElement("br")
        divi1.appendChild(brel2)
        //create description
        let discel = document.createElement("p")
        discel.classList.add("link-description")
        discel.textContent = description
        divi1.appendChild(discel)


    }



spin.classList.add("col-12")
    spin.classList.remove("d-none")
    division2.textContent = ""
    let f = input.value
    let options = {
        method: "GET"
    }

    let url = "https://apis.ccbp.in/wiki-search?search=" + f



    fetch(url, options)


        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            let {
                search_results
            } = jsonData;
            for (let results of search_results) {
                ram(results);
            }
        })



}
input.addEventListener("keydown", function(sk) {

    function ram(results1) {
        spin.classList.add("d-none")
        let {
            description,
            link,
            title
        } = results1;
        //create container
        let divi1 = document.createElement("div")
        divi1.classList.add("result-item")
        division2.appendChild(divi1)
        //create anchortitle
        let heading = document.createElement("a")
        heading.classList.add("result-title")
        heading.href = link
        heading.target = "_blank"
        heading.textContent = title
        divi1.appendChild(heading)
        //create break
        let brel = document.createElement("br")
        divi1.appendChild(brel)
        //create anchor url
        let urlel = document.createElement("a")
        urlel.classList.add("result-url")
        urlel.href = link
        urlel.target = "_blank"
        urlel.textContent = link
        divi1.appendChild(urlel)
        //break
        let brel2 = document.createElement("br")
        divi1.appendChild(brel2)
        //create description
        let discel = document.createElement("p")
        discel.classList.add("link-description")
        discel.textContent = description
        divi1.appendChild(discel)


    }



    if (sk.key === "Enter") {
        spin.classList.add("col-12")
        spin.classList.remove("d-none")
        division2.textContent = ""
        let f = input.value
        let options = {
            method: "GET"
        }

        let url = "https://apis.ccbp.in/wiki-search?search=" + f



        fetch(url, options)


            .then(function(response) {
                return response.json()
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                for (let results of search_results) {
                    ram(results);
                }
            })


    }

})
