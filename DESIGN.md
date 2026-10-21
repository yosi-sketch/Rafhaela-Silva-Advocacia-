---
name: "Rafhaela Silva — Advocacia e Consultoria Jurídica"
description: "Serifas contrastadas, rosé e cobre, superfícies de marfim e atendimento com clareza."
colors:
  ink: "#332521"
  ink-soft: "#6d5750"
  paper: "#fffdfb"
  ivory: "#fbf8f4"
  linen: "#e8dcd5"
  brand-50: "#f5eee7"
  brand-100: "#f0d9cf"
  brand-200: "#ffe4d6"
  brand-300: "#f0b7a6"
  brand-400: "#dba08e"
  brand-500: "#b87564"
  brand-600: "#a16050"
  brand-700: "#8c4c3e"
  brand-800: "#723d33"
  brand-900: "#573a32"
  brand-950: "#30211d"
  action-text: "#ffffff"
  services-surface: "#f8f3ed"
  trust-divider: "#775b51"
  trust-muted: "#d6beb3"
  footer-muted: "#dbc9c0"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.4rem, 4.8vw, 4.5rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.6rem, 3.6vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.85
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.6
rounded:
  button: "4px"
  card: "5px"
  portrait: "8px"
  dialog: "4px"
  avatar: "50%"
spacing:
  gutter-mobile: "20px"
  gutter-tablet: "24px"
  gutter-desktop: "32px"
  section-mobile: "64px"
  section-tablet: "64px"
  section-desktop: "104px"
  card-desktop: "28px"
  card-compact: "22px"
components:
  button-primary:
    backgroundColor: "{colors.brand-700}"
    textColor: "{colors.action-text}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "13px 20px"
  button-primary-hover:
    backgroundColor: "{colors.brand-800}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: "13px 20px"
  button-secondary-hover:
    textColor: "{colors.brand-700}"
  icon-button:
    textColor: "{colors.brand-700}"
    rounded: "{rounded.button}"
  text-link:
    textColor: "{colors.brand-700}"
  service-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card-desktop}"
  review-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "22px"
  service-dialog:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.dialog}"
    padding: "36px"
    width: "min(100%, 580px)"
---

# Design System: Rafhaela Silva — Advocacia e Consultoria Jurídica

## Overview

**Creative North Star: "Clareza com cuidado"**

A referência visual enviada em 21/10/2026 orienta a composição editorial: superfícies claras, títulos contrastados com ênfase em itálico, fotografias emolduradas, cartões delicados e espaços generosos. Os fatos e o logo continuam exclusivos de Rafhaela Silva. A referência não fornece credenciais, especialidades ou imagens para o site.

**Key Characteristics:**
- Marfim e papel predominantes, rosé e cobre nos detalhes e nas ações.
- Cormorant Garamond em peso 600, com itálicos, e Manrope na leitura.
- Fotografia original integral no hero e na apresentação, cartão de contato com a marca e rodapé claro.

## Colors

Os reflexos rosé do logo orientam a família brand. Cobre profundo #8c4c3e garante leitura e ações sobre claro; café #30211d fica na legenda principal da fotografia. Marfim #fbf8f4, papel #fffdfb, superfície #f5eee7 e linho #e8dcd5 mantêm a leveza da referência. O hero tem uma transição diagonal muito suave entre esses fundos; títulos não usam gradiente.

**The Contraste Contextual Rule.** Usar cobre profundo sobre claro e rosé claro sobre café; não usar reflexos claros do metal como texto pequeno em papel.

## Typography

Cormorant Garamond 500/600, normal e italic, e Manrope 400/500/600/700 são auto-hospedadas por next/font. Os títulos h1/h2/h3 e os itálicos usam peso 600. O corpo usa Manrope 500, 16px e entrelinha 1.85; textos de cards usam 15px, detalhes 12px e botões 14px.

H1 desktop: clamp(3.4rem,4.8vw,4.5rem), linha 1.06, máximo 560px. Até 1023px: 3.5rem; até 767px: clamp(3.05rem,8.7vw,3.8rem); até 479px: 3.05rem. Títulos de seção: clamp(2.6rem,3.6vw,3.4rem), linha 1.12; h2 móvel 2.8rem. A chamada final usa 42px, reduzidos para 36px. A tipografia exata de cada componente e suas exceções estão em app/globals.css.

**The Ênfase Editorial Rule.** Usar itálico rosé para a parte humana da mensagem e serifa normal para sua afirmação principal; manter textos funcionais em Manrope.

## Layout

Contêiner máximo de 1100px, com margens desktop de 32px, tablet de 24px e celular de 20px. Cabeçalho 94px e 86px no celular. Navegação móvel até 1199px. Seções: 104px no desktop e 64px até 1023px.

Hero: colunas 1.12fr/.88fr com espaço de 92px; fotografia até 390px; texto e foto empilhados até 767px. Cabeçalho tem logo de 156px no desktop e 144px no celular. Faixa de informações clara com quatro colunas, duas até 1023px.

Apresentação: fotografia até 360px e texto, com nota abaixo da foto em fluxo normal. No celular, texto antecede a foto. Serviços e avaliações em três colunas, duas até 767px e uma até 479px. Avaliações têm altura alinhada por linha e autoria ao pé do cartão. Contato em duas colunas equilibradas, empilhadas no celular. Chamada final e rodapé usam superfície clara.

## Elevation & Depth

Sombras suaves ficam nas fotografias e ações. Foto principal: 0 12px 28px rgb(48 33 29 / 12%); foto da apresentação: 0 15px 35px rgb(70 39 29 / 11%); botão: 0 4px 10px rgb(140 76 62 / 12%). Cartões de serviço ganham sombra suave apenas no hover. Bordas claras e mudanças tonais separam as demais superfícies.

## Shapes

Botões com raio de 4px, cartões de serviço/avaliação com 5px, contato com 6px, retrato da apresentação com 7px e principal com 8px. Ícones permanecem vetoriais e discretos. Não recortar o logo nem a fotografia original.

## Components

Botão principal em cobre e branco, mínimo de 48px, hover mais profundo e foco visível. Botão secundário em papel com borda de linho. Preservar foco global de 2px com afastamento de 5px, inclusive no rodapé claro.

Cabeçalho compacto e menu móvel com fechamento por seleção/Escape. Seis cartões abrem diálogos com assunto contextual no WhatsApp, ciclo de foco, Escape, retorno de foco e fundo inert. FAQ nativo details/summary. Todos os dados continuam em app/lib/brand.ts.

A apresentação reutiliza a única fotografia recebida e acrescenta legenda em papel. A nota fica abaixo, sem sobreposição. O cartão de contato reúne logo, cobertura, endereço, orientação de visita e Maps. A chamada final oferece contato antes do rodapé claro.

Nove transcrições fornecidas, com Helena identificada como trecho. Nota 5,0 e 17 avaliações são dados enviados em 21/10/2026. Movimento: revelação curta da fotografia por clip-path; movimento reduzido desativa animações e transições.

## Do's and Don'ts

- Do preservar o rosé da marca e os dados reais de Rafhaela.
- Do usar espaços, hierarquia e itálicos para transmitir elegância.
- Do manter os assets originais, legibilidade e navegação por teclado.
- Don't copiar nome, formação, especialidades, depoimentos ou fotos da referência.
- Don't sobrepor legendas a texto, nem acrescentar faixas escuras extensas.
- Don't inventar contatos, credenciais ou resultados.
