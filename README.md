# PokeRogue Viewer

Jogue **PokeRogue** diretamente no VS Code, sem sair do editor!

Esta extensão abre um painel Webview com o jogo gratuito não oficial de Pokémon no estilo roguelike, acessível direto pelo navegador embutido do VS Code.

---

## O que é o PokeRogue?

**PokeRogue** é um jogo de navegador gratuito, criado por fãs, que combina o universo Pokémon com a mecânica de **roguelike**.

### 🔄 O que é um Roguelike?

Um roguelike é um tipo de jogo caracterizado por:

- Progressão em **fases aleatórias**
- **Alta dificuldade**
- **Recomeço após a derrota**
- Evolução baseada na experiência do jogador e **desbloqueios permanentes**

No PokeRogue, isso significa que cada tentativa é diferente, incentivando estratégia e adaptação contínua.

---

## Como usar

1. Abra a **Paleta de Comandos** (`Ctrl+Shift+P`)
2. Digite e selecione: **`Abrir PokeRogue`**
3. O jogo será aberto em um painel dentro do VS Code

---

## 🌍 Onde jogar (sem a extensão)

O jogo também pode ser acessado diretamente pelo navegador em:

🔗 [https://pokerogue.net](https://pokerogue.net)

---

## 💾 Instalação local

Caso queira instalar esta extensão sem publicá-la no marketplace:

1. Gere o arquivo `.vsix` com:
   ```bash
   vsce package
   ```
2. No VS Code, abra a aba **Extensões** (`Ctrl+Shift+X`)
3. Clique nos `...` (três pontos) no canto superior direito
4. Selecione **"Install from VSIX..."**
5. Escolha o arquivo `pokerogue-viewer-0.0.1.vsix`

Ou via terminal:
```bash
code --install-extension pokerogue-viewer-0.0.1.vsix
```

---

## Requisitos

- VS Code `^1.115.0`

---

## ⚠️ Aviso Legal

O PokeRogue é um projeto criado por fãs e **não é afiliado à Nintendo, Game Freak ou The Pokémon Company**. Todos os direitos relacionados à franquia Pokémon pertencem aos seus respectivos proprietários.

Esta extensão apenas incorpora o site publicamente disponível em um webview do VS Code.

---

## Release Notes

### 0.0.1

- Lançamento inicial com suporte ao comando `Abrir PokeRogue`
