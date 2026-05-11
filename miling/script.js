const qs = (id) => document.getElementById(id);
const account = {
  verified: localStorage.getItem('mileraVerified') === 'true',
  method: localStorage.getItem('mileraVerifyMethod') || '',
  loggedIn: localStorage.getItem('mileraLoggedIn') === 'true',
  email: localStorage.getItem('mileraEmail') || ''
};

const img = {
  room:[
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1000&q=80'
  ],
  room2:[
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1000&q=80'
  ],
  sofa:[
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aaa4cab7?auto=format&fit=crop&w=1000&q=80'
  ],
  desk:[
    'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80'
  ],
  job:[
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80'
  ],
  guide:[
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80'
  ],
  car:[
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1000&q=80'
  ]
};

const baseListings = [
  {id:1,cat:'living',title:'Private room near UTA',price:'$650/mo',loc:'Arlington',posted:'2h ago',trust:true,publisher:'ID verified',poster:'Arun Shrestha',state:'TX',imgs:img.room,desc:'Quiet private room near campus. Internal messaging only.'},
  {id:2,cat:'living',title:'Irving room available',price:'$720/mo',loc:'Irving',posted:'4h ago',trust:true,publisher:'Student verified',poster:'Nisha Rai',state:'TX',imgs:img.room2,desc:'Clean room with shared kitchen and parking.'},
  {id:3,cat:'living',title:'Plano shared apartment',price:'$580/mo',loc:'Plano',posted:'Today',trust:false,publisher:'Publisher',poster:'Roshan KC',state:'TX',imgs:img.room,desc:'Shared apartment listing. Ask questions inside MILERA.'},
  {id:4,cat:'market',title:'Neutral fabric sofa',price:'$180',loc:'Dallas',posted:'1d ago',trust:true,publisher:'ID verified',poster:'Maya Gurung',state:'TX',imgs:img.sofa,desc:'Used sofa in good condition. Pickup only.'},
  {id:5,cat:'market',title:'Study desk setup',price:'$95',loc:'Richardson',posted:'2d ago',trust:true,publisher:'ID verified',poster:'Sagar Thapa',state:'TX',imgs:img.desk,desc:'Desk, chair, and lamp bundle.'},
  {id:6,cat:'jobs',title:'Weekend restaurant help',price:'Part-time',loc:'Irving',posted:'3h ago',trust:true,publisher:'ID verified',poster:'Bikash Adhikari',state:'TX',imgs:img.job,desc:'Weekend shift. Message publisher for details.'},
  {id:7,cat:'jobs',title:'Moving help needed',price:'$18/hr',loc:'Arlington',posted:'5h ago',trust:false,publisher:'Publisher',poster:'Puja Lama',state:'TX',imgs:img.job,desc:'Need help moving boxes for 3 hours.'},
  {id:8,cat:'guidance',title:'NCLEX guidance call',price:'Free',loc:'All DFW',posted:'Yesterday',trust:true,publisher:'Student verified',poster:'Pratik Bhandari',state:'TX',imgs:img.guide,desc:'Guidance from someone who completed the process.'},
  {id:9,cat:'guidance',title:'SSN appointment help',price:'Free',loc:'Dallas',posted:'1d ago',trust:true,publisher:'ID verified',poster:'Sunita KC',state:'TX',imgs:img.guide,desc:'Basic process guidance for new arrivals.'},
  {id:10,cat:'market',title:'Queen mattress',price:'$120',loc:'Irving',posted:'2d ago',trust:true,publisher:'ID verified',poster:'Amit Sharma',state:'TX',imgs:img.room2,desc:'Clean queen mattress. Available this week.'},
  {id:11,cat:'living',title:'Roommate wanted',price:'$610/mo',loc:'Dallas',posted:'Today',trust:true,publisher:'Student verified',poster:'Kiran Basnet',state:'TX',imgs:img.room,desc:'Looking for one roommate for a two-bed apartment.'},
  {id:12,cat:'market',title:'Used sedan listing',price:'$4,800',loc:'Plano',posted:'3d ago',trust:false,publisher:'Publisher',poster:'Sima Gurung',state:'TX',imgs:img.car,desc:'Older sedan. Meet only after MILERA message.'},
  {id:13,cat:'community',title:'Nepali potluck Sunday',price:'Free',loc:'Irving',posted:'This week',trust:true,publisher:'ID verified',poster:'Rabin Maharjan',state:'TX',imgs:img.guide,desc:'Small community potluck. Bring one dish if you can.'},
  {id:14,cat:'community',title:'Morning running group',price:'Free',loc:'Plano',posted:'Tomorrow',trust:false,publisher:'Publisher',poster:'Puja Lama',state:'TX',imgs:img.job,desc:'Easy 3-mile run. Beginners welcome.'},
  {id:15,cat:'rides',title:'DFW airport ride',price:'$35',loc:'Irving',posted:'6h ago',trust:true,publisher:'ID verified',poster:'Anil Tamang',state:'TX',imgs:img.car,desc:'Ride available from DFW airport to Irving / Arlington.'},
  {id:16,cat:'rides',title:'Dallas grocery ride',price:'Split gas',loc:'Dallas',posted:'Weekend',trust:false,publisher:'Publisher',poster:'Sima Gurung',state:'TX',imgs:img.car,desc:'Going to Nepali grocery this weekend. Two seats open.'}
];

