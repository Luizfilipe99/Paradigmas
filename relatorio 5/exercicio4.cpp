#include <iostream>

using namespace std;

int main() {
    // Declara matriz 5x5 iniciando com 0 [cite: 59, 60]
    int sala[5][5] = {0}; 
    int opcao = 0;

    while (opcao != 3) { // Laço do menu [cite: 65, 71]
        cout << "\n--- RESERVA DE CINEMA ---" << endl;
        cout << "1. Reservar Assento\n2. Ver Mapa da Sala\n3. Sair" << endl;
        cout << "Opcao: ";
        cin >> opcao;

        if (opcao == 1) {
            int f, c;
            cout << "Informe a fileira (0-4) e a coluna (0-4): ";
            cin >> f >> c; // [cite: 66]

            if (sala[f][c] == 0) {
                sala[f][c] = 1; // Muda para ocupado [cite: 67]
                cout << "Sucesso!" << endl;
            } else {
                cout << "Erro: Assento ocupado!" << endl; // [cite: 68]
            }
        } 
        else if (opcao == 2) {
            cout << "\nMapa da Sala:" << endl;
            // Percorre a matriz com dois laços for aninhados [cite: 69]
            for (int i = 0; i < 5; i++) {
                for (int j = 0; j < 5; j++) {
                    cout << "[" << sala[i][j] << "] "; // Exibe o mapa [cite: 69, 71]
                }
                cout << endl;
            }
        }
    }

    // Relatório Final Pós-Menu [cite: 72]
    int ocupados = 0;
    int vazios = 0;
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            if (sala[i][j] == 1) ocupados++; // [cite: 74]
            else vazios++; // [cite: 75]
        }
    }

    cout << "\n--- RELATORIO FINAL ---" << endl;
    cout << "Total de assentos ocupados: " << ocupados << endl;
    cout << "Total de assentos vazios: " << vazios << endl;

    return 0;
}