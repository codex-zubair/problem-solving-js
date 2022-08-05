function checkLeapYear(year) {

    for (i = 0; i < year.length; i++) 
    {
        if(year[i]%4 == 0)
        {
            console.log("leapYear :" + year[i]);
        }
    }

}


year = [2001, 1202, 2322, 2000, 2200, 2222];

checkLeapYear(year);