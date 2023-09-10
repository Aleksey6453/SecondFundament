 export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    let resultArray = []
    for(let i=0; totalPages < i; i++){
        resultArray.push(i + 1)
    }
    console.log([resultArray])
    return resultArray
}


