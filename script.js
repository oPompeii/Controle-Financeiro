const form = document.getElementById("form");
const lista = document.getElementById("lista");

const receitasEl = document.getElementById("receitas");
const despesasEl = document.getElementById("despesas");
const saldoEl = document.getElementById("saldo");

let transacoes = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const valor = Number(document.getElementById("valor").value);
  const tipo = document.getElementById("tipo").value;

  const transacao = {
    descricao,
    valor,
    tipo,
  };

  transacoes.push(transacao);

  atualizarTela();

  form.reset();
});

function atualizarTela() {
  lista.innerHTML = "";

  let receitas = 0;
  let despesas = 0;

  transacoes.forEach((t) => {
    const li = document.createElement("li");

    li.innerHTML = `${t.descricao} <span>R$ ${t.valor}</span>`;

    lista.appendChild(li);

    if (t.tipo === "receita") {
      receitas += t.valor;
    } else {
      despesas += t.valor;
    }
  });

  receitasEl.innerText = "R$ " + receitas;
  despesasEl.innerText = "R$ " + despesas;
  saldoEl.innerText = "R$ " + (receitas - despesas);
}
