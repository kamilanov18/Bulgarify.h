//Console methods
console.лог = console.log;

console.изчисти = console.clear;

const конзола = console;

//String methods
Object.defineProperty(String.prototype, 'дължина', {
    get: function () {
        return this.length;
    },
});

String.prototype.знакНа = String.prototype.charAt;

String.prototype.знаковКодНа = String.prototype.charCodeAt;

String.prototype.кодСочиКъм = String.prototype.codePointAt;

String.prototype.завършваС = String.prototype.endsWith;

String.prototype.включва = String.prototype.includes;

String.prototype.конкатенация = String.prototype.concat;

String.prototype.позицияНа = String.prototype.indexOf;

String.prototype.последнаПозицияНа = String.prototype.lastIndexOf;

String.prototype.локалноСравнение = String.prototype.localeCompare;

String.prototype.съвпада = String.prototype.match;

String.prototype.съвпадаВсичко = String.prototype.matchAll;

String.prototype.нормализирай = String.prototype.normalize;

String.prototype.подложиНаКрая = String.prototype.padEnd;

String.prototype.подложиНаНачалото = String.prototype.padStart;

String.prototype.повтори = String.prototype.repeat;

String.prototype.замени = String.prototype.replace;

String.prototype.замениВсичко = String.prototype.replaceAll;

String.prototype.намери = String.prototype.search;

String.prototype.изрежи = String.prototype.slice;

String.prototype.раздели = String.prototype.split;

String.prototype.започваС = String.prototype.startsWith;

String.prototype.подНиз = String.prototype.substring;

String.prototype.направиЛокаленМалъкБуквенЕзик = String.prototype.toLocaleLowerCase;

String.prototype.направиЛокаленГлавенБуквенЕзик = String.prototype.toLocaleUpperCase;

String.prototype.направиМалъкБуквенЕзик = String.prototype.toLowerCase;

String.prototype.направиНиз = String.prototype.toString;

String.prototype.направиГлавенБуквенЕзик = String.prototype.toUpperCase;

String.prototype.подстрижи = String.prototype.trim;

String.prototype.подстрижиНаКрая = String.prototype.trimEnd;

String.prototype.подстрижиОтДясно = String.prototype.trimRight;

String.prototype.подстрижиНаНачалото = String.prototype.trimStart;

String.prototype.подстрижиОтЛяво = String.prototype.trimLeft;

String.prototype.стойсностНа = String.prototype.valueOf;
