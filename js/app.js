async function getRandomUser(){
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    // console.log(data);
    const user = data.results[0];
    console.log(user);
    displayUser(user)
}

function displayUser(user){
    const image = document.getElementById("user-img");
    const address = document.getElementById("street-address");
    const post = document.getElementById("post-code");
    const streetName = document.getElementById("street-name");
    const mr = document.getElementById("mr");
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const age = document.getElementById("age");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const country = document.getElementById("country");
    const birthday = document.getElementById("birthday");
    const gender = document.getElementById("gender");
    const phone = document.getElementById("phone");
    const mail = document.getElementById("mail");

    image.setAttribute('src',`${user.picture.large}`);
    address.innerText = `${user.location.street.number}`;
    post.innerText = `${user.location.postcode}`;
    streetName.innerText = `${user.location.street.name}`;
    mr.innerText = `${user.name.title}`;
    firstname.innerText = `${user.name.first}`;
    lastname.innerText = `${user.name.last}`;
    age.innerText = `${user.dob.age}`;
    city.innerText = `${user.location.city}`
    state.innerText = `${user.location.state}`
    country.innerText = `${user.location.country}`
    birthday.innerText = `${user.dob.date}`
    gender.innerText = `${user.gender}`
    phone.innerText = `${user.cell}`
    mail.innerText = `${user.email}`
}








document.getElementById('btn').addEventListener('click', ()=>{
    getRandomUser();
})