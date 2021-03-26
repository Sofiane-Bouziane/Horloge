var date, heures, minutes, secondes
let date1, heures1, minutes1, secondes1, sf
let date2, heures2, minutes2, secondes2, ba
let date3, heures3, minutes3, secondes3, sy

function refreshClock() {
    
    //Heure de PARIS
    date = new Date()
    heures = date.getHours()
    minutes = date.getMinutes()
    secondes = date.getSeconds()

    document.querySelector('#heures').style.transform = `translate(-50%, -100%) rotate(${heures * 360 / 12 + minutes * 30 / 60}deg)`;
    document.querySelector('#minutes').style.transform = `translate(-50%, -100%) rotate(${minutes * 360 / 60 + secondes * 6 / 60}deg)`;
    document.querySelector('#secondes').style.transform = `translate(-50%, -100%) rotate(${secondes * 360 / 60}deg)`;

    
    
}
refreshClock()
window.setInterval(refreshClock, 1000)

                                                    ///////////////////////////////////////////////////

function refreshClock1() {
 
 
    //Heure de SF
date1 = new Date()
sf = new Date(date1.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }));
heures1 = sf.getHours()
minutes1 = sf.getMinutes()
secondes1 = sf.getSeconds()


document.querySelector('#heures1').style.transform = `translate(-50%, -100%) rotate(${heures1 * 360 / 12 + minutes1 * 30 / 60}deg)`;
document.querySelector('#minutes1').style.transform = `translate(-50%, -100%) rotate(${minutes1 * 360 / 60 + secondes1 * 6 / 60}deg)`;
document.querySelector('#secondes1').style.transform = `translate(-50%, -100%) rotate(${secondes1 * 360 / 60}deg)`;  
    
}
refreshClock1()
window.setInterval(refreshClock1, 1000)


                                                    //////////////////////////////////////////////////////////

function refreshClock2() {
 
 
    //Heure de Baly
date2 = new Date()
ba = new Date(date2.toLocaleString('en-US', { timeZone: 'Asia/Makassar' }));
console.log(ba)
heures2 = ba.getHours()
minutes2 = ba.getMinutes()
secondes2 = ba.getSeconds()


document.querySelector('#heures2').style.transform = `translate(-50%, -100%) rotate(${heures2 * 360 / 12 + minutes2 * 30 / 60}deg)`;
document.querySelector('#minutes2').style.transform = `translate(-50%, -100%) rotate(${minutes2 * 360 / 60 + secondes2 * 6 / 60}deg)`;
document.querySelector('#secondes2').style.transform = `translate(-50%, -100%) rotate(${secondes2 * 360 / 60}deg)`;  
    
}
refreshClock2()
window.setInterval(refreshClock2, 1000)


                                                    ////////////////////////////////////////////////////////////////////
                                            
function refreshClock3() {

    //Heure de Sydney
date3 = new Date()
sy = new Date(date3.toLocaleString('en-US', { timeZone: 'Australia/Sydney' }));
console.log(sy)
heures3 = sy.getHours()
minutes3 = sy.getMinutes()
secondes3 = sy.getSeconds()


document.querySelector('#heures3').style.transform = `translate(-50%, -100%) rotate(${heures3 * 360 / 12 + minutes3 * 30 / 60}deg)`;
document.querySelector('#minutes3').style.transform = `translate(-50%, -100%) rotate(${minutes3 * 360 / 60 + secondes3 * 6 / 60}deg)`;
document.querySelector('#secondes3').style.transform = `translate(-50%, -100%) rotate(${secondes3 * 360 / 60}deg)`;  
    
}
refreshClock3()
window.setInterval(refreshClock3, 1000)                                                 