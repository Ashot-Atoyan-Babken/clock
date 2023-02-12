const deg = 6
let hr = $('.hr')
let min = $('.min')
let sec = $('.sec')



setInterval(() => {

   let day = new Date()
   let hour = day.getHours() * 30
   let minut = day.getMinutes() * deg
   let second = day.getSeconds() * deg
   hr.css({ 'transform': `rotateZ(${(hour) + (minut / 12)}deg)` })
   min.css({ 'transform': `rotateZ(${minut}deg)` })
   sec.css({ 'transform': `rotateZ(${second}deg)` })
});

setInterval(() => {
   let r = Math.floor(Math.random() * 255)
   let g = Math.floor(Math.random() * 255)
   let b = Math.floor(Math.random() * 255)
   $('.wrapper').css({
      'background-color': `rgb(${r} ${g} ${b})`
   })
}, 1000);


setInterval(() => {
   let time = document.querySelector(".time")
   let date = new Date()
   let hour = date.getHours()
   let minut = date.getMinutes()
   let second = date.getSeconds()
   let day = "AM"

   if (hour > 12) {
      day = "PM"
      hour -= 12
   }
   if (second < 10) {
      second = "0" + second
   }
   if (minut < 10) {
      minut = "0" + minut
   }
   if (hour < 10) {
      hour = "0" + hour
   }
   time.textContent = hour + ":" + minut + ":" + second + " " + day
});
