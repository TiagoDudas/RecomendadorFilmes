// Informações dos Filmes no Filmow

// Filmes

// A viagem de chihiro, LIVRE, fantaia, aventura
// O feitiço do tempo, LIVRE, fantasia, comédia
// Paddington, LIVRE, fantasia, aventura
// Procurando Nemo, LIVRE, aventura, animação, comédia, família
// Toy Story, LIVRE, aventura, animação, comédia, fantasia
// Shrek, LIVRE, aventura, animação, comédia, fantasia
// Apenas um garoto em Nova York, LIVRE, drama
// Duda e os gnomos, LIVRE, aventura, animação

// As aventuras de pi, 10, drama, fantasia, aventura
// Depois da chuva, 10, drama
// Em busca de Fellini, 10, aventura, drama
// Extraordinário, 10, drama

// Guardiões da galáxia, 12, fantasia, aventura, super-herói
// Ladrões de bicicleta, 12, drama
// Homem-aranha: no aranhaverso, 12, ação, Aventura, super-herói
// Altas expectativas, 12, comédia, drama, nacional
// Verão 1993, 12, drama, família
// Jasão e os Argonautas, 12, ação, Aventura, Fantasia

// O menino que decobriu o vento, 14, drama
// A bela tarde, 14, drama
// No limite, 14, ação, suspense, thriller

// Corpo delito, 16, documentário, nacional, policial
// Lucky, 16, drama, família
// Perfeita é a mãe 2, 16, comédia

let campoIdade;
let campoFantasia;
let campoAventura;
let campoComedia;
let campodDrama;
let campoSuperHeroi;
let campoDocumentario;

function setup() {
  createCanvas(1000, 400);
  createElement("h2", "Recomendador de Filmes");
  createSpan("Sua Idade:");
  campoIdade = createInput("1");
  campoFantasia = createCheckbox("Gosta de Fantasia ?");
  campoAventura = createCheckbox("Gosta de Aventura ?");
  campoComedia = createCheckbox("Gosta de Comédia ?");
  campoDrama = createCheckbox("Gosta de Drama ?");
  campoSuperHeroi = createCheckbox("Gosta de Super-Herói ?");
  campoDocumentario = createCheckbox("Gosta de Documentario ?");
  let recomendacao = geraRecomendacao(
    campoIdade,
    campoFantasia,
    campoAventura,
    campoComedia,
    campoDrama,
    campoSuperHeroi,
    campoDocumentario
  );
}

function draw() {
  background(200, 215, 246);
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeComedia = campoComedia.checked();
  let gostaDeDrama = campoDrama.checked();
  let gostaDeSuperHeroi = campoSuperHeroi.checked();
  let gostaDeDocumentario = campoDocumentario.checked();
  let recomendacao = geraRecomendacao(
    idade,
    gostaDeFantasia,
    gostaDeAventura,
    gostaDeComedia,
    gostaDeDrama,
    gostaDeSuperHeroi,
    gostaDeDocumentario
  );
  fill(color(80, 0, 150));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(
  idade,
  gostaDeFantasia,
  gostaDeAventura,
  gostaDeComedia,
  gostaDeDrama,
  gostaDeSuperHeroi,
  gostaDeDocumentario
) {
  if (idade >= 10) {
    if (idade >= 12) {
      if (idade >= 14) {
        if (idade >= 16) {
          if (gostaDeDocumentario) {
            return "Corpo delito";
          } else {
            if (gostaDeDrama) {
              return "Lucky";
            } else {
              return "Perfeita é a mãe";
            }
          }
        } else {
          if (gostaDeDrama) {
            return "A bela tarde || O menino que decobriu o vento";
          } else {
            return "No limite";
          }
        }
      } else {
        if (gostaDeDrama) {
          if (gostaDeComedia) {
            return "Altas expectativas";
          } else {
            return "Verão 1993 || Ladrões de bicicleta";
          }
        } else {
          if (gostaDeSuperHeroi) {
            return "Guardiões da galáxia || Homem-aranha: no aranhaverso";
          } else {
            return "Jasão e os Argonautas";
          }
        }
      }
    } else {
      if (gostaDeAventura) {
        if (gostaDeFantasia) {
          return "As aventuras de pi";
        } else {
          return "Em busca de Fellini";
        }
      } else {
        return "Extraordinário || Depois da chuva";
      }
    }
  } else {
    if (gostaDeAventura) {
      if (gostaDeFantasia) {
        if (gostaDeComedia) {
          return "Shrek || Toy Story";
        } else {
          return "Paddington";
        }
      } else {
        if (gostaDeComedia) {
          return "Procurando Nemo || O feitiço do tempo";
        } else {
          return "Duda e os gnomos";
        }
      }
    } else {
      return "Apenas um garoto em Nova York";
    }
  }
}
