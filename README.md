# 🎲 Acervo de Jogos

Site para controle do acervo de jogos de tabuleiro da família e dos empréstimos entre pessoas conhecidas.

---

## 🔑 Primeiro acesso

### Definindo a senha de administrador

Da primeira vez que alguém clicar na logo (ícone de "Acesso Admin", canto superior) e tentar entrar, o site vai pedir para **criar** uma senha (não existe senha padrão). Essa senha:
- É guardada de forma criptografada (nunca em texto puro).
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
- Cadastro completo de jogos: título, imagem, jogadores, tempo de jogo, categorias/mecânicas, descrição, local na estante, avaliação (0-5), sleeves e preço pago.
- **Lista de Desejos** separada, com campos próprios (preço atual, prioridade) — sem os campos que só fazem sentido depois que o jogo é comprado. Botão para mover da Wishlist direto pro Acervo.
- **Galeria de fotos extras**: além da capa, dá para colar links de fotos adicionais (ex: do Imgur) no formulário de edição.
- Importação automática via **CSV exportado da Ludopedia**, preenchendo capa, jogadores, tempo e categorias sozinho.
- QR Code de Regras em cada jogo — ótimo para consultar o manual rapidamente com o celular, funciona como um "cardápio" físico colado nas caixas.
- Aviso de "alterações não salvas" ao tentar fechar a edição de um jogo sem salvar.

### Empréstimos e Histórico
- Registro de empréstimo (quem pegou, data de saída, data prevista de devolução) e devolução.
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
- Sincronização automática com o GitHub: toda alteração é enviada sozinha poucos segundos depois de parar de mexer, e o app verifica a cada ~20 segundos se algo mudou em outro dispositivo — sem precisar clicar em "salvar".
- Antes de gravar, o app sempre mescla os dados mais recentes do GitHub com os locais (por item e por data de alteração), evitando perda de dados quando duas pessoas mexem ao mesmo tempo.
- Indicador de status de sincronização (sincronizado / sincronizando / erro / offline).
- Backup manual em arquivo JSON (baixar e restaurar), além da sincronização automática.
- Aviso em Configurações se já faz 14 dias ou mais desde o último backup manual (ou se nunca foi feito um) — proteção extra caso a sincronização automática falhe silenciosamente.

### Desfazer última ação
- Depois de uma devolução ou de uma exclusão (jogo, pessoa, registro do histórico, limpeza do histórico ou exclusão em massa), aparece uma barra na parte de baixo da tela com um botão **"Desfazer"**, disponível por 20 segundos.
- A reversão mexe só nos campos afetados por aquela ação específica (nunca no restante dos dados), então não corre o risco de desfazer também alterações feitas por outra pessoa da família em outro dispositivo nesse meio-tempo.

### Lembretes
- **Notificações do navegador**: ative em Configurações para receber um aviso quando um jogo emprestado estiver vencendo (hoje ou amanhã) ou já atrasado. Funciona só enquanto a aba do site estiver aberta no dispositivo — o site é 100% estático, sem servidor, então não substitui uma notificação push de verdade.
- **Contador no ícone do app**: em navegadores/celulares compatíveis com a Badge API, o ícone do app instalado mostra um número com atrasados + pendências de aviso na fila somados — esse indicador funciona mesmo com o site fechado, diferente das notificações do navegador.
- **Resumo semanal**: a partir de toda segunda-feira, aparece um banner no topo da aba de Histórico com um resumo de atrasados e fila de reserva, e um botão pra abrir o WhatsApp com essa mensagem pronta pra enviar (você escolhe pra quem/qual grupo mandar). O banner fica disponível a semana inteira até ser dispensado — e mesmo depois de dispensado, um link discreto "Ver resumo semanal agora" continua no mesmo lugar, pra consultar ou enviar quando quiser, sem esperar a segunda seguinte. Se as notificações do navegador estiverem ativas, também dispara um aviso automático no mesmo momento.

