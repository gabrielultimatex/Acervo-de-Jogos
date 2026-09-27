# 🎲 Acervo de Jogos

Site para controle do acervo de jogos de tabuleiro da família e dos empréstimos entre pessoas conhecidas.

---

## 🔑 Primeiro acesso

### Definindo a senha de administrador

Da primeira vez que alguém clicar na logo (ícone de "Acesso Admin", canto superior) e tentar entrar, o site vai pedir para **criar** uma senha (não existe senha padrão). Essa senha:
- É armazenada como hash PBKDF2-SHA-256 com sal aleatório (nunca em texto puro nem criptografada de forma reversível).
- Novas senhas precisam ter pelo menos 8 caracteres. Hashes antigos são atualizados automaticamente depois de um login válido.
- Sincroniza sozinha entre todos os dispositivos da família, junto com o restante dos dados.
- Só pode ser trocada por quem já estiver logado como admin (Configurações → Segurança → Alterar Senha de Admin).

Quem estiver logado como admin pode **editar jogos** e **registrar devoluções**. Qualquer pessoa da família (sem senha) pode **emprestar** um jogo, ver o acervo, mexer na Lista de Desejos e usar os recursos de consulta.

### Ativando a sincronização automática

Para que as alterações sejam salvas e apareçam em todos os dispositivos da família, é preciso colar um **Token do GitHub** em Configurações (⚙️) → campo "Cole seu Token GitHub aqui" → botão **Sincronizar agora**. Sem o token, o site funciona normalmente, mas só em modo leitura (não salva as alterações na nuvem). Repita esse passo em cada celular/computador que for usar o site.

**Como gerar o token:**
1. No GitHub, clique na sua foto de perfil (canto superior direito) → **Settings**.
2. No menu lateral, role até o final → **Developer settings**.
3. **Personal access tokens → Fine-grained tokens → Generate new token**.
4. Dê um nome e uma validade (ex: 1 ano).
5. Em **Repository access**, escolha **Only select repositories** e selecione o repositório do Acervo de Jogos.
6. Em **Permissions → Repository permissions**, dê acesso **Read and write** apenas em **Contents**.
7. Clique em **Generate token** e copie na hora — o GitHub só mostra o token uma vez.
8. Cole no campo do site e clique em Sincronizar agora.

> ⚠️ O token dá acesso de escrita **só ao repositório do Acervo de Jogos**, nada além disso — ainda assim, trate-o como uma senha e não o compartilhe fora da família.

---

## ✨ Funcionalidades

### Acervo e Lista de Desejos
- Cadastro completo de jogos: título, imagem, jogadores, tempo de jogo, categorias/mecânicas, descrição, local na estante, avaliação (0-5), quantidade/tamanho de sleeves, indicador de jogo já sleevado e preço pago.
- **Lista de Desejos** separada, com campos próprios (preço atual, prioridade) — sem os campos que só fazem sentido depois que o jogo é comprado. Botão para mover da Wishlist direto pro Acervo.
- **Galeria de fotos extras**: além da capa, dá para colar links de fotos adicionais (ex: do Imgur) no formulário de edição.
- Importação automática via **CSV exportado da Ludopedia**, preenchendo capa, jogadores, tempo e categorias sozinho.
- Ao sincronizar um jogo com a ficha da Ludopedia, também tenta importar a quantidade e as dimensões de **Sleeves** (por exemplo, `30 (56 mm × 87 mm)`). Dados de sleeves preenchidos manualmente, inclusive os já existentes antes desta melhoria, são preservados.
- QR Code de Regras em cada jogo — ótimo para consultar o manual rapidamente com o celular, funciona como um "cardápio" físico colado nas caixas.
- Aviso de "alterações não salvas" ao tentar fechar a edição de um jogo sem salvar.

