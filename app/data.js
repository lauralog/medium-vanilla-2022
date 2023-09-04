// colors
const yellow = "#FFC017"
const black = "#191919"
const grey = "#E6E6E6"
const white = "#FFFFFF"


//1º HEADER
const headerData = {
    height: 75,
    menu: [
        {
            label: "Our story",
            href: "#", 
            active: false,
            smallWidth: false,
        },
        {
            label: "Membership",
            href: "#", 
            active: false,
            smallWidth: false,
        },
        {
            label: "Write",
            href: "#", 
            active: false,
            smallWidth: false,
        },
        {
            label: "Sign In",
            href: "#", 
            active: false,
            smallWidth: true,
        },
        {
            label: "Get started",
            href: "#", 
            active: true,
            smallWidth: true,
        },
    ]
};



//2º BANNER
const bannerData = {
    title: "Stay curious.",
    subtitle:
        "Discover stories, thinking, and expertise from writers on any topic.",
    backgroundColor: yellow, 
    button: {
        text: "Start reading",
        href: "https://medium.com/",
        active: true,
    },
    picture: {
        pic: "/assets/img/user_pic_01.png",
        alt: "Banner data picture alt",
        width: 460,
    }
};


//3º TRENDING_SECTION
const trendingData = [
    {
        id: "01",
        user: {
            pic: "assets/img/user_pic_01.png",
            name: "Nombre Apellido",
            href: "#", 
        },
        section: "Progress",
        title: "Trending Post 01",
        membersOnly: false,
        date: new Date(2022, 8, 30),
        minutesToRead: 6, // + ` minutes to read`,
        href: "#",
    },
    {
        id: "02",
        user: {
            pic: "/assets/img/user_pic_01.png",
            name: "Nombre Apellido",
            href: "#", 
        },
        section: "Productivity",
        title: "Trending Post 02",
        membersOnly: false,
        date: new Date(2022, 11, 22),
        minutesToRead: 7, // + ` minutes to read`,
        href: "#",
    },
    {
        id: "03",
        user: {
            pic: "assets/img/user_pic_01.png",
            name: "Nombre Apellido",
            href: "#", 
        },
        section: "Writing",
        title: "Trending Post 03",
        membersOnly: false,
        date: new Date(2022, 6, 14),
        minutesToRead: 12, // + ` minutes to read`,
        href: "#",
    },
    {
        id: "04",
        user: {
            pic: "/assets/img/user_pic_01.png",
            name: "Nombre Apellido",
            href: "#", 
        },
        section: "Machine Learning",
        title: "Trending Post 04",
        membersOnly: true,
        date: new Date(2022, 0, 07),
        minutesToRead: 4, // + ` minutes to read`,
        href: "#",
    },
    {
        id: "05",
        user: {
            pic: "/assets/img/user_pic_01.png",
            name: "Nombre Apellido",
            href: "#", 
        },
        section: "Programing",
        title: "Trending Post 05",
        membersOnly: true,
        date: new Date(2022, 0, 07),
        minutesToRead: 7, // + ` minutes to read`,
        href: "#",
    },
    {
        id: "06",
        user: {
            pic: "/assets/img/user_pic_01.png",
            name: "Nombre Apellido",
            href: "#", 
        },
        section: "Progress",
        title: "Trending Post 06",
        membersOnly: true,
        date: new Date(2022, 0, 07),
        minutesToRead: 7, // + ` minutes to read`,
        href: "#",
    },
];

