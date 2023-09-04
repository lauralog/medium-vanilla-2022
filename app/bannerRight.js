const numToBool = (numIn) => {
    const bool = numIn <= 0.5 ? true : false;
    return bool;
};

/**
 * ------------------------------------------------------------------------------
 * Random Visibility Event
 * 
 * /** BANNER PICTURE
 * banner picture: div de varias rows
 * contiene divs que contienen letra m
 * estilo visibility
 * cada uno genera un math random cada 1s
 * si mr >= 0.5 opacity 0
 * si mr < 0.5 opacity 100
 * 
 * ------------------------------------------------------------------------------
*/


const changeVisibility = () => {
    let letters = document.querySelectorAll(".banner_right_item");

    for (const letter__ of letters) {
        let trigger = Math.random();
        let num = numToBool(trigger);

        if (num) {
            letter__.style.visibility = "hidden";
        } else {
            letter__.style.visibility = "visible";
        }
    }
};

const innitEvs = () => {
    setInterval(changeVisibility, 1000);
};
innitEvs();



/**
 * ------------------------------------------------------------------------------
 * Data banner_right
 * ------------------------------------------------------------------------------
*/

const bannerRight = [
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },

    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },

    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },

    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
    {
        text: "M",
    },
];
