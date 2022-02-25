//Console methods
console.лог = function (данни) {
    console.log(данни);
}

console.изчисти = function () {
    console.clear();
}

const конзола = console;

//String methods
String.prototype.дължина = function () {
    return this.length;
};

String.prototype.знакНа = function (позиция) {
    return this.charAt(позиция);
};

String.prototype.знаковКодНа = function (позиция) {
    return this.charCodeAt(позиция);
};

String.prototype.кодСочиКъм = function (позиция) {
    return this.codePointAt(позиция);
};


String.prototype.завършваС = function (низ) {
    return this.endsWith(низ);
}; 

String.prototype.завършваС = function (низ, позиция) {
    return this.endsWith(низ, позиция);
};

String.prototype.включва = function (низ) {
    return this.includes(низ);
};

String.prototype.включва = function (низ, позиция) {
    return this.includes(низ, позиция);
};

String.prototype.конкатенация = function () {
    return this.concat(Object.values(arguments).join(''));
};

String.prototype.позицияНа = function (позиция) {
    return this.indexOf(позиция);
};

String.prototype.позицияНа = function (низ, позиция) {
    return this.indexOf(низ, позиция);
};

String.prototype.последнаПозицияНа = function (позиция) {
    return this.lastIndexOf(позиция);
};

String.prototype.последнаПозицияНа = function (низ, позиция) {
    return this.lastIndexOf(низ, позиция);
};

String.prototype.локалноСравнение = function (низ) {
    return this.localeCompare(низ);
};

String.prototype.локалноСравнение = function (низ, локали) {
    return this.localeCompare(низ, локали);
};

String.prototype.локалноСравнение = function (низ, локали, опции) {
    return this.localeCompare(низ, локали, опции);
};

String.prototype.съвпада = function (регуляренИзраз ) {
    return this.match(регуляренИзраз);
};

String.prototype.съвпадаВсичко = function (регуляренИзраз ) {
    return this.matchAll(регуляренИзраз);
};

String.prototype.нормализирай = function () {
    return this.normalize();
};

String.prototype.нормализирай = function (форма) {
    return this.normalize(форма);
};

String.prototype.подложиНаКрая = function (дължина) {
    return this.padEnd(дължина);
};

String.prototype.подложиНаКрая = function (дължина, низ) {
    return this.padEnd(дължина, низ);
};

String.prototype.подложиНаНачалото = function (дължина) {
    return this.padStart(дължина);
};

String.prototype.подложиНаНачалото = function (дължина, низ) {
    return this.padStart(дължина, низ);
};

String.prototype.повтори = function (повторения) {
    return this.repeat(повторения);
};

String.prototype.замени = function (регуляренИзраз, низ) {
    return this.replace(регуляренИзраз, низ);
};

String.prototype.замени = function (регуляренИзраз, заместителнаФункция) {
    return this.replace(регуляренИзраз, заместителнаФункция);
};

String.prototype.замени = function (низ, новПодНиз) {
    return this.replace(низ, новПодНиз);
};

String.prototype.замени = function (низ, заместителнаФункция) {
    return this.replace(низ, заместителнаФункция);
};

String.prototype.замениВсичко = function (регуляренИзраз, низ) {
    return this.replaceAll(регуляренИзраз, низ);
};

String.prototype.замениВсичко = function (регуляренИзраз, заместителнаФункция) {
    return this.replaceAll(регуляренИзраз, заместителнаФункция);
};

String.prototype.замениВсичко = function (низ, новПодНиз) {
    return this.replaceAll(низ, новПодНиз);
};

String.prototype.замениВсичко = function (низ, заместителнаФункция) {
    return this.replaceAll(низ, заместителнаФункция);
};

String.prototype.намери = function (регуляренИзраз) {
    return this.search(регуляренИзраз);
};

String.prototype.изрежи = function (началнаПозиция) {
    return this.slice(началнаПозиция);
};

String.prototype.изрежи = function (началнаПозиция, крайнаПозиция) {
    return this.slice(началнаПозиция, крайнаПозиция);
};

String.prototype.раздели = function () {
    return this.split();
};

String.prototype.раздели = function (разделител) {
    return this.split(разделител);
};

String.prototype.раздели = function (разделител, лимит) {
    return this.split(разделител, лимит);
};

String.prototype.започваС = function (низ) {
    return this.startsWith(низ);
};

String.prototype.започваС = function (низ, позиция) {
    return this.startsWith(низ, позиция);
};

String.prototype.подНиз = function (началнаПозиция) {
    return this.substring(началнаПозиция);
};

String.prototype.подНиз = function (началнаПозиция, крайнаПозиция) {
    return this.substring(началнаПозиция, крайнаПозиция);
};

String.prototype.направиЛокаленМалъкБуквенЕзик = function () {
    return this.toLocaleLowerCase();
};

String.prototype.направиЛокаленГлавенБуквенЕзик = function () {
    return this.toLocaleUpperCase();
};

String.prototype.направиМалъкБуквенЕзик = function () {
    return this.toLowerCase();
};

String.prototype.направиНиз = function () {
    return this.toString();
};

String.prototype.направиГлавенБуквенЕзик = function () {
    return this.toUpperCase();
};

String.prototype.подстрижи = function () {
    return this.trim();
};

String.prototype.подстрижиНаКрая = function () {
    return this.trimEnd();
};

String.prototype.подстрижиОтДясно = function () {
    return this.trimRight();
};

String.prototype.подстрижиНаНачалото = function () {
    return this.trimStart();
};

String.prototype.подстрижиОтЛяво = function () {
    return this.trimLeft();
};

String.prototype.стойсностНа = function () {
    return this.valueOf();
};