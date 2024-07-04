document.querySelectorAll('.show-password').forEach(btn => {
    btn.addEventListener('click', () => {
      const passwordField = document.getElementById(btn.dataset.target);
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i>';
      } else {
        passwordField.type = 'password';
        btn.innerHTML = '<i class="fas fa-eye"></i>';
      }
    });
  });