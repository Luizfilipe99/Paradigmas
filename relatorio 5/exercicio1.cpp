#include <iostream>

using namespace std;

// Função recursiva conforme as regras do relatório [cite: 24]
int fibonacci(int n) {
    if (n == 0) return 0; // Regra: n=0 retorna 0 [cite: 26]
    if (n == 1) return 1; // Regra: n=1 retorna 1 [cite: 27]
    // Soma dos dois anteriores [cite: 28, 29, 30]
    return fibonacci(n - 1) + fibonacci(n - 2); 
}

int main() {
    int n;
    cout << "Exercicio 1 - Fibonacci" << endl;
    cout << "Digite um numero n: ";
    cin >> n; // [cite: 31]

    cout << "Resultado de fibonacci(" << n << "): " << fibonacci(n) << endl; // [cite: 32]
    
    return 0;
}