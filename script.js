document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as imagens que devem ser animadas
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Se a imagem entrou na viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Opcional: Descomente a linha abaixo para animar apenas uma vez
                // observer.unobserve(entry.target);
            } else {
                // Remove a classe se sair da tela, assim ela entra novamente animada se voltar
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.15, // Aciona quando 15% da imagem estiver visível
        rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de chegar ao fim
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});