### Empréstimos e Histórico
- Registro de empréstimo (quem pegou, data de saída, data prevista de devolução) e devolução.
- **Renovação de empréstimos**: o admin escolhe uma nova data de devolução futura no detalhe do jogo. A nova data deve passar da previsão atual; havendo fila de reserva, um aviso fica à frente da janela do jogo, mostra quem está esperando e oferece **Confirmar mesmo assim** ou voltar. A fila é revalidada no momento da confirmação e a prorrogação pode ser desfeita.
- **Carrinho de Empréstimo/Interesse**: no botão "Pegar Vários" (disponível nos modos Grade, Lista e Detalhes), qualquer pessoa da família — não só o admin — pode marcar vários jogos de uma vez.
  - Modo **Emprestar** (padrão): empresta todos os jogos marcados juntos pra uma mesma pessoa, com a mesma data de devolução prevista pra todos. Se algum jogo do carrinho tiver fila e a pessoa escolhida não for a próxima, a decisão por jogo depende do login: **logado como admin**, dá pra escolher "Emprestar mesmo assim" ou "Ignorar (só entra na fila)"; **sem login**, as opções são só "Ignorar e entrar na fila" ou "Ignorar" — furar a fila é exclusivo do admin.
  - Modo **Interesse** (alternável na barra do carrinho): primeiro escolhe-se a pessoa; jogos em que ela já está na fila ficam bloqueados (com aviso "Já na fila") pra não duplicar a reserva. Os demais — disponíveis ou já emprestados — podem ser marcados, e confirmar só adiciona ela na fila de reserva de cada um, sem emprestar nada.
  - Um clique confirma o lote inteiro, sem precisar abrir jogo por jogo, e a ação inteira pode ser desfeita de uma vez (veja "Desfazer última ação" mais abaixo).
  - A seleção (borda verde no modo Emprestar, rosa no modo Interesse) funciona nos modos de visualização Grade, Lista e Detalhes. A barra do carrinho minimiza sozinha pra uma pílula flutuante sempre que outra tela toma conta (Histórico, Lista de Desejos, menu de Pessoas, Configurações), e volta ao normal ao fechar essas telas ou tocar na pílula.
- **Devolução em massa**: no modo "Selecionar" (admin) — tanto na grade/lista de jogos quanto na aba de Empréstimos do Histórico — ao marcar um ou mais jogos/registros emprestados aparece o botão "Devolver", que confirma a devolução de todos de uma vez.
- **Indicador de atraso** automático nos cards, na lista e no histórico.
- Banner no topo avisando quantos jogos estão atrasados, com botão **"Cobrar Atrasados"** que abre uma lista com botão de WhatsApp pronto para cada pessoa.
- **QR de Empréstimo Rápido**: cole na caixa do jogo — ao escanear, abre o site já na tela de empréstimo daquele jogo específico.
- **Compartilhar jogo**: botão que copia um link direto para aquele jogo (útil para mandar no grupo da família).
- Histórico completo com filtro por pessoa e por status, botão de devolução rápida direto na lista, e **scroll interno com cabeçalho fixo** (a lista tem altura limitada, então um histórico longo não estica a página toda).
- **Aba "Fila de Reserva"** dentro do Histórico: mostra a fila atual de cada jogo (com a posição de cada pessoa, se o jogo já está disponível, e opção de remover alguém da fila estando logado como admin) e um histórico cronológico de eventos — quem entrou na fila, quem foi atendido, quem foi avisado e quem foi removido (admin também pode apagar linhas desse histórico). Quando o jogo está disponível, tem um botão de WhatsApp ao lado da primeira pessoa da fila pra avisar direto por ali.
- **Aviso de pendências**: bolinha vermelha com o número no ícone de histórico da barra de ferramentas, quando há jogo(s) disponível(is) com gente esperando na fila ainda não avisada — clicar nele leva direto pra aba de Fila de Reserva, onde aparece um resumo no topo dela.
- **Seleção em massa no Histórico**: botão "Selecionar" (admin) na aba de Empréstimos permite marcar registros ativos e concluídos — com ativos selecionados aparece "Devolver", com concluídos aparece "Excluir" — tudo com opção de desfazer.
- **Jogos Esquecidos**: seção no final do Histórico com os jogos nunca emprestados ou parados há 30 dias ou mais. Dá para minimizar a lista e abrir um modal com a relação completa.
- **Lista consolidada por pessoa**: um botão que monta uma única mensagem de WhatsApp com todos os jogos que uma pessoa está com ela no momento (nome, data de retirada e previsão de devolução).
- Lembrete individual de devolução via WhatsApp, direto no card do jogo emprestado.
- Confete e mensagem especial ao devolver um jogo dentro do prazo, e a cada marco redondo de empréstimos do acervo (10º, 50º, 100º...).
- **Calendário visual de devoluções**: visão por mês com indicação de quais dias têm devolução prevista (amarelo) ou atrasada (vermelho).

