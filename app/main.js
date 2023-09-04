

window.addEventListener("load", () => {
    renderContent()
})

const renderContent = () => {
    renderBanner(),
    renderBannerRight(),
    renderHeader(),
    renderMenu(),
    renderTrending(),
    renderPosts(),
    headerColorChanger(),
    // renderCategoryLabels(),
    renderFooterLabels(),
    responsiveMenu(),
    renderTags()
}


const renderHeader = () => {
    const html = `
    <div class="header_holder"
    style="height:${headerData.height}px";
    >
        <div class="header_logo">
            <img src="/assets/img/logo.svg" alt="">
        </div>

        <div class="menu">
            <div class="menu_holder">
                <ul class="header_menu_items"></ul>
            </div>
        </div>
    </div>
    `
    const $headerHolder = document.querySelector(".header") 
    $headerHolder.innerHTML = html 
} 

const renderMenu = () => { 
    let html = ``

    for (const menuItem__ of headerData.menu) {
        
        html += `
            <li class="header_menu_item ${activeBtn(menuItem__.active)}"
            shows="${menuItem__.smallWidth}"> 
                <a href="${menuItem__.href}">
                    ${menuItem__.label}
                </a>
            </li>
        `
    }

    const menuItems__ = document.querySelector(".header_menu_items") 
    menuItems__.innerHTML = html
}

const renderBannerRight = () => {
    let html = ``

    for (const bannerRightElement__ of bannerRight) {
        
        html += `
            <li class="banner_right_item"> 
                <span>${bannerRightElement__.text}</span>
            </li>
        `
    }

    const $bannerRight = document.querySelector(".banner_right_items") 
    $bannerRight.innerHTML = html
}




const renderBanner = () => {
    // 1. construir un html válido
    const html = `
        <div class="banner" 
        style="background-color:${bannerData.backgroundColor};
        margin-top:${headerData.height}px"; 
        >
            <div class="banner_holder">
                <div class="banner_left">
                    <h1 class="banner_title">${bannerData.title}</h1>
                    <p class="banner_subtitle">${bannerData.subtitle}</p>
                    <a href="${bannerData.button.href}" 
                    class="banner_cta ${activeBtn(bannerData.button.active)}">
                        ${bannerData.button.text}
                    </a>
                </div>

                <div class="banner_right">
                    <!--
                    <img src="${bannerData.picture.pic}" alt="${bannerData.picture.alt}"
                    style="width: ${bannerData.picture.width}px;"> -->
                    <div class="banner_right_holder">
                        <ul class="banner_right_items">
                            <!-- renderbannerRight() -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `

    // 2. inyectar el html en el html document
    const $bannerHolder = document.querySelector(".banner") // HTML element
    $bannerHolder.innerHTML = html // adjudicamos a su HTML el contenido

}

const renderTrending = () => {
    // 1. objeto const o array let
    let html = ``
    // construir html
    for (trend__ of trendingData) {
        html += `
            <article class="trending_post">
                <div class="trending_id">
                    ${trend__.id}
                </div>
                <div class="trending_content">
                    <header class="post_header">
                        <div class="user_pic"><img src="${trend__.user.pic}" alt="${trend__.user.name}"></div>
                        <div class="user_name">
                            <span class="bold">${trend__.user.name}</span>
                            in 
                            <span class="bold">${trend__.section}</span>
                        </div>
                    </header>
                    <div class="post_body">
                        <div class="post_title">${trend__.title}</div>
                    </div>
                    <footer class="post_footer">
                        <div class="post_date">${dateFormatterTrending(trend__.date)}</div>
                        <span> * </span>
                        <div class="post_time_to_read">${trend__.minutesToRead} minutes to read</div>
                        ${renderMembersOnly(trend__.membersOnly)}
                    </footer>
                </div>
            </article>
        `
    }
    // Inyectamos HTML
    const $trendingData = document.querySelector(".trending_posts_holder")
    $trendingData.innerHTML = html
}

const renderPosts = () => {
    let html = ``

    for (post__ of postData) {
        html += `
            <article class="post">
                <div class="post_content">
                    <header class="post_header">
                        <div class="user_pic"><img src="${post__.user.pic}" alt="${post__.user.name}"></div>
                        <h4 class="user_name">${post__.user.name}</h4>
                    </header>
                    <div class="post_body">
                        <div class="post_title">${post__.title}</div>
                        <div class="post_summary">${post__.summary}<br>${post__.text}</div>
                    </div>
                    <footer class="post_footer">
                        <div class="post_footer_left">
                            <div class="post_date">${dateFormatter(post__.date)}</div>
                            <div class="post_time_to_read">${post__.minutesToRead} min to read</div>
                            <div class="post_membership">
                                ${renderMembersOnly(post__.membersOnly)}
                            </div>
                            <div class="labels">
                                ${renderLabels(post__.labels)} 
                            </div>
                        </div>
                        <div class="post_footer_right">
                            <div class="post_bookmark">
                                <i class="bi bi-bookmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <picture class="post_picture">
                    <img src="${post__.picture.src}" alt="${post__.title}">
                </picture>
            </article>
        `
    }

    const $postData = document.querySelector(".posts_holder")
    $postData.innerHTML = html
}

const renderTags = () => {
    const labels = []
    for (const post__ of postData) {
        for (const label of post__.labels) {
            if (!labels.includes(label)) {
                labels.push(label)
            }
        }
    }

    let html = ``
    for (const label__ of labels) {
        
        html += `
            <li class="category_label"> 
                <a href="${label__}">
                    ${label__}
                </a>
            </li>
        `
    }

    const labelItems__ = document.querySelector(".category_labels") 
    labelItems__.innerHTML = html
}

const renderFooterLabels = () => { 
    let html = ``

    for (const footerDataItem__ of footerData) {
        
        html += `
            <li class="footer_label"> 
                <a href="${footerDataItem__.href}">
                    ${footerDataItem__.title}
                </a>
            </li>
        `
    }

    const footerLabelItems__ = document.querySelector(".footer_labels") 
    footerLabelItems__.innerHTML = html
}