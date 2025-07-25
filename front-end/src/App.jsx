import { useState } from "react";
import imagemDefault from "./assets/prato-default.jpg";
import "./index.css";

const itensIniciais = [
  { nome: "Entrada", imagem: imagemDefault, preco: null },
  { nome: "Prato Principal", imagem: imagemDefault, preco: null },
  { nome: "Bebida", imagem: imagemDefault, preco: null },
  { nome: "Sobremesa", imagem: imagemDefault, preco: null },
];

function App() {
  const [itens, setItens] = useState(itensIniciais);
  const [mostrouPedido, setMostrouPedido] = useState(false);
  const [confirmado, setConfirmado] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState(false);
  const [erro, setErro] = useState("");

  const gerarPedido = async () => {
    setErro("");
    try {
      const endpoints = [
        "https://https://api-cardapio-aleatorio-leonildolinck-6c47e2e6.koyeb.app/entradas/aleatorio",
        "https://https://api-cardapio-aleatorio-leonildolinck-6c47e2e6.koyeb.app/pratos/aleatorio",
        "https://https://api-cardapio-aleatorio-leonildolinck-6c47e2e6.koyeb.app/bebidas/aleatorio",
        "https://https://api-cardapio-aleatorio-leonildolinck-6c47e2e6.koyeb.app/sobremesas/aleatorio",
      ];

      const responses = await Promise.all(endpoints.map((url) => fetch(url)));

      if (responses.some((res) => !res.ok)) {
        throw new Error("Um ou mais itens não puderam ser carregados.");
      }

      const data = await Promise.all(responses.map((res) => res.json()));
      setItens(data);
      setMostrouPedido(true);
    } catch (error) {
      console.error("Erro ao gerar pedido:", error);
      setErro("Erro ao gerar o pedido. Tente novamente.");
      setItens(itensIniciais);
    }
  };

  const confirmarPedido = () => {
    setConfirmado(true);
    setMensagemSucesso(true);

    setTimeout(() => {
      setMensagemSucesso(false);
    }, 3000);
  };

  const novoPedido = () => {
    setItens(itensIniciais);
    setMostrouPedido(false);
    setConfirmado(false);
    setErro("");
  };

  const calcularTotal = () => {
    const soma = itens.reduce((acc, item) => acc + (item.preco || 0), 0);
    return (soma + 8.9).toFixed(2);
  };

  return (
    <div className="background min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#7D1812] via-[#AA2117] to-[#D6291D] px-4">
      <h1 className="text-white text-4xl font-bold mb-10 tracking-wide drop-shadow-lg">Aqui no iQfome NÓS MONTAMOS O SEU PEDIDO!</h1>
      <div className="card mb-8 flex flex-col items-center justify-center relative w-[350px]">
        {mensagemSucesso && (
          <div className="absolute -top-2 text-[#F6B152] px-4 py-2 rounded animate-bounce font-bold text-xl">
            Pedido confirmado com sucesso!
          </div>
        )}

        {erro && (
          <div className="mb-4 text-red-300 font-semibold text-sm text-center justify-center items-center">{erro}</div>
        )}

        {!confirmado && (
          <div className="grid grid-cols-2 gap-12 mb-12 min-h-[180px] min-w-[180px] justify-center items-center">
            {itens.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 shadow-xl hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center min-h-[180px] min-w-[180px]"
              >
                <img
                  src={item.imagem || imagemDefault}
                  alt={item.nome}
                  className="w-20 h-20 object-fill mb-4"
                />
                <p className="text-xs font-semibold text-gray-800">{item.nome}</p>
                <p className="text-[10px]">
                  {item.preco ? `R$ ${item.preco.toFixed(2)}` : ""}
                </p>
              </div>
            ))}
          </div>
        )}

        {!confirmado && (
          <>
            <button
              className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-mono text-lg tracking-widest rounded-lg hover:bg-yellow-500 hover:text-red-900 transition-colors duration-300"
              onClick={gerarPedido}
            >
              GERAR PEDIDO
            </button>

            {mostrouPedido && (
              <button
                className="mt-4 px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-mono text-lg tracking-widest rounded-lg hover:bg-yellow-500 hover:text-red-900 transition-colors duration-300"
                onClick={confirmarPedido}
              >
                CONFIRMAR PEDIDO
              </button>
            )}
          </>
        )}

        {confirmado && (
          <>
            <div className="bg-white text-black mt-10 p-4 w-[220px] text-[8px] shadow-lg font-bitcount">
              <div className="text-center mb-2">
                <div className="font-bold">IQFOME</div>
                <div>Avenida Brasil, 01</div>
                <div>(99) 2222-3333</div>
                <div>CNPJ: 99.999.999/0001-99 I.E.: 123.321</div>
              </div>
              <div className="text-center my-2">
                IMPRESSO EM 23/07/2025 xx:xx
              </div>
              <div className="text-center font-bold mb-2">
                *** NAO É DOCUMENTO FISCAL ***
              </div>
              <div className="border-t border-black pt-2">
                {itens.map((item, i) => (
                  <div key={i} className="flex justify-between">
                    <span>1 {item.nome}</span>
                    <span>R$ {item.preco?.toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between mt-2">
                  <span>+ ENTREGA:</span>
                  <span>R$ 8,90</span>
                </div>
                <div className="flex justify-between font-bold mt-2">
                  <span>= TOTAL A PAGAR:</span>
                  <span>R$ {calcularTotal()}</span>
                </div>
              </div>
              <div className="mt-2">Atendente: Devopeiro</div>
              <div className="mt-2 text-center">
                ***
                <br />
                Junte 10 carimbos e troque
                <br />
                Você tem 8 Carimbos. Ganhe um item grátis na próxima compra.
              </div>
            </div>

            <button
              className="px-8 mt-4 py-3 border-2 border-yellow-500 text-yellow-500 font-mono text-lg tracking-widest rounded-lg hover:bg-yellow-500 hover:text-red-900 transition-colors duration-300"
              onClick={novoPedido}
            >
              NOVO PEDIDO
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
