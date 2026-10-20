/*
  DADOS DO ACERVO — edite este arquivo para corrigir fichas e textos.
  Campos vazios ("") não aparecem na página.
  year: ano usado para ordenar. yearLabel: como o ano aparece (ex.: "c. 1999").
  colecao + capitulo: onde a camisa aparece na página.
  competicoes: marcadores de Copa do Mundo / Olimpíadas.
    status "confirmado" = há prova (ex.: torneio estampado); "provavel" = deduzido pelo modelo e pela época.
*/
window.ACERVO = {
  nome: "Acervo Guerreiras",
  local: "São Paulo, SP",
  titulo: "A história do futebol feminino, vestida em campo",
  // o e-mail é montado pelo navegador, para não ficar escrito inteiro no código da página
  contato: { usuario: "jeffs.fernandes", dominio: "gmail.com", assunto: "Acervo Guerreiras" },

  sobreNos: [
    "O Acervo Guerreiras é o trabalho de um colecionador e pesquisador da história do futebol. Colecionamos desde 2014, e desde o começo a pesquisa pesa tanto quanto a camisa: de que época é, para que torneio foi feita, o que dizem as etiquetas, os números, os nomes e o desgaste, e o que dá para confirmar e o que ainda é hipótese.",
    "Tudo começou com uma dificuldade: informação sobre o futebol feminino é difícil de encontrar, e sobre as camisas, mais ainda. Cada peça exige procurar, comparar com fotos e registros, perguntar, duvidar e anotar. Para nós, achar a camisa é só o começo; o que interessa é a jornada de cada uma, de onde veio e o que ela viveu.",
    "Colecionar futebol feminino é também uma forma de valorizá-lo. Guardar as camisas, documentar as histórias e mostrá-las com o cuidado que se dá a qualquer outra memória do esporte é o que este acervo quer fazer."
  ],

  sobre: [
    "Camisas de seleções femininas, todas de jogo, fotografadas na frente e nas costas, com a mesma luz e o mesmo fundo, para que dê para comparar tecidos, estampas e desgaste de uma peça para outra.",
    "O acervo fica em São Paulo e tem duas coleções: Pioneiras, que conta as Copas e as Olimpíadas de 1991 a 2004, e Legends, com camisas de jogadoras que atravessaram essas décadas. A catalogação continua: cada ficha é completada à medida que a história de cada camisa é confirmada."
  ],

  ui: {
    docTitle: "Acervo Guerreiras · A história do futebol feminino, vestida em campo",
    metaDesc: "Camisas de jogo de seleções femininas, de 1992 a 2024, em duas coleções: Pioneiras e Legends.",
    selo: "camisas de jogo",
    sub: "<strong>{n} camisas de jogo</strong> de seleções femininas, de {a} a {b}, em {c} coleções.",
    colecoesAria: "As duas coleções",
    trilhoAria: "Linha do tempo: Copas, Olimpíadas e Legends",
    camisasN: "{n} camisas",
    copaRot: "Copa", olimpRot: "Olimpíadas",
    legCopa: "Copa do Mundo", legOlim: "Olimpíadas",
    legProv: "Tracejado: uso provável, pelo modelo e pela época",
    legPrep: "Pontilhado: preparada para a competição, sem uso em jogo",
    legSemNome: "Camisa de jogo sem nome: nas competições as camisas levavam o nome",
    epocaTit: "Camisas da época",
    tambem: "Camisas do acervo que podem ter estado em campo aqui:",
    sobreTit: "Sobre nós", sobreLink: "Sobre nós", voltar: "← Início", acervoTit: "O acervo", contato: "Conversar sobre o acervo",
    rodape: "{nome}{local} · {n} camisas, {a}–{b}. Escudos e marcas pertencem aos seus titulares e aparecem aqui apenas nas fotos das camisas.",
    fichaAria: "Ficha da camisa", frente: "Frente", costas: "Costas", ladoAria: "Lado da camisa",
    fechar: "Fechar ficha", anterior: "Anterior", proxima: "Próxima",
    rSelecao: "Seleção", rEpoca: "Época", rFab: "Fabricante", rNum: "Número", rNome: "Nome na camisa", rTipo: "Tipo",
    rAtrib: "Atribuição", rTam: "Tamanho", rEstado: "Estado", rProc: "Procedência", rMarcas: "Marcas", rDet: "Detalhes",
    competicoes: "Competições", foraComp: "Fora das competições",
    stConf: "Confirmado.", stProv: "Uso provável, pelo modelo e pela época.", stPrep: "Preparada para esta competição, sem uso em jogo.",
    rotConf: " (confirmado)", rotProv: " (uso provável)", rotPrep: " (preparada, sem uso em jogo)",
    abrirFicha: "Abrir ficha: ", foraCompAria: "Camisa de jogo da época, fora das competições",
    nr: "nº", altFmt: "Camisa {t} de {p} ({y}), número {n}, {l}", ladoF: "frente", ladoB: "costas",
    selGrupo: "Idioma / Language"
  },

  usos: {
    epoca: {
      rotulo: "Eliminatória / amistoso",
      texto: "Camisa de jogo sem nome. Nas competições as camisas levavam o nome da jogadora, então estas foram usadas provavelmente em eliminatórias, amistosos de preparação (inclusive na véspera da Copa) e outros jogos da época, e não nas competições."
    }
  },

  competicoes: {
    "copa-1995": { tipo: "copa",       ano: 1995, nome: "Copa do Mundo 1995" },
    "copa-1999": { tipo: "copa",       ano: 1999, nome: "Copa do Mundo 1999" },
    "copa-2003": { tipo: "copa",       ano: 2003, nome: "Copa do Mundo 2003" },
    "copa-2019": { tipo: "copa",       ano: 2019, nome: "Copa do Mundo 2019" },
    "olim-1996": { tipo: "olimpiadas", ano: 1996, nome: "Olimpíadas 1996" },
    "olim-2000": { tipo: "olimpiadas", ano: 2000, nome: "Olimpíadas 2000" },
    "olim-2024": { tipo: "olimpiadas", ano: 2024, nome: "Olimpíadas 2024" }
  },

  colecoes: [
    {
      id: "c1991",
      titulo: "Pioneiras",
      resumo: "1991–2003 · Quatro Copas, três Olimpíadas",
      texto: "Entre 1991 e 2003, o futebol feminino passou de um torneio que a própria FIFA hesitou em chamar de Copa do Mundo para uma final com mais de 90 mil pessoas no estádio. Foram quatro Copas e três Olimpíadas, e o Brasil esteve em todas elas. As camisas desta coleção vêm desse período, todas de jogo.",
      capitulos: [
        {
          id: "copa-1991", tipo: "copa", ano: 1991, titulo: "Copa do Mundo 1991",
          local: "China · 16 a 30 de novembro",
          gancho: "A primeira Copa do Mundo feminina, que a FIFA ainda não queria chamar assim.",
          fatos: [
            ["Sede", "Guangdong, China"],
            ["Seleções", "12"],
            ["Campeã", "Estados Unidos"],
            ["Final", "EUA 2 × 1 Noruega"],
            ["Brasil", "Fase de grupos"]
          ],
          paragrafos: [
            "O torneio se chamou oficialmente Campeonato Mundial Feminino da FIFA, e não Copa do Mundo: a entidade ainda hesitava em ceder a marca. Os jogos tinham 80 minutos, em dois tempos de 40.",
            "Os Estados Unidos venceram a Noruega por 2 a 1, com dois gols de Michelle Akers, o segundo a dois minutos do fim. Linda Medalen tinha empatado para a Noruega.",
            "O Brasil estreou em Copas vencendo o Japão por 1 a 0, perdeu para Estados Unidos e Suécia e saiu por um gol: a vaga de melhor terceiro colocado ficou com Taipé Chinesa, que tinha os mesmos pontos e o mesmo saldo e havia marcado dois gols contra um do Brasil."
          ],
          notaCamisas: "A camisa da Noruega é de algum ponto entre 1990 e 1994, período que inclui esta Copa. Não há registro que a ligue a um torneio específico, nem que confirme se é da seleção feminina ou da masculina."
        },
        {
          id: "copa-1995", tipo: "copa", ano: 1995, titulo: "Copa do Mundo 1995",
          local: "Suécia · 5 a 18 de junho",
          gancho: "A Noruega venceu na chuva de Solna e se tornou a primeira campeã europeia.",
          fatos: [
            ["Sede", "Suécia"],
            ["Campeã", "Noruega"],
            ["Final", "Noruega 2 × 0 Alemanha"],
            ["Melhor jogadora", "Hege Riise"],
            ["Brasil", "Fase de grupos"]
          ],
          paragrafos: [
            "Os jogos passaram a ter 90 minutos e a vitória a valer três pontos. A Noruega fez 17 a 0 em três jogos na primeira fase e, na final, abriu 2 a 0 em três minutos: Hege Riise marcou aos 37 e Marianne Pettersen aos 40, contra uma Alemanha que tinha sido tricampeã europeia meses antes.",
            "O Brasil abriu a Copa vencendo a Suécia por 1 a 0, mas perdeu para o Japão por 2 a 1 e para a Alemanha por 6 a 1, e ficou na primeira fase. Na seleção, uma jogadora de 17 anos fazia sua estreia: Formiga, que ainda jogaria mais seis Copas."
          ]
        },
        {
          id: "olim-1996", tipo: "olimpiadas", ano: 1996, titulo: "Olimpíadas 1996",
          local: "Atlanta, Estados Unidos · 21 de julho a 1º de agosto",
          competicao: "olim-1996",
          gancho: "O futebol feminino entrou nos Jogos pela primeira vez, e o estádio lotou.",
          fatos: [
            ["Seleções", "8, as melhores da Copa de 1995"],
            ["Ouro", "Estados Unidos"],
            ["Final", "EUA 2 × 1 China, 76.489 pessoas"],
            ["Bronze", "Noruega"],
            ["Brasil", "4º lugar"]
          ],
          paragrafos: [
            "Não houve tempo para eliminatórias: as oito melhores seleções da Copa de 1995 foram convidadas. A final, entre Estados Unidos e China, reuniu 76.489 pessoas, então a maior plateia da história do esporte feminino. O recorde caiu três anos depois, no Rose Bowl.",
            "O Brasil empatou com a Noruega por 2 a 2, venceu o Japão por 2 a 0, empatou com a Alemanha e chegou à semifinal. Chegou a vencer a China por 2 a 1, com gols de Roseli e Pretinha, mas Wei Haiying marcou aos 83 e aos 90 minutos e a China ganhou por 3 a 2. No jogo do bronze, a Noruega venceu por 2 a 0. Pretinha dividiu a artilharia do torneio, com quatro gols. Formiga começava ali sua sequência de sete Olimpíadas."
          ]
        },
        {
          id: "copa-1999", tipo: "copa", ano: 1999, titulo: "Copa do Mundo 1999",
          local: "Estados Unidos · 19 de junho a 10 de julho",
          gancho: "Mais de 90 mil pessoas no Rose Bowl e um pênalti que foi parar na capa da Sports Illustrated.",
          fatos: [
            ["Sede", "Estados Unidos, 8 estádios"],
            ["Seleções", "16"],
            ["Campeã", "Estados Unidos"],
            ["Final", "EUA 0 × 0 China, 5 × 4 nos pênaltis, 90.185 pessoas"],
            ["Brasil", "3º lugar"],
            ["Artilheiras", "Sissi e Sun Wen, 7 gols cada"]
          ],
          paragrafos: [
            "A final no Rose Bowl terminou sem gols nos 120 minutos. Nos pênaltis, a goleira Briana Scurry defendeu uma cobrança chinesa e Brandi Chastain converteu a última. A plateia de 90.185 pessoas foi, na época, recorde mundial para um evento esportivo feminino, e a comemoração de Chastain ilustrou a capa da Sports Illustrated.",
            "A Noruega, campeã de 1995, caiu na semifinal por 5 a 0 para a China e terminou em quarto. A Alemanha perdeu para os Estados Unidos nas quartas, por 3 a 2.",
            "O Brasil fez a melhor campanha da sua história até então. Nas quartas, Sissi marcou de falta o gol de ouro que eliminou a Nigéria no prolongamento. Na semifinal, a seleção perdeu por 2 a 0 para os Estados Unidos e depois ficou com o terceiro lugar, vencendo a Noruega nos pênaltis: o primeiro pódio do Brasil em Copas. Sissi dividiu a artilharia com Sun Wen e levou a Bola de Prata. Formiga também estava lá."
          ],
          notaCamisas: "A Noruega nº 5, com o torneio bordado na frente, foi usada contra o Brasil no jogo do terceiro lugar. A de Grings é da competição. A de Cidinha foi preparada para a Copa, mas não entrou em campo: o torneio foi no verão dos Estados Unidos e o Brasil jogou só de manga curta."
        },
        {
          id: "olim-2000", tipo: "olimpiadas", ano: 2000, titulo: "Olimpíadas 2000",
          local: "Sydney, Austrália · 13 a 28 de setembro",
          competicao: "olim-2000",
          gancho: "A Noruega, que quase ninguém esperava, tirou o ouro das campeãs do mundo com um gol de ouro.",
          fatos: [
            ["Seleções", "8"],
            ["Ouro", "Noruega"],
            ["Final", "Noruega 3 × 2 Estados Unidos, no prolongamento"],
            ["Bronze", "Alemanha"],
            ["Brasil", "4º lugar"]
          ],
          paragrafos: [
            "Os Estados Unidos, campeões do mundo, eram os favoritos e venceram a Noruega por 2 a 0 na estreia. A Noruega, que tinha tomado 5 a 0 da China na semifinal da Copa de 1999, reagiu: bateu a China e a Alemanha e chegou à final.",
            "Gro Espeseth abriu o placar. Tiffeny Milbrett empatou nos acréscimos do segundo tempo, mas, aos 12 minutos do prolongamento, Dagny Mellgren fez o gol de ouro que decidiu a medalha. As americanas reclamaram de um toque de mão na jogada; a árbitra considerou o lance legal.",
            "O Brasil perdeu a semifinal para os Estados Unidos e o jogo do bronze para a Alemanha, por 2 a 0, e terminou em quarto lugar pela segunda Olimpíada seguida.",
            "Pelo menos no Brasil, o modelo de camisa das Olimpíadas de 2000 é parecido com o da Copa de 1999. Por isso, uma camisa brasileira com nome desse período, como a de Cidinha, pode ser de uma competição ou da outra."
          ]
        },
        {
          id: "copa-2003", tipo: "copa", ano: 2003, titulo: "Copa do Mundo 2003",
          local: "Estados Unidos · 20 de setembro a 12 de outubro",
          gancho: "A Copa que seria na China foi parar nos Estados Unidos por causa de uma epidemia, e terminou com um gol de ouro.",
          fatos: [
            ["Sede prevista", "China"],
            ["Sede", "Estados Unidos, definida em maio"],
            ["Campeã", "Alemanha"],
            ["Final", "Alemanha 2 × 1 Suécia, gol de ouro"],
            ["Brasil", "Quartas de final"],
            ["Estreantes", "França, Coreia do Sul e Argentina"]
          ],
          paragrafos: [
            "A China perdeu a sede em maio por causa da epidemia de SARS, e os Estados Unidos assumiram o torneio em cerca de três semanas, em estádios menores que os de 1999.",
            "Na final, a Alemanha empatou com a Suécia em 1 a 1 e venceu no prolongamento, com um cabeceio de Nia Künzer: foi o último gol de ouro marcado numa partida oficial entre seleções, e o primeiro título mundial alemão.",
            "O Brasil foi líder do grupo, com uma goleada de 4 a 1 sobre a Noruega, e caiu nas quartas, por 2 a 1, para a Suécia. Nessa Copa, Marta, aos 17 anos, jogou seu primeiro Mundial e marcou contra a Noruega. A França estreava em Copas e não passou da primeira fase."
          ],
          notaCamisas: "A camisa da França é de c. 2000–02, época da estreia francesa em Copas."
        },
        {
          id: "olim-2004", tipo: "olimpiadas", ano: 2004, titulo: "Olimpíadas 2004",
          local: "Atenas, Grécia · 11 a 26 de agosto",
          competicao: "olim-2004",
          gancho: "O Brasil chegou à primeira final olímpica, com Marta aos 18 anos, e perdeu no prolongamento.",
          fatos: [
            ["Seleções", "10"],
            ["Ouro", "Estados Unidos"],
            ["Final", "EUA 2 × 1 Brasil, no prolongamento"],
            ["Bronze", "Alemanha"],
            ["Brasil", "Prata"]
          ],
          paragrafos: [
            "Os Estados Unidos conquistaram o segundo ouro olímpico no torneio em que várias veteranas se despediam da seleção. Lindsay Tarpley abriu o placar aos 39 minutos, Pretinha empatou aos 73 e, no prolongamento, Abby Wambach marcou de cabeça, em escanteio de Kristine Lilly.",
            "O Brasil, um time jovem, passou pela Suécia na semifinal e conquistou sua primeira medalha olímpica, depois de dois quartos lugares. Marta, com 18 anos, Cristiane e Pretinha deram ritmo a uma equipe que acertou a trave duas vezes antes do fim do tempo normal. Cristiane dividiu a artilharia do torneio com Birgit Prinz, com cinco gols. Formiga, que jogava desde 1996, também estava em campo."
          ]
        }
      ]
    },
    {
      id: "legends",
      titulo: "Legends",
      resumo: "Formiga e Marta",
      texto: "Algumas jogadoras atravessam épocas inteiras. Formiga estreou na seleção em 1995, aos 17 anos, e se despediu em 2021. Marta jogou sua primeira Copa em 2003, também aos 17, e disputou em 2024 seu último torneio pela seleção. As duas camisas desta coleção vestem quase três décadas de futebol feminino.",
      capitulos: [
        {
          id: "formiga", tipo: "lenda", ano: 2019, titulo: "Formiga",
          local: "Miraildes Maciel Mota · Salvador, 1978",
          gancho: "Sete Copas, sete Olimpíadas e 26 anos de seleção.",
          fatos: [
            ["Seleção", "1995 a 2021, 26 anos"],
            ["Copas do Mundo", "7, de 1995 a 2019"],
            ["Olimpíadas", "7, de 1996 a 2020"],
            ["Pratas olímpicas", "2004 e 2008"],
            ["Recorde", "Jogadora mais velha em Copas: 41 anos, em 2019"]
          ],
          paragrafos: [
            "Formiga nasceu em Salvador em 1978, quando ainda era proibido por lei que mulheres jogassem futebol no Brasil. A proibição acabou no ano seguinte.",
            "Estreou na seleção na Copa de 1995, aos 17 anos. É a única pessoa, homem ou mulher, a ter disputado sete Copas do Mundo e sete Olimpíadas de futebol. Foi prata em Atenas 2004 e Pequim 2008, vice-campeã mundial em 2007, e na Copa de 2019, aos 41 anos, tornou-se a jogadora mais velha da história do torneio.",
            "Ela esteve nas Copas de 1995, 1999 e 2003 e nos Jogos de 1996, 2000 e 2004: as histórias da coleção Pioneiras passam por ela. A camisa nº 8 do acervo, com o nome dela, é do modelo de 2019, ano da sua sétima Copa."
          ]
        },
        {
          id: "marta", tipo: "lenda", ano: 2024, titulo: "Marta",
          local: "Marta Vieira da Silva · Dois Riachos (AL), 1986",
          gancho: "Dezessete gols em Copas, recorde entre homens e mulheres, e seis vezes a melhor do mundo.",
          fatos: [
            ["Gols em Copas", "17, recorde masculino ou feminino"],
            ["Melhor do mundo (FIFA)", "6 vezes: 2006 a 2010 e 2018"],
            ["Copa de 2007", "Bola de Ouro e Chuteira de Ouro"],
            ["Pratas olímpicas", "2004, 2008 e 2024"],
            ["Primeira Copa", "2003, aos 17 anos"]
          ],
          paragrafos: [
            "Marta jogou sua primeira Copa em 2003, aos 17 anos, e marcou na goleada de 4 a 1 sobre a Noruega. No ano seguinte, aos 18, foi a grande jogadora do Brasil na final olímpica de Atenas. Em 2007, foi a melhor jogadora e a artilheira da Copa, mas o Brasil perdeu a final para a Alemanha.",
            "Em 2019, tornou-se a primeira pessoa, homem ou mulher, a marcar em cinco Copas do Mundo, e chegou a 17 gols, o maior número da história do torneio. Em 2024, disputou em Paris seu último torneio pela seleção: o Brasil voltou a perder a final olímpica para os Estados Unidos, e ela ficou, de novo, com a prata.",
            "A camisa azul nº 10 do acervo, com o nome dela, é do modelo reserva de 2024."
          ]
        }
      ]
    }
  ],

  camisas: [
    {
      id: "nor-1992-gk", colecao: "c1991", capitulo: "copa-1991",
      pais: "Noruega", sigla: "NOR",
      titulo: "Goleira, manga longa",
      year: 1992, yearLabel: "c. 1990–94",
      fabricante: "Adidas",
      numero: "12", nome: "",
      tipo: "De jogo",
      atribuicao: "Sem registro que confirme se foi usada pela seleção feminina ou pela masculina. A Noruega era potência no futebol feminino, o que torna a feminina a hipótese provável.",
      tamanho: "", estado: "", procedencia: "", marcas: "",
      detalhes: "Cotoveleiras acolchoadas nas mangas. Emblema da federação norueguesa e trevo da Adidas no peito.",
      texto: "Se for feminina, é da geração que foi vice-campeã mundial em 1991, campeã em 1995 e campeã olímpica em 2000.",
      competicoes: [],
      uso: "epoca",
      usoTexto: "Camisa de jogo sem nome, de algum ponto entre 1990 e 1994. Nas competições as camisas levavam o nome da jogadora, então esta foi usada provavelmente em eliminatórias, amistosos ou outros jogos da época.",
      img: { f: "img/nor-1992-gk-f.webp", b: "img/nor-1992-gk-b.webp" }
    },
    {
      id: "bra-1994", colecao: "c1991", capitulo: "olim-1996",
      pais: "Brasil", sigla: "BRA",
      titulo: "Titular, Umbro",
      year: 1995, yearLabel: "1995–96",
      fabricante: "Umbro",
      numero: "18", nome: "Nilda, sob a plaqueta “BRASIL”",
      tipo: "De jogo", atribuicao: "",
      tamanho: "", estado: "", procedencia: "",
      marcas: "Plaqueta “BRASIL” aplicada sobre o nome original, nas costas.",
      detalhes: "Escudos da CBF repetidos em laranja sobre o corpo da camisa; gola polo verde; quatro estrelas sobre o escudo.",
      texto: "Por baixo da plaqueta “BRASIL” das costas está o nome Nilda, de uma jogadora da época. A camisa pode ter sido preparada para os Jogos Olímpicos de 1996 e depois reaproveitada: a plaqueta foi aplicada por cima, provavelmente para uso em amistosos.",
      competicoes: [ { id: "olim-1996", status: "provavel" } ],
      img: { f: "img/bra-1994-f.webp", b: "img/bra-1994-b.webp" }
    },
    {
      id: "nor-1999", colecao: "c1991", capitulo: "copa-1999",
      pais: "Noruega", sigla: "NOR",
      titulo: "Titular, Copa do Mundo 1999",
      year: 1999, yearLabel: "1999",
      fabricante: "Umbro",
      numero: "5", nome: "Viker",
      tipo: "De jogo", atribuicao: "",
      tamanho: "", estado: "", procedencia: "", marcas: "",
      detalhes: "Bordado na frente: “FIFA Women’s World Cup USA 1999”. Punhos com o nome do país.",
      texto: "A Noruega chegou ao Mundial de 1999 como campeã de 1995 e terminou em quarto. Esta camisa foi usada contra o Brasil no jogo do terceiro lugar, e é a única do acervo com o torneio bordado na frente.",
      competicoes: [ { id: "copa-1999", status: "confirmado", nota: "Torneio bordado na camisa. Usada contra o Brasil, no jogo do terceiro lugar." } ],
      img: { f: "img/nor-1999-f.webp", b: "img/nor-1999-b.webp" }
    },
    {
      id: "ger-1999-away", colecao: "c1991", capitulo: "copa-1999",
      pais: "Alemanha", sigla: "GER",
      titulo: "Reserva, verde-petróleo",
      year: 1999, yearLabel: "c. 1998–99",
      fabricante: "Adidas",
      numero: "5", nome: "",
      tipo: "De jogo", atribuicao: "",
      tamanho: "", estado: "", procedencia: "", marcas: "",
      detalhes: "Três listras brancas nas laterais, painéis em tela vazada e etiqueta oficial da DFB na barra.",
      texto: "A Alemanha ainda não tinha vencido um Mundial em 1999. Viria a ser campeã em 2003 e 2007.",
      competicoes: [],
      uso: "epoca",
      usoTexto: "Camisa de jogo sem nome, do modelo de 1998–99. Nas competições as camisas levavam o nome da jogadora, então esta foi usada provavelmente em eliminatórias ou em amistosos de preparação para a Copa de 1999.",
      img: { f: "img/ger-1999-away-f.webp", b: "img/ger-1999-away-b.webp" }
    },
    {
      id: "ger-1999-16", colecao: "c1991", capitulo: "copa-1999",
      pais: "Alemanha", sigla: "GER",
      titulo: "Titular, manga longa",
      year: 1999, yearLabel: "c. 1998–2000",
      fabricante: "Adidas",
      numero: "16", nome: "",
      tipo: "De jogo", atribuicao: "",
      tamanho: "", estado: "", procedencia: "", marcas: "",
      detalhes: "Gola polo preta, painéis laterais pretos e faixas nas cores da bandeira alemã nas mangas. Etiqueta oficial da DFB na barra.",
      texto: "",
      competicoes: [],
      uso: "epoca",
      usoTexto: "Camisa de jogo sem nome, do modelo de 1998–2000. Nas competições as camisas levavam o nome da jogadora, então esta foi usada provavelmente em eliminatórias ou em amistosos de preparação para a Copa de 1999 ou para as Olimpíadas de 2000.",
      img: { f: "img/ger-1999-16-f.webp", b: "img/ger-1999-16-b.webp" }
    },
    {
      id: "ger-1999-18", colecao: "c1991", capitulo: "copa-1999",
      pais: "Alemanha", sigla: "GER",
      titulo: "Titular, autografada",
      year: 1999, yearLabel: "c. 1998–2000",
      fabricante: "Adidas",
      numero: "18", nome: "Grings",
      tipo: "De jogo", atribuicao: "",
      tamanho: "", estado: "", procedencia: "",
      marcas: "Autógrafos a caneta na frente da camisa.",
      detalhes: "Mesmo modelo da titular alemã de manga longa, aqui em manga curta.",
      texto: "",
      competicoes: [ { id: "copa-1999", status: "confirmado", nota: "Camisa da competição, segundo o acervo." } ],
      img: { f: "img/ger-1999-18-f.webp", b: "img/ger-1999-18-b.webp" }
    },
    {
      id: "bra-1998-away", colecao: "c1991", capitulo: "copa-1999",
      pais: "Brasil", sigla: "BRA",
      titulo: "Reserva azul, manga longa",
      year: 1999, yearLabel: "c. 1998–2000",
      fabricante: "Nike",
      numero: "9", nome: "",
      tipo: "De jogo", atribuicao: "",
      tamanho: "M (etiqueta)", estado: "", procedencia: "", marcas: "",
      detalhes: "Azul com ombros brancos e gola em V azul e branca. “BRASIL” escrito sob o escudo da CBF. Nas costas, número branco com contorno verde.",
      texto: "",
      competicoes: [],
      uso: "epoca",
      usoTexto: "Camisa de jogo sem nome, do modelo de 1998–2000. Nas competições as camisas levavam o nome da jogadora, então esta foi usada provavelmente em eliminatórias ou em amistosos de preparação para a Copa de 1999 ou para as Olimpíadas de 2000.",
      img: { f: "img/bra-1998-away-f.webp", b: "img/bra-1998-away-b.webp" }
    },
    {
      id: "bra-2000", colecao: "c1991", capitulo: "copa-1999",
      pais: "Brasil", sigla: "BRA",
      titulo: "Titular, manga longa",
      year: 2000, yearLabel: "c. 1999–2000",
      fabricante: "Nike",
      numero: "5", nome: "Cidinha",
      tipo: "Preparada para a Copa de 1999", atribuicao: "",
      tamanho: "", estado: "", procedencia: "", marcas: "",
      detalhes: "Laterais verdes em tela vazada e quatro estrelas sobre o escudo da CBF.",
      texto: "Preparada para a Copa de 1999, com nome e número, mas sem entrar em campo no torneio: foi no verão dos Estados Unidos e o Brasil jogou só de manga curta. Quatro estrelas no escudo: a camisa é anterior ao pentacampeonato mundial masculino de 2002, que acrescentou a quinta.",
      competicoes: [ { id: "copa-1999", status: "preparada", nota: "Preparada para a Copa de 1999, mas não usada em jogo: o torneio foi no verão dos Estados Unidos e o Brasil jogou só de manga curta." }, { id: "olim-2000", status: "provavel" } ],
      img: { f: "img/bra-2000-f.webp", b: "img/bra-2000-b.webp" }
    },
    {
      id: "fra-2001", colecao: "c1991", capitulo: "copa-2003",
      pais: "França", sigla: "FRA",
      titulo: "Reserva, manga longa",
      year: 2001, yearLabel: "c. 2000–02",
      fabricante: "Adidas",
      numero: "19", nome: "",
      tipo: "De jogo", atribuicao: "",
      tamanho: "", estado: "", procedencia: "", marcas: "",
      detalhes: "Branca, com gola em V azul e vermelha, galo da FFF com uma estrela e listras azuis e vermelhas nas mangas.",
      texto: "A França estreou em Copas do Mundo femininas em 2003.",
      competicoes: [],
      uso: "epoca",
      usoTexto: "Camisa de jogo sem nome, de c. 2000–02. Nas competições as camisas levavam o nome da jogadora, então esta foi usada provavelmente em eliminatórias, amistosos ou outros jogos da época.",
      img: { f: "img/fra-2001-f.webp", b: "img/fra-2001-b.webp" }
    },
    {
      id: "bra-2002", colecao: "c1991", capitulo: "copa-2003",
      pais: "Brasil", sigla: "BRA",
      titulo: "Titular, dedicada",
      year: 2002, yearLabel: "c. 2002–03",
      fabricante: "Nike",
      numero: "6", nome: "Renata",
      tipo: "De jogo", atribuicao: "",
      tamanho: "", estado: "", procedencia: "",
      marcas: "Dedicatória manuscrita na frente, com assinatura.",
      detalhes: "Cinco estrelas sobre o escudo da CBF e painéis verdes laterais.",
      texto: "Cinco estrelas no escudo: já inclui o título mundial masculino de 2002.",
      competicoes: [ { id: "copa-2003", status: "provavel" } ],
      img: { f: "img/bra-2002-f.webp", b: "img/bra-2002-b.webp" }
    },
    {
      id: "usa-2003", colecao: "c1991", capitulo: "copa-2003",
      pais: "Estados Unidos", sigla: "USA",
      titulo: "Reserva vermelha, manga longa",
      year: 2003, yearLabel: "c. 2002–03",
      fabricante: "Nike",
      numero: "22", nome: "Branam",
      tipo: "De jogo", atribuicao: "",
      tamanho: "", estado: "", procedencia: "", marcas: "",
      detalhes: "Gola alta, painéis laterais cinza-escuro em tela vazada e escudo da federação americana.",
      texto: "Os Estados Unidos jogaram a Copa de 2003 em casa, depois de a China perder a sede.",
      competicoes: [ { id: "copa-2003", status: "provavel" } ],
      img: { f: "img/usa-2003-f.webp", b: "img/usa-2003-b.webp" }
    },
    {
      id: "bra-2019", colecao: "legends", capitulo: "formiga",
      pais: "Brasil", sigla: "BRA",
      titulo: "Titular",
      year: 2019, yearLabel: "c. 2019",
      fabricante: "Nike",
      numero: "8", nome: "Formiga",
      tipo: "De jogo", atribuicao: "",
      tamanho: "", estado: "", procedencia: "", marcas: "",
      detalhes: "Gola em V e punhos verdes, cinco estrelas sobre o escudo da CBF, número com padrão geométrico verde nas costas e etiqueta Nike na barra.",
      texto: "",
      competicoes: [ { id: "copa-2019", status: "provavel" } ],
      img: { f: "img/bra-2019-f.webp", b: "img/bra-2019-b.webp" }
    },
    {
      id: "bra-2024", colecao: "legends", capitulo: "marta",
      pais: "Brasil", sigla: "BRA",
      titulo: "Reserva azul",
      year: 2024, yearLabel: "c. 2024",
      fabricante: "Nike",
      numero: "10", nome: "Marta",
      tipo: "De jogo", atribuicao: "",
      tamanho: "", estado: "", procedencia: "", marcas: "",
      detalhes: "Azul com listras onduladas, gola e punhos em verde-água, escudo “BRASIL” com a bandeira, número e nome em amarelo.",
      texto: "",
      competicoes: [ { id: "olim-2024", status: "provavel" } ],
      img: { f: "img/bra-2024-f.webp", b: "img/bra-2024-b.webp" }
    }
  ]
};
