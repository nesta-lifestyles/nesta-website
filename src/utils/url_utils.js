


export const isUrlBelongsNestaDesign = (url) => {
    if(url.pathname.includes("/design")) {
        return true
    }
    return false
}

export const isUrlBelongsNestaDecor = (url) => {
    if(url.pathname.includes("/decor")) {
        return true
    }
    return false
}

export const isUrlBelongsToCheckout = (url) => {
    if(url.pathname.includes("/cart/checkout")) {
        return true
    }
    return false
}

export const getNestaDesignName = (url) => {
    if(url.pathname.includes("/design")) {
        if(url.pathname.split("/").length>1) {
            return url.pathname.split("/")[url.pathname.split("/").length-1]
        }
        return undefined
    }
    return undefined
}


export const isUrlBelongsNestaVille = (url) => {
    if(url.pathname.includes("/ville")) {
        return true
    }
    return false
}

export const getNestaVilleName = (url) => {
    if(url.pathname.includes("/ville")) {
        if(url.pathname.split("/").length>1) {
            return url.pathname.split("/")[url.pathname.split("/").length-1]
        }
        return undefined
    }
    return undefined
}
