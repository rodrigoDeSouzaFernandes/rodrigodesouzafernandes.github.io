    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      let valid = true;

      nameError.textContent = '';
      subjectError.textContent = '';
      messageError.textContent = '';
      successMessage.textContent = '';

      if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nameInput.value.trim())) {
        nameError.textContent = 'Use apenas letras e espaços.';
        valid = false;
      }

      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Preencha o assunto.';
        valid = false;
      }

      if (!messageInput.value.trim()) {
        messageError.textContent = 'Preencha a mensagem.';
        valid = false;
      }

      if (valid) {
        const overlay = document.getElementById('checkOverlay');
        overlay.classList.add('active');

        setTimeout(() => {
          overlay.classList.remove('active');

          const name = nameInput.value.trim();
          const subject = subjectInput.value.trim();
          const message = messageInput.value.trim();

          const fullMessage = `Olá, meu nome é ${name}.%0A%0A*Assunto:* ${subject}%0A%0A${message}`;
          const phone = "5531987696267";
          const link = `https://wa.me/${phone}?text=${fullMessage}`;

          window.open(link, "_blank", "noopener,noreferrer");
        }, 1000);

        successMessage.textContent = 'Tudo certo! O WhatsApp foi aberto para você enviar a mensagem.';
      }
    });
