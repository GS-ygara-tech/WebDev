const form = document.getElementById('contato-form');
const statusDiv = document.getElementById('form-status');

function setError(field, message) {
    document.getElementById('error-' + field).textContent = message;
    document.getElementById(field).classList.add('input-error');
    document.getElementById('label-' + field).classList.add('label-error');
}

function clearError(field) {
    document.getElementById('error-' + field).textContent = '';
    document.getElementById(field).classList.remove('input-error');
    document.getElementById('label-' + field).classList.remove('label-error');
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Nome: required, max 40 chars
    const nome = form.nome.value.trim();
    if (!nome) {
        setError('nome', 'O nome é obrigatório.');
        valid = false;
    } else if (nome.length > 40) {
        setError('nome', 'O nome deve ter no máximo 40 caracteres.');
        valid = false;
    } else {
        clearError('nome');
    }

    const email = form.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        setError('email', 'O e-mail é obrigatório.');
        valid = false;
    } else if (!emailRegex.test(email)) {
        setError('email', 'Digite um e-mail válido.');
        valid = false;
    } else {
        clearError('email');
    }

    const mensagem = form.mensagem.value.trim();
    if (!mensagem) {
        setError('mensagem', 'A mensagem é obrigatória.');
        valid = false;
    } else if (mensagem.length < 10) {
        setError('mensagem', 'A mensagem deve ter pelo menos 10 caracteres.');
        valid = false;
    } else if (mensagem.length > 300) {
        setError('mensagem', 'A mensagem deve ter no máximo 300 caracteres.');
        valid = false;
    } else {
        clearError('mensagem');
    }

    if (!valid) return;

    statusDiv.textContent = 'Enviando...';
    setTimeout(() => {
        statusDiv.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
        form.reset();
        clearError('nome');
        clearError('email');
        clearError('mensagem');
    }, 1500);
});

['nome', 'email', 'mensagem'].forEach(field => {
    document.getElementById(field).addEventListener('focus', () => {
        clearError(field);
    });
});