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