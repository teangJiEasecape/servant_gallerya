document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.submit-btn');
  const input = document.querySelector('.ipt');

  let isComposing = false;

  input.addEventListener('compositionstart', () => {
    isComposing = true;
  });

  input.addEventListener('compositionend', () => {
    isComposing = false;
  });

  btn.addEventListener('click', () => {
    if (isComposing) return; // 한글 조합 중이면 무시

    const answer = "777820";

    const userValue = input.value
      .trim()
      .replace(/\s/g, '')
      .toUpperCase();

    if (userValue === answer) {
      $('main .result-box').addClass('show');
      $('main .failure-box').removeClass('show');
    } else {
      $('main .result-box').removeClass('show');
      $('main .failure-box').addClass('show');
    }
  });
});