### Fila de Reserva
- Reserve um jogo para alguém direto na janela do jogo, na parte de empréstimo — a fila fica visível tanto quando o jogo está **disponível** quanto quando está **emprestado**, com a posição de cada pessoa.
- Ao devolver um jogo com fila, aparece um aviso com atalho de WhatsApp pronto pra chamar quem está esperando.
- Ao emprestar para alguém que **não é a próxima pessoa da fila**, o site avisa antes de confirmar. Se a pessoa escolhida nem estiver na fila, aparecem duas opções: emprestar mesmo assim (sem mexer na fila) ou colocar essa pessoa no final da fila em vez de emprestar agora.
- **Remover alguém da fila é ação exclusiva do administrador logado** — qualquer pessoa da família pode adicionar uma reserva, mas só o admin pode tirar alguém de lá.

### Pessoas e Conquistas
- Cadastro de pessoas com nome, apelido e telefone (opcional, usado nos links de WhatsApp).
- Validação para evitar cadastros duplicados/confusos (ex: detecta "Nome (Apelido)" digitado errado e corrige sozinho).
- **Estatísticas por pessoa**: total de empréstimos, jogos com ela no momento, tempo médio de devolução, jogo favorito, linha do tempo dos últimos empréstimos, e os jogos em que ela está na fila de reserva com a posição atual em cada um (indicando também se o jogo já está disponível).
- **Sistema de conquistas (badges)** — veja a lista completa abaixo. Um botão de "?" ao lado de "Gestão de Pessoas" abre a legenda explicando cada uma.

### Sincronização e Backup
- Sincronização automática com o GitHub: toda alteração é enviada sozinha poucos segundos depois de parar de mexer, e o app verifica a cada ~20 segundos se algo mudou em outro dispositivo — sem precisar clicar em "salvar". Enquanto alguém está conectado à mesa do Banco, essa consulta passa a cada 2 segundos; fora dela, mantém os 20 segundos.
- Antes de gravar, o app sempre mescla os dados mais recentes do GitHub com os locais (por item e por data de alteração), evitando perda de dados quando duas pessoas mexem ao mesmo tempo.
- Pedidos de sincronização que chegam enquanto outra chamada está ativa ficam enfileirados e rodam em seguida com os dados mais recentes, em vez de serem descartados.
- As exclusões são sincronizadas por marcadores com horário, inclusive no histórico da fila de reservas; o backup JSON também preserva esses marcadores para impedir que registros apagados reapareçam na sincronização.
- Indicador de status de sincronização (sincronizado / sincronizando / erro / offline).
- Backup manual em arquivo JSON (baixar e restaurar), além da sincronização automática.
- A importação confere o formato e a versão do backup antes de substituir os dados. Se um JSON das coleções sincronizadas estiver corrompido, o app avisa e preserva o conteúdo original até importar dados válidos. No Caderno, dados inválidos também são preservados; o botão Limpar inicia um quadro novo.
- Aviso em Configurações se já faz 14 dias ou mais desde o último backup manual (ou se nunca foi feito um) — proteção extra caso a sincronização automática falhe silenciosamente.

### Desfazer última ação
- Depois de uma devolução, renovação de empréstimo ou de uma exclusão (jogo, pessoa, registro do histórico, limpeza do histórico ou exclusão em massa), aparece uma barra na parte de baixo da tela com um botão **"Desfazer"**, disponível por 20 segundos.
- A reversão mexe só nos campos afetados por aquela ação específica (nunca no restante dos dados), então não corre o risco de desfazer também alterações feitas por outra pessoa da família em outro dispositivo nesse meio-tempo.

