//store api in local storage
localStorage.setItem("key", "10fe5b60");

//add event listener to form
const form = document.querySelector("form")
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    // //remove intro paragraph
    const introP = document.querySelector(".introText")
    introP.remove()
    //get value of input and adjust it for instead of spaces it's a plus sign
    let input = event.target.textInput.value

    //check if input in search bar has space or not
    function whiteSpaceOrNot(){
        let index = input.indexOf(' ') >= 0;
        if(index === true){
            let inputSplit = input.split(' ')
             return inputSplit.join('+')
        }else{
            return input
        }}

    // fetch data after there has been something to search
    if(!input){
        //alert user of empty searches
        window.alert("Search bar must not be empty.")
    }else{
        let api = `http://www.omdbapi.com/?t=` + whiteSpaceOrNot(input) + `&apikey=${localStorage.getItem("key")}`

        fetch(api)
        .then((response)=> response.json())
        .then((result)=>{

            //make main section show up and style it
            const main = document.querySelector("main")
            document.querySelector("main").style.width = "60%"
            document.querySelector("main").style.justifyContent = "center"
            document.querySelector("main").style.backgroundColor = "#cac7ff"
            
            //img of poster
            const imgPoster = document.createElement("img")
            imgPoster.className = "imgPoster"
            imgPoster.setAttribute(`src`, `${result.Poster}`)
            // imgPoster.style.width = "500px"
            // imgPoster.style.height = "auto"
            main.prepend(imgPoster)

            //more info about movie link to second html
            const moreInfo = document.createElement("a")
            moreInfo.setAttribute(`href`, `info.html?id=${result.imdbID}`)
            moreInfo.textContent = `More Info`
            moreInfo.className = "moreInfo"
            imgPoster.after(moreInfo)
            console.log(result); 
        })
        .catch((error)=>{
            console.log("error")
        })
    }
    form.reset()
})

