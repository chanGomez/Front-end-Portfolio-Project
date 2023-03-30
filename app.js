//api === http://www.omdbapi.com/?t=fight+club&apikey=10fe5b60

const form = document.querySelector("form")
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    //get value of input and adjust it for instead of spaces it's a plus sign
    let input = event.target.textInput.value
    //check if has space or not
    function whiteSpaceOrNot(){
        let index = input.indexOf(' ') >= 0;
        if(index === true){
            let inputSplit = input.split(' ')
             return inputSplit.join('+')
        }else{
            return input
        }}
    // fetch data
    let api = `http://www.omdbapi.com/?t=` + whiteSpaceOrNot(input) + `&apikey=10fe5b60`

        fetch(api)
        .then((response)=> response.json())
        .then((result)=>{
            //make main section show up and style it
            const main = document.querySelector("main")
            document.querySelector("main").style.width = "70%"
            document.querySelector("main").style.height = "700px"
            document.querySelector("main").style.justifyContent = "center"
            document.querySelector("main").style.margin = "30px auto 0 auto"
            document.querySelector("main").style.color = "color"
            document.querySelector("main").style.backgroundColor = "#cac7ff"
            //img of poster
            const imgContainer = document.querySelector(".imgContainer")
            document.querySelector(".imgContainer").style.width = "300px" 
            const img = document.createElement("img")

            // img.setAttribute('src', '${result.poster}')

            //movie info
            const article = document.querySelector("article")
            const h2 = document.createElement("h2")
            h2.innerHTML = `<h2><strong> Title: </strong> ${result.Title}</h2>`
            const p = document.createElement("p")
            p.innerHTML = `<p><strong>Year:</strong> ${result.Year}<br/>
            <strong>Genre:</strong> ${result.Genre} <br/>
            <strong>Plot:</strong> ${result.Plot} </p>`

            article.append(h2)
            article.append(p)

            console.log(result);
        })

        

    form.reset()
})

// main{
//     width: 70%;
//     height: 700px;
//     justify-content: center;
//     margin: 0 auto 0 auto;
//     margin-top: 30px;
//     color: aliceblue;
//     background-color: #cac7ff;
    


// }
// section{
//     grid-template-columns: 1/2;
//     display: block;
    
// }
// article{
//     grid-template-columns: 2/3;  
// }