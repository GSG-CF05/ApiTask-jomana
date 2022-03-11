let app =document.querySelector('#root')
let header =document.createElement('h1')
let images =document.createElement('div')
let buttonHolder =document.createElement('div')
let button =document.createElement('button')
let image = document.createElement('img')

header.innerText="Dog pictures"
app.appendChild(header)
buttonHolder.appendChild(button)
app.appendChild(images)
app.appendChild(buttonHolder)
images.appendChild(image)

button.innerText="Next image"
button.setAttribute('class','button')
images.setAttribute('class','images')

button.addEventListener('click',getRandomDog)

function getRandomDog(){
    fetch('https://random.dog/woof.json')
    .then(res => res.json())
    .then( (data) => {
        if(data.url.includes('.mp4')){
            getRandomDog() 
        }else{
            image.setAttribute('src',data.url)
        }
    })
}