### Lembretes
- **Notificações do navegador**: ative em Configurações para receber um aviso quando um jogo emprestado estiver vencendo (hoje ou amanhã) ou já atrasado. Funciona só enquanto a aba do site estiver aberta no dispositivo — o site é 100% estático, sem servidor, então não substitui uma notificação push de verdade.
- **Avisos dentro do site**: notificações temporárias de sucesso e erro desaparecem sozinhas depois de 5 segundos; também podem ser fechadas antes pelo botão X.
- **Contador no ícone do app**: em navegadores/celulares compatíveis com a Badge API, o ícone do app instalado mostra um número com atrasados + pendências de aviso na fila somados — esse indicador funciona mesmo com o site fechado, diferente das notificações do navegador.
- **Resumo semanal**: a partir de toda segunda-feira, aparece um banner no topo da aba de Histórico com um resumo de atrasados e fila de reserva, e um botão pra abrir o WhatsApp com essa mensagem pronta pra enviar (você escolhe pra quem/qual grupo mandar). O banner fica disponível a semana inteira até ser dispensado — e mesmo depois de dispensado, um link discreto "Ver resumo semanal agora" continua no mesmo lugar, pra consultar ou enviar quando quiser, sem esperar a segunda seguinte. Se as notificações do navegador estiverem ativas, também dispara um aviso automático no mesmo momento.

