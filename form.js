const emailReceiver = "faurezaa@gmail.com"

function showData() {
   let name = document.getElementById("input-name").value
   let email = document.getElementById("input-email").value
   let phone = document.getElementById("input-phone").value
   let subject = document.getElementById("input-subject").value
   let massage = document.getElementById("input-massage").value


if (name == "") {
    alert('Name input must no be empty')
}

if (email == "") {
    alert('Email input must no be empty')
}

if (phone == "") {
    alert('Phone input must no be empty')
}

if (massage == "") {
    alert('Massage input must no be empty')
}

if (subject == "") {
    alert('Gender input must no be empty')
}

console.log(name)
console.log(email)
console.log(phone)
console.log(massage)
console.log(subject)

let a = document.createElement('a')
a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello my name is${name}, ${massage}, this is my phone ${phone}, Plase contact me`
a.click()

}

