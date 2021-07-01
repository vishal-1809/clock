setInterval(() => {
    d = new Date();
    hrs = d.getHours();
    minu = d.getMinutes();
    seco = d.getSeconds();

    hrt = 30*hrs + minu/2;
    mrt = 6*minu;
    srt = 6*seco;

    hour.style.transform = `rotate(${hrt}deg)`;
    min.style.transform = `rotate(${mrt}deg)`;
    sec.style.transform = `rotate(${srt}deg)`;
}, 1000);