/*
{
  'platform': '',
  'name': '',
  'price': '$',
  'delivery': '$',
  'total': '$',
  'rating': ,
  'image': '',
  'colors': [],
  'link': '',
  'sold_by': '',
  'in': ''
}
*/

(async () => {
  const rawResponse = await fetch('http://localhost:3000/product', {
    method: 'POST',
    headers: {'Content-Type': 'application/json', 'Access-Control-Request-Private-Network': true},
    body: JSON.stringify({
      slug: 'mens-penzssss',
      "id": 12345,
      "name": "TextBook",
      image: []
    })
  });
  const content = await rawResponse.json();

  console.log(content);
})()

const categories = document.querySelectorAll('.categories .category')
let active = categories[0]

categories.forEach(button => {
  button.addEventListener('click', () => {
    if (button != active) {
      active.classList.remove('active')
      button.classList.add('active')
      active = button
    }
  })
})

const controls = document.querySelectorAll('.controls .control')
let activeC = controls[0]

controls.forEach(button => {
  button.addEventListener('click', () => {
    if (button != activeC) {
      activeC.classList.remove('active')
      button.classList.add('active')
      activeC = button
    }
  })
})

const nested_controls = document.querySelectorAll('.controls .nested_control')
let activeNC = false

nested_controls.forEach(button => {
  button.addEventListener('click', () => {
    if (!nested_controls.classList.includes('active')) {
      button.parentNode.childNodes.forEach(sib => sib.classList.remove('active'))
      button.classList.add('active')
    }
  })
})






const countries = ['argentina', 'spain', 'us']

const bishts = {
  kids: [],
  adults: [
    {
      platform: 'amazon',
      name: "Desert Dress Black Bisht Cloak Arab Dress Thobe Saudi Mens Robe Eid",
      image: '61fUGvCxaBL._AC_UY879_.jpg',
      colors: ['black'],
      sold_by: 'Desert Dress Ltd',
      link: 'https://amzn.to/3VlVz2k',
      countries: [
        {
          name: countries[0],
          price: '$40.08',
          delivery: '$18.90',
          total: '$58.98',
          rating: 3.6
        },
        {
          name: countries[1],
          price: '$40.08',
          delivery: '$12.90',
          total: '$52.98',
          rating: 3.6
        },
        {
          name: countries[2],
          price: '$40.08',
          delivery: '$18.90',
          total: '$58.98',
          rating: 3.6
        },
      ]
    },
    {
      platform: 'amazon',
      name: "Desert Dress Brown Bisht Cloak Arab Dress Thobe Saudi Mens Robe Eid (Size: Adult)",
      price: '$40.08',
      delivery: '$18.90',
      total: '$58.98',
      rating: 4.3,
      image: '51iUqoyzJpL._AC_UY879_.jpg',
      colors: ['brown'],
      link: 'https://amzn.to/3PRdZGR',
      sold_by: 'Desert Dress Ltd',
      in: ['argentine', 'spain', 'us']
    },
    {
      platform: 'amazon',
      name: "Desert Dress BNWT White Arab Coat Cloak Robe Party Dress Sheik Bisht",
      price: '$40.08',
      delivery: '$18.90',
      total: '$58.98',
      rating: 3.9,
      image: '41scwQ8P6aL._AC_UY879_.jpg',
      colors: ['white'],
      link: 'https://amzn.to/3vgshHC',
      sold_by: 'Desert Dress Ltd',
      in: ['argentine', 'spain', 'us']
    },
    {
      platform: 'amazon',
      name: "Al Aseel Men's Bisht Cloak Bisht thobe Eid",
      price: '$49.99',
      delivery: '$18.90',
      total: '$68.89',
      rating: 3.8,
      image: '31w0KHiMY5L._AC._SX._UX._SY._UY_.jpg',
      colors: ['brown', 'off-white'],
      link: 'https://amzn.to/3PPgMQZ',
      sold_by: 'Desert Dress Ltd',
      in: ['argentine', 'spain', 'us']
    },
    {
      platform: 'amazon',
      name: "",
      price: '$',
      delivery: '$',
      total: '$',
      rating: 4,
      image: '',
      deliver_date: '',
      colors: [],
      link: '',
      sold_by: '',
      in: ['spain', 'spain', 'us']
    }
  ]
}