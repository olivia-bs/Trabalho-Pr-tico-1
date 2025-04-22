const destinos = [
    {
      id: 1,
      nome: "Praia de Cancun",
      descricao: "Uma das praias mais famosas do México, conhecida por suas águas cristalinas.",
      imagem: "img/Praiadecancun.jpg",
      localizacao: "Cancun, México",
      continente: "América",
      tipo: "Praia",
      recomendado: false
    },
    {
      id: 2,
      nome: "Monte Everest",
      descricao: "O pico mais alto do mundo, atraindo aventureiros ao Nepal.",
      imagem: "img/Everest.jpg",
      localizacao: "Himalaias, Nepal",
      continente: "Ásia",
      tipo: "Montanha",
      recomendado: false
    },
    {
      id: 3,
      nome: "Museu do Louvre",
      descricao: "O museu mais visitado do mundo, localizado em Paris, França.",
      imagem: "img/Louvre.jpg",
      localizacao: "Paris, França",
      continente: "Europa",
      tipo: "Museu",
      recomendado: true
    },
    {
      id: 4,
      nome: "Torre Eiffel",
      descricao: "Símbolo de Paris com uma vista incrível da cidade.",
      imagem: "img/Torre.jpg",
      localizacao: "Paris, França",
      continente: "Europa",
      tipo: "Construção Histórica",
      recomendado: false
    },
    {
      id: 5,
      nome: "Coliseu de Roma",
      descricao: "Símbolo da Roma Antiga e um dos locais mais visitados do mundo.",
      imagem: "img/Coliseu.jpg",
      localizacao: "Roma, Itália",
      continente: "Europa",
      tipo: "Construção Histórica",
      recomendado: false
    },
    {
      id: 6,
      nome: "Sydney Opera House",
      descricao: "Famosa por sua arquitetura única e eventos culturais.",
      imagem: "img/Opera.jpg",
      localizacao: "Sydney, Austrália",
      continente: "Oceania",
      tipo: "Construção Histórica",
      recomendado: true
    },
    {
      id: 7,
      nome: "Machu Picchu",
      descricao: "Antiga cidade Inca no Peru, uma das maravilhas arqueológicas do mundo.",
      imagem: "img/Machupichu.jpeg",
      localizacao: "Cusco, Peru",
      continente: "América",
      tipo: "Construção Histórica",
      recomendado: false
    },
    {
      id: 8,
      nome: "Grande Muralha da China",
      descricao: "Construção histórica com mais de 13 mil milhas de extensão.",
      imagem: "img/Muralha.jpg",
      localizacao: "China",
      continente: "Ásia",
      tipo: "Construção Histórica",
      recomendado: false
    },
    {
      id: 9,
      nome: "Grand Canyon",
      descricao: "Uma das maravilhas naturais mais impressionantes dos EUA.",
      imagem: "img/Grand.jpg",
      localizacao: "Arizona, EUA",
      continente: "América",
      tipo: "Montanha",
      recomendado: false
    },
    {
      id: 10,
      nome: "Taj Mahal",
      descricao: "Mausoléu indiano considerado uma das sete maravilhas do mundo moderno.",
      imagem: "img/Tajmahal.jpeg",
      localizacao: "Agra, Índia",
      continente: "Ásia",
      tipo: "Construção Histórica",
      recomendado: false
    },
    {
      id: 11,
      nome: "Burj Khalifa",
      descricao: "Prédio mais alto do mundo, localizado em Dubai.",
      imagem: "img/Burj-Khalifa.jpg",
      localizacao: "Dubai, Emirados Árabes Unidos",
      continente: "Ásia",
      tipo: "Construção Histórica",
      recomendado: true
    },
    {
      id: 12,
      nome: "Cristo Redentor",
      descricao: "Uma das sete maravilhas do mundo moderno, localizada no Brasil.",
      imagem: "img/CristoR.jpg",
      localizacao: "Rio de Janeiro, Brasil",
      continente: "América",
      tipo: "Construção Histórica",
      recomendado: true
    }
  ];
  
  

function exibirCards() {
    const containerRecomendados = document.getElementById("recomendados-container");
    const containerTodos = document.getElementById("todos-container");

    destinos.forEach(destino => {
        const card = document.createElement("div");
        card.className = "lugar";
        card.innerHTML = `
        <img src="${destino.imagem}" alt="${destino.nome}">
        <h3>${destino.nome}</h3>
        <p>${destino.descricao}</p>
        <a href="detalhes.html?id=${destino.id}">Saiba Mais</a>
      `;

        if (destino.recomendado) {
            containerRecomendados.appendChild(card.cloneNode(true));
        }

        containerTodos.appendChild(card);
    });
}

window.addEventListener("DOMContentLoaded", exibirCards);

function exibirDetalhes() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    const destino = destinos.find(dest => dest.id === id);

    if (destino) {
        const container = document.getElementById("detalhes-container");
        container.innerHTML = `
  <section class="detalhes-wrapper">
    <div class="detalhes-img">
      <img src="${destino.imagem}" alt="${destino.nome}">
    </div>
    <div class="detalhes-info">
      <h2>${destino.nome}</h2>
      <p class="descricao">${destino.descricao}</p>
      <p><strong>Localização:</strong> ${destino.localizacao}</p>
      <p><strong>Continente:</strong> ${destino.continente}</p>
      <p><strong>Tipo:</strong> ${destino.tipo}</p>
      <a class="btn-voltar" href="index.html">← Voltar à Página Inicial</a>
    </div>
  </section>
`;

    }
}

if (window.location.pathname.includes("detalhes.html")) {
    window.addEventListener("DOMContentLoaded", exibirDetalhes);
}



