# Validador de Cartão de Crédito  v.1.0.7

**A biblioteca tem como finalidade validar o número do cartão de crédito (usando o algoritmo de Luhn)**. Na versão inicial retorna true ou false como resultado da validação.

A biblioteca poderá ser testada através da função cardValidator()

# Como instalar
$  npm install lib-valid-credit-card

# Como utilizar

```js
> const cardValidator = require("lib-valid-credit-card");
> console.log(cardValidator(6062822004739263))
> // returns "true"
```

# Roadmap Oficial do Projeto

**versão 1.0.7 (released)**

- Funcionalidade: validação dos dígitos do cartão de crédito, de acordo com o **Algoritmo de Luhn** retornando `true` ou `false`.