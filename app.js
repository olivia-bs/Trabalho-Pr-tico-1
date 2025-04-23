const destinos = [
    {
        id: 1,
        nome: "Burj Khalifa",
        descricaoResumida: "O edifício mais alto do mundo, símbolo de inovação e modernidade em Dubai.",
        descricao: "O edifício mais alto do mundo, o Burj Khalifa é símbolo de inovação e modernidade em Dubai. Oferece uma vista deslumbrante do deserto e da cidade a partir de seus observatórios panorâmicos.",
        imagem: "img/Burj-Khalifa.jpg",
        fotosAdicionais: [
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60588-Burj-Khalifa.jpg",
            "https://r-xx.bstatic.com/xdata/images/landmark/608x352/255561.webp?k=82c01228e3a47190c99c48435c6697f342c722ccd9c0378bcec323eb3685dfce&o=",
            "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/14/cb/3d/76.jpg",
            "https://cdn-imgix.headout.com/blog-content/image/755c487e88a5140dceea9bbf1da7b99e-Burj%20Khalifa.jpg?auto=format&w=1069.6000000000001&h=687.6&q=90&fit=crop&ar=14%3A9&crop=faces"
          ],
        localizacao: "Dubai, Emirados Árabes Unidos",
        tipo: "Construção Histórica",
        avaliacaoMedia: 9.0,
        recomendado: false
    },
    {
        id: 2,
        nome: "Cristo Redentor",
        descricaoResumida: "Um dos monumentos mais conhecidos do mundo, símbolo de fé no Brasil.",
        descricao: "Localizado no alto do Corcovado, o Cristo Redentor é um dos monumentos mais conhecidos do mundo e oferece uma vista privilegiada do Rio de Janeiro. É também um símbolo de fé e acolhimento.",
        imagem: "img/CristoR.jpg",
        fotosAdicionais: [
            "https://grupocataratas.com/wp-content/uploads/2023/04/Copia-de-Copia-de-DJI_0031-scaled.jpg",
            "https://binaries.pirelli.com/2022/11/18/085517695-b2627d42-ce17-4a87-9695-63ad7c09379d.jpg",
            "https://www.gov.br/icmbio/pt-br/centrais-de-conteudo/cristo-jpg",
            "https://s2-g1.glbimg.com/kMdT6TehISXBmfSQUaY6FQgm9dU=/0x0:1280x960/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/j/j/3h0BMTSrWorZFuGL3f4w/whatsapp-image-2023-11-16-at-21.04.54.jpeg"
          ],
        localizacao: "Rio de Janeiro, Brasil",
        tipo: "Construção Histórica",
        avaliacaoMedia: 9.6,
        recomendado: true
    },
    {
        id: 3,
        nome: "Coliseu de Roma",
        descricaoResumida: "Antigo anfiteatro romano, impressiona pela sua grandiosidade e história.",
        descricao: "Antigo anfiteatro romano, o Coliseu é uma das estruturas mais impressionantes da engenharia da Roma Antiga. Com séculos de história, atrai milhões de turistas interessados na grandiosidade do Império Romano.",
        imagem: "img/Coliseu.jpg",
        fotosAdicionais: [
            "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic_2744183_bx.webp?w=1600&h=900",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Panoramic_photograph_of_interior_of_Colosseum.jpg/960px-Panoramic_photograph_of_interior_of_Colosseum.jpg",
            "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/coliseu-em-roma-foto-de-junho-de-2016-flickr.jpg?crop=1&resize=1212,909",
            "https://ensinarhistoria.com.br/s21/wp-content/uploads/2015/10/Coliseu-e1445959346807.jpg"
          ],
        localizacao: "Roma, Itália",
        tipo: "Construção Histórica",
        avaliacaoMedia: 9.1,
        recomendado: false
    },
    {
        id: 4,
        nome: "Grand Canyon",
        descricaoResumida: "Uma das paisagens naturais mais impressionantes do mundo, esculpida pelo rio Colorado.",
        descricao: "Esculpido ao longo de milhões de anos pelo rio Colorado, o Grand Canyon oferece uma paisagem geológica impressionante e trilhas que revelam a grandiosidade da natureza americana.",
        imagem: "img/Grand.jpg",
        fotosAdicionais: [
            "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/thinkstockphotos-514931509.jpeg?crop=1&resize=1212,909",
            "https://www.nps.gov/grca/planyourvisit/images/mather-point-2021.jpg",
            "https://www.grandcanyontrust.org/wp-content/uploads/2025/01/Grand_Canyon_header_1800x900_c_RickGoldwasser.jpg",
            "https://www.grandcanyontrust.org/wp-content/uploads/2024/07/Grand-Canyon-National-Park-Sunset-Yavapai-Point-K-Thomas-National-Park-Service900x450.jpg"
          ],
        localizacao: "Arizona, EUA",
        tipo: "Montanha",
        avaliacaoMedia: 8.8,
        recomendado: false
    },
    {
        id: 5,
        nome: "Grande Muralha da China",
        descricaoResumida: "Uma das maiores construções humanas, cruzando diversas paisagens na China.",
        descricao: "Com mais de 20 mil km de extensão, a Muralha da China é uma das maiores construções já feitas pelo ser humano. Cruza diversas paisagens e é um marco histórico e cultural de valor incalculável.",
        imagem: "img/Muralha.jpg",
        fotosAdicionais: [
            "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/nationalgeographic2710344.jpg?w=1900&h=1272",
            "https://media.staticontent.com/media/pictures/2c8660e3-680e-4a6d-8093-d78a81f0d816",
            "https://aventurasnahistoria.com.br/media/_versions/2025/03/china4_widelg.jpg",
            "https://media.gazetadopovo.com.br/2011/11/muralha-china-1.0.79139915-gpLarge.jpg"
          ],
        localizacao: "China",
        tipo: "Construção Histórica",
        avaliacaoMedia: 9.4,
        recomendado: false
    },
    {
        id: 6,
        nome: "Machu Picchu",
        descricaoResumida: "Uma antiga cidade inca no alto das montanhas peruanas, eleita Patrimônio Mundial da UNESCO.",
        descricao: "Erguida no alto das montanhas peruanas, Machu Picchu é uma antiga cidade inca que impressiona por sua arquitetura e mistério. Rodeada por natureza exuberante, é Patrimônio Mundial da UNESCO e um destino inesquecível.",
        imagem: "img/Machupichu.jpeg",
        fotosAdicionais: [
            "https://media.istockphoto.com/id/1339071089/pt/foto/machu-picchu-inca-ruins.jpg?s=612x612&w=0&k=20&c=aE3eC-LaQtsqRhBNdNqcghRq0DrldQQFStt8gzbW_Gg=",
            "https://i.natgeofe.com/n/819ea774-aa80-435e-af5a-ae56efee7ce3/92491.jpg",
            "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/01-machu-picchu-secrets.jpg?w=1600&h=1068",
            "https://img.12go.asia/0/fit/1024/0/ce/1/plain/s3://12go-web-static/static/images/upload-media/4409.jpeg"
          ],
        localizacao: "Cusco, Peru",
        tipo: "Construção Histórica",
        avaliacaoMedia: 9.5,
        recomendado: false
    },
    {
        id: 7,
        nome: "Monte Everest",
        descricaoResumida: "O ponto mais alto do planeta, símbolo de desafio e superação para todos que se desafiam a chegar ao topo.",
        descricao: "O ponto mais alto do planeta, o Monte Everest é um símbolo de desafio e superação. Situado na Cordilheira do Himalaia, atrai montanhistas e aventureiros do mundo todo, oferecendo vistas deslumbrantes e uma experiência única.",
        imagem: "img/Everest.jpg",
        fotosAdicionais: [
            "https://static.todamateria.com.br/upload/mo/nt/monte-everest-og.jpg?class=ogImageWide",
            "https://services.meteored.com/img/article/nueva-altura-del-monte-everest-disminuida-o-incrementada-295761-1_1280.jpg",
            "https://wl-incrivel.cf.tsp.li/resize/728x/png/b1a/bdb/d4ce8b55cca43113c82d3c3456.png",
            "https://aventurasnahistoria.com.br/media/_versions/2024/09/gettyimages-534935948_widelg.jpg"
          ],
        localizacao: "Himalaias, Nepal",
        tipo: "Montanha",
        avaliacaoMedia: 8.7,
        recomendado: false
    },
    {
        id: 8,
        nome: "Museu do Louvre",
        descricaoResumida: "O museu mais famoso do mundo, com um belíssimo acervo de obras-primas da arte.",
        descricao: "Com um acervo incomparável, o Museu do Louvre em Paris abriga obras-primas como a Mona Lisa e a Vênus de Milo. Seu edifício histórico, aliado à famosa pirâmide de vidro, oferece uma imersão no melhor da arte e cultura mundial.",
        imagem: "img/Louvre.jpg",
        fotosAdicionais: [
            "https://www.infoescola.com/wp-content/uploads/2008/08/museu-do-louvre.jpg",
            "https://media.istockphoto.com/id/468536630/pt/foto/pir%C3%A2mide-e-pal%C3%A1cio-do-louvre-%C3%A0-noite.jpg?s=612x612&w=0&k=20&c=BYOVO_S7Ma48XszmNhSUXqs-_CyaXqep-sVDwX2ZVRc=",
            "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/542000/542149-louvre-museum.jpg",
            "https://midias-turismo.eurodicas.com.br/wp-content/uploads/2025/02/ingresso-museu-do-louvre-1.jpeg.webp"
          ],
        localizacao: "Paris, França",
        tipo: "Museu",
        avaliacaoMedia: 9.6,
        recomendado: true
    },
    {
        id: 9,
        nome: "Praia de Cancun",
        descricaoResumida: "Uma das mais belas praias do planeta, famosa por suas águas azul-turquesa e vida noturna vibrante.",
        descricao: "Localizada no Caribe mexicano, Cancun é famosa por suas águas azul-turquesa, areias brancas e vida noturna vibrante. É um destino ideal para quem busca relaxamento à beira-mar e atividades aquáticas como mergulho e snorkeling.",
        imagem: "img/Praiadecancun.jpg",
        fotosAdicionais: [
            "https://dicasdecancun.com.br/wp-content/uploads/sites/19/2022/11/praias-cancun.jpg",
            "https://content.skyscnr.com/m/3beac5ba8fc44acf/original/BR_Cancun_Beaches-_2b.png?resize=808px:455px",
            "https://www.viciadaemviajar.com/wp-content/uploads/2022/08/onde-ficar-em-cancun-playa-caracol.jpg",
            "https://sampi.net.br/dir-arquivo-imagem/2017/10/9aa2c5cbf086314bdd49ce1c161735ff.jpg"
          ],
        localizacao: "Cancun, México",
        tipo: "Praia",
        avaliacaoMedia: 9.2,
        recomendado: false
    },
    {
        id: 10,
        nome: "Sydney Opera House",
        descricaoResumida: "Um ícone cultural da Austrália, com seu design arquitetônico arrojado.",
        descricao: "Com seu design arquitetônico arrojado, a Sydney Opera House é um dos marcos culturais mais reconhecíveis do mundo. Sedia apresentações de ópera, teatro e concertos, sendo um símbolo da modernidade australiana.",
        imagem: "img/Opera.jpg",
        fotosAdicionais: [
            "https://cdn-imgix.headout.com/tour/20072/TOUR-IMAGE/d85280d5-3c4f-4f54-bd7a-6fc5cc68597f-10732-sydney-sydney-and-bondi-tour-with-sydney-opera-house-tour-01.jpg",
            "https://viagemeturismo.abril.com.br/wp-content/uploads/2024/07/c-valdez-fAOV6_u_uhI-unsplash.jpg?crop=1&resize=1212,909",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/93/a7/be/sydney-opera-house.jpg?w=1200&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/a6/f6/1e/view.jpg?w=900&h=500&s=1"
          ],
        localizacao: "Sydney, Austrália",
        tipo: "Construção Histórica",
        avaliacaoMedia: 8.9,
        recomendado: true
    },
    {
        id: 11,
        nome: "Taj Mahal",
        descricaoResumida: "Um mausoléu de mármore branco, símbolo de amor e beleza, eleito uma das Sete Maravilhas do Mundo",
        descricao: "Construído como prova de amor, o Taj Mahal é um mausoléu em mármore branco que encanta por sua simetria e beleza. É considerado uma das sete maravilhas do mundo moderno.",
        imagem: "img/Tajmahal.jpeg",
        fotosAdicionais: [
            "https://upload.wikimedia.org/wikipedia/commons/1/1f/Taj_Mahal_N-UP-A28-a.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6e/b1/6a/caption.jpg?w=1200&h=-1&s=1",
            "https://cdn.britannica.com/36/178636-050-805D750A/mosque-sandstone-mausoleum-complex-Taj-Mahal-Uttar.jpg",
            "https://theimperialtours.com/wp-content/uploads/2024/09/tajmahajnight.jpg"
          ],
        localizacao: "Agra, Índia",
        tipo: "Construção Histórica",
        avaliacaoMedia: 9.7,
        recomendado: true
    },
    {
        id: 12,
        nome: "Torre Eiffel",
        descricaoResumida: "Símbolo icônico da França, oferecendo vistas panorâmicas de Paris.",
        descricao: "Símbolo icônico da França, a Torre Eiffel proporciona uma vista panorâmica de Paris e é uma parada obrigatória para qualquer visitante da cidade luz. À noite, seu show de luzes encanta turistas do mundo inteiro.",
        imagem: "img/Torre.jpg",
        fotosAdicionais: [
            "https://cdn-imgix.headout.com/media/images/c90f7eb7a5825e6f5e57a5a62d05399c-25058-BestofParis-EiffelTower-Cruise-Louvre-002.jpg",
            "https://viajoteca.com/wp-content/uploads/2022/01/Torre-Eiffel-no-Verao.jpg",
            "https://imgmd.net/images/v1/guia/1703660/torre-eiffel-paris.jpg",
            "https://jpimg.com.br/uploads/2021/02/eiffel-tower-3349075_1920.jpg"
          ],
        localizacao: "Paris, França",
        tipo: "Construção Histórica",
        avaliacaoMedia: 9.3,
        recomendado: false
    }
];

