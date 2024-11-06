let movies = ['Parasite', 'Interstellar', 'Home Alone', 'Spongebob', 'Spirited Away'];

let moviesList = document.getElementById("itemList");
// Accessing HTML element by ID to edit existing ul, refernce to id "itemList" is stored in moviesList

movies.forEach(item => {
    const li = document.createElement("li"); // manipulating the dom 
    li.textContent = item;
    moviesList.appendChild(li);
});
// dynamically create new list items to reflect the state of the list while not modifiying the existing state of the html

//event handlers
document.getElementById("head").onclick = function(){
    alert("you found me👀"); // popup modal that prevents interaction until dismissed
}

// document.write("we did it!");

function handleSubmit(event){
    event.preventDefault(); // stop the browser from refreshing webpage, doing the normal procedere and instead lets us control what needs to happen
    const newMovie = document.forms["add"];// document.forms stores all form values part of the DOM, we're accessing just the "add" form
    const movieName = newMovie.elements["name"].value;// take the attribute under "name" from that part of the form and set it to movieName
    if (!movies.includes(movieName)){
        movies.push(movieName);
        const li = document.createElement("li"); // manipulating the dom 
        li.textContent = movieName;
        moviesList.appendChild(li);
    }
    else{
        alert("This movie already exists");
    }

}

movies[3] = "plop";// why isn't out movies list changing?

// function updateTime() {
//     const currentTime = new Date().toLocaleTimeString(); // Get the current time
//     document.getElementById("currentTime").innerHTML = currentTime; // Update the time on the webpage
// }

// Call updateTime every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);
