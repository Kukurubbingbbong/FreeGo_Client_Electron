export const DATASEND = "send";

export const datasend = (pName, dDay) => {
    return{
        type: DATASEND,
        pName,
        dDay
    }
}

export const NAMESEND = "namesend";

export const namesend = (selName) => {
    return{
        type: NAMESEND,
        selName
    }
}