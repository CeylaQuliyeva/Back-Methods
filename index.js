// console.log("menim ilk node-js-im");
const data = [
  {
    "id": 1,
    "title": "Gələcəyin Texnologiyaları",
    "content": "Bu məqalədə süni intellekt, kvant kompüterlər və digər yeniliklərə nəzər salınır.",
    "author": "Nərmin Əliyeva",
    "isPublished": true,
    "coverImage": "https://example.com/images/tech-future.jpg",
    "category": "Texnologiya",
    "summary": "Gələcəkdə həyatımızı dəyişəcək texnologiyaların icmalı."
  },
  {
    "id": 2,
    "title": "Azərbaycan Mətbəxinin Sirləri",
    "content": "Plovdan dolmaya, milli yeməklərin hazırlanma qaydaları və tarixi.",
    "author": "Elçin Quliyev",
    "isPublished": true,
    "coverImage": "https://example.com/images/azeri-food.jpg",
    "category": "Mədəniyyət",
    "summary": "Azərbaycan mətbəxinin ənənəvi yeməkləri haqqında ətraflı məlumat."
  },
  {
    "id": 3,
    "title": "Uğurlu Karyera Qurmaq",
    "content": "Karyeranızda uğur qazanmaq üçün izlənilməsi vacib olan addımlar.",
    "author": "Leyla Həsənova",
    "isPublished": false,
    "coverImage": "https://example.com/images/career-success.jpg",
    "category": "İnkişaf",
    "summary": "Karyera inkişafı üçün praktik məsləhətlər."
  },
  {
    "id": 4,
    "title": "Kitab Tövsiyələri: 2025",
    "content": "Bu il üçün oxunması tövsiyə edilən kitablar və səbəbləri.",
    "author": "Murad Məmmədov",
    "isPublished": true,
    "coverImage": "https://example.com/images/books-2025.jpg",
    "category": "Ədəbiyyat",
    "summary": "2025-ci ildə oxunmalı olan kitabların siyahısı."
  },
  {
    "id": 5,
    "title": "Startap Necə Qurulur?",
    "content": "İdeyadan bazara çıxmağa qədər olan bütün mərhələlər.",
    "author": "Aysel Hüseynova",
    "isPublished": true,
    "coverImage": "https://example.com/images/startup-guide.jpg",
    "category": "Biznes",
    "summary": "Startap qurmaq istəyənlər üçün ətraflı bələdçi."
  },
  {
    "id": 6,
    "title": "Sağlam Yaşamaq Üçün 10 Vərdiş",
    "content": "Hər gün tətbiq edərək sağlamlığınızı gücləndirə biləcəyiniz 10 vərdiş.",
    "author": "Kamran Əhmədov",
    "isPublished": true,
    "coverImage": "https://example.com/images/healthy-lifestyle.jpg",
    "category": "Sağlamlıq",
    "summary": "Daimi sağlam qalmaq üçün gündəlik vərdişlər."
  },
  {
    "id": 7,
    "title": "Rəqəmsal Marketinqin Əsasları",
    "content": "SEO, sosial media və e-poçt marketinqi haqqında təməl biliklər.",
    "author": "Fərid Qasımov",
    "isPublished": false,
    "coverImage": "https://example.com/images/digital-marketing.jpg",
    "category": "Marketinq",
    "summary": "Yeni başlayanlar üçün rəqəmsal marketinq bələdçisi."
  },
  {
    "id": 8,
    "title": "İqlim Dəyişiklikləri və Təsirləri",
    "content": "Qlobal istiləşmə və onun cəmiyyətə və təbiətə təsirləri.",
    "author": "Sevda Rəhimli",
    "isPublished": true,
    "coverImage": "https://example.com/images/climate-change.jpg",
    "category": "Elm",
    "summary": "İqlim dəyişikliyinin fəsadları və gələcək üçün risklər."
  },
  {
    "id": 9,
    "title": "Fotografiyanın Sirləri",
    "content": "Peşəkar foto çəkmək üçün biliklər və avadanlıq seçimləri.",
    "author": "Tural Hacıyev",
    "isPublished": true,
    "coverImage": "https://example.com/images/photography-tips.jpg",
    "category": "Sənət",
    "summary": "Fotoqrafiya ilə maraqlananlar üçün məsləhətlər və texnikalar."
  },
  {
    "id": 10,
    "title": "Uşaqlar üçün Təhsil Oyuncaqları",
    "content": "Əylənərək öyrənməyə imkan verən oyuncaqlar və onların faydaları.",
    "author": "Rəna Əliyeva",
    "isPublished": false,
    "coverImage": "https://example.com/images/educational-toys.jpg",
    "category": "Təhsil",
    "summary": "Uşaqların inkişafını dəstəkləyən oyuncaqların icmalı."
  }]

