#include <iostream>

using namespace std;

int main() {
    float saldo;
    cout << "Informe seu saldo inicial: R$ ";
    cin >> saldo; // [cite: 56]

    int opcao = 0;
    // O menu deve reaparecer até que o usuário escolha "Sair" [cite: 55]
    while (opcao != 4) {
        cout << "\n--- BANCO INATEL ---" << endl;
        cout << "1. Ver Saldo\n2. Depositar\n3. Sacar\n4. Sair" << endl; // [cite: 50, 51]
        cout << "Escolha uma opcao: ";
        cin >> opcao;

        if (opcao == 1) {
            cout << "Saldo atual: R$ " << saldo << endl;
        } 
        else if (opcao == 2) {
            float deposito;
            cout << "Valor do deposito: ";
            cin >> deposito;
            saldo += deposito;
            cout << "Deposito realizado com sucesso!" << endl;
        } 
        else if (opcao == 3) {
            float saque;
            cout << "Valor do saque: ";
            cin >> saque;
            // Lógica: não permitir saques maiores que o saldo [cite: 52]
            if (saque > saldo) {
                cout << "Saldo Insuficiente" << endl; // [cite: 53, 54]
            } else {
                saldo -= saque;
                cout << "Saque realizado!" << endl;
            }
        }
    }
    cout << "Saindo do sistema..." << endl;
    return 0;
}