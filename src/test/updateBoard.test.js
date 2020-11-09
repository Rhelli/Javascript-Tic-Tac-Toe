import updateBoardArray from '../js/modules/updateBoard';

it('Should return an array composed of player symbols in position', () => {
  document.body.innerHTML =
    ` <div class="cells" data-datasymbol="A" id="c0">X</div> <div class="cells" data-datasymbol="A" id="c1">X</div> <div class="cells" data-datasymbol="A" id="c2">X</div> 
    <div class="cells" data-datasymbol="" id="c1"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c1"> </div> 
    <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> `;

  const expectedAnswer = ['A', 'A', 'A', '', '', '', '', '', ''];
  const cells = document.querySelectorAll('.cells');
  expect(updateBoardArray(cells)).toEqual(expectedAnswer);
});

it('Should return an array composed of player symbols in different positions', () => {
  document.body.innerHTML =
    ` <div class="cells" data-datasymbol="A" id="c0">X</div> <div class="cells" data-datasymbol="" id="c1"></div> <div class="cells" data-datasymbol="" id="c2"></div> 
  <div class="cells" data-datasymbol="" id="c1"> </div> <div class="cells" data-datasymbol="A" id="c2">X</div> <div class="cells" data-datasymbol="" id="c1"> </div> 
  <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="" id="c2"> </div> <div class="cells" data-datasymbol="A" id="c2">X</div> `;

  const expectedAnswer = ['A', '', '', '', 'A', '', '', '', 'A'];
  const cells = document.querySelectorAll('.cells');
  expect(updateBoardArray(cells)).toEqual(expectedAnswer);
})
