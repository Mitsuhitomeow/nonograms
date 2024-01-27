export default function createButtons(Block) {
  const [buttonsBlock, resetBtn, saveBtn, continueBtn, resultBtn] = [
    document.createElement('div'),
    document.createElement('button'),
    document.createElement('button'),
    document.createElement('button'),
    document.createElement('button'),
  ];

  const arrayBtn = [buttonsBlock, resetBtn, saveBtn, continueBtn, resultBtn];
  arrayBtn.forEach((btn) => btn.classList.add('btn'));

  buttonsBlock.className = 'main__Block-buttons';
  resetBtn.textContent = 'Reset';
  saveBtn.textContent = 'Save';
  continueBtn.textContent = 'Continue';
  resultBtn.textContent = 'Results';

  Block.appendChild(buttonsBlock);
  buttonsBlock.appendChild(resetBtn);
  buttonsBlock.appendChild(saveBtn);
  buttonsBlock.appendChild(continueBtn);
  buttonsBlock.appendChild(resultBtn);
}
