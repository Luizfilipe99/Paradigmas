#include <iostream>

using namespace std;

// Função que multiplica os valores guardados no array [cite: 35, 38]
float multiplicaArray(float arr[], int tamanho) {
    float produto = 1.0;
    for (int i = 0; i < tamanho; i++) {
        produto *= arr[i]; // Multiplica os valores [cite: 38, 41]
    }
    return produto; // Retorna o produto [cite: 42]
}

int main() {
    int tamanho;
    cout << "Quantos valores deseja inserir no array? ";
    cin >> tamanho; // [cite: 44]

    float valores[tamanho]; // Cria o array com o tamanho definido [cite: 44]
    for (int i = 0; i < tamanho; i++) {
        cout << "Digite o valor " << i + 1 << ": ";
        cin >> valores[i];
    }

    // Chamada da função e impressão do resultado [cite: 45, 46]
    float resultado = multiplicaArray(valores, tamanho);
    cout << "O produto dos valores e: " << resultado << endl;

    return 0;
}