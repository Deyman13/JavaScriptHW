function getAnagrams(string) {
    // Разбиваем строку, создавая список
    // https://learn.javascript.ru/array-methods
    let words = string.split(" ");
    // Создаем пустой словарь
    // const obj = new Object();
    let anagrams = {};
    
    // Итерируемся по словам в списке words
    // В JS место in используется of 
    // https://learn.javascript.ru/iterable
    for (let word of words) {
        // Приводим все слова к общему виду, сортируя их побуквенно. адрес = адерс, среда = адерс
        // В JS нужно сначала разложить слово на список, отсортировать его и обратно склеить join
        // join при этом принимает разделитель, а не то, что нужно склеить. 
        let sortedWord = word.split("").sort().join("");
        // Если сортированное слово (например: адерс) находится в словаре
        if (sortedWord in anagrams) {
            // То добавляем к нему слово (не сортированное!)
            // В JS место append используется push()
            anagrams[sortedWord].push(word);
        } else {
            // Иначе создаем новый ключ в словаре
            anagrams[sortedWord] = [word];
        }
    }
    // Object.values() - возвращает массив значений, что нам и нужно. https://learn.javascript.ru/keys-values-entries
    // В отличии от Python, где мы можем указать условие фильтрации (if len(anagram) > 1) в JS
    // Мы должны использовать встроенную функцию .filter(), по синтаксису применения очень похожа на lambda функции
    // https://learn.javascript.ru/array-methods
    return Object.values(anagrams).filter(anagram => anagram.length > 1);
    }


console.log(getAnagrams("адрес карп кума мир мука парк рим среда стук рост сорт трос"));