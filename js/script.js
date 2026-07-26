const formOrcamento = document.querySelector("#orcamento-form");

if (formOrcamento) {
    formOrcamento.addEventListener("submit", (event) => {
        event.preventDefault();

        const dados = new FormData(formOrcamento);

        const nome = String(dados.get("nome") || "").trim();
        const telefone = String(dados.get("telefone") || "").trim();
        const email = String(dados.get("email") || "").trim();
        const mensagem = String(dados.get("msg") || "").trim();

        const texto = [
            "Olá! Vi o site da Local em Alta e quero saber mais sobre criação de site e Google Business.",
            `Meu nome é ${nome}.`,
            `Meu WhatsApp é ${telefone}.`,
            email ? `Meu e-mail é ${email}.` : "",
            "Gostaria de solicitar um orçamento.",
            mensagem ? `Detalhes do serviço: ${mensagem}` : ""
        ]
            .filter(Boolean)
            .join("\n");

        const url = `https://wa.me/5511973937939?text=${encodeURIComponent(texto)}`;

        window.open(url, "_blank", "noopener,noreferrer");
    });
}

const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (navToggle && navMenu) {
    const closeMenu = () => {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) closeMenu();
    });
}