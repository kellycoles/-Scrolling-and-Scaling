const audrey = document.getElementById("audrey")


/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
 document.addEventListener("scroll", function () {

    /*
         Adjust the width of audrey to be 1/3 the value of
         `window.scrollY`. No lower than 50px, though.
     */
    
    const width = window.scrollY / 3
    if (width > 50) {
        audrey.style.width = `${width}px`
    }

     /*
         Adjust the height of element to be 1/4 the value of
         `window.scrollY`. No lower than 100px, though.
     */
    const height = window.scrollY / 4
    if (height > 100) {
        audrey.style.height = `${height}px`
    }

 })