let listings = JSON.parse(localStorage.getItem('mileraListings') || 'null') || baseListings;
let slideState = {};
let savedView = 'grid';
const filterState = { category: 'all', state: 'all', city: 'all' };
const filterLabels = {
  category: { all:'All listings', living:'Living', market:'Market', jobs:'Jobs', guidance:'Guidance', community:'Community', rides:'Rides' },
};

const locationOptions = {
  TX: ['Dallas–Fort Worth', 'Arlington', 'Irving', 'Dallas', 'Plano', 'Richardson', 'Austin', 'Houston'],
  CA: ['Los Angeles', 'San Francisco', 'San Diego'],
  NY: ['Queens', 'Brooklyn', 'New York City'],
  NJ: ['Jersey City', 'Newark', 'Edison'],
  MD: ['Baltimore', 'Silver Spring', 'Rockville']
};

function getSaved(){ return JSON.parse(localStorage.getItem('mileraSaved') || '[]'); }
function setSaved(ids){ localStorage.setItem('mileraSaved', JSON.stringify([...new Set(ids.map(Number))])); }
function isSaved(id){ return getSaved().includes(Number(id)); }
function getConversations(){ return JSON.parse(localStorage.getItem('mileraConversations') || '[]'); }
function setConversations(items){ localStorage.setItem('mileraConversations', JSON.stringify(items)); }

function getReactions(){ return JSON.parse(localStorage.getItem('mileraReactions') || '{}'); }
function setReactions(data){ localStorage.setItem('mileraReactions', JSON.stringify(data)); }
function getReaction(id){
  const all = getReactions();
  return all[id] || { up: 0, down: 0, user: null };
}
function reactToListing(id, type){
  const all = getReactions();
  const current = all[id] || { up: 0, down: 0, user: null };
  if(current.user === type){
    current[type] = Math.max(0, current[type] - 1);
    current.user = null;
  } else {
    if(current.user){ current[current.user] = Math.max(0, current[current.user] - 1); }
    current[type] = (current[type] || 0) + 1;
    current.user = type;
  }
  all[id] = current;
  setReactions(all);
  openListing(id);
  renderListings();
}
function getComments(){ return JSON.parse(localStorage.getItem('mileraComments') || '{}'); }
function setComments(data){ localStorage.setItem('mileraComments', JSON.stringify(data)); }
function commentsFor(id){ return getComments()[id] || []; }
function addComment(id, text){
  const all = getComments();
  const list = all[id] || [];
  list.push({ name: account.loggedIn ? (account.email || 'You').split('@')[0] : 'Guest', text, time: Date.now() });
  all[id] = list;
  setComments(all);
  openListing(id);
  renderListings();
}
function formatCount(n){ return Number(n || 0); }

function postedTime(item){ return item.posted || item.time || 'Today'; }
function totalCommentCount(item){ return commentsFor(item.id).length || Number(item.commentCount || 0); }


