const Timer = () =>{
    const setTime = new Date("22 August 2021 10:00:00").getTime();
    const currTime = new Date().getTime();
    const time_diff = setTime - currTime;
    const getDate = Math.floor(time_diff/(24*60*60*1000));
    document.getElementById('day').innerText = getDate;
    const getHours = Math.floor((time_diff%(24*60*60*1000))/(60*60*1000));
    document.getElementById('hours').innerText = getHours;
    const getMin = Math.floor((time_diff%(60*60*1000))/(60*1000));
    document.getElementById('mins').innerText = getMin;
    const getSec = Math.floor((time_diff%(60*1000))/(1000));
    document.getElementById('sec').innerText = getSec;
}
const ReloadTimer = () =>{
    setInterval(Timer,1000);    
}
ReloadTimer();