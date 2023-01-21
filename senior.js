// Вся проверка основывается на том, чтобы все элементы строки и регулярного выражения прошли по циклам. 
// Текущая проблема с *. Не учитывается 

function reg(str, regex) {
    // устанавливаем переменные индексов с изначальными значениями 0
    let strIndex = 0;
    let regexIndex = 0;
    // До тех пор пока индекс меньше длины строки и регулярное выражение меньше длины регулярки
    while (strIndex < str.length && regexIndex < regex.length) {
      // Если по индексу регулярного выражения находится 'H'
      // Используем === чтобы равенство было конкретного типа. 
      // Т.е. в отличии от простого ==, нужно еще, чтобы 'H' было точно строкой
      if (regex[regexIndex] !== str[strIndex]) {
        // И при этом если элемент строки не равен 'H' 
        if (str[strIndex] !== 'H') {
          // Возвращаем false
          return false;
      }
      // Делаем шаг как строчного индекса, так и индекса регулярного выражения
      strIndex++;
      regexIndex++;
      // иначе, если первое условие не соблюдено, то смотрим, равно ли оно '.'
    } else if (regex[regexIndex] === '.') {
      // Если равно - делаем еще шаг
      strIndex++;
      regexIndex++;
      // Если не равно, проверяем '*' 
    } else if (regex[regexIndex] === '*') {
      // До тех пор, пока элемент строки равен 'H'
      while (str[strIndex] === regex[regexIndex - 1]) {
        // делаем шаг вперед
        strIndex++;
      }
      // После цикла делаем один шаг вперед
      regexIndex++;
    } else {
      // Иначе, если условия не соблюдены, проверяем, следующий элемент регулярного выражения на равенство '*'
      if (regex[regexIndex + 1] === '*') {
        // Создаем временную переменную, куда кладем текущий индекс регулярки
        const char = regex[regexIndex];
        // и еще одну переменную, равную индексу строки
        let i = strIndex;
        // до тех пор пока i < длины строки и (либо элемент строки по индексу равен элементу регулярки, либо элемент регулярки равен '.')
        while (i < str.length && (str[i] === char || char === '.')) {
          // делаем шаг вперед
          i++;
        }
        // переназначаем индекс строки, присваивая ему значение i, который получили после цикла while
        strIndex = i;
        // А индекс регулярно выражения увеличиваем на 2
        regexIndex += 2;
        // иначе если следующий элемент регулярки не равен '*', проверяем, равенство элемента по индексу строки и элементу регулярки
      } else if (str[strIndex] !== regex[regexIndex]) {
        // если не равны - возвращаем false
        return false;
        // иначе делаем шаг вперед для обоих индексов
      } else {
        strIndex++;
        regexIndex++;
      }
    }
  }
  // до тех пор пока индес регулярки меньше длины регулярки и по индексу регулярки находится '*'
  while (regexIndex < regex.length && regex[regexIndex] === '*') {
    // увеличиваем индекс регулярки на 1
    regexIndex++;
  }
  // возвращаем булево значение условия (если все элементы прошли по циклу (их индекс = длине))
  return strIndex === str.length && regexIndex === regex.length;
}


  
console.log(reg('Hello', 'Hello')); // true
console.log(reg('Hello', 'Hel.o')); // true
console.log(reg('Hello', '.....')); // true
console.log(reg('Hello', 'Helllo')); // false
console.log(reg('Hello', 'He.o')); // false
console.log(reg('Hello', 'Hell')); // false
console.log(reg('Hellolo', 'Hel*olo')); // true
console.log(reg('Hellolo', 'Hell*olo')); // true
console.log(reg('Hellolo', 'Helll*olo')); // true
console.log(reg('Hellolo', 'He.*lo')); // true
console.log(reg('Hellolo', 'He.*olo')); // true
console.log(reg('Hellolo', 'He.*lolo')); // true
console.log(reg('Hellolo', 'He.*llo..')); // true
console.log(reg('Hellolo', 'Hel*ol*')); // false
console.log(reg('Hellolo', 'Hell*ol')); // false
console.log(reg('Hellolo', 'Hellll*olo')); // false
console.log(reg('Hellolo', 'He.*lol')); // false
console.log(reg('Hellolo', 'He.*olo.')); // false
console.log(reg('Hellolo', 'He.*lol..')); // false
console.log(reg('Hellolo', 'He.*llo...')); // false



