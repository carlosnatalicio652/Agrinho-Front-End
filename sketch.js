// ==========================================
// 1. VARIÁVEIS GLOBAIS
// ==========================================
let anguloVento = 0;
let crescimentoArvores = 0;

// ==========================================
// 2. CONFIGURAÇÃO INICIAL (SETUP)
// ==========================================
function setup() {
  // Cria a tela de pintura digital
  createCanvas(800, 400);
}

// ==========================================
// 3. CICLO DE ANIMAÇÃO (DRAW)
// ==========================================
function draw() {
  // Céu azul limpo
  background(220, 240, 255);

  // Mapeia a posição X do mouse para definir a velocidade do vento
  let velocidadeVento = map(mouseX, 0, width, 0.02, 0.15, true);
  anguloVento += velocidadeVento;

  // Animação de crescimento orgânico ao abrir a página
  if (crescimentoArvores < 1) {
    crescimentoArvores += 0.01;
  }

  // Desenho do relevo e montanhas ao fundo
  noStroke();
  fill(160, 210, 140);
  ellipse(200, 450, 600, 300);
  ellipse(600, 430, 700, 250);

  // Solo produtivo / Chão agrícola
  fill(120, 180, 100);
  rect(0, 320, width, 80);

  // Linhas guias representando o cultivo tecnológico e organizado
  stroke(100, 160, 80);
  strokeWeight(3);
  for (let i = 0; i < width; i += 40) {
    line(i, 350, i + 15, 380);
  }

  // Torres de Energia Eólica (X, Y, Altura, Rotação)
  desenharEolica(250, 220, 110, anguloVento);
  desenharEolica(550, 250, 90, anguloVento * 1.2);

  // Preservação Ambiental: Árvores com crescimento e balanço
  desenharArvore(120, 320, 60 * crescimentoArvores);
  desenharArvore(400, 330, 50 * crecimientoArvores);
  desenharArvore(680, 320, 70 * crescimentoArvores);
  
  // Painel de ajuda visual
  desenharPainelInformativo();
}

// ==========================================
// 4. FUNÇÕES CUSTOMIZADAS (CONSTRUTORES)
// ==========================================

// Desenha as turbinas eólicas que geram energia limpa para o Agro
function desenharEolica(x, y, altura, rotacao) {
  push();
  translate(x, y);
  
  // Poste de sustentação da torre
  stroke(245);
  strokeWeight(4);
  line(0, 0, 0, altura);
  
  // Eixo central
  noStroke();
  fill(255);
  ellipse(0, 0, 10, 10);
  
  // Rotação física das 3 pás da hélice
  rotate(rotacao);
  stroke(255);
  strokeWeight(3);
  for (let i = 0; i < 3; i++) {
    rotate(TWO_PI / 3);
    line(0, 0, 0, -altura * 0.45);
  }
  pop();
}

// Desenha a vegetação nativa que reage à força do vento do mouse
function desenharArvore(x, y, tamanho) {
  if (tamanho <= 0) return; 
  
  push();
  // Tronco de madeira sustentável
  noStroke();
  fill(110, 70, 45);
  rect(x - tamanho * 0.1, y - tamanho * 0.6, tamanho * 0.2, tamanho * 0.6);
  
  // Balanço dinâmico baseado na intensidade do vento
  let balanco = sin(anguloVento * 0.5) * (mouseX * 0.01);
  
  // Copa de folhas em camadas
  fill(46, 125, 50);
  ellipse(x + balanco, y - tamanho * 0.7, tamanho * 0.8, tamanho * 0.8);
  fill(67, 160, 71);
  ellipse(x - tamanho * 0.2 + balanco, y - tamanho * 0.6, tamanho * 0.6, tamanho * 0.6);
  ellipse(x + tamanho * 0.2 + balanco, y - tamanho * 0.6, tamanho * 0.6, tamanho * 0.6);
  pop();
}

// Cria uma pequena caixa explicativa no canto superior da tela
function desenharPainelInformativo() {
  push();
  fill(30, 86, 49, 190);
  rect(15, 15, 240, 50, 5);
  
  fill(255);
  noStroke();
  textSize(12);
  textAlign(LEFT, CENTER);
  text("Mova o mouse horizontalmente", 25, 30);
  text("para controlar a força do vento.", 25, 46);
  pop();
}
