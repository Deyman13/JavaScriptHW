from random import uniform

def selectBanners(banners, count):
    # Вычисляем общий вес всех баннеров путем суммирования всех значений weight в списке баннеров
    full_weight = sum(banner['weight'] for banner in banners)
    # Создаем список, куда будем складывать выбранные баннеры
    selected_banners = []
    # До тех пор, пока количество баннеров, которое нужно выбрать из списка > 0 и пока есть баннеры в списке
    while count > 0 and banners:
        # Используем функцию uniform для генерации рандомного float числа от 0 до общего веса баннеров
        # Используем именно uniform а не randint, так как точность uniform выше, а weight - является вещественным числом
        rand = uniform(0, full_weight)
        # Создаем переменную суммы
        weight_sum = 0
        # Двигаемся по нумерованному списку banners
        for i, banner in enumerate(banners):
            # Добавляем к сумме значение weight текущего баннера
            weight_sum += banner['weight']
            # Если значение рандома <= суммы веса
            if rand <= weight_sum:
                # То добавляем баннер к выбранным
                selected_banners.append(banner)
                # Удаляем баннер по индексу, чтобы не повторяться в результатах
                del banners[i]
                # Количество баннеров для выбора уменьшаем на 1
                count -= 1
                # Переходим к следующему элементу
                break
    # возвращаем список тех баннеров, которые подошли 
    return selected_banners

banners = [
        {id: 2, "weight": 10},
        {id: 4, "weight": 5},
        {id: 8, "weight": 15},
        {id: 22, "weight": 18},
        {id: 41, "weight": 41},
        {id: 53, "weight": 1},
        {id: 69, "weight": 9},
]

print(selectBanners(banners, 5))









    



