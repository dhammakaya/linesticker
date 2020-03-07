Line Sticker Generator
====
This is a simple project to generator line sticker from url.

### Installation
install dependency packages 
```
npm install
```
running as development with nodemon
```
npm run start:dev
```
running in production
```
npm run start:start
```
### Usage
open web browser on ``http://localhost:3000/public`` it will redirect to ``http://localhost:3000/public/stickerid.html`` 
#####Api
Generate Line Sticker via API Call

**url**: ``http://localhost:3000/api/generate-sticker``

**query string**
```
stickerUrl: String
saved: Boolean 
```



<h3>Authors or Acknowledgments</h3>
<ul>
  <li>Vladimir Carrer</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License
