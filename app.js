//render users in mainpage using map and create element
//take 10 cities randomnly assign this to user



let users = []

let mainContainer = document.getElementById('mainContainer')
render = () => {
    mainContainer.innerHTML = ''
    for(let i=0; i<users.length; i++)
    {
    let div = document.createElement('div')
    let name = document.createElement('div')
    let email = document.createElement('div')
    let places = document.createElement('div')

    div.classList.add('container')
    name.innerText = users[i].name
    email.innerText = users[i].email
    places.innerText = users[i].places

    mainContainer.appendChild(div)
    div.appendChild(name)
    div.appendChild(email)
    div.appendChild(places)
    
    }
}

function RegisterUser(){
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let places = ['Kochi','Mysore','Salem','Vellore','Madurai','Mangalore','Tirupati','Udupi','Hubli','Kollam']

    let ifEmailExist = users.filter((user)=>
    {
        return user.email == email.value
    })
    // console.log('EmailExist', ifEmailExist)

    let user = {
        name: name.value,
        email: email.value,
        places: places[Math.floor(Math.random() * places.length)],
    }
    if(ifEmailExist == 0)
    {
    users.push(user)
    render()
    }
    else{
        alert('Email already exist')
    }
}
