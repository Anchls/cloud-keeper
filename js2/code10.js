const data=[{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
    "rate": 3.9,
    "count": 120
    }
    }]
    
    

function filterObjectKeys(data, selectedKeys) {
    return data.map(item => {
      const filteredItem = {};
      selectedKeys.forEach(key => {
        if (key.includes('.')) {
          const keys = key.split('.');
          let value = item;
          keys.forEach(subKey => {
            value = value ? value[subKey] : undefined;
          });
          if (value !== undefined) {
            filteredItem[key] = value;
          }
        } else {
          if (key in item) {
            filteredItem[key] = item[key];
          }
        }
      });
      return filteredItem;
    });
  }

  const selectedKeys = ['id', 'title',  'rating.rate', 'rating.count'];

const result = filterObjectKeys(data, selectedKeys);
console.log(result);