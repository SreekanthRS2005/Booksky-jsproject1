// to select pop up box ,over lay button

// the background black screen
var popupoverlay=document.querySelector(".popup-overlay")

// the input box
var popupbox=document.querySelector(".popup-box")
// that plus button
var addpopupbtn=document.getElementById("add-popup")

// function when click the button

addpopupbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

// select cancel buttun
var cancelbtn=document.getElementById("cancel-popup")

// while button normally act as a refrest of page while click
// to stop from refereshment we can  want to create a function

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()


    popupoverlay.style.display="none"
    popupbox.style.display="none"
})



// the input will add to the page

// select continer.,add book btn, select book title ,author,description
var container=document.querySelector(".container")
var addbookbtn=document.getElementById("add-book")
var booktitle=document.getElementById("book-titile-input")
var author=document.getElementById("book-author-input")
var description=document.getElementById("book-desc-input")


addbookbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>
                ${booktitle.value}
            </h2>
            <br>
            <h5>
                ${author.value}
            </h5>
            <br>    

            <p>
               ${description.value}
            </p>
            <button onclick="deletebook(event)">DELETE</button>`


            
    container.append(div)

     popupoverlay.style.display="none"
    popupbox.style.display="none"


})

function deletebook(event){
    event.target.parentElement.remove()

}









