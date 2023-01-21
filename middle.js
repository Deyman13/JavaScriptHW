function selectBanners(banners, count) {
    // Вычисляем общий вес всех баннеров путем суммирования всех значений weight в списке баннеров
    // В JS используется функция reduce() - аналог map() но для единого значения на основе всего массива
    // В нашем случае для единого значения - значения weight
    const totalWeight = banners.reduce((sum, banner) => sum + banner.weight, 0);
    // Создаем список, куда будем складывать выбранные баннеры
    const selectedBanners = [];
    // До тех пор, пока количество баннеров, которое нужно выбрать из списка > 0 и пока есть баннеры в списке
    // Место and в JS используется &&, место len(banners) -> banners.length 
    while (count > 0 && banners.length > 0) {
        // Math.random возвращает рандомное вещественное значение
        // Диапазон возвращаемых чисел представлен значениями от 0 
        // (включая 0, то есть, она может вернуть 0) до 1 (не включая 1, то есть — единицу она вернуть не может).
        // умножаем на общий вес для масштабирования, чтобы рандом был от 0 до общего веса всех баннеров
        // https://habr.com/ru/company/ruvds/blog/534108/
        const rand = Math.random() * totalWeight;
        // Создаем переменную суммы
        let weightSum = 0;
        // Итерируемся по списку banners с шагом 1
        for (let i = 0; i < banners.length; i++) {
            // К сумме добавляем значение weight
            // В js можно просто выбрать .weight, как value() в Python
            weightSum += banners[i].weight;
            // Если значение рандома <= суммы веса
            if (rand <= weightSum) {
                // То добавляем баннер к выбранным
                selectedBanners.push(banners[i]);
                // Удаляем баннер по индексу, чтобы не повторяться в результатах
                // Метод arr.splice(str) – это универсальный «швейцарский нож» для работы с массивами. 
                // Умеет всё: добавлять, удалять и заменять элементы.
                // banners.splice(i, 1); = Начиная с i удалить 1 элемент. аналогично del banners[i] в Python
                banners.splice(i, 1);
                // Количество баннеров для выбора уменьшаем на 1
                count--;
                // Переходим к следующему элементу
                break;
            }
        }
    }
    // Возвращаем список тех баннеров, которые подошли 
    return selectedBanners;
}

const banners = [
    {id: 2, weight: 10},
    {id: 4, weight: 5},
    {id: 8, weight: 15},
    {id: 22, weight: 18},
    {id: 41, weight: 41},
    {id: 53, weight: 1},
    {id: 69, weight: 9},
  ];

console.log(selectBanners(banners, 3));