function seedFakeConversations(){
  if(localStorage.getItem('mileraConversationsSeeded') === 'true') return;
  const now = Date.now();
  const sample = [
    {
      id: 9001, listingId: 1, title: 'Private room near UTA', price: '$650/mo', loc: 'Arlington', image: img.room[0], publisher: 'Arun Shrestha', updated: now - 2*60*1000,
      messages: [
        {from:'them', text:'Hey, is the room still available?', time:now-40*60*1000},
        {from:'me', text:'Yes, it’s still open.', time:now-38*60*1000},
        {from:'them', text:'How far is it from UTA?', time:now-33*60*1000},
        {from:'me', text:'Around 10 minutes by car.', time:now-30*60*1000},
        {from:'them', text:'Utilities included?', time:now-2*60*1000}
      ]
    },
    {
      id: 9002, listingId: 12, title: 'Used sedan listing', price: '$4,800', loc: 'Plano', image: img.car[0], publisher: 'Sima Gurung', updated: now - 14*60*1000,
      messages: [
        {from:'them', text:'Hi, is the car still available?', time:now-55*60*1000},
        {from:'me', text:'Yes, it is.', time:now-50*60*1000},
        {from:'them', text:'Can I come see it tomorrow?', time:now-14*60*1000}
      ]
    },
    {
      id: 9003, listingId: 11, title: 'Roommate wanted', price: '$610/mo', loc: 'Dallas', image: img.room[1], publisher: 'Roshan KC', updated: now - 60*60*1000,
      messages: [
        {from:'them', text:'Is this still available for August?', time:now-3*60*60*1000},
        {from:'me', text:'Yes, move-in is flexible.', time:now-2*60*60*1000},
        {from:'them', text:'Utilities included?', time:now-60*60*1000}
      ]
    },
    {
      id: 9004, listingId: 8, title: 'NCLEX guidance call', price: 'Free', loc: 'All DFW', image: img.guide[0], publisher: 'Pratik Bhandari', updated: now - 3*60*60*1000,
      messages: [
        {from:'them', text:'Do you still help with NCLEX questions?', time:now-5*60*60*1000},
        {from:'me', text:'Yes, I can explain the basic process.', time:now-4*60*60*1000},
        {from:'them', text:'What days are available?', time:now-3*60*60*1000}
      ]
    },
    {
      id: 9005, listingId: 4, title: 'Neutral fabric sofa', price: '$180', loc: 'Dallas', image: img.sofa[0], publisher: 'Nisha Rai', updated: now - 24*60*60*1000,
      messages: [
        {from:'them', text:'Is pickup available today?', time:now-26*60*60*1000},
        {from:'me', text:'Yes, after 5 PM works.', time:now-25*60*60*1000},
        {from:'them', text:'I can pick it up today.', time:now-24*60*60*1000}
      ]
    }
  ];
  localStorage.setItem('mileraConversations', JSON.stringify(sample));
  localStorage.setItem('mileraActiveConversation', '9001');
  localStorage.setItem('mileraConversationsSeeded', 'true');
}


function openModal(id){ qs(id)?.classList.add('open'); qs(id)?.setAttribute('aria-hidden','false'); }
function closeModal(id){ qs(id)?.classList.remove('open'); qs(id)?.setAttribute('aria-hidden','true'); }

