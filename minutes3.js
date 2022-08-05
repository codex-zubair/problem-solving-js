function timerHourMinutesSecond(time)
{

    var time1 = time[0];
    var time2 = time[1];
    var time3 = time[2];

    return console.log("||||first-time " + time1+" second " +parseInt(time1/60)+" minutes " + parseInt(time1/60/60 )+" hour " + "||||Second-time " + time2+" second " +parseInt(time2/60) +" minutes " + parseInt(time2/60/60) +" hour "  + "|||Third-time " + time3+" second " +parseInt(time3/60) + " minutes " + parseInt(time3/60/60) +" hour " )
}

let time = [50000,20000,30000];
timerHourMinutesSecond(time);