//4º POSTS_SECTION
const postData = [
    {
        id: "", 
        user: {
            pic: "/assets/img/user_pic_01.png",
            name: "Gema Gómez",
            href: "#",
        },
        section: "Progress",
        title: "Duis aliquet vel magna in viverra",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet vel magna in viverra. Fusce laoreet lobortis enim eget fermentum. Suspendisse euismod interdum dolor, eget ultrices sapien commodo eu.", 
        text: "Lorem ipsum",
        date: new Date(2008, 12, 14),
        minutesToRead: 7,
        href: "#",
        membersOnly: true,
        labels: "", 
        picture: {
            src: "https://picsum.photos/300/200",
            alt: "aadasdas00" // -> post.title
        },
        labels: ["Machine Learning", "Progress"], // tags
    },
    {
        id: "", 
        user: {
            pic: "https://picsum.photos/350/200",
            name: "Lara González",
            href: "#",
        },
        section: "Writing",
        title: "5 consejos para un buen copy",
        summary: "Claves para ser cppywriter", 
        text: "Suspendisse potenti. In dapibus, justo quis ultricies commodo, nisl mauris semper enim, nec interdum velit velit eu nibh.",
        date: new Date(2022, 07, 20),
        minutesToRead: 7,
        href: "#",
        membersOnly: true,
        labels: "", 
        picture: {
            src: "https://picsum.photos/400/200",
            alt: "blabla"
        },
        labels: ["Writing", "Progress"], // tags
    },
    {
        id: "", 
        user: {
            pic: "https://picsum.photos/250/200",
            name: "Pepe Palomino",
            href: "#",
        },
        section: "Technology",
        title: "postData title",
        summary: "Post summary", 
        text: "postData text",
        date: new Date(2022, 01, 14),
        minutesToRead: 7,
        href: "#",
        membersOnly: true,
        labels: "", 
        picture: {
            src: "https://picsum.photos/700/200",
            alt: "blabla"
        },
        labels: ["Progress", "Relationships"], // tags
    },
    {
        id: "", 
        user: {
            pic: "https://picsum.photos/550/200",
            name: "Irene Casado",
            href: "#",
        },
        section: "Data Science",
        title: "postData title",
        summary: "Post summary bibendum nulla non hendrerit malesuada.", 
        text: "Donec euismod dui quis velit euismod blandit.",
        date: new Date(2020, 08, 14),
        minutesToRead: 7,
        href: "#",
        membersOnly: true,
        labels: "", 
        picture: {
            src: "https://picsum.photos/600/200",
            alt: "aadasdas00" // -> post.title
        },
        labels: ["Data Science"], // tags
    },
    {
        id: "", 
        user: {
            pic: "https://picsum.photos/587/200",
            name: "Samuel Arcos",
            href: "#",
        },
        section: "Productivity",
        title: "postData title",
        summary: "Post summary", 
        text: "postData text",
        date: new Date(1997, 05, 01),
        minutesToRead: 7,
        href: "#",
        membersOnly: true,
        picture: {
            src: "https://picsum.photos/582/200",
            alt: "blabla"
        },
        labels: ["Technology", "Productivity"], // tags
    },
    {
        id: "", 
        user: {
            pic: "https://picsum.photos/258/200",
            name: "Lola Garbo",
            href: "#",
        },
        section: "Technology",
        title: "postData title",
        summary: "Post summary", 
        text: "postData text",
        date: new Date(2022, 10, 14),
        minutesToRead: 7,
        href: "#",
        membersOnly: true,
        picture: {
            src: "https://picsum.photos/482/200",
            alt: "blabla"
        },
        labels: ["Programing", "Progress", "Politycs"], // tags
    }
]

//5º LABELS_SECTION
const labelData = [
    {
        title:"Programing",
        href:"",
    },
    {
        title:"Data Science",
        href:"",
    },
    {
        title:"Self Improvement",
        href:"",
    },
    {
        title:"Technology",
        href:"",
    },
    {
        title:"Machine Learning",
        href:"",
    },
    {
        title:"Writing",
        href:"",
    },
    {
        title:"Relationships",
        href:"",
    },
    {
        title:"Productivity",
        href:"",
    },
    {
        title:"Politics",
        href:"",
    },
]

const footerData = [
    {
        title:"Help",
        href:"",
    },
    {
        title:"Status",
        href:"",
    },
    {
        title:"Writers",
        href:"",
    },
    {
        title:"Blog",
        href:"",
    },
    {
        title:"Carreers",
        href:"",
    },
    {
        title:"About",
        href:"",
    },    
    {
        title:"Terms",
        href:"",
    },
    {
        title:"Privacy",
        href:"",
    },
]