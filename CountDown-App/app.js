const countDown = ()=>{
    const countDate = new Date('Dec 31, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //how does time works
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate time
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.min').innerHTML = textMinute;
    document.querySelector('.sec').innerHTML = textSecond;
};
setInterval(countDown,1000);

