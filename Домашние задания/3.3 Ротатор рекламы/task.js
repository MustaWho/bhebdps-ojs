let rotators = Array.from(document.querySelectorAll('.rotator'));

function getNextIndex(index, length) {
  return index === length - 1 ? 0 : index + 1;
}

function activateCase(rotatorCase) {
  rotatorCase.classList.add('rotator__case_active');
  rotatorCase.style.color = rotatorCase.dataset.color;
}

rotators.forEach(function(rotator) {
  let cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let activeIndex = cases.findIndex(function(rotatorCase) {
    return rotatorCase.classList.contains('rotator__case_active');
  });

  if (activeIndex === -1) {
    activeIndex = 0;
    activateCase(cases[activeIndex]);
  } else {
    activateCase(cases[activeIndex]);
  }

  function rotate() {
    let activeCase = cases[activeIndex];
    let speed = Number(activeCase.dataset.speed) || 1000;

    setTimeout(function() {
      activeCase.classList.remove('rotator__case_active');
      activeIndex = getNextIndex(activeIndex, cases.length);
      activateCase(cases[activeIndex]);
      rotate();
    }, speed);
  }

  rotate();
});
