// Chat view: customer & team messenger.

import { chatThreads } from '../data/chat.js';
import { state } from '../core/state.js';

export function renderChatView() {
  return `
  <section class="menu-view" id="view-chat">
    <div class="dash-card overflow-hidden grid grid-cols-1 md:grid-cols-12 h-[540px] stagger-card">
      <!-- Left Thread List -->
      <div class="md:col-span-4 border-r border-gray-100 flex flex-col h-full bg-[#fcfdfc]">
        <div class="p-3.5 border-b border-gray-100 font-bold text-[13px] text-[#2b332b] flex items-center justify-between">
          <span>Messages (${chatThreads.length})</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full bg-[#effbe3] text-[#6cc61c]">Live</span>
        </div>
        <div id="chatContactsList" class="flex-1 overflow-y-auto divide-y divide-gray-50">
          <!-- Populated via JS -->
        </div>
      </div>

      <!-- Right Active Conversation -->
      <div class="md:col-span-8 flex flex-col h-full bg-white">
        <div class="p-3.5 border-b border-gray-100 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-full bg-[#effbe3] text-[#6cc61c] font-bold flex items-center justify-center text-xs" id="activeChatAvatar">SJ</div>
            <div>
              <p id="activeChatName" class="text-[12.5px] font-bold text-[#2b332b]">Sarah Jenkins (VIP Buyer)</p>
              <p class="text-[10px] text-[#6cc61c] font-semibold flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-[#6cc61c]"></span> Online • Order #2020912
              </p>
            </div>
          </div>
          <button data-action="resolve-ticket" class="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-[#effbe3] hover:text-[#6cc61c] text-[10.5px] font-bold transition">
            Resolve Ticket
          </button>
        </div>

        <div id="chatMessagesBox" class="flex-1 p-4 overflow-y-auto custom-scroll space-y-3 bg-[#f9faf9]">
          <!-- Populated via JS -->
        </div>

        <form data-form="chat" class="p-3 border-t border-gray-100 flex items-center gap-2 bg-white">
          <input
            id="chatInputField"
            type="text"
            placeholder="Type your reply to customer..."
            class="flex-1 h-9 px-3.5 rounded-xl bg-[#f7f8fa] text-[12px] focus:outline-none focus:ring-2 focus:ring-brand-lime/40"
          />
          <button type="submit" class="h-9 px-4 rounded-xl bg-[#6cc61c] hover:bg-[#5ab012] text-white text-[12px] font-bold flex items-center gap-1.5 transition">
            <span>Send</span>
            <i class="fa-solid fa-paper-plane text-[10px]"></i>
          </button>
        </form>
      </div>
    </div>
  </section>`;
}

export function renderChat() {
  const contactsEl = document.getElementById('chatContactsList');
  const messagesEl = document.getElementById('chatMessagesBox');
  const nameEl = document.getElementById('activeChatName');
  const avatarEl = document.getElementById('activeChatAvatar');

  if (!contactsEl || !messagesEl) return;

  contactsEl.innerHTML = chatThreads.map((t, idx) => `
    <button data-action="select-thread" data-index="${idx}" class="w-full p-3.5 text-left flex items-start gap-2.5 hover:bg-[#effbe3]/40 transition ${
      idx === state.activeChatIndex ? 'bg-[#effbe3]/70 border-r-3 border-[#6cc61c]' : ''
    }">
      <div class="w-8 h-8 rounded-full bg-[#313931] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
        ${t.initials}
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-[12px] font-bold text-[#2b332b] truncate">${t.name}</p>
        <p class="text-[10.5px] text-gray-400 truncate mt-0.5">${t.preview}</p>
      </div>
    </button>
  `).join('');

  const active = chatThreads[state.activeChatIndex];
  nameEl.textContent = active.name;
  avatarEl.textContent = active.initials;

  messagesEl.innerHTML = active.messages.map(m => `
    <div class="flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}">
      <div class="max-w-[78%] px-3.5 py-2.5 rounded-2xl text-[12px] ${
        m.sender === 'me'
          ? 'bg-[#6cc61c] text-white rounded-br-xs shadow-xs'
          : 'bg-white text-[#2b332b] rounded-bl-xs shadow-xs border border-gray-100'
      }">
        <p>${m.text}</p>
        <span class="block text-[9.5px] mt-1 opacity-75 text-right">${m.time}</span>
      </div>
    </div>
  `).join('');

  messagesEl.scrollTop = messagesEl.scrollHeight;
}

export function selectThread(idx) {
  state.activeChatIndex = idx;
  renderChat();
}

export function sendChatMessage(e) {
  e.preventDefault();
  const input = document.getElementById('chatInputField');
  const text = input.value.trim();
  if (!text) return;

  const active = chatThreads[state.activeChatIndex];
  active.messages.push({ sender: 'me', text, time: 'Just now' });
  active.preview = text;
  input.value = '';
  renderChat();

  // Simulated instant customer reply.
  setTimeout(() => {
    active.messages.push({
      sender: 'them',
      text: 'Thank you so much for the fast update! Creativilo support is the best 🙌',
      time: 'Just now'
    });
    renderChat();
  }, 950);
}
