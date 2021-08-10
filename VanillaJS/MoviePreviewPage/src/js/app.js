const showingMoviesBtn = document.querySelector("#showingBtn");
const upcomingMoviesBtn = document.querySelector("#upcomingBtn");
const boxofficeBtn = document.querySelector("#boxofficeBtn");

const showingMovies = document.querySelector("#showing_movie");
const upcomingMovies = document.querySelector("#upcoming_movie");
const boxofficeMovies = document.querySelector("#boxoffice_movie");

const HIDDEN_CLASSNAME = "hidden";
const CLICK_OFF = "clickOff";
const CLICK_ON = "clickOn";


function changeToShowing(event) {
    event.preventDefault();
    upcomingMovies.classList.add(HIDDEN_CLASSNAME);
    boxofficeMovies.classList.add(HIDDEN_CLASSNAME);
    showingMovies.classList.remove(HIDDEN_CLASSNAME);

    showingMoviesBtn.classList.remove(CLICK_OFF);
    showingMoviesBtn.classList.add(CLICK_ON);
    upcomingMoviesBtn.classList.add(CLICK_OFF);
    boxofficeBtn.classList.add(CLICK_OFF);
}

function changeToUpcoming(event) {
    event.preventDefault();
    showingMovies.classList.add(HIDDEN_CLASSNAME);
    boxofficeMovies.classList.add(HIDDEN_CLASSNAME);
    upcomingMovies.classList.remove(HIDDEN_CLASSNAME);

    upcomingMoviesBtn.classList.remove(CLICK_OFF);
    upcomingMoviesBtn.classList.add(CLICK_ON);
    showingMoviesBtn.classList.add(CLICK_OFF);
    boxofficeBtn.classList.add(CLICK_OFF);
}

function changeToBoxoffice(event){
    event.preventDefault();
    upcomingMovies.classList.add(HIDDEN_CLASSNAME);
    showingMovies.classList.add(HIDDEN_CLASSNAME);
    boxofficeMovies.classList.remove(HIDDEN_CLASSNAME);
    
    boxofficeBtn.classList.remove(CLICK_OFF);
    boxofficeBtn.classList.add(CLICK_ON);
    upcomingMoviesBtn.classList.add(CLICK_OFF);
    showingMoviesBtn.classList.add(CLICK_OFF);
}


upcomingMoviesBtn.addEventListener("click", changeToUpcoming);
showingMoviesBtn.addEventListener("click", changeToShowing);
boxofficeBtn.addEventListener("click", changeToBoxoffice);
