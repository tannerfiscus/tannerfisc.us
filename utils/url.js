export const buildAPIUrl = uri => {

    if (process.env.NODE_ENV === 'production') {
        return `https://app.tannerfiscus.com/api${uri}`
    }

    return `http://localhost:8888/tf-admin/api${uri}`

}

export const buildAPIStaticUrl = uri => {

    if (process.env.NODE_ENV === 'production') {
        return `https://app.tannerfiscus.com/static${uri}`
    }

    return `http://localhost:8888/tf-admin/static${uri}`

}

export const buildProjectImageURL = uri => {

    if (process.env.NODE_ENV === 'production') {
        return `https://app.tannerfiscus.com/static/portfolio/graphics/${uri}`
    }

    return `http://localhost:8888/tf-admin/static/portfolio/graphics/${uri}`

}

export default {
    buildAPIUrl,
    buildAPIStaticUrl,
    buildProjectImageURL,
}
