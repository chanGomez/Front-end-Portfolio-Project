//Add event.listener to link for second html
window.addEventListener("load", (event) => {
    const urlParams = new URLSearchParams(location.search);
    urlParams.get(`id`)

        let api = `http://www.omdbapi.com/?i=` +  urlParams.get(`id`) + `&apikey=${localStorage.getItem("key")}`


    fetch(api)
    .then((response)=> response.json())
    .then((result)=>{

            const mainInfo = document.querySelector(".mainInfo")
            const information = document.querySelector(".information")
            const titleH2 = document.createElement("h2")
            titleH2.textContent = `${result.Title}`
            information.append(titleH2)
            const pInfo = document.createElement("p")
            pInfo.innerHTML = `<strong> Year: </strong>${result.Year}` + `<br>` + 
            `<strong> Director: </strong>${result.Director}`  + `<br>`+
            `<strong> Actors: </strong>${result.Actors}` + `<br>` +
            `<strong> Genre: </strong>${result.Genre}` + `<br>` +
            `<strong> Rated: </strong>${result.Rated}` + `<br>` +
            `<strong> Plot: </strong>${result.Plot}`
            information.append(pInfo)


            //back button
            const backButton = document.createElement("button")
            backButton.textContent = "Back"
            backButton.className = "goBackButton"
            mainInfo.append(backButton)
            backButton.style.fontSize = "30px";
            backButton.style.color = "rgb(53, 14, 96)";
            backButton.style.textDecoration = "none";
            backButton.style.backgroundColor = "#cac7ff"

            //make button work
            document.querySelector(".goBackButton").addEventListener("click", () => {
                history.back();
              });

            //img poster styles
            const imgPoster = document.createElement("img")
            imgPoster.className = "imgPoster"
            imgPoster.setAttribute(`src`, `${result.Poster}`)
            imgPoster.style.width = "270px"
            imgPoster.style.height = "auto"
            mainInfo.prepend(imgPoster)
    })
});