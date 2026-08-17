const formOrcamento = document.querySelector("#orcamento-form");

if (formOrcamento) {
    const erro = document.querySelector("#form-erro");

    const limparErros = () => {
        if (erro) {
            erro.hidden = true;
            erro.textContent = "";
        }
        formOrcamento
            .querySelectorAll("[aria-invalid]")
            .forEach((el) => el.removeAttribute("aria-invalid"));
    };

    formOrcamento.addEventListener("input", limparErros);

    formOrcamento.addEventListener("submit", (event) => {
        event.preventDefault();

        const dados = new FormData(formOrcamento);

        const nome = String(dados.get("nome") || "").trim();
        const telefone = String(dados.get("telefone") || "").trim();
        const email = String(dados.get("email") || "").trim();
        const mensagem = String(dados.get("msg") || "").trim();

        limparErros();

        const faltando = [];
        if (!nome) faltando.push("Nome");
        if (!telefone) faltando.push("WhatsApp");

        if (faltando.length) {
            const primeiro = document.querySelector(!nome ? "#nome" : "#telefone");

            faltando.forEach((campo) => {
                const alvo = document.querySelector(campo === "Nome" ? "#nome" : "#telefone");
                if (alvo) alvo.setAttribute("aria-invalid", "true");
            });

            if (erro) {
                erro.textContent = `Preencha ${faltando.join(" e ")} para continuar.`;
                erro.hidden = false;
            }

            if (primeiro) primeiro.focus();
            return;
        }

        const texto = [
            "Olá! Vi o site da Local em Alta e quero saber mais sobre um projeto de site para a minha empresa.",
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
        navToggle.setAttribute("aria-label", "Abrir menu");
    };

    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
            closeMenu();
            navToggle.focus();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) closeMenu();
    });
}
