function coloured(signal) {



    switch (signal) {
        case "yellow":

            {
                console.log("yellow- Signal:" + "If you notice a yellow coloured traffic signal, you should stop.");
                break;
            }


        case "green":
            {
                console.log("green-Signal" + "If you notice a green coloured traffic signal, you should cross the road.");
                break;
            }


        case "red":
            {
                console.log("In this situation, if you try to cross the road, you may be in danger.");
                break;
            }





        default:
            console.log("not Working");

    }




}

coloured("green");


