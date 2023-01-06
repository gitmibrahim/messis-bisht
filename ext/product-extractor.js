(() => {
  const descriptionLis = document.querySelectorAll('.a-list-item.a-size-base.a-color-secondary')
  const description = Array.from(descriptionLis).map(li => li.textContent)
  
  const productName = document.querySelector('#productTitle').textContent.trim()
  
  const kidSubStrings = ['kid', 'kids', 'child', 'children', 'young', 'boy', 'infant', 'baby', 'طفل', 'أطفال', 'اطفال', 'أطفالي', 'اطفالي']
  const productAge = kidSubStrings.some(sub => productName.toLowerCase().includes(sub)) ? 'kids' : 'adults'
  
  const colorVariations = document.querySelectorAll('[id^="color_name_"] img')
  const productColors = []
  if (colorVariations.length) {
    colorVariations.forEach(cv => productColors.push(cv.getAttribute('alt').split(' ').join('').toLowerCase()))
  }
  
  const sizeVariations = document.querySelectorAll('span.a-size-base.swatch-title-text-display.swatch-title-text')
  const productSizes = []
  if (productSizes.length) {
    sizeVariations.forEach(sv => productSizes.push(sv.textContent))
  }
  
  const deliveryAmount = document.querySelector('[data-csa-c-delivery-price]')
  
  document.querySelector('[data-amzn-ss-show-text-popover] a').addEventListener('click', () => {
    setTimeout(async () => {
      const affLink = window.getSelection().toString()
  
      toDataURL = async (url) => await fetch(url).then(res => res.blob())
      
      download = async () => {
        const a = document.createElement('a');
        a.href = await toDataURL(document.querySelector('#landingImage').src);
        a.download = document.querySelector('#landingImage').src.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
      await download()
  
      const product = {
        slug: location.pathname.split('/')[1],
        source: location.host.split('.')[1],
        age: productAge,
        colors: productColors,
        sizes: productSizes,
        description,
        affLink,
        "@context": "https://schema.org/",
        "@type": "Product",
        name: productName,
        image: [
          '../bishts/' + document.querySelector('li.image.item.itemNo0.maintain-height.selected img').src.split('/').pop()
        ],
        offers: {
          "@type": "AggregateOffer",
          price: document.querySelector('.a-price span.a-offscreen').textContent.substring(1),
          priceCurrency: "USD",
        },
        brand: {
          "@type": "Brand",
          name: document.querySelector('#bylineInfo').textContent.substring(7)
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: document.querySelector('#acrPopover .a-icon-alt').textContent.slice(0, -15),
          reviewCount: document.querySelector('#acrCustomerReviewText').textContent.match(/\d/g).join('')
        },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: deliveryAmount ? deliveryAmount.getAttribute('data-csa-c-delivery-price').substring(1) : null,
            currency: "USD"
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: "US"
          }
        }
      }
  
      // fetch('/product', {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify(product)
      // })
      console.log(product)
    }, 1000)
  })
  
  document.querySelector('[data-amzn-ss-show-text-popover] a').click()
})()  

