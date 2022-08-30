const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link){
    link.addEventListener("click",function (x){
        x.preventDefault()
        const href = link.getAttribute("href")

        if(href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            } )
        
        if(href !== "#" && href.startsWith('#')){
            const sectionElement = document.querySelector(href)
            sectionElement.scrollIntoView({behavior:"smooth"})
         } 
        })
    })
