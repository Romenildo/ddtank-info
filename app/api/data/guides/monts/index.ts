

export const montInfos = [
    { id:0,
      name: "Dirigível",
      url: "/images/guide/monts/dirigivel.png", 
      description1:'1. O uso de adereços na rodada atual de uso de habilidades não consome resistência e se tornará inválido após o uso de dois adereços. 2. Obtenha imediatamente o efeito de 4 camadas de "armadura multicamada" (cada camada de armadura multicamada reduz no dano em +10% e, no final da rodada, obtenha o número de camadas de "armadura multicamada " * 10% do HP máximo por 1 rodada de Escudo. Reduz 1 camada de "Armadura Multicamada" no início de cada rodada.) 3. Obtenha imediatamente o efeito "calma" que dura 3 rodadas ao usar uma habilidade (no início da rodada, se o valor da raiva for menor que 100 pontos, para cada diferença de 2 pontos de raiva, o dano desta rodada será ser +1% e o limite superior é 50%) 4. Proteção multicamada Quando a armadura é completamente ineficaz, ela entrará no estado "furioso" e a raiva será restaurada ao valor total imediatamente Dano +30%, dura 1 rodada', 
      description2: '1. Quando a força física é inferior a 25 pontos, a rodada começaQuando a força física +20.Quando a força física for inferior a 50 pontos, no início do roundResistência +10.2. Dano adicional de acertos críticos -40% (excluindo a parte de dano base).3. A probabilidade de 50% é a mais alta toda vez que você recebe danoLife Shield +7% (disponível apenas para cada rodada públicadisparar 1 vez).'
    },
    { id:0,
      name: "FireFox",
      url: "/images/guide/monts/firefox.png", 
      description1: '1. Revivendo o Fogo: Faça-se com 1500 de alcanceTodos os aliados no círculo obtêm o efeito de "ressurreição" e 10pontos adicionais de resistência serão recuperados no início da rodada,Dura 3 rodadas.2. Fogo purificador: dissipar a si mesmo e ao acasoTodos os status negativos dissipáveis ​​em jogadores amigáveis ​​e limpar todos os dissipáveis objeto do mapa.',
      description2: '1. No início da rodada, de acordo com o dano recebido narodada anterior, toda vez que 1% do dano máximo do HP forrecebido, 1% do HP básico da montaria será restaurado.2. Quando o valor da vida for inferior a 50%, ao ser atacado, um leve efeito de knock-up será obtido e o dano recebido será -10%'
    },
    { id:0,
      name: "Nave",
      url: "/images/guide/monts/nave.png", 
      description1: 'Teletransporta-se para a posição onde começou a rodadaanterior, e o valor de vida e montaria mudam para o valor nofinal da rodada anterior (não conta como recuperação outratamento, se reduzido, permanecerá o mesmo), oextra básico monte vida +50% e, ao mesmo tempo, adicioneum efeito de "proteção" a si mesmo (dano recebido -20%, dano extra +20%), com duração de 2rodadas',
      description2: '1. Ao ganhar a vida da montaria, a mesma quantidade de vidaserá adicionada ao mesmo tempo (não conta como recuperação e tratamento, e não será afetada pelo bônus de efeito de cura e tratamento proibido. 2. Se o próprio o volume de sangue for inferior a 60%, o dano será recuperado 100% do HP base da montagem(CD 7 rodadas)'  
    },
    { id:0,
      name: "Spider",
      url: "/images/guide/monts/spider.png", 
      description1: 'Depois de usar a habilidade, os seguintes efeitos serãoobtidos por 2 rodadas:1. O limite superior de um único dano é de 25% de suaprópria saúde máxima, se exceder 25%, ficará imune eacionara a recuperação de 15% da vida.2. Ao atacar, a força física do alvo é -15 e só pode ser acionada2 vezes por rodada.Dura 3 rodadas:1. Usar adereços consome 30% de resistência. 2. Cause dano físico +40% e você receberáDano elementar -40%.',
      description2: '1. No início da própria rodada,  pegue um de (penetraçãode dano +40%, resistência a dano crítico +60%, resistênciaa efeito +80%), que dura 2 rodadas. 2. Dano para montar alvos sobreviventes +30%. 3. Toda vez que a penetração da armadura for 1% maior que a base de penetração da armadura do oponente, um adicional de 2% da armadura do oponente será ignorado ao atacar(máximo de 40%). 4. Restaure 15% da base toda vez que for sua vez'
    },
    { id:0,
      name: "Whale",
      url: "/images/guide/monts/whale.png", 
      description1: '1. Recupera 50% do HP da montaria base, e a redução dedano da montaria +10%, durando 2 rodadas.2. Capture o poder de ataque dos companheiros de equipe dentro do alcance de 1000 +15%, poder de ataque próprio +25%, dura 2 rodadas.3. O ataque torna o efeito de cura do alvo -50%,durando 2 rodadas.',
      description2: '1. Há 40% de chance toda vez que você recebe dano de projétil é imune a dano uma vez e só pode ser acionada uma vez por rodada.2. Ao final de cada rodada, ganhe 5 pontos extras de raivaou 10 pontos de resistência.'
    },
    { id:0,
      name: "Tank",
      url: "/images/guide/monts/tank.png", 
      description1: '1. Escudo de vida máximo +30%, e 30% do danorecebido será refletido como dano real ao atacante (ignorandoredução de dano, não ignorando escudo), segurandoContinue por 2 rodadas.2. Redução de lesões +30%, no início de cada rodada -10%,Dura 3 rodadas.3. Ao atacar um alvo congelado, o alvo fica vulnerável+20%, dura 2 rodadas',
      description2: '1. Atacar alvos congelados não quebra o gelo.2. No início do seu próprio turno, 2 alvos inimigos aleatóriosdentro de 1000 pixels do seu alcance ficarão com raiva15 horas.3. O efeito de redução de dano de reduzir o HP máximo em 4% cadavez que o dano do ataque é recebido.4. Cada vez que você é atacado, há 15% dechance de congelar o atacante por 2 rodadas.'
    },
    { id:0,
      name: "Tiger",
      url: "/images/guide/monts/tiger.png", 
      description1: 'O ataque nesta rodada pode causar dano real igual a 120%de seu poder de ataque básico. Quando o HP do alvo atingidofor inferior a 15%, ele pode ser morto diretamente, durando 11. O ataque proíbe a cura do alvo atingido e proíbe o cavalode recuperar a vida, que dura 2 rodadas.2. O ataque reduz a resistência do alvo a zero.3. Sucção de sangue +30%, dura 2 rodadas.redondo.',
      description2: '1. Quando a vida da montaria for 0, a vida será restaurada de uma só vez 30% da vida máxima, (ignorando o tratamento proibido) Lesão +30%, efeito permanente.2. Atacar alvos cuja vida esteja abaixo de 50%do dano extra máximo +20%.3. Limite superior de resistência +20, recuperação extra a cada rodada 10 resistência.'
    },
    
    
]