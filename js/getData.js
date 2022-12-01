export const getData = async url => {
    const resp = await fetch(url)
    if(resp.ok){
        return resp.json()
    }
}