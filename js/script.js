const botaoTroca = document.querySelectorAll(".char-individual .botao-troca");
const listaBotaoAnimacao = document.querySelectorAll(".js-animation-button");
const lista1 = document.querySelectorAll(".lista-gifs-1");
const lista2 = document.querySelectorAll(".lista-gifs-2");
const pose1 = document.querySelectorAll(".js-pose1");
const pose2 = document.querySelectorAll(".js-pose2");
const tabSelect = document.querySelectorAll(".js-tabselect .hexagon");
const tabSelectIcon = document.querySelectorAll(".js-tabselect .hexagon img");
const iconeSelect = document.querySelectorAll(".hexagon");

//icones menu

if (listaBotaoAnimacao.length && tabSelect.length) {
  // SELECIONAR CHAR

  function seletorCharacters() {
    const tabData = document.querySelectorAll(".js-tabdata section");

    const tabImg = document.querySelectorAll(".js-tabimg section");

    tabImg[0].classList.add("ativo");
    tabData[0].classList.add("ativo");
    tabSelect[0].classList.add("ativo");
    // para o primeiro item ficar ativo quando a pagina eh aberta

    function ativarLista(index) {
      tabData.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabData[index].classList.add("ativo");
    }

    function ativarImg(index) {
      tabImg.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabImg[index].classList.add("ativo");

      tabSelect.forEach((icone) => {
        icone.classList.remove("ativo");
      });
      tabSelect[index].classList.add("ativo");
    }

    function ativarData(index) {
      tabData.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabData[index].classList.add("ativo");
    }

    function listaAnimacao() {
      lista1.forEach((lista) => {
        const lista1Todos = lista.querySelectorAll("li");
        lista1Todos.forEach((item) => {
          item.classList.remove("ativo");
        });
        lista1Todos[0].classList.add("ativo");
      });

      lista2.forEach((lista) => {
        const lista2Todos = lista.querySelectorAll("li");
        lista2Todos.forEach((item) => {
          item.classList.remove("ativo");
        });
        lista2Todos[0].classList.add("ativo");
      });

      pose1.forEach((lista) => {
        const pose1Todos = lista.querySelectorAll("img");
        pose1Todos.forEach((item) => {
          item.classList.remove("ativo");
        });
        pose1Todos[0].classList.add("ativo");
      });

      pose2.forEach((lista) => {
        const pose2Todos = lista.querySelectorAll("img");
        pose2Todos.forEach((item) => {
          item.classList.remove("ativo");
        });
        pose2Todos[0].classList.add("ativo");
      });
    }

    function resetar() {
      const primeiraImg = document.querySelectorAll(".primeira-img");

      const segundaImg = document.querySelectorAll(".segunda-img");

      primeiraImg.forEach((img) => {
        img.classList.add("ativo");
      });

      segundaImg.forEach((img) => {
        img.classList.remove("ativo");
      });

      botaoTroca.forEach((botao) => {
        if (botao.innerHTML === "Base Mode") {
          botao.innerHTML = "Orochi Mode";
        }
        botao.classList.remove("orochi");
      });

      lista1.forEach((lista) => {
        lista.classList.add("ativo");
      });

      lista2.forEach((lista) => {
        lista.classList.remove("ativo");
      });

      listaBotaoAnimacao.forEach((botao) => {
        botao.classList.remove("orochi");
      });

      iconeSelect.forEach((icone) => {
        const iconeImg = icone.querySelectorAll("img");

        iconeImg[0].classList.add("ativo");
        iconeImg[1].classList.remove("ativo");
      });
    }

    tabSelect.forEach((imgChar, index) => {
      imgChar.addEventListener("click", function () {
        ativarImg(index), resetar();
      });

      imgChar.addEventListener("click", function () {
        ativarData(index);
      });

      imgChar.addEventListener("click", function () {
        listaAnimacao();
      });

      imgChar.addEventListener("click", function () {
        ativarLista(index);
      });
    });
  }

  seletorCharacters();

  //BOTAO ANIMAÇÕES
  function botaoAnimacoes() {
    const tabBotaoAnimacao = document.querySelectorAll(
      ".lista-gifs-1 .js-animation-button li"
    );

    const tabAnimacao = document.querySelectorAll(
      ".lista-gifs-1 .js-animation img"
    );

    const tabBotaoAnimacao2 = document.querySelectorAll(
      ".lista-gifs-2 .js-animation-button li"
    );

    const tabAnimacao2 = document.querySelectorAll(
      ".lista-gifs-2 .js-animation img"
    );

    tabAnimacao[0].classList.add("ativo");
    tabBotaoAnimacao[0].classList.add("ativo");
    tabAnimacao2[0].classList.add("ativo");
    tabBotaoAnimacao2[0].classList.add("ativo");

    function ativarGif(index) {
      tabAnimacao.forEach((gif) => {
        gif.classList.remove("ativo");
      });
      tabAnimacao[index].classList.add("ativo");

      tabAnimacao2.forEach((gif) => {
        gif.classList.remove("ativo");
      });
      tabAnimacao2[index].classList.add("ativo");

      tabBotaoAnimacao.forEach((botao) => {
        botao.classList.remove("ativo");
      });
      tabBotaoAnimacao[index].classList.add("ativo");

      tabBotaoAnimacao2.forEach((botao) => {
        botao.classList.remove("ativo");
      });
      tabBotaoAnimacao2[index].classList.add("ativo");
    }

    function PlaySoundSelect(selectSound) {
      const thissound = document.getElementById(selectSound);
      thissound.play();
    }

    tabBotaoAnimacao.forEach((botao, index) => {
      botao.addEventListener("click", function () {
        ativarGif(index);
      });
    });

    tabBotaoAnimacao2.forEach((botao, index) => {
      botao.addEventListener("click", function () {
        ativarGif(index);
      });
    });
  }
  botaoAnimacoes();

  //MUDAR MODO

  function trocarModo() {
    const imageChar = document.querySelectorAll(".imagens-char img");

    function trocarImg() {
      imageChar.forEach((imagem) => {
        imagem.classList.toggle("ativo");
      });

      listaBotaoAnimacao[0].classList.toggle("ativo");
      listaBotaoAnimacao[1].classList.toggle("ativo");
      listaBotaoAnimacao.forEach((botao) => {
        botao.classList.toggle("orochi");
      });
    }

    function listaAnimacao() {
      lista1.forEach((lista) => {
        lista.classList.toggle("ativo");
      });

      lista2.forEach((lista) => {
        lista.classList.toggle("ativo");
      });
    }

    function trocarNome() {
      botaoTroca.forEach((botao) => {
        if (botao.innerHTML === "Orochi Mode") {
          botao.innerHTML = "Base Mode";
        } else {
          botao.innerHTML = "Orochi Mode";
        }
        botao.classList.toggle("orochi");
      });
    }

    function trocarIcone() {
      const iconeSelect = document.querySelectorAll(".hexagon");
      iconeSelect.forEach((icone) => {
        const iconeImg = icone.querySelectorAll("img");

        iconeImg[0].classList.toggle("ativo");
        iconeImg[1].classList.toggle("ativo");
      });
    }

    botaoTroca.forEach((botao) => {
      botao.addEventListener("click", function () {
        trocarImg(), listaAnimacao(), trocarNome(), trocarIcone();
      });
    });
  }

  trocarModo();
}

