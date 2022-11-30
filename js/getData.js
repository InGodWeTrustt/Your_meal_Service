export const getData = async url => {
    const resp = await fetch(url)
    // console.log('resp: ', resp);
    if(resp.ok){
        return resp.json()
    }
}