/**
 * [Görev 1] nesneyiTrimle bir nesne alır ve proplarını trimler (trim; bir stringin başında ve sonunda bulunan boşlukları(whitespaces) temizlemek)
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - stringleri trimlenmiş bir nesne döndürür
 *
 * ÖRNEK
 * nesneyiTrimle({ isim: '  jane  ' }) // yeni bir nesne döndürür { name: 'jane' }
 */
function nesneyiTrimle(obj) {
  for (let x in obj) {
    if (typeof obj[x] === "string") {
      obj[x] = obj[x].trim();
    }
  }
  return obj;

  // ✨ kodlar buraya
}
/* console.log(nesneyiTrimle({ foo: " foo ", bar: " bar " })); */

/**
 * [Görev 2] verileniTrimle propları string olan bir nesne alır ve gönderilen propu trimler.
 * @param {object} obj - propları string olan bir nesne
 * @returns {object} - istenilen propu trimlenmiş nesneyi döndürür
 *
 * ÖRNEK
 * verileniTrimle({ isim: '  jane  ' , yas: ' 34 '}, 'isim') // şunu döndürür { isim: 'jane', yas: ' 34 '}
 */
function verileniTrimle(obj, prop) {
  obj[prop] = obj[prop].trim();
  return obj;

  // ✨ kodlar buraya
}
/* console.log(verileniTrimle({ isim: "  jane  ", yas: " 34 " }, "isim")); */

/**
 * [Görev 3] enBuyukTamsayiyiBul bir dizi nesne içinde bulunan tamsayılardan en büyük olanı bulur { tamsayi: 1 }
 * @param {object[]} tamsayilar - bir dizi nesne
 * @returns {number} - en büyük tamsayı
 *
 * ÖRNEK
 * enBuyukTamsayiyiBul([{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }]) // 3 döndürür
 */
function enBuyukTamsayiyiBul(tamsayilar) {
  // ✨ kodlar buraya
  let maxObj = tamsayilar.reduce(function (max, obj) {
    return obj.tamsayi > max.tamsayi ? obj : max;
  });
  return maxObj;
}
let tamsayilar = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }];

function Sayici(ilkSayi) {
  /**
   * [Görev 4A] Sayici bir sayaç oluşturur
   * @param {number} ilkSayi - Sayacin ilk değeri
   */

  // ✨ gerekli propları ekleyin
  let tempSayi = ilkSayi;

  /**
   * [Görev 4B] asagiSay metodu sıfıra doğru sayar
   * @returns {number} - bir sonraki sayı, sıfırdan küçük olamaz
   *
   * Örnek
   * const sayac = new Sayici(3)
   * sayac.asagiSay() // 3 döndürür
   * sayac.asagiSay() // 2 döndürür
   * sayac.asagiSay() // 1 döndürür
   * sayac.asagiSay() // 0 döndürür
   * sayac.asagiSay() // 0 döndürür
   */
  this.asagiSay = () => {
    // ✨ kodlar buraya
    return tempSayi > 0 ? tempSayi-- : 0;
  };
}
/* const sayac = new Sayici(3);
console.log(sayac.asagiSay()); // 3 döndürür
console.log(sayac.asagiSay()); // 2 döndürür
console.log(sayac.asagiSay()); // 1 döndürür
console.log(sayac.asagiSay()); // 0 döndürür
console.log(sayac.asagiSay()); // 0 döndürür */

function Mevsimler() {
  /**
   * [Görev 5A] Mevsimler , bir mevsimler nesnesi oluşturur
   */

  // ✨ gerekli propları ekleyin
  let mevsimler = ["ilkbahar", "yaz", "sonbahar", "kış"];
  let currentIndex = 0;
  /**
   * [Görev 5B] sonraki metodu bir sonraki mevsimi gösterir
   * @returns {string} - bir sonraki mevsim "yaz" olarak yüklenir
   *
   * ÖRNEK
   * const mevsimler = new Mevsimler()
   * mevsimler.sonraki() // "yaz" döndürür
   * mevsimler.sonraki() // "sonbahar" döndürür
   * mevsimler.sonraki() // "kış" döndürür
   * mevsimler.sonraki() // "ilkbahar" döndürür
   * mevsimler.sonraki() // "yaz" döndürür
   */
  this.sonraki = () => {
    // ✨ kodlar buraya
    currentIndex = (currentIndex + 1) % mevsimler.length;
    return mevsimler[currentIndex];
  };
}
/* const mevsimler = new Mevsimler();
console.log(mevsimler.sonraki()); // "yaz" döndürür
console.log(mevsimler.sonraki()); // "sonbahar" döndürür
console.log(mevsimler.sonraki()); // "kış" döndürür
console.log(mevsimler.sonraki()); // "ilkbahar" döndürür
console.log(mevsimler.sonraki()); // "yaz" döndürür */