// links menu

const links = document.querySelectorAll(".menu-link a");

function AtivarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.match(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(AtivarLink);

// MUSICA
let audio = document.getElementById("musicplayer");

let play = () => {
  audio.play();
};

let pause = () => {
  audio.pause();
};

const botoes = document.querySelectorAll(".button-som");

function ativarSom() {
  botoes.forEach((botao) => {
    botao.classList.toggle("ativo");
  });
}

botoes.forEach((botao) => {
  botao.addEventListener("click", ativarSom);
});

// // // SOM

function PlaySoundSelect(selectSound) {
  const thissound = document.getElementById(selectSound);
  thissound.play();
}

//idioma

function idioma() {
  const customSelect = document.querySelectorAll(".idioma");
  const selectBtn = document.querySelectorAll(".select-button");

  const selectedValue = document.querySelectorAll(".selected-value");
  const optionsList = document.querySelectorAll(".select-languaje li");

  function mudarIdioma() {
    customSelect.forEach((select) => {
      // add/remove active class on the container element
      select.classList.toggle("active");
      // update the aria-expanded attribute based on the current state
      selectBtn.forEach((botao) => {
        botao.setAttribute(
          "aria-expanded",
          botao.getAttribute("aria-expanded") === "true" ? "false" : "true"
        );
      });
    });
  }

  selectBtn.forEach((botao) => {
    botao.addEventListener("click", mudarIdioma);
  });

  optionsList.forEach((option) => {
    function handler(e) {
      // Click Events
      if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
        selectedValue.forEach((value) => {
          value.textContent = this.children[1].textContent;
        });
        customSelect.forEach((select) => {
          select.classList.remove("active");
        });
      }
      // Key Events
      if (e.key === "Enter") {
        selectedValue.forEach((value) => {
          value.textContent = this.textContent;
        });

        customSelect.forEach((select) => {
          select.classList.remove("active");
        });
      }
    }

    option.addEventListener("keyup", handler);
    option.addEventListener("click", handler);
  });

  //lang

  const paragrafos = document.querySelectorAll(".char-data p");
  const botaoEN = document.getElementById("en-us");
  const botaoPT = document.getElementById("pt-br");
  const menuLink = document.querySelectorAll(".menu-link a");
  const tituloStage = document.querySelector(".stages h1");

  console.log(paragrafos.length);

  function mudarPT() {
    if (paragrafos.length > 0) {
      paragrafos[0].innerHTML =
        "K' (pronunciado 'K Dash') foi uma vez uma criança normal que vivia com sua irmã, Seirah. Um dia, a NESTS (um sindicato do crime que lida com drogas, genética, robótica e biotecnologia) sequestrou K' e sua irmã. Ao longo dos anos, a NESTS treinou K' para ser uma espécie de arma. Em 1998, K' deveria participar do programa de clonagem da família Kusanagi. Após K' ser infundido com o DNA de Kyo, ele ganhou o poder da pirocinese. A memória de K' foi apagada pela NESTS, e ele foi levado a acreditar que era um clone de Krizalid.";
      paragrafos[1].innerHTML =
        "Maxima cresceu como um garoto de rua aprendendo a lutar da maneira mais difícil. Ele então se tornou um soldado e levou uma vida normal até descobrir que seu companheiro de armas foi morto em um incidente envolvendo a NESTS. Decidido a se vingar, resolveu sacrificar sua vida em busca de vingança. Ele foi abordado pela NESTS, que lhe ofereceu poder maior em troca de trabalhar para eles. Foi então equipado com uma armadura de combate e colocado em parceria com K'.";
      paragrafos[2].innerHTML =
        "Whip era a irmã biológica mais velha de K', que morreu após ser sequestrada pela NESTS. Whip originalmente se juntou à organização NESTS em KOF '99. Lá, ela se tornou amiga de Krizalid, com quem parecia compartilhar uma conexão especial. Independentemente de ser um clone ou não, ela é chamada de Seirah por aqueles que a conheciam na NESTS. Devido aos experimentos da NESTS em seu corpo, ela é capaz de manipular seu chicote especializado com facilidade.";

      paragrafos[3].innerHTML =
        "Terry e seu irmão Andy cresceram como órfãos e se criaram nas ruas. Mais tarde, foram adotados por Jeff Bogard, que ensinou aos irmãos muitas coisas sobre luta, já que ele próprio era um lutador habilidoso. Quando Terry tinha 10 anos, ele testemunhou a morte de seu pai nas mãos de Geese Howard. Depois disso, Terry e Andy juraram vingar a morte do pai e se dedicaram a dominar suas artes marciais.";

      paragrafos[4].innerHTML =
        "Andy cresceu como órfão e se criou nas ruas. Ele e seu irmão foram adotados mais tarde por Jeff Bogard, que ensinou aos irmãos muitas coisas sobre luta. Quando Terry testemunhou a morte de seu pai nas mãos de Geese Howard, ele contou a Andy o que havia acontecido. Depois disso, os dois juraram vingar a morte do pai e se dedicaram a dominar seu treinamento em artes marciais.";

      paragrafos[5].innerHTML =
        "Embora a origem de Joe seja o Japão, ele passou a maior parte do tempo na Tailândia, onde treinou Muay Thai. Foi por meio de suas vitórias que Joe ganhou o apelido de 'Hurricane Upper' Joe Higashi. Joe conquistou o título de campeão de Muay Thai ao derrotar Hwa Jai em um torneio exclusivo de Muay Thai. Desde então, Joe tem defendido seu título contra oponentes menos experientes. Mais tarde, ele conheceu os irmãos Bogard e eles se tornaram bons amigos.";

      paragrafos[6].innerHTML =
        "Mai aprendeu os segredos do Ninjutsu com seu pai e com o velho amigo de seu avô, Jubei Yamada. Mai conheceu Andy Bogard quando ele se mudou para o Japão. No início, Mai não estava interessada em Andy e achava que ele era apenas mais um homem insensível, interessado apenas em seu treinamento. No entanto, quando Andy lhe deu um presente em seu aniversário, ela acabou se apaixonando por ele.";

      paragrafos[7].innerHTML =
        "Uma estudante japonesa, Athena Asamiya, uniu-se ao seu amigo Sie Kensou para lutar em nome da justiça. Acredita-se que seus poderes psíquicos foram transmitidos a ela por transmigração, em vez de serem herdados de sua família. Ela se tornou aluna do mestre de Kenpo de Kensou, Chin Gentsai. Athena também se tornou uma famosa idol pop no Japão.";

      paragrafos[8].innerHTML =
        "A aluna mais promissora de Kim Kaphwan, May Lee, foi convocada para se juntar à Equipe Coreia em 2001, quando Jhun se machucou. Vendo sua chance de finalmente ajudar seu herói, ela aceitou com entusiasmo. Kim também sugeriu que ela ficasse de olho em seus companheiros de equipe, os ex-criminosos Chang Koehan e Choi Bounge. Isso agradou a Chang e Choi, já que May não sentia a necessidade de puni-los fisicamente regularmente, como Kim fazia.";

      paragrafos[9].innerHTML =
        "Kyo era um estudante do ensino médio e o herdeiro do clã Kusanagi, ele pode manipular chamas naturalmente. Destinado a lutar contra Orochi, ele se tornou o líder do clã. Ele derrotou Goro Daimon e Benimaru Nikaido para se tornar o líder da Equipe Japão. Depois disso, os três se tornaram companheiros de equipe e bons amigos.";

      paragrafos[10].innerHTML =
        "Benimaru é filho de uma família multimilionária. Ele é modelo profissional em meio período e um lutador profissional que tem muita confiança em suas habilidades. Seu estilo de luta é baseado no shoot fighting, e ele pode usar eletricidade em muitos de seus ataques. Benimaru entrou no torneio e chegou à final. No primeiro torneio, ele perdeu para Kyo e ficou em segundo lugar. Mais tarde, ele se uniu a Kyo e Goro Daimon para formar a Equipe Japão durante a Saga Orochi.";

      paragrafos[11].innerHTML =
        "Goro participou do torneio de artes marciais mistas do Japão para determinar os membros da equipe do país no King of Fighters. Embora tenha chegado longe nas finais, ele perdeu para Kyo e ficou em terceiro lugar. Um ano depois, ele entrou no torneio KOF com Benimaru (segundo lugar) e Kyo. Eventualmente, ele se tornou amigo de seus companheiros de equipe e continua a participar dos torneios com eles.";

      paragrafos[12].innerHTML =
        "Yashiro é o guitarrista principal da banda de rock C.Y.S. No entanto, isso é apenas uma fachada, pois, nos últimos 660 anos, ele passou por múltiplas reencarnações como um dos Quatro Reis Celestiais de Orochi. Ele desenvolve um interesse pelos poderes misteriosos utilizados pela estranha entidade conhecida como Verse e parte com seus amigos Shermie e Chris para se juntar ao KOF.";

      paragrafos[13].innerHTML =
        "Shermie completa a 'Equipe New Face' do KOF. Shermie, Yashiro e Chris estão juntos em uma banda chamada 'CYS' (baseado nas iniciais de seus nomes). Shermie toca teclado. Eles entram no torneio KOF '97 devido à rivalidade de Yashiro com o músico de uma banda concorrente, Iori Yagami. Apesar de tocar em uma banda, seu trabalho diário é o design de moda. Seu estilo de luta é o wrestling profissional, mas pouco se sabe sobre onde ela aprendeu suas técnicas. Ela é uma dos Quatro Reis Celestiais de Orochi.";

      paragrafos[14].innerHTML =
        "Chris é o membro mais jovem da 'Equipe New Face', onde ele toca bateria. O objetivo deles era recuperar o poder total de Orochi e desencadear o 'Riot of the Blood' em Iori e Leona. Usando sua energia restante, Yashiro e Shermie se sacrificaram para reencarnar Orochi no corpo de Chris. Por sua vez, Orochi consegue retornar ao mundo usando o corpo de Chris como hospedeiro, mas o próprio Orochi é selado novamente pelos Três Tesouros Sagrados: Kyo, Iori e Chizuru Kagura.";

      paragrafos[15].innerHTML =
        "Iori é o inimigo natural de Kyo Kusanagi. O clã Yagami originalmente ajudou a selar Orochi, mas depois fez um pacto com ele. Isso lhes deu um poder maior, mas encurtou suas vidas. Iori entra no KOF simplesmente para lutar contra Kyo. Antes do torneio King of Fighters '96, Iori é visitado por Vice e Mature. Elas lhe contam sobre a participação de Kyo no torneio e tentam convencê-lo a entrar também. Após uma breve luta, Iori concorda em participar, desde que as duas se submetam a ser suas servas.";

      paragrafos[16].innerHTML =
        "Como uma das Hakkesshu (assassinas de Orochi), Mature se une a Vice para servir ao seu mestre, Orochi. As duas recebiam ordens de um dos Quatro Reis Celestiais de Orochi, Goenitz, mesmo que não gostassem dele. Ela e Vice foram ordenadas por Goenitz a vigiar Rugal, que tentava usar o poder de Orochi, então elas se passaram por suas secretárias. Quando Rugal foi morto, Goenitz ordenou que Vice e Mature seguissem Iori Yagami, devido à sua herança Yagami do poder de Orochi.";

      paragrafos[17].innerHTML =
        "Como uma das Hakkesshu (assassinas de Orochi), Vice uniu forças com Mature para servir seu mestre, Orochi. As duas receberam ordens de um dos Quatro Reis Celestiais de Orochi. Goenitz ordenou que as duas ficassem de olho em Rugal Bernstein, que estava tentando usar o poder de Orochi, então elas se passaram por suas secretárias. Quando Rugal sequestrou Saisyu Kusanagi, Vice recebeu ordens para fazer uma lavagem cerebral nele. Ele lutou, mas ela conseguiu seu propósito.";

      paragrafos[18].innerHTML =
        "Ralf é membro de uma agência de elite de mercenários chamada Ikari Warriors. Ao longo dos anos, Ralf provou ser um soldado poderoso, com habilidades naturais de liderança e coragem no campo de batalha. Atualmente, ele detém a patente de coronel. Ralf e Clark se tornaram amigos quando estavam na casa dos 20 anos e permanecem bons amigos desde então.";

      paragrafos[19].innerHTML =
        "Leona nasceu em uma vila de membros da linhagem de Orochi. Uma noite, quando ainda era criança, ela perdeu o controle de si mesma, entrou no Riot of the Blood (Fúria de Sangue) e massacrou todos na vila. Após isso, Leona perdeu suas memórias e passou a vagar sem rumo até ser encontrada por Heidern, que ficou impressionado com sua habilidade natural de luta, decidiu adotá-la.";
      paragrafos[20].innerHTML =
        "Clark faz parte da agência de mercenários Ikari Warriors, que está sob as ordens do Comandante Heidern. Clark é conhecido por ser um soldado focado e leal, especializado em coletar informações para as missões. Aparentemente, ele usa óculos escuros para esconder uma cicatriz no meio da testa, causada por Ralf, que estava brincando de forma descuidada com suas facas na época.";
      paragrafos[21].innerHTML =
        "Kula Diamond, inicialmente, era uma marionete sem mente e sem sinais de emoções (além de ser uma jovem inocente). Ela frequentemente recebia ordens para exterminar outros traidores da NESTS. Após a destruição da NESTS, ela se alia em termos amigáveis ao seu alvo original, K', e seus companheiros, entendendo que as vidas de ambos foram arruinadas pela organização.";
      paragrafos[22].innerHTML =
        "Angel é uma agente de uma organização secreta conhecida como NESTS. Ela é designada para vigiar K9999, cujo objetivo é caçar experimentos traidores que deixaram a NESTS. Eles partem em busca de K' e outros desertores da organização. Perto do final do torneio The King of Fighters 2001, é revelado que tanto Angel quanto K9999 estão em uma missão para matar Kula e seus guardiões. ";
      paragrafos[23].innerHTML =
        "K9999 é um homem violento e instável, que se tornou o clone 'perfeito' de Kyo, sendo o 9999º clone. Ele possui uma quantidade enorme de poder, mas tem dificuldade em controlá-lo. A luva azul que ele usa ajuda a controlar seus poderes de transformação e evita que ele entre em um estado de fúria. Ele tem um ódio intenso por K' e o considera seu rival definitivo. K9999 luta com seu braço polimórfico, que pode se transformar em garras, lâminas de diferentes tamanhos e formas, e até em uma espingarda.";
    }
    menuLink[0].innerHTML = "Personagens";
    menuLink[1].innerHTML = "estagios";
    menuLink[2].innerHTML = "Personagens";
    menuLink[3].innerHTML = "estagios";
    tituloStage.innerHTML = "Estagios";
  }

  botaoPT.addEventListener("click", mudarPT);

  function mudarEN() {
    if (paragrafos.length > 0) {
      paragrafos[0].innerHTML =
        "K' (pronounced 'K Dash') was once a normal child who lived with his sister, Seirah. One day, NESTS (a crime syndicate who deals with drugs, genetics, robotics & biotechnology) kidnapped K' and his sister. Over the yeasr, NESTS trained K' to be some kind of weapon. In 1998, K' was to take part in the Kusanagi cloning program. After K' was infused with Kyo's DNA, he was granted the power of pyrokinesis. K's memory was wiped by NESTS and he was made to believe that he was Krizalid's clone.";
      paragrafos[1].innerHTML =
        "Maxima grew up a street kid in Canada, who learned fighting the hard way. He then became a soldier who led normal life until he found out that his comrade-in-arms Rocky was killed in an incident involving NESTS. So he sought for revenge against NESTS. To avenge Rocky he decided to sacrifice his previous life, had his face and name changed and his 'ordinary' life destroyed.He was approached by Nests and offered greater power in return for working for them. He was then equipped with a battle armor and put together with K'.";
      paragrafos[2].innerHTML =
        "Whip, whose real name is Seirah, is an amnesiac girl looking for her brother who was K's biological older sister who died after being abducted by NESTS. Whip originally joined the NESTS organization in KOF '99. There she became friends with Krizalid, who seemed to share a bond with her. Regardless of whether she is a clone or not, she is called Seirah by people who knew her in NESTS. Due to NESTS experimentation on her body, she's able to manipulate her specialized whip with ease.";

      paragrafos[3].innerHTML =
        "Terry and his brother Andy grew up as orphans and raised themselves on the streets. They are later adopted by Jeff Bogard who teaches the brothers many things about fighting, as he was a strong fighter himself. When Terry was 10 years old, he witnesses his father's death at the hands of Geese Howard. Afterwards, Terry and Andy vow to avenge their father and dedicate to mastering their martial arts.";

      paragrafos[4].innerHTML =
        "Andy grew up as orphan and raised themselve on the streets. He were later adopted by Jeff Bogard and lived in Southtown for several years. Jeff Bogard taught the brothers many things about fighting. When Terry witnessed his father's death at the hands of Geese Howard. After Terry told Andy what had happened, they vowed to avenge their father and dedicated themselves to mastering their martial arts training.";

      paragrafos[5].innerHTML =
        "Although Joe's place of origin is Japan, he spent the majority of his time in Thailand, where he trained in Muay Thai. It was through his victories that Joe got the nickname 'Hurricane Upper' Joe Higashi. Joe earned his title as the champion of Muay Thai by beating Hwa Jai in a Muay Thai only tournament. Ever since then, Joe has been defending his title against lesser opponents. Joe then met the Bogard brothers and they became good friends.";

      paragrafos[6].innerHTML =
        "Mai learned the secrets of Ninjitsu from her father and from her grandfather's old friend, Jubei Yamada. Mai met Andy Bogard when he moved to Japan, at first, Mai wasn't interested in Andy and thought he was just another callous man only interested in his training. However, when Andy gave her a present on her birthday, she eventually fell in love with him. After they were in a serious relationship.";

      paragrafos[7].innerHTML =
        "A Japanese schoolgirl, Athena Asamiya teamed up with her friend Sie Kensou to fight in the name of justice. Her psychic powers are believed to be transmigrated to her rather than inherited by her family. She became a student of Kensou's Kenpo teacher, Chin Gentsai. Athena became a famous pop idol in Japan.";

      paragrafos[8].innerHTML =
        "The most promising student of Kim Kaphwan's, May Lee was required to join Team Korea in 2001 when Jhun was wounded. Seeing her chance to finally help her hero, she eagerly joined. Kim also suggested that she kept an eye on her teammates, former criminals Chang Koehan and Choi Bounge. This suits Chang and Choi, as May doesn't feel the need to physically punish them on a regular basis like Kim does.";

      paragrafos[9].innerHTML =
        "Kyo was a high school student and the heir of the Kusanagi clan. Kyo could wield flames naturally, and soon surpassed his father. Destined to fight the Orochi, he became the clans leader. He eventually met a girl named Yuki, who became his girlfriend. He defeated Goro Daimon and Benimaru Nikaido to become the leader of the Japan Team. Afterwards, the three became teammates and good friends.";

      paragrafos[10].innerHTML =
        "Benimaru is the son of a multi-millionaire family. He is a part time professional model and a professional fighter who is very confident in his abilities. His fighting style is based on shoot fighting and he can use electricity in many of his attacks.Benimaru entered and made it to the finals. In the first tournament he lost to Kyo and earned second place. Later, he teamed up with Kyo and Goro Daimon to form the Japan team during the Orochi Saga.";

      paragrafos[11].innerHTML =
        "Goro is a former Olympic gold medallist in Judo. He participated in Japan's mixed martial arts tournament to determine the members for the country's King of Fighters team. Although he got far into the finals, he lost against Kyo and was bumped to third place. A year later, he entered the KOF tournament with Benimaru (second place) and Kyo. He eventually be friends his teammates and continues to enter with them.";

      paragrafos[12].innerHTML =
        "Yashiro is the lead guitarist of the rock group C.Y.S. However, this is all a front as, for the past 660 years, he has undergone multiple reincarnations as a member of the Four Heavenly Kings of Orochi--which are the true enemies of the Three Sacred Treasures. He develops an interest in the mysterious powers wielded by the strange being known as Verse, and sets out with his friends Shermie and Chris to join KOF.";

      paragrafos[13].innerHTML =
        "Shermie rounds out the New Face Team of KOF. Shermie, Yashiro and Chris are in a music band together called CYS (based on their first initials). Shermie plays the keyboards. They enter KOF 97 tournament due to Yashiro's grudge against rival band player, Iori Yagami. Even though Shermie plays in a band, her day job is fashion design. Her fighting style is pro-wrestling, but little is known of where she learned her technique. She is one of the Four Heavenly Kings of the Orochi.";

      paragrafos[14].innerHTML =
        "Chris is the youngest member of the New Face Team where Chris plays the drums.. Their goal was to regain Orochi's full power and trigger the Riot of the Blood within Iori and Leona. Using their remaining energy, Yashiro and Shermie sacrificed themselves to reincarnate Orochi into Chris' body. In turn, Orochi is able to return to the world while using Chris' body as the host, but Orochi itself is re-sealed again by the Three Sacred Treasures: Kyo, Iori, and Chizuru Kagura.";

      paragrafos[15].innerHTML =
        "Iori is the born enemy of Kyo Kusanagi. The Yagami clan originally helped seal Orochi, but later made a pact with it. This gave them greater power, but shortened their lives. Iori joins KOF simply to fight Kyo. Before the King of Fighters '96 tournament, Iori is visited by Vice and Mature. They tell him about Kyo entering the tournament and try convincing him to join as well. After a brief fight, Iori agrees to enter, once the two submit to be his servants.";

      paragrafos[16].innerHTML =
        "As one of the Hakkesshu (Orochi's assassins), Mature joins forces with Vice to serve their master, Orochi. The two took orders from one of the Four Heavenly Kings of Orochi, Goenitz, even though they didn't like him. She and Vice were ordered by Goenitz to keep an eye on Rugal, who was attempting to use Orochi's power, so they posed as his secretaries. When Rugal was killed, Goenitz ordered Vice and Mature to follow Iori Yagami, due to his Yagami heritage of the Orochi power";

      paragrafos[17].innerHTML =
        "As one of the Hakkesshu (Orochi's assassins), Vice joined forces with Mature to serve their master, Orochi. The two took orders from one of the Four Heavenly Kings of Orochi, Goenitz, even though they didn't like him. Goenitz ordered the two to keep an eye on Rugal Bernstein who was attempting to use Orochi's power, so they posed as his secretaries. When Rugal kidnapped Saisyu Kusanagi during the events of King of Fighters 1995, Vice was ordered to brainwash him. He put up a fight, but she eventually succeeded.";

      paragrafos[18].innerHTML =
        "Ralf are member of an elite mercenary-for-hire agency called the Ikari Warriors. Over the years, Ralf has proven himself to be a powerful soldier with natural leadership abilities and courage on the battlefield. He currently holds the rank of colonel. Ralf and Clark became friends when they were in their 20s and have stayed good friends since. This friendship originated in the 1986 SNK arcade game Ikari Warriors.";

      paragrafos[19].innerHTML =
        "Leona was born in an village of Orochi bloodline members. One night, when her was still a child, she lost control of herself, entering the Riot of Blood and slaughtered everyone in the village. After this, Leona loses her memories and wanders aimlessly until she is found by Heidern, who decides to adopt her. Heidern was taken back by her natural fighting ability, and decides to train her as a warrior under his command.";
      paragrafos[20].innerHTML =
        "Clark is part of the Ikari Warriors mercenary agency who is under the orders of Commander Heidern. He was formerly a spy before he entered their service. Clark is known for being a focused and loyal soldier who specializes in gathering information for their missions. He apparently wears his sunglasses to hide a scar in the middle of his forehead; it was caused by Ralf who was carelessly playing with his knives at the time.";
      paragrafos[21].innerHTML =
        "Kula Diamond subject's was a mindless puppet with no sign of emotions (aside from being an innocent young girl). She is often ordered to exterminate other traitors to NESTS. After NESTS's destruction, she allies herself on friendly terms with her created target, K' and his companions, understanding that both their lives were ruined by NESTS. Whip affectionately refers to her as the 'little sister' of the group.";
      paragrafos[22].innerHTML =
        "Angel is an agent of a secret organization known as NESTS. She is assigned to keep an eye on K9999, whose purpose is to hunt down traitorous experiments that had left NESTS. They set off to find K' and other traitors of the organization. Near the end of the KOF 2001 tournament, it is revealed that both Angel and K9999 are on a mission to kill Kula and her guardians.";
      paragrafos[23].innerHTML =
        "A violent and unstable man, K9999 became the 'perfected' 9999th Kyo clone. Unlike K', K9999 was created ground-up as a clone from Kyo's DNA. He wields an enormous amount of power but has trouble controlling it. The blue glove he wears helps him control his shapeshifting powers and keep them from going berserk. He has an intense hatred for K' and considers him his ultimate rival. K9999 fights with his polymorphic arm. His arm can transform into claws, blades of different sizes and shapes, and into a shotgun.";
    }
    menuLink[0].innerHTML = "characters";
    menuLink[1].innerHTML = "stages";
    menuLink[2].innerHTML = "characters";
    menuLink[3].innerHTML = "stages";
    tituloStage.innerHTML = "stages";
  }

  botaoEN.addEventListener("click", mudarEN);
}

idioma();

// stages

const stageImg = document.querySelectorAll(".stage-cont-img");
const blur = document.querySelector(".blur");

if (stageImg && blur) {
  function abrirImg(index) {
    stageImg.forEach((img) => {
      img.classList.remove("ativo");
    });
    stageImg[index].classList.add("ativo");
    blur.classList.add("ativo");
  }

  stageImg.forEach((img, index) => {
    img.addEventListener("click", function () {
      abrirImg(index);
    });
  });

  function fecharImg() {
    stageImg.forEach((img) => {
      img.classList.remove("ativo");
    });
    blur.classList.remove("ativo");
  }

  blur.addEventListener("click", fecharImg);
}