### Outros recursos
- **Modo Cardápio** (impressão): lista compacta pra consulta rápida ou impressão. No celular, os QR codes ficam numa linha abaixo do título quando não cabem do lado (evita cortar o nome do jogo); em telas maiores e na impressão, tudo continua na mesma linha, como sempre foi.
- **Análise de Empréstimos**: no Dashboard, o card "Total Acervo" tem um botão de detalhe (ícone de gráfico) que abre um painel com filtro de período (7/30/90 dias, este ano ou tudo) mostrando total de empréstimos, duração média, % de devoluções no prazo, jogos diferentes emprestados, ranking dos jogos mais emprestados no período e ranking de quem mais pega jogos emprestados — além das seções de Top Mecânicas e Valor Estimado da Coleção. Logo abaixo do valor estimado, o Dashboard soma quantas sleeves ainda precisam ser compradas, agrupadas por tamanho. O cálculo usa quantidade e dimensões cadastradas em cada jogo do acervo e exclui os jogos marcados como já sleevados; quando só a quantidade é conhecida, mostra esse total como “Dimensões não informadas”.
- **Sorteio Inteligente** (dado): sorteia um jogo entre todos os disponíveis, ou filtrando por tempo de jogo e por quem está presente. Selecionar pessoas na lista atualiza a quantidade de jogadores sozinho, e dá pra somar à mão gente que não está cadastrada (o número não pode ficar menor que a quantidade de gente já selecionada — pra isso, é só desmarcar alguém). Os botões flutuantes de Sorteio e Guru somem sozinhos quando outro painel toma conta da tela (filtros, análise/ranking do Dashboard, carrinho) e voltam ao normal ao fechar.
- **Jogatina** (ícone de controle, ao lado da Lista de Desejos): ferramentas úteis durante a partida em si, sem depender de um jogo específico:
  - **Cronômetro**: regressivo (com aviso sonoro nos 5 segundos finais e alarme no zero, mais botões de ajuste de tempo) ou progressivo (conta pra cima), com iniciar/pausar/reiniciar. O visor mostra milissegundos; toque/clique no tempo pausado para ajustar. No celular, digite somente números no formato `MMSS` (por exemplo, `0230` = 2 min e 30 s); também são aceitos `02:30`, `02.30` e `HH:MM:SS.mmm`. A contagem regressiva também tem uma ação própria para zerar o tempo. Continua rodando em segundo plano mesmo navegando pra outra tela do site.
  - **Placar**: escolhe quem está na mesa e vai somando/subtraindo pontos por pessoa (+1, +5, -1, -5). Um checkbox libera pontuação negativa (pra jogos onde se perde pontos); ao desativá-lo, valores negativos existentes voltam a zero. As pessoas aparecem da maior para a menor pontuação, com empates em ordem alfabética. Dá pra zerar só uma pessoa ou todo mundo de uma vez.
  - **Dados**: de D3 a D20, dá pra misturar tipos diferentes na mesma rolagem (ex: 1×D3 + 2×D6), com som e animação de rolagem antes do resultado final, agrupado por tipo de dado.
  - **Roleta**: sorteia alguém entre quem está na mesa — roda colorida girando com um ponteiro fixo por fora (não gira junto), som de cliques que desacelera junto com a roleta e confete ao parar no vencedor. A lista de participantes fica bloqueada durante o giro para manter o resultado estável.
  - **Girar a Garrafa**: não depende de selecionar ninguém — é só uma garrafa (desenho mais detalhado, com gargalo, rótulo e tampa) girando de verdade no centro da mesa, acompanhada por um som de giro que desacelera; a pessoa escolhida é quem estiver sentada na direção que o bico apontar quando parar.
  - **Cara ou Coroa**: uma moeda com o dado do site (ícone do "Acervo de Jogos") de um lado e uma pessoa do outro, com som de moeda e animação de giro em 3D.
  - **Calculadora**: uma calculadora comum de aritmética, ou um modo "Somatório por Pessoa" que soma itens nomeados (tipo "Castelo: 15", "Ouro: 3") por pessoa, mostrando o total. O nome do item permanece no campo depois da adição para facilitar repetir o mesmo item para outras pessoas. No modo simples, o visor também mostra a operação selecionada e o segundo valor enquanto a conta é montada.
  - **Banco da mesa**: cada aparelho conecta uma pessoa cadastrada ou um convidado e mostra quem está online e o saldo de todos. Cada pessoa só tem controles para o próprio saldo: receber/pagar ao banco ou iniciar uma transferência. Ao pedir dinheiro de outra pessoa, o saldo disponível já é conferido antes do envio e verificado novamente na confirmação para detectar mudanças enquanto o pedido aguarda. Pedidos válidos abrem uma confirmação no aparelho da pessoa escolhida; só após aceitar o saldo muda. Recusas e pedidos de transferência sem resposta (2 minutos) cancelam a operação. Sair da mesa zera o saldo individual. O botão “Zerar sessão” pede confirmação de todas as pessoas online: só é aplicado se todos aceitarem; um “Não” cancela e, sem todas as respostas em 2 minutos, o pedido expira. Os movimentos confirmados aparecem para os participantes conectados. A presença expira depois de 75 segundos sem atualização. O estado é sincronizado no backup do GitHub: enquanto alguém está conectado à mesa, o app consulta a cada 2 segundos; fora dela, a cada 20 segundos. Essa frequência maior consome mais rapidamente a cota do token.
  - **Caderno**: quadro branco ou negro com caneta/lápis (cor e espessura configuráveis), balde de tinta com tolerância para bordas suavizadas e borracha para remover partes de traços, preenchimentos, formas, textos ou quadradinhos. Formas (retângulo, quadrado, círculo, triângulo, estrela e seta) e textos podem ser movidos e redimensionados; o texto só entra em edição após duplo clique. O modo Pixel art tem uma grade de 48 × 30 quadrados e interpola os pontos do arraste para não deixar lacunas. O botão **Baixar PNG** exporta o desenho, sem a grade Pixel art nem as alças de seleção. Em tela cheia no modo paisagem, as ferramentas ficam nas laterais do quadro para liberar a área central; sair da tela cheia, escolher o fundo e limpar continuam no cabeçalho. O botão “Limpar” apaga imediatamente, sem confirmação. O manifesto do PWA permite retrato e paisagem. Em celular, o botão de tela cheia tenta solicitar orientação paisagem quando o navegador permite; se não, o aparelho precisa estar com rotação automática habilitada e ser girado manualmente. O conteúdo fica salvo no armazenamento local do navegador, neste aparelho, e não sincroniza com o GitHub nem com os demais dispositivos.
  - A seleção de "quem está na mesa" é compartilhada entre Placar, Roleta e o Somatório — escolhe uma vez, usa em qualquer uma dessas ferramentas. Além de gente cadastrada, dá pra adicionar um **convidado temporário** (sem cadastro na lista de Pessoas — útil pra visita ocasional), que fica disponível até ser removido dali. Placar, Somatório e Caderno ficam salvos no próprio aparelho, mas não sincronizam. O Banco é compartilhado pelo backup do GitHub e precisa de token configurado em cada aparelho; as mudanças costumam aparecer em até 2 segundos enquanto alguém está conectado e em até 20 segundos fora da mesa.
