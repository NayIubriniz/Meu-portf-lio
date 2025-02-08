
AOS.init({
    duration: 1000, // Duração da animação (em milissegundos)
    offset: 120,    // Distância do elemento para o início da tela
    once: true      // Anima apenas na primeira vez (não repete ao rolar para cima/baixo)
});

//------------Menu Hamburguer----------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const navLista = document.getElementById('nav-lista');

    menuHamburguer.addEventListener('click', () => {
        navLista.classList.toggle('active');
    });
});

// Alternar entre os modos claro e escuro
const checkbox = document.getElementById('toggle-checkbox');
const body = document.body;

// Alternar entre os modos claro e escuro
checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        body.classList.add('light-mode');  // Adiciona a classe light-mode
    } else {
        body.classList.remove('light-mode');  // Remove a classe light-mode
    }
});

        // Função de animação
        function animate() {
            if (animationActive) {
                drawStars();
                requestAnimationFrame(animate);
            }
        }

        animate();

        // Monitorar mudanças no tema
        themeToggle.addEventListener('change', () => {
            body.classList.toggle('light-mode');

            // Ativar ou desativar animação com base no tema
            if (body.classList.contains('light-mode')) {
                animationActive = false; // Para o efeito
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
            } else {
                animationActive = true; // Reinicia o efeito
                animate();
            }
        });
/*================================================================== */


/*---------------------------------------------------------------- */

        // Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Função para aplicar o efeito de aparecer
  function handlescroll() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        if (isElementInViewport(content)) {
            content.classList.add('show');
        }
    });
  }
  
  // Chama a função ao rolar a página
  window.addEventListener('scroll', handlescroll);
  
  // Chama a função ao carregar a página (para os elementos já visíveis)
  handlescroll();
  
  // Mostrar a seta quando o usuário rolar para baixo 100px
  window.onscroll = function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
  };
  
  // Rolar para o topo ao clicar na seta

  document.getElementById('back-to-top').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
