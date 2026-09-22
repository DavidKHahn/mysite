export default function decorate(block) {
  // Authors may omit or add cells; only use rows that actually have content.
  [...block.children].forEach((row) => {
    const [textCell, labelCell] = row.children;
    if (!textCell) return;

    row.classList.add('highlight-row');
    textCell.classList.add('highlight-text');

    if (labelCell && labelCell.textContent.trim()) {
      labelCell.classList.add('highlight-label');
    } else if (labelCell) {
      labelCell.remove();
    }
  });
}
