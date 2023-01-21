def getAnagrams(string):
    # Разбиваем строку, создавая список
    words = string.split()
    # Создаем пустой словарь
    anagrams = {}

    # Итерируемся по словам в списке words
    for word in words:
        # Приводим все слова к общему виду, сортируя их побуквенно. адрес = адерс, среда = адерс
        sorted_word = ''.join(sorted(word))
        # Если сортированное слово (например: адерс) находится в словаре
        if sorted_word in anagrams:
            # То добавляем к нему слово (не сортированное!)
            anagrams[sorted_word].append(word)
        else:
            # Иначе создаем новый ключ в словаре
            anagrams[sorted_word] = [word]
    # Возвращаем только список значений если он не пустой
    return [anagram for anagram in anagrams.values() if len(anagram) > 1]

print(*getAnagrams('адрес карп кума мир мука парк рим среда стук рост сорт трос'))