// for (let i = 0; i < category.length ; i++) {
// if (category[i].id > 5) {
//     console.log(category[i].name);
// }
// }


// EXPRESS 

// import express, { json } from 'express';
// const app = express()
// const port = 3000

// const db = ['Ceyla Quliyeva','Ilahe Ferzeliyeva']
// const code = ['Code','Academy']
// const Ilahe = ['Bu xanim Ceylanin qrup yoldasidir']
// const data = [ 
//     {
//       "id": 1,
//       "description": "Soft drinks coffees teas beers and ales",
//       "name": "Beverages"
//     },
// {"id": 2,
//     "description": "Sweet and savory sauces relishes spreads and seasonings",
//     "name": "Condiments"
//   },
//   {
//     "id": 3,
//     "description": "Desserts candies and sweet breads",
//     "name": "Confections"
//   }]

// app.use(json());

// app.get('/ad', (req, res) => {
//   res.send(db)
// })
// app.get('/code', (req, res) => {
//     res.send(code)
// })
// app.get('/ilahe', (req, res) => {
//     res.send(Ilahe)
// })

// app.delete('/ad', (req, res) => {
//     res.send('silindi')
// })

// app.post('/ad', (req, res) => {
//     res.send('yeni ad daxil etdim')
// })

// app.put('/ad', (req, res) => {
//     res.send('guncellendi')
// })

// app.get('/data/:id', (req, res) => {
//     const {id} = req.params
//     const element = data.find(x=>x.id === +id)
//     res.send(element)
// })


// app.get('/data', (req, res) => {
//     res.send(data)
// })


// app.post('/data', (req, res) => {
//     console.log(req.body);
//     data.push(req.body)
//     res.send('ugurla yarandi')
// })


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })




// LABOROTORIYA DERSI




// app.get('/blogs', (req, res) => {
//   res.send(data)
// })
// app.get('/blogs/:id', (req, res) => {
//   const { id } = req.params
//   const element = data.find(x => x.id === +id)
//   res.send(element)
// })

// app.delete('/blogs/:id', (req, res) => {
//   const { id } = req.params
//   const filtered = data.filter(x => x.id !== +id)
//   console.log(filtered);
//   res.send(filtered)
// })


// app.post('/blogs', (req, res) => {
//   data.push(req.body)
//   res.send(data)
// })

// let id = data.length++;
// app.post('/blogs', (req, res) => {
//   const { title } = req.body
//   id++
//   data.push({
//     title,
//     id
//   })
//   res.send(data)
// })

// app.put('/blogs/:id', (req, res) => {
//   const { id } = req.params
//   const { title } = req.body
//   const dataPut = data.findIndex(x => x.id === parseInt(id))
//   data[dataPut].title = title;
//   res.send(data[dataPut])
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })



// const obj ={
//     name: 'eflatun'
// }

// const {name} = obj



//            MUHAZIRE





import express, { json } from 'express';
import mongoose from 'mongoose';
const app = express()
const port = 3000


// const requestTime = function (req, res, next) {
//   req.requestTime = Date.now()
//   console.log(Date.now());
//   next()
// }

// app.use(requestTime);

// app.get('/num', (req, res) => {
//   res.send([1,2,3,4,5])
// })


// app.get('/num',myCounter, (req, res) => {
//   res.send([1,2,3,4,5])
// })

mongoose.connect('mongodb+srv://jeylasgbf206:jeylasgbf206@cluster0.1xsi3cl.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(() => console.log(' No Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// let sorguSayi = 0
// const myCounter = function (req, res, next) {
//   sorguSayi++
//   console.log(sorguSayi);
//   next()
// }


