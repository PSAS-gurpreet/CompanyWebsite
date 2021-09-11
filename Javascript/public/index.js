var sliderOptions={
    indicators: false,
    height: 600
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, sliderOptions);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.scrollspy');
  var instances = M.ScrollSpy.init(elems, {});
});

const myForm = document.getElementById('enquireForm');

myForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    const formData = new FormData(myForm)
    const searchParams = new URLSearchParams()

    for(const pair of formData){
        searchParams.append(pair[0], pair[1], pair[2], pair[3], pair[4])
    }

    var request={
        method: 'POST',
        body: searchParams
    }

    fetch('https://psas-web-backend.herokuapp.com/send', request)

    var x = document.getElementById("enquireForm");
    x.style.display = "none";
    x = document.getElementById("afterSubmit");
    x.style.display = "block";
    x = document.getElementById("formImg");
    x.style.marginTop = "4%";
})