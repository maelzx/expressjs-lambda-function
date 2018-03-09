## expressjs-lambda-function

where to start if want to use expressjs as aws lambda function
---
Malay Language / Bahasa Melayu

Tujuan: Sebagai panduan untuk masa hadapan bila dah lupa bagaimana nak buat expressjs as aws lambda function.

Pertama sekali, fork atau download repo ni.
Lepas tu run command `npm install` untuk install apa yang patut.
Lepas tu zipkan semua file ni.
Upload ke Lambda.
Dan test!

## Kenapa? Apakah?

Ok untuk menjawab persoalan tersebut. Kita terangkan sikit apa benda semua ni ....

Boleh rujuk file app.js

1. Sebenarnya `const axios = require('axios');` pada baris 2 tu tak perlu, tapi sebab main code base pakai ni, dah tercommit sekali.
2. `require('dotenv').config()` pada baris 6 ni sebab kita nak pakai dotenv. Pakailah, akan memudahkan kerja di masa akan datang.
3. `const bodyParser = require('body-parser');` pada baris 4 & `app.use(bodyParser.json());` pada baris 10 katanya by default tak include sekali dah macam dulu, so kena define sendiri. Ini untuk baca 
