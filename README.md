# 📱 Manual de Uso Local - MeepleStock Pro

Este guia explica como baixar, executar e gerenciar seus dados no **MeepleStock Pro** diretamente no seu celular, sem a necessidade de instalar servidores ou configurar lojas de aplicativos.

---

## 1. Como Baixar o App (HTML) no Celular

Para usar o aplicativo, você precisa baixar o arquivo de código fonte (`index.html` ou `Final.html`) do GitHub para o armazenamento interno do seu aparelho.

1.  Abra o navegador do seu celular (Chrome, Safari, etc.) e acesse a página principal deste repositório.
2.  Na lista de arquivos, toque no arquivo **`index.html`** (ou `Final.html`).
3.  Procure pelo botão **"Raw"** ou um ícone de **Download** (⬇️) no canto superior direito da visualização do código.
4.  O navegador perguntará se deseja fazer o download. Confirme.
5.  O arquivo será salvo na sua pasta de **Downloads**.

---

## 2. Como Abrir o App

Uma vez baixado, você executará o arquivo como se fosse um site, mas rodando direto da memória do seu celular.

1.  Abra o aplicativo de **Gerenciador de Arquivos** (Files) do seu celular.
2.  Vá até a pasta **Downloads**.
3.  Toque no arquivo que você acabou de baixar.
4.  Se o sistema perguntar "Abrir com...", selecione **Google Chrome** (ou seu navegador de preferência).
    *   *Nota: É necessário estar conectado à internet na primeira execução para carregar os ícones e estilos visuais.*

---

## 3. Gerenciando Backups (Arquivos .json)

Como você está usando o arquivo localmente, é fundamental salvar seus dados periodicamente para garantir que seu acervo não se perca caso limpe o histórico do navegador.

### 📤 Exportar Dados (Baixar Backup)
Use esta função para salvar seu acervo atual e o histórico de empréstimos em um arquivo seguro.

1.  Abra o app no seu navegador.
2.  No cabeçalho (topo da tela), localize o botão com ícone de **Link/Corrente (🔗)**.
3.  Toque nele.
4.  O sistema irá gerar e baixar automaticamente um arquivo chamado `meeple_backup_DATA.json`.
5.  Este arquivo ficará salvo na sua pasta de Downloads. Recomenda-se guardá-lo em local seguro (Google Drive, WhatsApp, etc).

### 📥 Importar Dados (Subir Backup)
Use esta função para restaurar seus dados ou transferi-los para outro celular.

1.  Certifique-se de ter o arquivo `.json` de backup na memória do celular.
2.  No cabeçalho do app, localize o botão com ícone de **Nuvem/Sincronizar (☁️)** ou o texto "Restaurar".
3.  Ao tocar, o Android abrirá o seletor de arquivos.
4.  Navegue até a pasta onde está seu backup (geralmente *Downloads*) e selecione o arquivo `.json`.
5.  O app pedirá uma confirmação. Ao confirmar, todos os jogos e histórico atuais serão substituídos pelos dados do arquivo.

---

## 🧩 Funcionalidades do Sistema

O MeepleStock Pro oferece as seguintes ferramentas para organizar sua jogatina:

### 🏠 Dashboard
*   Visão geral do tamanho do acervo.
*   Gráficos visuais de quantos jogos estão **Disponíveis** vs **Emprestados**.

### 🎲 Gerenciamento de Jogos
*   **Visualização:** Alterne entre modos Grade (Capas), Lista (Compacta) e Detalhes.
*   **Busca:** Pesquise jogos por nome instantaneamente.
*   **Filtros:** Filtre sua coleção por categoria, número de jogadores ou tempo de duração.
*   **Edição:** Adicione jogos manualmente ou edite informações de jogos existentes.

### 🔄 Smart Sync (Integração)
*   Sincroniza automaticamente capas e descrições de jogos utilizando a base de dados da Ludopedia.
*   Botão para sincronizar jogos pendentes em massa ou individualmente.

### 🤝 Controle de Empréstimos
*   Registre empréstimos informando o nome da pessoa.
*   O jogo fica marcado como "Emprestado" e indisponível na lista principal.
*   **Histórico:** Aba exclusiva para ver quem pegou jogos, datas de saída e devolução.
*   Botão de devolução rápida direto no histórico ou na ficha do jogo.

---

### ⚠️ Requisitos
Embora o arquivo seja executado localmente (`file:///`), ele requer uma **conexão ativa com a internet** para:
1.  Carregar a biblioteca React e Tailwind CSS.
2.  Buscar imagens das capas dos jogos.
3.  Realizar a sincronização de dados (Smart Sync).
