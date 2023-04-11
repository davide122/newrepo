

export const addTocart =(payload)  => {
    return {
        type:"ADD-JOBS-ON-FAVOURITE",
        payload
    }
}

export const removeTocart =(index)  => {
return{
    type:"REMOVE_TO_CART",
    payload:index,
}
}