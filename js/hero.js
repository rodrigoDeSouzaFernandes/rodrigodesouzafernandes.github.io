//Adiciona animação de rotação ao passar o mouse na imagem
const container = document.querySelector(".img_box");
const card = container.querySelector(".profile_pic");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left; // posição do mouse no eixo X dentro do container
  const y = e.clientY - rect.top; // idem para Y

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -((y - centerY) / centerY) * 15; // gira no eixo X
  const rotateY = ((x - centerX) / centerX) * 15; // gira no eixo Y

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener("mouseleave", () => {
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
});
