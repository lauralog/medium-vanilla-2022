const activeBtn = (boolIn) => {
    const classActive = boolIn? "active" : ""
    return classActive
}


/**------------------------------------------------------------------------------
 * 
 * DATE FORMATTERS
 * 
 * ------------------------------------------------------------------------------
*/

const dateFormatter = (dateIn) => {
    const monthNames = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

    const d = dateIn.getDate()
    const m = monthNames[dateIn.getMonth()]
    const y = dateIn.getFullYear()
    return formattedDate = `${d} ${m} ${y}`
}


const monthShort = (dateIn) => {
    const m = dateIn.getMonth()
    // Duda!!! mejor un switch?
    if (m == 0) {
        return "Jan"
    }
    if (m == 1) {
        return "Feb"
    }
    if (m == 2) {
        return "Mar"
    }
    if (m == 3) {
        return "Apr"
    }
    if (m == 3) {
        return "May"
    }
    if (m == 4) {
        return "Jun"
    }
    if (m == 5) {
        return "Jul"
    }
    if (m == 6) {
        return "Aug"
    }
    if (m == 7) {
        return "Sep"
    }
    if (m == 8) {
        return "Apr"
    }
    if (m == 9) {
        return "Oct"
    }    
    if (m == 10) {
        return "Nov"
    }    
    if (m == 11) {
        return "Dec"
    }   

}

const dateFormatterTrending = (dateIn) => {       
    const d = dateIn.getDate()
    const m = monthShort(dateIn)

    return formattedDate = `${m} ${d}`
}


/**------------------------------------------------------------------------------
 * 
 * CONTENT RENDERERS
 * 
 * ------------------------------------------------------------------------------
*/

const renderMembersOnly = (boolIn) => { // true
    let html = ``
    if (boolIn) {
        html = `
            <div class="post_membership">
                <div class="post_membership">
                    <i class="bi bi-star"></i>
                </div>
            </div>
        `
    }
    return html
}

const renderLabels = (arrayIn) => { // tags
    let html = ``
    for (const item of arrayIn) {
        html += `
            <div class="label">${item}</div>
        `
    }
    return html
}

/**------------------------------------------------------------------------------
 * 
 * HEADER COLOR FNS
 * 
 * ------------------------------------------------------------------------------
*/

const headerColorChanger = () => {
    const header = document.querySelector(".header")

    window.addEventListener("scroll", () => {
        const bannerHeight = document.querySelector(".banner").clientHeight 
        if (scrollY >= bannerHeight) {
            header.classList.add("white")
        } else {
            header.classList.remove("white")
        }
    })
}


/**-------------------------------------------------------------------------------------------
 * 
 *  RESPONSIVE MENU
 * 
 * -------------------------------------------------------------------------------------------
*/

const responsiveMenu = () => {
    const menuItems = document.querySelectorAll(".header_menu_item") 

    for (const menuItem__ of menuItems) {       
        const shows = menuItem__.getAttribute("shows") === "true"

        window.addEventListener('resize', () => {
            const windowWidth = window.innerWidth
            const small = windowWidth <= 800 // bool

            if ( small && !shows) {
                menuItem__.classList.add("hidden")

            } else {
                menuItem__.classList.remove("hidden")
            }
        }); 
    }
}


/**---------------------------------------------------------------------------------
 * 
 * RESPONSIVE BANNER TITLE
 * 
 * ---------------------------------------------------------------------------------
*/

const h1GradualFontSize = () => {
    const h1 = document.querySelector(".banner_title")
    const x = window.innerWidth * .1
    h1.style.fontSize = x + "px"
    h1.style.lineHeight = x + "px"
}
const innitResizeEvs = () => {
    addEventListener("resize", h1GradualFontSize)
}
innitResizeEvs();

