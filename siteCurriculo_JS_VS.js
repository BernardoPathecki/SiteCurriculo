document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        slides[index].style.display = 'block';
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function startCarousel() {
        setInterval(nextSlide, 3000); // Muda a cada 3 segundos (3000 milissegundos)
    }

    showSlide(currentSlide);
    startCarousel();
});

function sectionInicio() {
    const section = document.getElementById('tela_inicial');
    section.scrollIntoView({ behavior: 'smooth' });
}
function sectionSobreMim() {
    const section = document.getElementById('sobre_mim');
    section.scrollIntoView({ behavior: 'smooth' });
}
function sectionQualificacoes() {
    const section = document.getElementById('qualificacoes');
    section.scrollIntoView({ behavior: 'smooth' });
}
function sectionExperiencia() {
    const section = document.getElementById('experiencia_profissional');
    section.scrollIntoView({ behavior: 'smooth' });
}
function sectionMural() {
    const section = document.getElementById('mural');
    section.scrollIntoView({ behavior: 'smooth' });
}
function sectionContato() {
    const section = document.getElementById('contato');
    section.scrollIntoView({ behavior: 'smooth' });
}


function abrirTelinha() {
    document.getElementById('tela_comentario').style.display = 'flex';
}

function fecharTelinha() {
    document.getElementById('tela_comentario').style.display = 'none';
}

function enviarMensagem() {
    var mensagem = document.getElementById('mensagem').value;
    if(mensagem == null || mensagem == ""){
    alert('Nenhuma mensagem inserida');
    }else
    alert('Mensagem enviada: ' + mensagem);
    fecharTelinha();
}