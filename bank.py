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
