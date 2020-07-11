var a = document.querySelectorAll('.animations-list button')
var zone = document.querySelector('.animations-zone .ani')
// a.forEach((e, i) => {
//     console.log(e);
//     e.addEventListener('click', function(){
//         console.log('text');
//         var text = e.textContent;
//         zone.removeAttribute("data-enami");
//         zone.removeAttribute("data-enami-in");
//         setTimeout(() => {

//         zone.setAttribute("data-enami", text);
//         zone.setAttribute("data-enami-in", "true");
//         }, 100);
//     })
//   });


for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function () {
        var text = a[i].querySelector('.badge').textContent;
        zone.removeAttribute("data-enami");
        zone.removeAttribute("data-enami-in");
        setTimeout(() => {

            zone.setAttribute("data-enami", text);
            zone.setAttribute("data-enami-in", "true");
        }, 50);
    })
}