- **Mapa da Estante** (ícone de estante, na primeira grade de modos de visualização — veja "Navegação" abaixo): agrupa o acervo pelo texto do campo "Local na Estante" de cada jogo (o mesmo campo já existente no formulário de edição), mostrando cada local com os jogos em tiles de tamanhos variados, no estilo "live tiles" do Windows Phone, sem cortar as capas dos jogos. Jogos emprestados aparecem com um selo escuro por cima. Jogos sem local viram um grupo à parte, "Sem Local Definido", sempre por último. Tocar num tile abre o jogo normalmente. A busca e os filtros continuam funcionando aqui — útil pra digitar o nome de um jogo específico e ver rapidinho em qual prateleira ele está.
  - **5 tamanhos de tile** (Pequeninho, Pequeno, Médio, Grande, Grandão — "Médio" é o padrão pra todo jogo): quem estiver logado como admin escolhe o tamanho de cada jogo pelo ícone de camadas sempre visível no canto do tile (funciona por toque ou clique, sem precisar passar o mouse por cima), ou pelo campo "Tamanho do Tile no Mapa da Estante" dentro do formulário de edição do jogo. A imagem pedida pro tile já vem numa resolução compatível com o tamanho escolhido, pra não ficar borrada nos tamanhos maiores.
  - **Sugestão de tamanho pela caixa**: ao sincronizar um jogo, medidas explícitas encontradas no conteúdo da Ludopedia são guardadas no formulário e podem sugerir uma das cinco categorias pelo maior lado: até 14 cm (Pequeninho), acima de 14 até 21 cm (Pequeno), acima de 21 até 30 cm (Médio), acima de 30 até 36 cm (Grande) ou acima de 36 cm (Grandão). O admin continua podendo escolher manualmente; tiles manuais não são alterados por sincronizações posteriores. A Ludopedia informa que as medidas variam por edição e podem não constar na ficha, então não há sugestão quando não é encontrada uma dimensão explícita.
  - **Sleeves**: ao sincronizar, o site procura a seção `Sleeves` da ficha, importa quantidade e medidas para o campo já existente e exibe o dado na janela do jogo. No modal de edição, o campo **Jogo Sleevado?** indica se as sleeves já foram colocadas e é salvo junto ao jogo. O Dashboard usa essa opção para descontar o jogo da lista de compras. O valor preenchido manualmente é mantido; sincronizações futuras atualizam apenas valores que foram importados automaticamente. A seção pode não existir em todas as fichas.
  - **5 tamanhos de tile** (Pequeninho, Pequeno, Médio, Grande, Grandão — "Médio" é o padrão pra todo jogo): quem estiver logado como admin escolhe o tamanho de cada jogo pelo ícone de camadas sempre visível no canto do tile (funciona por toque ou clique, sem precisar passar o mouse por cima), ou pelo campo "Tamanho do Tile no Mapa da Estante" dentro do formulário de edição do jogo. A imagem pedida pro tile já vem numa resolução compatível com o tamanho escolhido, pra não ficar borrada nos tamanhos maiores.
  - **Mover e reordenar arrastando**: só como admin, segura e arrasta um tile pra reordenar dentro da mesma prateleira, ou soltar em cima de (ou dentro d)a área de outra prateleira já existente — o jogo assume automaticamente aquele novo local (inclusive movendo de/para "Sem Local Definido"). Funciona tanto arrastando com o mouse (computador) quanto segurando e arrastando com o dedo (celular).
  - **Renomear um local de uma vez**: o ícone de lápis no cabeçalho de cada prateleira (só admin) renomeia ela em todos os jogos daquele grupo simultaneamente, sem precisar editar jogo por jogo.

### Navegação

