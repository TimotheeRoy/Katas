#retourner le nombre de zeros à la fin de n! sans le calculer
import math as m

def func (n):
    count = 0
    puiMax = m.floor(m.log(n)/m.log(5)) ## puissance de 5 max de n
    for k in range(1,n+1):
        for i in range (puiMax, -1 , -1):
            if k%5**i == 0:
                count += i
                break
    return count


print(func(100))