document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.submit-btn');
  const input = document.querySelector('.ipt');

  btn.addEventListener('click', () => {
    const answer = "A9F!Q2@KR#7MX$4ZP8";

    if (input.value === answer) {
      $('main .result-box').addClass('show')
      $('main .failure-box').removeClass('show')
    } else {
      $('main .result-box').removeClass('show')
      $('main .failure-box').addClass('show')
    }
  });
});
