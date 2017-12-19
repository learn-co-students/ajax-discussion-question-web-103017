function doStuff(){
  const picture = document.getElementById('profile_picture')
  const name = document.getElementById('fullname')
  const email = document.getElementById('email')
  const street = document.getElementById('street')
  const city = document.getElementById('city')
  const state = document.getElementById('state')
  const postcode = document.getElementById('postcode')
  const phone = document.getElementById('phone')
  const cell = document.getElementById('cell')
  const dateOfBirth = document.getElementById('date_of_birth')

  fetch('https://randomuser.me/api/').then(resp => resp.json()).then(json => {

    // console.log(json[0])
    picture.src = `${json.results[0].picture.medium}`
    name.innerText = `${json.results[0].name.first} ${json.results[0].name.last}`
    email.innerText = `${json.results[0].email}`
    street.innerText = `${json.results[0].location.street}`
    city.innerText = `${json.results[0].location.city}`
    state.innerText = `${json.results[0].location.state}`
    postcode.innerText = `${json.results[0].location.postcode}`
    phone.innerText = `${json.results[0].phone}`
    cell.innerText = `${json.results[0].cell}`
    dateOfBirth.innerText = `${json.results[0].dob}`
  })
}

document.querySelector('button.btn-primary').addEventListener('click', doStuff)
