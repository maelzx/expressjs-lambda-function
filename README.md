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
3. `const bodyParser = require('body-parser');` pada baris 4 & `app.use(bodyParser.json());` pada baris 10 katanya by default tak include sekali dah macam dulu, so kena define sendiri. Ini untuk baca request body bila kita buat HTTP POST ke url yang kita buat tu.
4. Lepas tu dah continue normal expressjs code macam biasa.
5. Kecuali sampai baris terakhir `module.exports = app` haa ini langkah pertama untuk jalankan expressjs sebagai Lambda Function.

Kemudian kita rujuk file lambda.js

1. Jadi inilah trick dia untuk jalankan expressjs sebagai Lambda function. File ni lah!
2. Pakai je sebijik macam ni, tak payah ubah apa - apa. Melainkan file korang tadi bukan app.js lah. Aku cadangkan buat masa ni pakai je dulu app.js OK!

PENTING! Apa nak letak dekat Lambda Handler tu? Rujuk gambar ni:

![lambda.handler](https://i.imgur.com/vzGfFx6.png)

Sebab apa nama dia lambda.handler?

1. Sebab nama file adalah lambda.js dan pada baris 6 `exports.handler` kita dah namakan nama fungsi dia, iaitu `handler`.

PENTING! PATH/Resources apa yang set pada API Gateway? Rujuk gambar ni:

![api.gateway.resources](https://i.imgur.com/A7ZxbCT.png)

1. Dan bila check pada stages kita akan dapat invoke url lebih kurang seperti ini: `https://(randomstring).execute-api.ap-southeast-1.amazonaws.com/test`
2. Jadi dalam kes ini, dalam file app.js pada baris 12 `app.get('/test',` perlulah kita letakkan path yang betul sama seperti invoke url tersebut.
3. Bila semuanya selari, barulah ianya akan menjadi!
