# 🥩 Bravos Churrascaria

Uma Single Page Application (SPA) responsiva desenvolvida como trabalho final acadêmico. O projeto simula a interface web de uma churrascaria premium, oferecendo navegação fluida, sistema de reservas com persistência de dados e uma vitrine de eventos com simulação de compra de ingressos.

## 🎯 Requisitos Acadêmicos Atendidos

Este projeto foi desenhado e desenvolvido para cumprir rigorosamente os critérios de avaliação propostos:

*   **Responsividade:** Layout totalmente adaptável para dispositivos móveis, tablets e desktops, utilizando uma mescla de **Bootstrap 5** e media queries customizadas. Implementação de menu hambúrguer para telas menores.
*   **Persistência de Dados:** Utilização do `localStorage` do navegador para capturar, salvar e manter os dados de reserva do usuário (mesa escolhida, quantidade de pessoas e data de registro).
*   **Manipulação de DOM:** Atualização da interface em tempo real utilizando JavaScript Vanilla (exibição de mensagens de sucesso estilizadas sem recarregar a página, alteração de classes CSS via script e navegação ancorada).
*   **Interatividade e Dinamismo:** Formulários funcionais com prevenção de envio padrão (`event.preventDefault()`), simulação de compra de ingressos com validação de opções e roteamento isolado para evitar erros de execução de scripts entre páginas.
*   **Design Orientado a Persona:** Identidade visual e tipografia (fontes *Oswald* e *Sekuya*) escolhidas para transmitir robustez e sofisticação, alinhadas ao público que busca cortes nobres e experiência gastronômica de qualidade.

## 🚀 Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica de múltiplas páginas.
*   **CSS3:** Estilização global, efeitos de transição (`hover`, `scale`), animações de entrada (`@keyframes`) e Flexbox/Grid para alinhamento.
*   **Bootstrap 5:** Componentes de grid, formulários e classes utilitárias de alerta (`alert-success`, `d-none`).
*   **JavaScript (ES6):** Lógica de negócios centralizada, manipulação do Document Object Model e Storage API.

## 📂 Estrutura de Arquivos

O projeto utiliza uma estrutura limpa e integrada, onde múltiplas telas compartilham os mesmos arquivos de estilização e comportamento:

```text
/
├── index.html       # Página principal (SPA - Home, Quem Somos, Menu, Eventos)
├── reserva.html     # Página dedicada ao formulário de reservas (Integração LocalStorage)
├── eventos1.html    # Página do evento "Sertanejo Raiz" (Simulação de carrinho/ingresso)
├── eventos2.html    # Página do evento "Jazz, Blues & Brasa" (Informativa)
├── eventos3.html    # Página do evento "Chorinho no Almoço" (Página de 'Em Breve')
├── style.css        # Folha de estilos unificada garantindo consistência visual
├── script.js        # Lógica de controle, roteamento e eventos de clique
└── Imagens/         # Diretório contendo as logos (Logo bB.png, Logo P.png)
