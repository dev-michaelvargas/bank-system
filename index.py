"""
print(1.5 + 2.33)
print('hi my name is ')
print('hi i\'m ' + str(22))
print("hi i'm " + str(22))

name, age = 'michael', 25
name = 'robert'
print(f'my name is {name} and i am {age}' )
my_name = 'andrew'



price = 5
quantity = 3

print(type (float(price)))
print(int(price))
print(price / 2)
print(price // 2)

print(f'the rice is {price} and the total of packages are {quantity}')



#print('hi this is one \n hi this is two')
# print('one', 'two', sep='@')

name = input('what  is your name? ')
age = input('how old are you? ')

print(f'hi {name} \n i\'m also {age} ' , sep= "#")


print((17 % 5))
print(10 - (5 * 2))


a = 12
b = 12 

print(a == b)
print(a != b)
print(a < 15)
print(a > 15)
print(a == b)
print(a <= b )



saldo = 200
saldo += 100
saldo -= 100
saldo *= 101
saldo += 1
saldo /= 20201

print(saldo)



saldo = 100 
precio = 200
total = 400

#print(saldo < total and total > precio)
#print(saldo >= total and total == 300)
#print(saldo < total or total == precio)
#print(not 1000 > 10)
#print(  not total)
#print( not 'hhds')
#print( not '')

if (saldo < total and total > precio ) or (total == 500) :
  print('this is  a math operation')

 

jogador = 'messi'
legal_id_name = jogador

print(jogador is legal_id_name)
print(jogador is not legal_id_name)



thing = 'this is a house'
list_this_thing_has_inside = ['kitchen', 'rooms', 'bathroom']
price_of_the_house = 1000

print('s' in thing)
print('s' not in thing)
print('kitchen' in list_this_thing_has_inside)

 

# python precisa estar estruturado com espaçamentos a difereça de javscript , html 

def saque(saque):
  saldo =  500

  if saque == saldo:
    print('you have no money now')
  else:
    
    new_balance = saldo - saque
    print(f'now you have {new_balance} ')



saque(501)


saque = float(input('how much do you want to withdrawal?'))
saldo = 200


if saque <= saldo :
  print('operation in process')
else:
  print('you have not  enough money for this process')

  


option = int(input('select the following options: 1. withdrwal , 2. make a deposit'))

if option == 1:
  print('please inform the amount you want to cash out')

elif option == 2:
  print('infor the amount you want to deposit')

else:
  SystemExit(print('invalid option'))

  

age = int(input('how old are you? '))
special_age =  17

if age >= 18:
  print('you are allowed to buy alcohol')

elif age < 18 and age != special_age :
  print('you are not allwed to buy alcohol')

elif age  == special_age:
  print('you are allowed to buy alcohol with a valid permission')

  
conta_normal = True
conta_universitaria = True

saldo = 2000
saque = 500
cheque_especial = 450

if conta_normal:
  if saldo >= saque:
    print('saque realizado')
  elif saque <= (saldo + cheque_especial):
    print('saque realizado com cheque')
if conta_universitaria:
  if saldo >= saque:
    print('saque realizado com conta universitaria')
  else:
    print('saldo insuficiente')

   

#answer = str(input('what is the capital of Brasil in lower case ? : '))
# estrtura  condicional ternaria
#answer = 'you are rigth !' if answer == str('brasilia') else 'you are wrong'

#print(f"{answer}")
#SystemExit

texto = 'rider'
vocals = 'aeiou'

for letra in texto:
  if letra.lower() in vocals:
    print(letra)

#SystemExit

# range 

#print((range(4)))

#for numero in range(11):

 
  print(numero, end=" ")
 

for numero2 in range(5,50,2):#range (inicio, fim, e como deseja ser executado )
  #A função range(50, 5) cria uma sequência de números começando de 50 (inclusivo) até 5 (exclusivo), mas como o passo não foi especificado, ele assumirá o valor padrão de 1.
  print(numero2,end=" ")

   

opção = -1

while opção != 0: # a difereça de while com if é que vai ser executado como loop enquanto
  # if será executado umma unica vez 
  opção = int(input('[1] sacar, [2] extrato, [0] sair '))

  if opção == 1:
    print('sacando')
    break

  elif opção == 2:
    print('dowloading extract')
    break

  elif opção == 0:
    print('saindo')
    break

  else:
    print('opçao invalida')
    break
   
count_11 = 0
while True:
  number = int(input('tell us a number: '))


  

  if number == 10:
    print(f"you selected {number} see you")
    break

  elif number == 11:
    print('do not select 11, you have one last chance')
    count_11 += 1
    
    
    if count_11 == 2:
      print('you selected twice 11, sytem locked')
      break

  else:
    count_11 = 0
    print(number)

  print(number)# se o codigo esta alinhado com outras vai ser executado mesmo tenha outras condiçoes emcima 



for numero in range(10):
  if numero == 2:
    continue

  print(numero, end= " ") # continue pula a execuçao é bom deixar o cotinue na ultima liha 
  
  
#methods 
curso = ' PYTHON  '

print(curso.title())

print(curso.center(20, '¬'))

print('.'.join(curso))

print(curso.strip())


  
# old style   
name = 'michael'
last_Name = 'vargas'
age = 25
hobbies = 'chess'

pessoa = {
    'name': 'Michael',
    'last_Name': 'Vargas',
    'age': 25,
    'hobbies': 'chess'
}
# %s is for strings , %d is for integer
print('hi my name is %s %s , i\'m %d and i really like %s ' %(name, last_Name, age, hobbies) )
# format method
print('hi my name is {0} {1} , i\'m {2} and i really like {3} '.format(name, last_Name, age, hobbies) )

print('hi my name is {name} {last_Name} , i\'m {age} and i really like {hobbies} '.format(name = name, last_Name = last_Name, age = age, hobbies = hobbies) )

print('hi my name is {name} {last_Name} , i\'m {age} and i really like {hobbies} '.format(**pessoa) )

print(f'hi my name is {name} {last_Name} , i\'m {age} and i really like {hobbies} ' )

print('hi my name is {} {} , i\'m {} and i really like {} '.format(name , last_Name, age, name) )


pi = 3.1415
# it rounds the number in this case to 3.142 with 3 decimall spaces 
print(f'this is pi {pi:.3f}')



# fatiamento 

nome = 'michael orlando vargas neisa'
full_message =# f""" #my name is {nome} 
   # and i am 
    
            #eveloper """ # triple strings hnor the spaces and concatenate variables 