document.querySelectorAll('[data-close]').forEach(btn => btn.addEventListener('click', () => closeModal(btn.dataset.close)));
document.addEventListener('keydown', e => { if(e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(m => closeModal(m.id)); });

document.querySelectorAll('.modal').forEach(m => m.addEventListener('click', e => { if(e.target === m) closeModal(m.id); }));

function updateAccountUI(){
  qs('profileIcon')?.classList.remove('verified');
}

function renderListings(){
  const grid = qs('listingGrid'); if(!grid) return;
  const search = (qs('searchInput')?.value || '').toLowerCase();
  const cat = filterState.category;
  const state = filterState.state;
  const city = filterState.city;
  const data = listings.filter(item => {
    const hay = `${item.title} ${item.loc} ${item.cat} ${item.price} ${item.poster || item.publisher || ''}`.toLowerCase();
    const itemState = item.state || 'TX';
    const itemCity = (item.loc || '').toLowerCase();
    const cityMatch = city === 'all' || itemCity.includes(city.toLowerCase()) || (city === 'Dallas–Fort Worth' && ['arlington','irving','dallas','plano','richardson','all dfw'].some(x => itemCity.includes(x)));
    return hay.includes(search) && (cat === 'all' || item.cat === cat) && (state === 'all' || itemState === state) && cityMatch;
  }).sort((a,b) => Number(b.trust) - Number(a.trust));
  grid.innerHTML = data.map(card).join('');
  attachCardEvents(data);
}

function card(item){
  const idx = slideState[item.id] || 0;
  const image = item.imgs[idx % item.imgs.length];
  const saved = isSaved(item.id);
  const reaction = getReaction(item.id);
  const commentCount = totalCommentCount(item);
  return `<article class="card" id="card-${item.id}">
    <div class="thumb">
      <img src="${image}" alt="${item.title}">
      ${item.trust ? `<span class="thumb-verified">✓ Verified</span>` : ''}
      <button class="thumb-save ${saved ? 'saved' : ''}" id="save-${item.id}" aria-label="Save listing">${saved ? '♥' : '♡'}</button>
      ${item.imgs.length > 1 ? `<button class="slide-btn prev" id="prev-${item.id}">‹</button><button class="slide-btn next" id="next-${item.id}">›</button><div class="dots">${item.imgs.map((_,i)=>`<i class="${i===idx?'active':''}"></i>`).join('')}</div>` : ''}
      <span class="card-social thumb-social">
        <button class="mini-vote" id="cardUp-${item.id}" type="button">↑ ${formatCount(reaction.up)}</button>
        <span>·</span>
        <button class="mini-vote" id="cardDown-${item.id}" type="button">↓ ${formatCount(reaction.down)}</button>
        <span>·</span>
        <button class="mini-comment" id="cardComment-${item.id}" type="button" aria-label="Comments">💬 ${commentCount}</button>
      </span>
    </div>
    <div class="card-body">
      <div class="meta"><h3 class="title">${item.title}</h3><div class="price">${item.price}</div></div>
      <div class="loc-time"><p class="sub">${item.loc}</p><span class="posted-time">${postedTime(item)}</span></div>
    </div>
  </article>`;
}

function attachCardEvents(data){
  data.forEach(item => {
    qs(`card-${item.id}`)?.addEventListener('click', e => {
      if(e.target.closest('.slide-btn') || e.target.closest('.thumb-save') || e.target.closest('.mini-vote') || e.target.closest('.mini-comment')) return;
      openListing(item.id);
    });
    qs(`prev-${item.id}`)?.addEventListener('click', e => { e.stopPropagation(); slide(item.id,-1); });
    qs(`next-${item.id}`)?.addEventListener('click', e => { e.stopPropagation(); slide(item.id,1); });
    qs(`save-${item.id}`)?.addEventListener('click', e => { e.stopPropagation(); toggleSave(item.id); });
    qs(`cardUp-${item.id}`)?.addEventListener('click', e => { e.stopPropagation(); reactToListing(item.id, 'up'); });
    qs(`cardDown-${item.id}`)?.addEventListener('click', e => { e.stopPropagation(); reactToListing(item.id, 'down'); });
    qs(`cardComment-${item.id}`)?.addEventListener('click', e => { e.stopPropagation(); openListing(item.id); });
  });
}

function slide(id,dir){
  const item = listings.find(x => Number(x.id) === Number(id)); if(!item) return;
  slideState[id] = ((slideState[id] || 0) + dir + item.imgs.length) % item.imgs.length;
  renderListings();
  if(qs('savedModal')?.classList.contains('open')) renderSavedDialog();
}


function detailSlide(id, dir){
  const item = listings.find(x => Number(x.id) === Number(id));
  if(!item) return;
  const key = `detail-${id}`;
  slideState[key] = ((slideState[key] || 0) + dir + item.imgs.length) % item.imgs.length;
  openListing(id);
}

function toggleSave(id){
  id = Number(id);
  const saved = getSaved();
  setSaved(saved.includes(id) ? saved.filter(x => x !== id) : [...saved, id]);
  renderListings();
  if(qs('savedModal')?.classList.contains('open')) renderSavedDialog();
}

function openListing(id){
  const item = listings.find(x => Number(x.id) === Number(id)); if(!item) return;
  const idx = slideState[`detail-${item.id}`] || 0;
  const activeImage = item.imgs[idx % item.imgs.length];
  qs('listingDetail').innerHTML = `<div class="detail">
    <div class="detail-gallery single">
      <img src="${activeImage}" alt="${item.title}">
      ${item.imgs.length > 1 ? `<button class="detail-slide-btn prev" onclick="detailSlide(${item.id}, -1)">‹</button><button class="detail-slide-btn next" onclick="detailSlide(${item.id}, 1)">›</button><div class="dots">${item.imgs.map((_,i)=>`<i class="${i===idx?'active':''}"></i>`).join('')}</div>` : ''}
    </div>
    <div class="detail-main">
      <span class="badge ${item.trust?'verified':''}">${item.trust?'✓ Verified Listing':'Listed'}</span>
      <h1>${item.title}</h1>
      <div class="price">${item.price}</div>
      <p>${item.loc} · ${postedTime(item)}</p>
      <p>${item.desc}</p>
      <div class="publisher-row"><span class="mini-avatar ${item.trust?'verified':''}">A</span><span>${item.poster || item.publisher || 'MILERA member'}</span>${item.trust ? `<span class="trust-pill verified">${item.publisher || 'Verified'}</span>` : `<span class="trust-pill google">Google login</span>`}</div>
      <div class="actions">
        <button class="primary" onclick="messagePublisher(${item.id})">Message Publisher</button>
        <button class="icon-save ${isSaved(item.id)?'saved':''}" aria-label="Save listing" onclick="toggleSave(${item.id}); openListing(${item.id})">${isSaved(item.id)?'♥':'♡'}</button>
        <button onclick="alert('Report submitted for review.')">Report</button>
      </div>
      ${listingSocial(item)}
    </div>
  </div>`;
  attachListingSocial(item.id);
  openModal('listingModal');
}


function listingSocial(item){
  const r = getReaction(item.id);
  const comments = commentsFor(item.id);
  return `<section class="listing-social">
    <div class="vote-row">
      <button class="vote-btn ${r.user === 'up' ? 'active' : ''}" id="upvoteBtn-${item.id}" type="button">↑ ${formatCount(r.up)}</button>
      <button class="vote-btn ${r.user === 'down' ? 'active' : ''}" id="downvoteBtn-${item.id}" type="button">↓ ${formatCount(r.down)}</button>
      <span>${comments.length} comment${comments.length === 1 ? '' : 's'}</span>
    </div>
    <div class="comment-list">
      ${comments.length ? comments.map(c => `<div class="comment"><strong>${c.name}</strong><p>${c.text}</p></div>`).join('') : `<p class="empty-comment">No comments yet.</p>`}
    </div>
    <form class="comment-form" id="commentForm-${item.id}">
      <input placeholder="Add a comment" autocomplete="off" />
      <button type="submit">Post</button>
    </form>
  </section>`;
}
function attachListingSocial(id){
  qs(`upvoteBtn-${id}`)?.addEventListener('click', () => reactToListing(id, 'up'));
  qs(`downvoteBtn-${id}`)?.addEventListener('click', () => reactToListing(id, 'down'));
  qs(`commentForm-${id}`)?.addEventListener('submit', e => {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input');
    const text = input.value.trim();
    if(!text) return;
    addComment(id, text);
  });
}

function renderSavedDialog(){
  const box = qs('savedContent'); if(!box) return;
  const savedIds = getSaved();
  const data = listings.filter(x => savedIds.includes(Number(x.id)));
  box.className = `saved-content ${savedView}-view`;
  qs('savedGridBtn')?.classList.toggle('active', savedView === 'grid');
  qs('savedListBtn')?.classList.toggle('active', savedView === 'list');
  if(!data.length){ box.innerHTML = `<div class="empty"><div><h3>No saved listings yet</h3><p>Tap Save on any listing to keep it here.</p></div></div>`; return; }
  if(savedView === 'list'){
    box.innerHTML = data.map(item => `<article class="saved-row" data-id="${item.id}"><img src="${item.imgs[0]}" alt="${item.title}"><div><strong>${item.title}</strong><span>${item.price} · ${item.loc}</span></div><button class="save-mini saved" data-remove="${item.id}">Remove</button></article>`).join('');
    document.querySelectorAll('.saved-row').forEach(row => row.addEventListener('click', e => { if(e.target.dataset.remove) return; openListing(row.dataset.id); }));
    document.querySelectorAll('[data-remove]').forEach(btn => btn.addEventListener('click', e => { e.stopPropagation(); toggleSave(btn.dataset.remove); }));
  } else {
    box.innerHTML = data.map(card).join('');
    attachCardEvents(data);
  }
}

function openSaved(){ renderSavedDialog(); openModal('savedModal'); }

function messagePublisher(id){
  if(!account.loggedIn){ openModal('loginModal'); return; }
  const item = listings.find(x => Number(x.id) === Number(id)); if(!item) return;
  let conversations = getConversations();
  let convo = conversations.find(x => Number(x.listingId) === Number(id));
  if(!convo){
    convo = {
      id: Date.now(), listingId:Number(id), title:item.title, price:item.price, loc:item.loc, image:item.imgs[0], publisher:item.publisher, updated:Date.now(),
      messages:[
        {from:'system',text:'Secure MILERA conversation started.',time:Date.now()},
        {from:'them',text:'Hi, what would you like to know?',time:Date.now()+100}
      ]
    };
    conversations.unshift(convo);
  } else { convo.updated = Date.now(); }
  setConversations(conversations.sort((a,b)=>b.updated-a.updated));
  localStorage.setItem('mileraActiveConversation', String(convo.id));
  renderMessagesDialog();
  closeModal('listingModal');
  openModal('messagesModal');
}

function renderMessagesDialog(){
  const list = qs('conversationList'); const panel = qs('chatPanel'); if(!list || !panel) return;
  const conversations = getConversations().sort((a,b)=>b.updated-a.updated);
  const activeId = Number(localStorage.getItem('mileraActiveConversation') || conversations[0]?.id || 0);
  if(!conversations.length){
    list.innerHTML = `<div class="empty"><p>No conversations yet.</p></div>`;
    panel.innerHTML = `<div class="empty"><div><h3>No messages yet</h3><p>Open a listing and message the publisher.</p></div></div>`;
    return;
  }
  list.innerHTML = conversations.map(c => {
    const last = c.messages[c.messages.length - 1];
    return `<button class="conversation ${c.id===activeId?'active':''}" data-id="${c.id}"><img src="${c.image}" alt="${c.title}"><span><strong>${c.title}</strong><small>${last?.text || 'Conversation'}</small></span></button>`;
  }).join('');
  document.querySelectorAll('.conversation').forEach(btn => btn.addEventListener('click', () => { localStorage.setItem('mileraActiveConversation', btn.dataset.id); renderMessagesDialog(); }));
  const active = conversations.find(c => c.id === activeId) || conversations[0];
  panel.innerHTML = `<div class="chat-top"><img src="${active.image}" alt="${active.title}"><div><h3>${active.title}</h3><p>${active.price} · ${active.loc}</p></div><span class="login-state">MILERA chat</span></div><div class="chat-messages" id="chatMessages">${active.messages.map(bubble).join('')}</div><form class="chat-compose" id="chatForm"><input id="chatInput" placeholder="Message publisher" autocomplete="off"><button>Send</button></form>`;
  qs('chatMessages').scrollTop = qs('chatMessages').scrollHeight;
  qs('chatForm').addEventListener('submit', e => {
    e.preventDefault();
    if(!account.loggedIn){ openModal('loginModal'); return; }
    const input = qs('chatInput'); const text = input.value.trim(); if(!text) return;
    active.messages.push({from:'me', text, time:Date.now()}); active.updated = Date.now();
    setConversations(conversations.map(c => c.id === active.id ? active : c));
    renderMessagesDialog();
  });
}
function bubble(m){ return m.from === 'system' ? `<div class="bubble system">${m.text}</div>` : `<div class="bubble ${m.from === 'me'?'me':'them'}">${m.text}</div>`; }

function requestPublish(){
  // Let users write the post first. Verification only appears when they try to publish.
  openModal('publishModal');
}

let pendingPost = null;

function filesToDataUrls(files){
  const selected = Array.from(files || []).slice(0, 6);
  return Promise.all(selected.map(file => new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  }))).then(urls => urls.filter(Boolean));
}

