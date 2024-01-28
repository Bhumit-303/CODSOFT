var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var typed = new Typed("#p1", {
    strings: ["Frontend Developer!", "Problem Solver!"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbw35m90-8fyqz5Be2jKLwGUpPj4do-K3o3vTsWg0LlPk-wfRSsZRy3JzDUp3fJMmjUj/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Massage sent successfully"
        setTimeout(function(){
           msg.innerHTML = ''
        },5000)
         form.reset()

     })
      .catch(error => console.error('Error!', error.message))
  })