// Exibição de todos os destinos
function exibirTodosOsDestinos() {
    const containerTodos = document.getElementById("todos-container");
    containerTodos.innerHTML = '';

    destinos.forEach(destino => {
        const card = document.createElement("div");
        card.className = "lugar";
        card.innerHTML = `
            <img src="${destino.imagem}" alt="${destino.nome}">
            <h3>${destino.nome}</h3>
            <p>${destino.descricaoResumida}</p>
            <a href="detalhes.html?id=${destino.id}">Saiba Mais</a>
        `;
        containerTodos.appendChild(card);
    });
}

// Carrossel de recomendados
const recomendados = destinos.filter(destino => destino.recomendado);
let indiceAtual = 0;

function renderizarCarrossel(indice) {
    const carrossel = document.getElementById("recomendados-carrossel");
    carrossel.innerHTML = "";

    if (recomendados.length > 0) {
        const destino = recomendados[indice];
        const card = document.createElement("div");
        card.classList.add("lugar-carrossel");
        card.innerHTML = `
            <img src="${destino.imagem}" alt="${destino.nome}">
            <h3>${destino.nome}</h3>
            <p>${destino.descricaoResumida}</p>
            <a href="detalhes.html?id=${destino.id}">Saiba mais</a>
        `;
        carrossel.appendChild(card);
    } else {
        carrossel.innerHTML = "<p>Não há destinos recomendados.</p>";
    }
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrossel(indiceAtual);  // carrega um destino no carrossel imediatamente
    exibirTodosOsDestinos();           // carrega todos os destinos abaixo
});

// Navegação do carrossel
document.getElementById("btn-anterior").addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + recomendados.length) % recomendados.length;
    renderizarCarrossel(indiceAtual);
});

document.getElementById("btn-proximo").addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % recomendados.length;
    renderizarCarrossel(indiceAtual);
});