function Araba(isim, depoBenzin, kml) {
  /**
   * [Görev 6A] Araba 3 argüman alarak bir araba nesnesi oluşturur
   * @param {string} isim - arabanın ismi
   * @param {number} depo - benzin deposu kapasitesi
   * @param {number} kml - arabanın litre başına kat edebileceği km yol
   */

  this.odometer = 0; // araba 0 kilometrede yüklenecek
  this.depo = depoBenzin; // araba full depoyla yüklenecek
  this.maxDepo = depoBenzin;
  // ✨ gerekli propları ekleyin
  this.isim = isim;
  this.kml = kml; //bir litre benzinle kat edilecek km
  /**
   * [Görev 6B] sur metodu odometera km ekler ve aynı oranda depodan benzin tüketir
   * @param {string} gidilecekyol - arabayı sürmek istediğimiz km yol
   * @returns {number} - güncellenen odometer değeri
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(100) // 100 döndürür
   * focus.sur(100) // 200 döndürür
   * focus.sur(100) // 300 döndürür
   * focus.sur(200) // 500 döndürür
   * focus.sur(200) // 600 döndürür (100 km sonra benzin bitti)
   */
  this.sur = (gidilecekyol) => {
    // ✨ kodlar buraya
    let maxGidilecekYol = this.depo * this.kml;
    if (gidilecekyol <= maxGidilecekYol) {
      this.odometer += gidilecekyol;
      this.depo -= gidilecekyol / this.kml;
      return this.odometer;
    }
    this.depo = 0;
    this.odometer += maxGidilecekYol;
    return this.odometer;
  };

  /**
   * [Görev 6C] Depoya benzin ekleme
   * @param {number} litre - depoya eklemek istediğimiz benzin litresi
   * @returns {number} - benzin eklendikten sonra gidilebilecek maksimum yol
   *
   * ÖRNEK
   * const focus = new Araba('focus', 20, 30)
   * focus.sur(600) // 600 döndürür
   * focus.sur(1) // 600 döndürür (depo boş olduğundan yol gidilemedi)
   * focus.benzinal(99) // 600 döndürür (depo yalnızca 20 litre alabiliyor)
   */
  this.benzinal = (litre) => {
    let kalanDepoKapasitesi = this.maxDepo - this.depo;
    let gidilecekKm;
    if (litre <= kalanDepoKapasitesi) {
      this.depo = this.depo + litre;
      gidilecekKm = this.depo * this.kml;
      return gidilecekKm;
    }
    this.depo = this.maxDepo;
    gidilecekKm = this.depo * this.kml;
    return gidilecekKm;
    // ✨ kodlar buraya
  };
}
//ÖRNEK;
const focus = new Araba("focus", 20, 30);
console.log(focus.sur(600)); // 600 döndürür
console.log(focus.sur(1)); // 600 döndürür (depo boş olduğundan yol gidilemedi)
console.log(focus.benzinal(99)); // 600 döndürür (depo yalnızca 20 litre alabiliyor)

/**
 * [Görev 7] Bir sayının çift olup olmadığını asenkron olarak çözümler
 * @param {number} sayi - kontrol edilecek sayı
 * @returns {promise} - sayı çiftse true, aksi takdirde false
 *
 * ÖRNEK
 * asenkronCiftSayi(2).then(result => {
 *    // sonuç true
 * })
 * asenkronCiftSayi(3).then(result => {
 *    // sonuç false
 * })
 */
function asenkronCiftSayi(sayi) {
  // ✨ implement
  return new Promise((res) => {
    res(sayi % 2 == 0);
  });
}

module.exports = {
  nesneyiTrimle,
  verileniTrimle,
  enBuyukTamsayiyiBul,
  asenkronCiftSayi,
  Sayici,
  Mevsimler,
  Araba,
};
