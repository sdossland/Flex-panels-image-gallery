/**
 * Created by sophia on 3/1/17.
 */
document.addEventListener("DOMContentLoaded", function () {

  const panels = document.querySelectorAll('.panel');

  function toggleOpen() {
    this.classList.toggle('open');
    this.classList.toggle('openActive');
    this.classList.toggle('openText');
  }

  panels.forEach(panel => panel.addEventListener('click', toggleOpen));

});