### Outros recursos
- **Modo Cardápio** (impressão): lista compacta pra consulta rápida ou impressão. No celular, os QR codes ficam numa linha abaixo do título quando não cabem do lado (evita cortar o nome do jogo); em telas maiores e na impressão, tudo continua na mesma linha, como sempre foi.
- **Análise de Empréstimos**: no Dashboard, o card "Total Acervo" tem um botão de detalhe (ícone de gráfico) que abre um painel com filtro de período (7/30/90 dias, este ano ou tudo) mostrando total de empréstimos, duração média, % de devoluções no prazo, jogos diferentes emprestados, ranking dos jogos mais emprestados no período e ranking de quem mais pega jogos emprestados — além das seções já existentes de Top Mecânicas e Valor Estimado da Coleção, que continuam olhando pro acervo inteiro.
- **Sorteio Inteligente** (dado): sorteia um jogo entre todos os disponíveis, ou filtrando por tempo de jogo e por quem está presente. Selecionar pessoas na lista atualiza a quantidade de jogadores sozinho, e dá pra somar à mão gente que não está cadastrada (o número não pode ficar menor que a quantidade de gente já selecionada — pra isso, é só desmarcar alguém). Os botões flutuantes de Sorteio e Guru somem sozinhos quando outro painel toma conta da tela (filtros, análise/ranking do Dashboard, carrinho) e voltam ao normal ao fechar.
- **Jogatina** (ícone de controle, ao lado da Lista de Desejos): ferramentas úteis durante a partida em si, sem depender de um jogo específico:
  - **Cronômetro**: regressivo (com alarme sonoro e botões de ajuste de tempo) ou progressivo (conta pra cima), com iniciar/pausar/reiniciar. Continua rodando em segundo plano mesmo navegando pra outra tela do site.
  - **Placar**: escolhe quem está na mesa e vai somando/subtraindo pontos por pessoa (+1, +5, -1), destacando quem está na frente.
  - **Dados**: de D3 a D20, com quantidade ajustável (rola vários de uma vez) e uma animação de rolagem antes do resultado final.
  - **Roleta** e **Girar a Garrafa**: as duas sorteiam alguém entre quem está na mesa — a roleta com uma roda colorida girando, a garrafa com as pessoas dispostas em círculo.
  - **Cara ou Coroa**: uma moeda com o dado do site (ícone do "Acervo de Jogos") de um lado e um meeple do outro, com animação de giro em 3D.
  - **Calculadora**: uma calculadora comum de aritmética, ou um modo "Somatório por Pessoa" que soma itens nomeados (tipo "Castelo: 15", "Ouro: 3") por pessoa, mostrando o total.
  - A seleção de "quem está na mesa" é compartilhada entre Placar, Roleta, Garrafa e o Somatório — escolhe uma vez, usa em qualquer uma dessas ferramentas. Placar e Somatório ficam salvos no próprio aparelho entre uma visita e outra, mas **não sincronizam** com o GitHub nem com outros dispositivos — é estado só da sessão ao vivo, não faz parte do histórico do acervo.
- **Guru de Jogos**: ajuda a escolher um jogo com base em número de jogadores, tempo e categoria.
- Dashboard com estatísticas gerais do acervo.
- **Tema claro/escuro/automático**: automático é o padrão ao abrir o site pela primeira vez (segue o sistema operacional/navegador); dá pra trocar clicando no ícone de tema no cabeçalho.
- **Busca inteligente**: ignora acentos e tolera pequenos erros de digitação (ex: buscar "catam" encontra "Catan").
- **Filtro combinado por categoria**: no painel de Filtros, marque várias categorias ao mesmo tempo (chips clicáveis) — o jogo só aparece se tiver todas as marcadas ao mesmo tempo, não qualquer uma delas. As selecionadas ficam fixas no topo da lista, um campo de busca encurta as demais, e a lista tem rolagem própria. Um botão "Remover Filtros" (com indicador visual no ícone de filtro quando há algo ativo, mesmo com o painel fechado) reseta tudo de uma vez.
- **Detecção de duplicata (cruzada)**: ao cadastrar um jogo manualmente ou importar via CSV, o título é comparado (ignorando acento, maiúscula/minúscula e espaços extras) com o que já existe, sempre com a opção de **"Adicionar mesmo assim"** — nada é bloqueado de vez, já que pode ser uma segunda cópia ou outra edição. A checagem funciona nos dois sentidos: cadastrar no **acervo** avisa se aquele jogo está na **lista de desejos**, e adicionar à **lista de desejos** avisa se você já tem o jogo no **acervo**. Na importação por CSV, também evita duplicar entre linhas repetidas do próprio arquivo.
- **Escanear código de barras**: ao cadastrar um jogo novo, o botão "Escanear Código de Barras" abre a câmera do celular, lê o código da caixa e preenche o campo **Código de Barras**. Logo abaixo do campo aparece um link **"Buscar [código] no Google"**, que abre a busca pronta pra você achar o nome do jogo e colar no título — daí o botão da Ludopedia preenche o resto (jogadores, tempo, mecânicas, imagem).
  - *Por que não é automático*: tentamos descobrir o nome sozinho a partir do EAN (bases públicas de código de barras e, depois, raspagem de resultado de busca). As bases têm cadastro fraco pra jogos vendidos no Brasil e a raspagem por proxy devolvia produto aleatório com frequência, então a captura do código + busca manual acabou sendo mais rápida e previsível.
- **Fotos extras por câmera ou upload**: na seção de Fotos Extras de cada jogo, além de colar um link, dá pra tirar uma foto na hora com a câmera ou enviar uma já salva no dispositivo — a imagem é redimensionada e comprimida automaticamente antes de ser salva. Clicar numa foto (na tela do jogo ou durante a edição) abre ela em tela cheia; um botão de excluir aparece ali mesmo pra quem estiver logado como admin.
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
- O Token do GitHub fica salvo no navegador de cada dispositivo. Ao gerá-lo, dê acesso apenas de leitura/escrita em "Contents" e apenas para este repositório — nada além disso é necessário.
- Nunca compartilhe prints de tela que mostrem o token.

---

## 🔧 Manutenção e atualizações futuras

- Para atualizar o site, é só substituir o `index.html` (e os outros arquivos, se também tiverem mudado) no repositório pelo arquivo novo.
- Depois de subir uma atualização, os dispositivos costumam atualizar sozinhos na próxima vez que abrirem o app com internet (graças ao Service Worker). Em caso de tela desatualizada, force um "hard refresh" (Ctrl+Shift+R) ou feche e abra o app de novo.
- O deploy do GitHub Pages pode falhar ocasionalmente com o erro genérico "Deployment failed, try again later" — isso é uma instabilidade conhecida da infraestrutura do GitHub, não um problema do código. Basta usar **"Re-run failed jobs"** na aba Actions.
