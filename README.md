# 🎲 MeepleStock Pro 2.4 - Smart Sync

Bem-vindo ao repositório do **MeepleStock Pro**, um gerenciador de coleção de jogos de tabuleiro pessoal que funciona como um aplicativo nativo (PWA) diretamente do navegador, sem necessidade de lojas de aplicativos.

---

## 📂 Estrutura do Repositório

Este projeto é composto por apenas dois arquivos essenciais que transformam o código em um aplicativo instalável:

### 1. `index.html` (O Aplicativo)
Este é o coração do sistema. É um arquivo único que contém:
*   **Interface (UI):** Construída com Tailwind CSS para ser responsiva em celulares.
*   **Lógica:** Feita em React.js (via CDN) para gerenciar o estado da coleção.
*   **Banco de Dados:** Utiliza o `localStorage` do navegador para salvar seus jogos.
*   **Smart Sync:** Lógica para buscar capas e dados automaticamente da Ludopedia.

### 2. `manifest.json` (Instalador PWA)
Este arquivo de configuração diz ao sistema operacional (Android/iOS) como o aplicativo deve se comportar:
*   Define o nome do app na tela inicial.
*   Remove a barra de endereço do navegador (modo tela cheia).
*   Define o ícone do aplicativo.

---

## 📲 Como Instalar no Celular

Como este projeto é um **PWA (Progressive Web App)**, você não precisa baixar nada da Play Store.

1.  **Acesse o Link do Projeto:**
    Abra o Google Chrome (Android) ou Safari (iOS) e entre no link do GitHub Pages gerado para este repositório (ex: `https://seu-usuario.github.io/seu-repo/`).

2.  **Instalar (Android):**
    *   Ao abrir a página, aguarde aparecer uma barra inferior com **"Adicionar MeepleStock à tela inicial"**.
    *   Se não aparecer, toque nos **3 pontinhos (⋮)** no canto superior direito do Chrome.
    *   Selecione **"Instalar aplicativo"** ou **"Adicionar à tela inicial"**.

3.  **Instalar (iOS - iPhone):**
    *   Toque no botão de **Compartilhar** (quadrado com seta para cima).
    *   Role para baixo e selecione **"Adicionar à Tela de Início"**.

---

## 💾 Guia de Backup (Importar e Exportar)

Como o aplicativo salva os dados na memória do celular, é **essencial** fazer backups regulares, especialmente antes de limpar o cache do celular ou trocar de aparelho.

### 📤 Como Exportar (Salvar seus dados)

1.  Abra o app **MeepleStock**.
2.  No topo da tela (cabeçalho), localize o botão com ícone de **Link/Corrente** (🔗) ou **Download**.
3.  Toque nele.
4.  O aplicativo irá gerar um arquivo `.json` (ex: `meeple_backup_2023-10-25.json`) e salvará automaticamente na pasta **Downloads** do seu celular.
5.  *Dica: Salve esse arquivo no Google Drive ou envie para você mesmo no WhatsApp para segurança extra.*

### 📥 Como Importar (Restaurar dados)

⚠️ **Atenção:** Isso substituirá toda a coleção atual pelos dados do arquivo.

1.  Certifique-se de que o arquivo `.json` de backup está na memória do seu celular (na pasta Downloads, por exemplo).
2.  No topo do app, toque no ícone de **Nuvem/Sincronizar** (☁️/🔄).
3.  O gerenciador de arquivos do celular será aberto.
4.  Selecione o arquivo `.json` que você deseja restaurar.
5.  Confirme a mensagem que aparecerá na tela.
6.  Pronto! Sua coleção e histórico de empréstimos foram restaurados.

---

## ⚠️ Avisos Importantes

*   **Conexão:** O aplicativo precisa de internet na inicialização para carregar os estilos e bibliotecas.
*   **Limpeza de Dados:** Evite usar aplicativos de "Limpeza de Memória" que apaguem dados de navegação, pois isso pode apagar sua coleção local se você não tiver um backup `.json` salvo.
