const wrapper = document.querySelector('.wrapper')

console.log(wrapper)

fetch('https://fakerapi.it/api/v1/products?_quantity=10')
  .then((res) => res.json())
  .then((data) => {
    if (data.code === 200) {
      console.log(data.data)
      data.data.forEach((products) => {
        wrapper.innerHTML += `<div class="wrapper__card"><div class="wrapper__card_name">${products.name}</div> 
        <div class="wrapper__card_description">${products.description}</div> </div>
       `
      })
    }
  })