async function publishFromForm(form){
  const fd = new FormData(form);
  const uploaded = await filesToDataUrls(form.elements.images?.files);
  listings.unshift({
    id:Date.now(),
    cat:fd.get('category'),
    title:fd.get('title'),
    price:fd.get('price'),
    loc:fd.get('location'),
    state:'TX',
    poster: account.email ? account.email.split('@')[0] : 'MILERA member',
    trust:account.verified,
    publisher:account.verified ? (account.method === 'College Email' ? 'College email verified' : 'ID verified') : 'Google login',
    imgs: uploaded.length ? uploaded : img.room,
    desc:fd.get('description') || 'Published on MILERA.'
  });
  localStorage.setItem('mileraListings', JSON.stringify(listings));
  form.reset();
  closeModal('publishModal');
  renderListings();
}

qs('postForm')?.addEventListener('submit', async e => {
  e.preventDefault();
  await publishFromForm(e.target);
});

qs('verifyFromPost')?.addEventListener('click', () => {
  openModal('verifyModal');
});

qs('loginForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const email = qs('gmailInput').value.trim(); if(!email) return;
  localStorage.setItem('mileraLoggedIn','true'); localStorage.setItem('mileraEmail', email);
  account.loggedIn = true; account.email = email;
  closeModal('loginModal'); updateAccountUI();
});