#print(full_message) # triple strings helps to avoid /n 


#print(nome[8:16:2])# start, end , step 
#print(nome[::-2])



#print('hello world')

# CRIAR UM SISTEMA BANCARIO COM FUNÇOES : SACAR , DEPOSITAR E VER EXTRATO
#VAI SE TRSBALHAR COM UM USUARIO , NAO É PRECISO SABER A CONTA BANCARIA OU AGENCIÂ
# TODOS OS DEPOSITOS D EBEM SER ARMAZENADO NUMA VARIABEL E EXHIBIDOS NO EXTRATO
#EXEMPLO: SE EU FIZ 10 DEPOSITOS , TEM QUE ESTAR OS 10 DEPOSITOS 
# OS SISTEMA DEBE PERMITIR NO MAXIMO 3 SAQUES DIARIOS COM LIMITE DE R$500,00 POR SAQUE
#se o usuriao nao tem dinhheiro o sistema debe dar uma mensagem 
#os saques tambem devem ser armazenados na  variabel extrato 
# extrato : todos os saque e depositos tem que estar nesta varibel 
#os valores devem ser exhibidos assim : R$1500,06


# plano : criar um loop onde se pergunte  ao usauario o que deseja fazer 
"""
plano : criar um loop onde se pergunte  ao usauario o que deseja fazer NO CASO QUE QISUER 
FAZER MAS DE 3 SAQUES SERA EXHIBIDO UMA MENSAGEM , CADA VEZ QUE BOTAR SALDO SERA EXHIBIDO QUANTO 
BOTOU E O SALDO , OS EXTRATOS VAO TER A DATA E A HORA DE CADA OPERAÇAO , FINALMENTE O USUARIO 
TERA  A OPÇAO DE FINALIZAR O PROGRAMA OU SITEMA FECHARA EM 1 MINUTO SE NAO TIVER NENHUMA
SELÇAO POR PARTE DELE  

"""
import datetime

saldo = 2000
saques = 0
extrato = [] # Criando uma lista para guardar todas as informações dos extratos  e ela funciona em conjunto com as tuplas

while True:
    options_for_user = int(input(
        """ 
        Seja bem-vindo, por favor escolha uma destas opções:
        1. Depósito
        2. Saque
        3. Ver extrato 
        4. Sair
        """
    ))

    if options_for_user == 1:
        try:
            novo_saldo = int(input('Quanto dinheiro deseja depositar? '))
            saldo += novo_saldo
            extrato.append((datetime.datetime.now(), 'deposito', novo_saldo)) # aq criamos uma tupla para passar todos os argumentos a lista extrato
            print(f'Operação finalizada com sucesso. R${novo_saldo} foram depositados na sua conta. Seu novo saldo é de {saldo}') 
        except ValueError:
            print('Por favor, insira um valor válido.')

    elif options_for_user == 2:
        try:
            if saques >= 3:
                print('Você atingiu o limite máximo de saques por dia. Por favor, espere 24 horas.')
                break
            
            saque_desejado = int(input(
                """ 
                Quanto dinheiro deseja sacar? 
                Você tem um máximo de 3 saques por dia de R$500,00 cada um.
                """
            ))
            if saque_desejado > saldo:
                print(f'Seu saldo é insuficiente. Atualmente você tem um saldo de {saldo}')
                break
            elif saque_desejado > 500:
                print('O valor máximo de saque por vez é de R$500,00.')
                continue
            else:
                saldo -= saque_desejado
                saques += 1
                extrato.append((datetime.datetime.now(), 'Saque', -saque_desejado))
                print(f'Operação realizada com sucesso. Por favor, retire seu dinheiro. Seu novo saldo é de {saldo}')
        except ValueError:
            print('Por favor, digite um valor válido.')

    elif options_for_user == 3:
        print("Extrato:")
        for desired_extract in extrato:
            print(desired_extract)
    
    elif options_for_user == 4:
        break



                      


        

     
     

        
  



   















