# 📱 Manual de Uso Local - Acervo de Jogos

Este guia contém o passo a passo detalhado para baixar, configurar e utilizar o **Acervo de Jogos** diretamente no seu celular, gerenciando seus backups manualmente.

---

## 1. Como Baixar o Arquivo do GitHub (Passo a Passo Detalhado)

O GitHub prioriza a leitura de código, então para baixar o arquivo executável, siga exatamente estes passos no navegador do seu celular:

### Passo 1: Localizar o Arquivo
1. Acesse a página principal deste repositório no navegador do seu celular (Chrome, Safari, Samsung Internet, etc.).
2. Role a tela para baixo até ver a lista de arquivos.
3. Toque no nome do arquivo: **`Acervo de Jogos 1.0.html`**.

### Passo 2: Efetuar o Download
Agora você verá o código colorido do arquivo. Para baixar, use um dos métodos abaixo:

**Método A (Mais Fácil - Menu do GitHub):**
1. No canto superior direito da área do código, procure por um ícone de **Três Pontos (...)** ou um ícone de **Download** (uma seta para baixo `⬇️`).
2. Toque em **Download**.
3. O navegador avisará que o arquivo foi baixado.

**Método B (Modo "Raw" - Se o Método A falhar):**
1. Procure um botão escrito **Raw** (geralmente no topo da visualização do código).
2. **Toque e SEGURE** (pressione longo) sobre o botão **Raw**.
3. No menu que abrir, selecione a opção **"Fazer o download do link"** ou **"Salvar link como..."**.
4. Confirme o download.

⚠️ **Importante:** Certifique-se de que o arquivo baixado tenha a extensão **`.html`**. Se o celular salvar como `.txt`, renomeie o arquivo removendo o `.txt` final.

---

## 2. Como Abrir o App no Celular

Como o arquivo está na memória do seu aparelho, você não digita um endereço "www". Você o abre através dos seus arquivos:

1. Feche o navegador e abra o app **Meus Arquivos**, **Files** ou **Gerenciador de Arquivos** do seu celular.
2. Navegue até a pasta **Downloads** (ou onde você salvou o arquivo).
3. Localize o arquivo `Acervo de Jogos 1.0.html`.
4. Toque nele.
    *   **Android:** Se perguntar "Abrir com...", selecione **Google Chrome**.
    *   **iPhone (iOS):** Toque no arquivo. Se abrir apenas o código texto, toque no ícone de "Compartilhar" e escolha "Abrir no Safari" ou "Salvar em Arquivos" e abra pelo app Arquivos.

💡 **Dica:** É necessário estar conectado à internet (Wi-Fi ou 4G) ao abrir o arquivo para que o visual (estilos e ícones) carregue corretamente.

---

## 3. Sistema de Backup (JSON)

Como o app roda localmente, se você limpar o cache do navegador, perderá seus dados. Por isso, use o sistema de Importar/Exportar.

### 📤 Como Exportar (Salvar Backup)
Faça isso sempre que adicionar novos jogos para garantir a segurança dos dados.

1. Abra o app no navegador.
2. No topo da tela (cabeçalho), localize o botão com ícone de **Engrenagem (⚙️)** e clique em "Exportar Backup".
3. Toque nele.
4. O navegador baixará automaticamente um arquivo chamado `meeple_backup_DATA.json`.
5. Guarde este arquivo.

### 📥 Como Importar (Restaurar Backup)
Use isso ao abrir o app pela primeira vez em um novo dia ou novo celular.

1. Tenha o arquivo `.json` de backup salvo no celular.
2. No cabeçalho do app, localize o botão com ícone de **Engrenagem (⚙️)** e clique em "Restaurar Backup".
3. O site abrirá o seletor de arquivos.
4. Selecione o arquivo `.json` que você baixou anteriormente.
5. Confirme a importação.
6. **Pronto!** Seus jogos e histórico de empréstimos aparecerão na tela instantaneamente.

---

## 🧩 Funcionalidades e Recursos

O Acervo de Jogos foi desenhado para ser simples e ajudar no controle dos jogos:

### 📊 Dashboard Inteligente
*   Visualize rapidamente o total do seu acervo.
*   Barras de progresso mostram a porcentagem de jogos emprestados vs. disponíveis.

### 🎲 Coleção e Filtros
*   **Visualização Híbrida:** Escolha entre ver as Capas (Grid), Lista simples ou Detalhes completos.
*   **Busca Rápida:** Digite o nome do jogo para filtrar em tempo real.
*   **Filtros Avançados:** Encontre jogos por categoria (Party, Estratégia, etc), número de jogadores ou tempo de duração.

### 🔄 Smart Sync (Ludopedia)
*   Ao cadastrar um jogo, o sistema tenta buscar automaticamente a **Capa**, **Descrição** e **Tags** usando o banco de dados da Ludopedia.
*   Possibilidade de "Sincronizar Tudo" para atualizar jogos que ficaram sem capa.

### 🤝 Gestão de Empréstimos
*   **Checkout:** Registre para quem você emprestou o jogo. O item fica bloqueado na lista principal.
*   **Histórico Completo:** Uma aba dedicada mostra todo o histórico: quem pegou, quando pegou e quando devolveu.
*   **Devolução Rápida:** Botões de atalho para registrar a devolução com um clique.
