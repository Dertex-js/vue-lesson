import axios from 'axios'

axios({
  method: 'get',  // Можно и не указывать get, он по умолчанию
  url: "https://somepage.ru"
})

// А что, если мы хотим передать гет запросом какие либо параметры? Они выглядят примерно так
axios({
  method: 'get',
  url: "https://somepage.ru?q=какойтотекст&lat=54.234223&lon=34.234234"
})

// Вставлять их в урл каждый раз неудобно, так что можно воспользоваться params в axios

axios({
  method: 'get',  // Можно и не указывать get, он по умолчанию
  url: "https://somepage.ru",
  params: {
    q: 'какойтотекст',
    lat: 54.234223,
    lon: 34.234234
  }
})

// POST запросы

axios({
  method: "POST",
  url: "https://somepage.ru",
  data: {                        // Эти данные будут теперь не в строке, а в payload (на вкладке network в девтулзах)
    q: 'какойтотекст',
    lat: 54.234223,
    lon: 34.234234
  }
})