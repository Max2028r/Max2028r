async function furniture() 
{
    fetch("http://localhost:3000").then(
        (res)=>{
            return res.text()
        }
    ).then((text)=>{
        let teaArray = JSON.parse(text)
        teaArray.forEach(el => {

            id = `${el.id}`
            title =`${el.title}`
            type = `${el.type}`
            img = `${el.image_link}`

            furniture(id, title, type, img)
        })
    })
}

furniture();