// Floating toast notification.

let toastTimer = null;

export function showToast(message) {
  const box = document.getElementById('toastBox');
  const text = document.getElementById('toastText');
  if (!box || !text) return;

  text.textContent = message;
  box.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    box.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
  }, 2800);
}
