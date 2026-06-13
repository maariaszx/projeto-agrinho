function setup() {
  createCanvas(800, 950);
}

function draw() {
  background('#f4f9f4');
  noStroke();

  // --- CABEÇALHO ---
  fill('#1b4332');
  rect(0, 0, 800, 80);
  
  fill('#ffffff');
  textSize(24);
  textFont('Segoe UI');
  textStyle(BOLD);
  textAlign(LEFT);
  text('AgroForte', 40, 48);
  
  fill('#52b788');
  text('|  Futuro Sustentável', 165, 48);

  // --- BANNER PRINCIPAL ---
  fill('#2d6a4f');
  rect(0, 80, 800, 200);
  
  fill('#ffffff');
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER);
  text('Equilíbrio entre Produção e Meio Ambiente', 400, 160);
  
  textSize(16);
  textStyle(NORMAL);
  text('Descubra como a tecnologia e as boas práticas garantem o futuro do campo.', 400, 200);

  // --- SEÇÃO 1: DADOS ---
  textAlign(LEFT);
  fill('#1b4332');
  textSize(22);
  textStyle(BOLD);
  text('Dados do Agro Sustentável', 40, 330);
  
  fill('#52b788');
  rect(40, 345, 260, 3);

  // CARD DADO 1
  fill('#ffffff'); rect(40, 370, 220, 140, 8);
  fill('#2d6a4f'); rect(40, 370, 220, 8, 8, 8, 0, 0);
  fill('#2d6a4f'); textSize(32); textStyle(BOLD); text('+25%', 60, 420); // Corrigido para verde escuro
  fill('#2d3748'); textSize(13); textStyle(NORMAL); text('Eficiência no uso de água\ncom irrigação inteligente.', 60, 450);

  // CARD DADO 2
  fill('#ffffff'); rect(290, 370, 220, 140, 8);
  fill('#2d6a4f'); rect(290, 370, 220, 8, 8, 8, 0, 0);
  fill('#2d6a4f'); textSize(32); textStyle(BOLD); text('30%', 310, 420);
  fill('#2d3748'); textSize(13); textStyle(NORMAL); text('Redução de carbono com\no uso do Plantio Direto.', 310, 450);

  // CARD DADO 3
  fill('#ffffff'); rect(540, 370, 220, 140, 8);
  fill('#2d6a4f'); rect(540, 370, 220, 8, 8, 8, 0, 0);
  fill('#2d6a4f'); textSize(32); textStyle(BOLD); text('80M', 560, 420);
  fill('#2d3748'); textSize(13); textStyle(NORMAL); text('Hectares utilizando o\nsistema de ILPF.', 560, 450);

  // --- SEÇÃO 2: DICAS ---
  fill('#1b4332');
  textSize(22);
  textStyle(BOLD);
  text('Dicas Práticas (Clique no card para ver o vídeo)', 40, 560);
  
  fill('#52b788');
  rect(40, 575, 450, 3);

  // CARD DICA 1 (MIP)
  fill('#ffffff'); rect(40, 600, 720, 85, 8);
  fill('#52b788'); rect(50, 605, 90, 75, 6);
  fill('#ffffff'); ellipse(95, 642, 40, 40);
  fill('#1b4332'); ellipse(95, 642, 20, 10); 
  fill('#1b4332'); textSize(15); textStyle(BOLD); text('1. Manejo Integrado (MIP) ', 160, 630);
  fill('#2d3748'); textSize(13); textStyle(NORMAL); text('Use inimigos naturais e armadilhas biológicas para controlar pragas de forma verde.', 160, 655);

  // CARD DICA 2 (Rotação)
  fill('#ffffff'); rect(40, 700, 720, 85, 8);
  fill('#40916c'); rect(50, 705, 90, 75, 6);
  fill('#ffffff'); arc(95, 742, 40, 40, 0, HALF_PI); 
  fill('#ffffff'); arc(95, 742, 40, 40, PI, PI+HALF_PI);
  fill('#1b4332'); textSize(15); textStyle(BOLD); text('2. Rotação de Culturas ', 160, 730);
  fill('#2d3748'); textSize(13); textStyle(NORMAL); text('Alterne as plantas a cada safra para melhorar os nutrientes do solo naturalmente.', 160, 755);

  // CARD DICA 3 (Nascentes)
  fill('#ffffff'); rect(40, 800, 720, 85, 8);
  fill('#2a6f97'); rect(50, 805, 90, 75, 6);
  fill('#ffffff'); ellipse(95, 842, 35, 35);
  fill('#014f86'); rect(85, 835, 20, 20, 4); 
  fill('#1b4332'); textSize(15); textStyle(BOLD); text('3. Proteção de Nascentes ', 160, 830);
  fill('#2d3748'); textSize(13); textStyle(NORMAL); text('Preserve as florestas ao redor de rios. Água limpa é a maior riqueza da fazenda.', 160, 855);

  // --- RODAPÉ ---
  fill('#1b4332');
  rect(0, 900, 800, 50);
  
  fill('#ffffff');
  textSize(14);
  textStyle(NORMAL);
  textAlign(CENTER);
  text('© 2026 AgroForte - Conectando produção e preservação.', 400, 930);
}

// Controla o clique do mouse nas coordenadas de cada card
function mousePressed() {
  if (mouseX > 40 && mouseX < 760 && mouseY > 600 && mouseY < 685) {
    window.open('https://www.youtube.com/watch?v=kYmC7PCOg9M', '_blank');
  }
  if (mouseX > 40 && mouseX < 760 && mouseY > 700 && mouseY < 785) {
    window.open('https://www.youtube.com/watch?v=FqS771U9Gms', '_blank');
  }
  if (mouseX > 40 && mouseX < 760 && mouseY > 800 && mouseY < 885) {
    window.open('https://www.youtube.com/watch?v=840V3p39Brs', '_blank');
  }
}