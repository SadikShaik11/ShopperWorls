
const dispatch = async (fn, params, body, token) => {
    return await new Promise(async (resolve) => {
        return resolve(fn(params).then((result) => result).catch((err) => err.message))
    }).then((result) => result).catch((err) => err.message)
}

export default dispatch