A barra de botões abaixo da busca fica dividida em duas grades: uma com os modos de visualização (Grade, Lista, Detalhes, Cardápio, Mapa da Estante) e outra com Histórico, Lista de Desejos e Jogatina. As duas ficam lado a lado quando cabem na largura da tela, ou uma embaixo da outra — sempre centralizadas — quando não cabem, em vez de precisar arrastar pro lado pra ver tudo. O Calendário de Devoluções e o botão Pessoas só aparecem dentro da aba Histórico (ao lado um do outro); o botão de Ajuda foi pra dentro do modal de Configurações, ao lado do título "Gerenciamento".
- **Guru de Jogos**: ajuda a escolher um jogo com base em número de jogadores, tempo e categoria.
- Dashboard com estatísticas gerais do acervo.
- **Tema claro/escuro/automático**: automático é o padrão ao abrir o site pela primeira vez (segue o sistema operacional/navegador); dá pra trocar clicando no ícone de tema no cabeçalho.
- **Busca inteligente**: ignora acentos e pontuação, interpreta números por extenso (por exemplo, "Seven Wonders" encontra "7 Wonders") e tolera pequenos erros sem ampliar demais os resultados (ex.: "catam" encontra "Catan"). Também compara a frase falada com nomes de uma ou mais palavras para lidar com separações acidentais, como "wing spam" ao buscar "Wingspan".
- **Busca por voz**: use o microfone ao lado da barra de busca ou do campo **Título** no formulário de jogo para ditar em português do Brasil. O reconhecimento é de uma frase por vez e substitui o texto atual pela transcrição final, removendo pontuação final como o ponto. Na busca, o navegador pode fornecer hipóteses alternativas; uma alternativa só é usada se corresponder a um título do acervo, e a transcrição principal continua visível no campo. O site recompõe todos os trechos finais retornados pelo navegador, aplica os filtros atuais e, no formulário, atualiza o título sem salvar o jogo — é preciso confirmar a edição normalmente. Clique novamente no botão vermelho para encerrar a escuta. O controle fica desativado em navegadores sem suporte, e o navegador pode pedir permissão para acessar o microfone. Se não houver fala, a permissão for negada ou ocorrer erro de captura/rede, o site informa o problema. A disponibilidade e a necessidade de conexão dependem do navegador.
- **Filtro combinado por categoria**: no painel de Filtros, marque várias categorias ao mesmo tempo (chips clicáveis) — o jogo só aparece se tiver todas as marcadas ao mesmo tempo, não qualquer uma delas. As selecionadas ficam fixas no topo da lista, um campo de busca encurta as demais, e a lista tem rolagem própria. Um botão "Remover Filtros" (com indicador visual no ícone de filtro quando há algo ativo, mesmo com o painel fechado) reseta tudo de uma vez.
- **Detecção de duplicata (cruzada)**: ao cadastrar um jogo manualmente ou importar via CSV, o título é comparado (ignorando acento, maiúscula/minúscula e espaços extras) com o que já existe, sempre com a opção de **"Adicionar mesmo assim"** — nada é bloqueado de vez, já que pode ser uma segunda cópia ou outra edição. A checagem funciona nos dois sentidos: cadastrar no **acervo** avisa se aquele jogo está na **lista de desejos**, e adicionar à **lista de desejos** avisa se você já tem o jogo no **acervo**. Na importação por CSV, também evita duplicar entre linhas repetidas do próprio arquivo.
- **Escanear código de barras**: ao cadastrar um jogo novo, o leitor aceita apenas EAN-13 válido (13 dígitos com dígito verificador correto), usando a API nativa do navegador quando disponível e ZXing como alternativa. O bip toca ao ler e o número permanece no campo **Código de Barras**. A busca do nome consulta o Google em português do Brasil pelo Worker pessoal já configurado para a Ludopedia e sugere o primeiro resultado orgânico para o EAN (priorizando um resultado que mostre o código no próprio resumo). O título não é salvo automaticamente, um sufixo genérico como "Board Game" é removido e um título digitado manualmente é preservado. O Google pode exibir CAPTCHA/bloquear consultas automatizadas, alterar o HTML dos resultados ou limitar requisições; o Worker também pode aplicar seus próprios limites. Nesses casos a busca informa o problema e mantém o código para pesquisa manual pelo link **"Buscar [código] no Google"**. Essa abordagem deixa de depender da cota do catálogo anterior, mas não garante disponibilidade sem limite. A consulta envia o EAN ao Worker pessoal, que busca no Google.
- **Fotos extras por câmera ou upload**: na seção de Fotos Extras de cada jogo, além de colar um link, dá pra tirar uma foto na hora com a câmera (com som de obturador) ou enviar uma já salva no dispositivo — a imagem é redimensionada e comprimida automaticamente antes de ser salva. Clicar numa foto (na tela do jogo ou durante a edição) abre ela em tela cheia; um botão de excluir aparece ali mesmo pra quem estiver logado como admin.
- **Instalável como app (PWA)**: no celular, dá pra "Adicionar à Tela Inicial" e abrir como se fosse um aplicativo.
- **Dicas ao passar o mouse**: praticamente todos os botões do site mostram uma explicação rápida do que fazem.

---

## 🏅 Legenda de Conquistas