document.querySelectorAll('.verify-options button').forEach(btn => btn.addEventListener('click', () => {
  localStorage.setItem('mileraVerified','true'); localStorage.setItem('mileraVerifyMethod', btn.dataset.method);
  account.verified = true; account.method = btn.dataset.method;
  closeModal('verifyModal'); updateAccountUI(); openModal('publishModal');
}));

qs('searchInput')?.addEventListener('input', renderListings);

function initEditorialDropdown(kind){
  const wrap = document.querySelector(`.select-lite[data-filter="${kind}"]`);
  if(!wrap) return;
  const trigger = wrap.querySelector('.select-trigger');
  const menu = wrap.querySelector('.select-menu');
  const label = trigger.querySelector('span');
  trigger.addEventListener('click', e => {
    e.stopPropagation();
    document.querySelectorAll('.select-lite.open').forEach(other => {
      if(other !== wrap){
        other.classList.remove('open');
        other.querySelector('.select-trigger')?.setAttribute('aria-expanded','false');
      }
    });
    const isOpen = wrap.classList.toggle('open');
    trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  menu.querySelectorAll('button').forEach(option => {
    option.addEventListener('click', e => {
      e.stopPropagation();
      filterState[kind] = option.dataset.value;
      label.textContent = filterLabels[kind][option.dataset.value] || option.textContent.trim();
      menu.querySelectorAll('button').forEach(btn => btn.classList.toggle('active', btn === option));
      wrap.classList.remove('open');
      trigger.setAttribute('aria-expanded','false');
      renderListings();
    });
  });
}
initEditorialDropdown('category');
document.addEventListener('click', e => {
  if(!e.target.closest('.select-lite')){
    document.querySelectorAll('.select-lite.open').forEach(wrap => {
      wrap.classList.remove('open');
      wrap.querySelector('.select-trigger')?.setAttribute('aria-expanded','false');
    });
  }
});



function updateCityOptions(){
  const state = qs('stateSelect')?.value || 'all';
  const citySelect = qs('citySelect');
  if(!citySelect) return;
  const cities = state === 'all' ? [] : (locationOptions[state] || []);
  citySelect.innerHTML = '<option value="all">Choose city / metro</option>' + cities.map(city => `<option value="${city}">${city}</option>`).join('');
}
function closeLocationPicker(){
  const wrap = document.querySelector('.location-picker');
  wrap?.classList.remove('open');
  qs('locationTrigger')?.setAttribute('aria-expanded','false');
}
qs('locationTrigger')?.addEventListener('click', e => {
  e.stopPropagation();
  document.querySelectorAll('.select-lite.open').forEach(other => {
    if(!other.classList.contains('location-picker')){
      other.classList.remove('open');
      other.querySelector('.select-trigger')?.setAttribute('aria-expanded','false');
    }
  });
  const wrap = document.querySelector('.location-picker');
  const isOpen = wrap.classList.toggle('open');
  qs('locationTrigger')?.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
qs('locationMenu')?.addEventListener('click', e => e.stopPropagation());
qs('stateSelect')?.addEventListener('change', updateCityOptions);
qs('locationAll')?.addEventListener('click', () => {
  filterState.state = 'all';
  filterState.city = 'all';
  if(qs('stateSelect')) qs('stateSelect').value = 'all';
  updateCityOptions();
  if(qs('locationLabel')) qs('locationLabel').textContent = 'All United States';
  qs('locationAll')?.classList.add('active');
  closeLocationPicker();
  renderListings();
});
qs('applyLocation')?.addEventListener('click', () => {
  const state = qs('stateSelect')?.value || 'all';
  const city = qs('citySelect')?.value || 'all';
  filterState.state = state;
  filterState.city = city;
  const label = state === 'all' ? 'All United States' : (city === 'all' ? state : `${city}, ${state}`);
  if(qs('locationLabel')) qs('locationLabel').textContent = label;
  qs('locationAll')?.classList.toggle('active', state === 'all');
  closeLocationPicker();
  renderListings();
});

qs('savedGridBtn')?.addEventListener('click', () => { savedView='grid'; renderSavedDialog(); });
qs('savedListBtn')?.addEventListener('click', () => { savedView='list'; renderSavedDialog(); });
qs('mobilePost')?.addEventListener('click', requestPublish);

const profileIcon = qs('profileIcon'); const profileMenu = qs('profileMenu');
profileIcon?.addEventListener('click', e => { e.stopPropagation(); profileMenu.classList.toggle('open'); profileMenu.setAttribute('aria-hidden', profileMenu.classList.contains('open') ? 'false' : 'true'); });
document.addEventListener('click', e => { if(profileMenu && !profileMenu.contains(e.target) && !profileIcon.contains(e.target)){ profileMenu.classList.remove('open'); profileMenu.setAttribute('aria-hidden','true'); } });
qs('menuSaved')?.addEventListener('click', () => { profileMenu.classList.remove('open'); openSaved(); });
qs('menuMessages')?.addEventListener('click', () => { profileMenu.classList.remove('open'); renderMessagesDialog(); openModal('messagesModal'); });
qs('menuPublish')?.addEventListener('click', () => { profileMenu.classList.remove('open'); requestPublish(); });

qs('menuEditProfile')?.addEventListener('click', () => {
  profileMenu.classList.remove('open');
  qs('profileName').value = localStorage.getItem('mileraProfileName') || '';
  qs('profileUsername').value = localStorage.getItem('mileraProfileUsername') || '';
  qs('profileBio').value = localStorage.getItem('mileraProfileBio') || '';
  openModal('editProfileModal');
});
qs('menuSettings')?.addEventListener('click', () => { profileMenu.classList.remove('open'); openModal('settingsModal'); });
qs('menuCommunity')?.addEventListener('click', () => { profileMenu.classList.remove('open'); openModal('communityModal'); });
qs('menuLogout')?.addEventListener('click', () => {
  profileMenu.classList.remove('open');
  localStorage.removeItem('mileraLoggedIn');
  localStorage.removeItem('mileraEmail');
  account.loggedIn = false;
  account.email = '';
  updateAccountUI();
});
qs('profileForm')?.addEventListener('submit', e => {
  e.preventDefault();
  localStorage.setItem('mileraProfileName', qs('profileName').value.trim());
  localStorage.setItem('mileraProfileUsername', qs('profileUsername').value.trim());
  localStorage.setItem('mileraProfileBio', qs('profileBio').value.trim());
  closeModal('editProfileModal');
});
qs('joinCommunityBtn')?.addEventListener('click', () => {
  localStorage.setItem('mileraCommunityJoined', 'true');
  qs('joinCommunityBtn').textContent = 'Joined';
  setTimeout(() => closeModal('communityModal'), 350);
});


function goHome(){
  document.querySelectorAll('.modal.open').forEach(m => closeModal(m.id));
  if(profileMenu){ profileMenu.classList.remove('open'); profileMenu.setAttribute('aria-hidden','true'); }
  filterState.category = 'all';
  filterState.state = 'all';
  filterState.city = 'all';
  const search = qs('searchInput');
  if(search) search.value = '';
  const catLabel = qs('categoryTrigger')?.querySelector('span');
  if(catLabel) catLabel.textContent = 'All listings';
  const locationLabel = qs('locationLabel');
  if(locationLabel) locationLabel.textContent = 'All United States';
  document.querySelectorAll('#categoryMenu button').forEach(btn => btn.classList.toggle('active', btn.dataset.value === 'all'));
  qs('locationAll')?.classList.add('active');
  renderListings();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

qs('homeLogo')?.addEventListener('click', e => {
  e.preventDefault();
  goHome();
});

seedFakeConversations();
updateAccountUI();
renderListings();
