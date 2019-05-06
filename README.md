# Validaddor de Cartão de Crédito  v.1.1.1

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