| Badge | Critério |
|---|---|
| 🌱 Estreante | Ainda não pegou nenhum jogo emprestado. |
| 🆕 Novato | Ainda não chegou a 5 empréstimos na vida. |
| 🏆 Viciado | 7 ou mais empréstimos nos **últimos 30 dias** (janela móvel — some sozinho se parar de emprestar). |
| ⚡ Relâmpago | Nos últimos 30 dias, devolveu algum jogo antes do prazo OU tem média de devolução de até 3 dias. Expira depois de 30 dias sem devolução que sustente o badge. |
| 🐢 Tartaruga | Nos últimos 30 dias, devolveu algum jogo fora do prazo OU tem média de devolução de 12 dias ou mais. Expira do mesmo jeito que o Relâmpago. |
| 🎯 100% Pontual | Nunca devolveu atrasado, em pelo menos 3 empréstimos concluídos com data prevista registrada. |
| 🔍 Colecionador(a) | Já pegou jogos de 7 ou mais categorias/mecânicas diferentes. |
| 💌 Fiel | Já pegou o mesmo jogo emprestado 3 vezes ou mais. |
| 🔥 Sequência | Pegou pelo menos um jogo emprestado em 3 meses seguidos, sem interrupção. |
| 👑 Rei/Rainha da Jogatina | Maior número total de empréstimos entre toda a família no momento (pode mudar de dono). |

---

## 🔒 Sobre segurança (limitações importantes)

Por ser um site 100% estático (sem servidor), existem alguns limites que vale saber:

- A senha de admin protege contra uso casual, mas alguém com conhecimento técnico avançado (abrindo o "Inspecionar" do navegador) poderia contornar a verificação. Não é um sistema de segurança de nível corporativo — é adequado para uso familiar.
- O hash de senha usa PBKDF2-SHA-256 com sal aleatório e 600.000 iterações. Ele é sincronizado no arquivo `backup.json`; use uma senha exclusiva deste app. A tela de administrador continua sendo apenas uma barreira contra uso casual, não uma autorização segura no servidor.
- O Token do GitHub fica salvo no armazenamento local do navegador de cada dispositivo e é usado diretamente pelo site estático. Limite-o a leitura/escrita em "Contents" e somente a este repositório. Para impedir que o token fique acessível no navegador, seria necessário mover as chamadas à API para um serviço intermediário autenticado (por exemplo, um Worker); o site estático sozinho não consegue ocultar esse segredo.
- O Banco da mesa usa esse mesmo backup do GitHub. Cada aparelho participante precisa de um token com acesso de escrita ao repositório. O app limita os controles da interface ao próprio participante, mas, por ser estático, não consegue impedir tecnicamente que alguém com acesso ao token altere o backup pelo navegador; use apenas entre pessoas de confiança. Os movimentos são saldos de jogo, não um registro financeiro privado.
- Nunca compartilhe prints de tela que mostrem o token.

---

## 🧪 Verificação de desenvolvimento

Com Node.js e as dependências de desenvolvimento instaladas, rode `npm test`. A suíte valida a sintaxe Babel e cobre regressões de sincronização, armazenamento/backup, ícone de cofre, validação antecipada de saldo em pedidos de recebimento, zeragem individual ao sair, reset de sessão com unanimidade/recusa/expiração e sincronização do Banco da mesa entre aparelhos, além da camada e do tempo de vida das notificações; hash de senha, busca por voz, leitura e busca de EAN-13 no Google (com páginas de resultado e bloqueio simulados), cálculo de sleeves por tamanho e estado já sleevado, Caderno (incluindo exportação PNG), renovação de empréstimos, visor da calculadora e classificação de dimensões da caixa. A suíte não envia alterações ao GitHub nem substitui a conferência manual em navegadores e aparelhos reais. O antigo ambiente privado de testes do Claude não está incluído neste repositório.

---

## 🔧 Manutenção e atualizações futuras

- Para atualizar o site, é só substituir o `index.html` (e os outros arquivos, se também tiverem mudado) no repositório pelo arquivo novo.
- Depois de subir uma atualização, os dispositivos costumam atualizar sozinhos na próxima vez que abrirem o app com internet (graças ao Service Worker). Em caso de tela desatualizada, force um "hard refresh" (Ctrl+Shift+R) ou feche e abra o app de novo.
- O deploy do GitHub Pages pode falhar ocasionalmente com o erro genérico "Deployment failed, try again later" — isso é uma instabilidade conhecida da infraestrutura do GitHub, não um problema do código. Basta usar **"Re-run failed jobs"** na aba Actions.
