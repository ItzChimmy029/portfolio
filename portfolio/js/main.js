const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const root=document.documentElement,RM=matchMedia('(prefers-reduced-motion:reduce)');
const MAIL='chimdalumbaegbu@gmail.com',GH='https://github.com/ItzChimmy029/MYCODINGJOURNEY';
const mail=s=>`mailto:${MAIL}?subject=${encodeURIComponent(s)}`;
const ic=n=>`<svg class="ic" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const logo=(n,a='')=>`<img class="${n==='github-original'?'inv':''}" src="assets/logos/${n}.svg" alt="${a}" width="34" height="34" loading="lazy">`;

/* ---- content (edit here) ---- */
const SV=[
['code','Frontend Development','Building the part of a site people see and touch, using HTML, CSS and JavaScript.','Interfaces that feel slow, clunky or inconsistent.'],
['win','Website Design and Development','Taking a website from idea to a live, polished set of pages.','Businesses and individuals with no clear online home.'],
['phone','Responsive Web Design','Layouts that adapt to phones, tablets and desktops.','Sites that break or become unreadable on small screens.'],
['layers','Web Application Development','Interactive tools that run in the browser, from trackers to dashboards.','Manual, repetitive tasks that could be a simple app.'],
['grid','UI Implementation','Turning a design into accurate, working code.','Designs that lose their polish when they are built.'],
['refresh','Website Maintenance and Improvements','Fixing bugs, refactoring code, and improving speed and navigation.','Existing sites that are slow, buggy or awkward to use.'],
['ml','AI and Machine Learning Projects','Python-based supervised learning: preparing data, then training and comparing models.','Turning raw data into a working, testable model.'],
['ann','Data Annotation and AI Model Training Support','Structured prompts, output evaluation and careful labelling that improve model quality.','AI systems that need consistent, high-quality feedback.']];
const SK=[
['HTML5','Markup language','html5-original','The standard language for structuring web content: headings, links, forms and media.','Giving every page a meaningful, accessible skeleton.','Semantic markup across all of my website projects.'],
['CSS3','Stylesheet language','css3-original','Controls how HTML looks: layout, colour, spacing and motion.','Making pages attractive and responsive on any screen.','Flexbox and Grid layouts in my portfolio, trucking site and component library.'],
['JavaScript','Programming language','javascript-original','The language of the browser. It makes pages interactive.','Menus, forms, live updates and application logic.','DOM work in the Chrome Lead Tracker and my mini apps.'],
['Python','Programming language','python-original','A readable general-purpose language popular for data science and AI.','Scripts, data preparation and machine learning.','My hypertension ML project and blockchain-inspired system.'],
['Bootstrap','CSS framework','bootstrap-original','A ready-made set of CSS components and a grid system.','Building consistent, responsive layouts quickly.','Part of my toolkit for fast responsive layouts.'],
['React','JavaScript library','react-original','A library for building interfaces from reusable components.','Larger, stateful user interfaces.','Currently learning it, along with Next.js and Redux.'],
['Git','Version control','git-original','A system that records every change to your code.','Tracking history, undoing mistakes and working in teams.','Versioning my projects and code reviews.'],
['GitHub','Code hosting platform','github-original','A platform for hosting Git repositories and collaborating.','Sharing code, reviewing changes and publishing sites.','Where my projects live.'],
['VS Code','Code editor','vscode-original','A free, extensible editor for writing and debugging code.','Day-to-day coding in any language.','My main editor.'],
['Machine Learning','AI and data','i-ml','Teaching computers to find patterns in data and make predictions.','Prediction, classification and diagnosis support.','Trained and compared several algorithms in my final-year project.'],
['AI Model Training','AI and data','i-train','Improving AI models with structured prompts and careful evaluation of their outputs.','Raising accuracy, coherence and safety.','My work as an AI Training Specialist at Outlier AI.'],
['Data Annotation','AI and data','i-ann','Labelling and reviewing data so models can learn from it.','Quality assurance for AI pipelines.','Detailed annotation and reasoning tasks in my current role.']];
const G={web:'linear-gradient(140deg,#0f3a32,#b8893a)',ai:'linear-gradient(140deg,#0f3a32,#2f8f74)',tools:'linear-gradient(140deg,#3a2a10,#d4ad5c)'};
const H='html5-original',C='css3-original',J='javascript-original',P='python-original';
/* add demo:'https://...' to a project when a live link exists */
const PR=[
{id:'vee',t:'Vee Skincare N\u2019 Spa',c:'web',s:'In development',l:[H,C,J],d:'A professional website for a skincare and beauty business, with business information, service listings and an appointment-booking interface.',p:'A beauty business needs a polished online presence that makes its services clear and booking simple.',k:['Premium visual direction','Responsive layouts','Interactive elements']},
{id:'truck',t:'Trucking Company Website',c:'web',s:'Updated version',l:[H,C,J],d:'A responsive multi-page website with a modern homepage, company overview and services section.',p:'A logistics company needs to explain its services and let customers track shipments and request quotes.',k:['Shipment tracking','Quote request and booking/contact forms','Working multi-page navigation','Interactive elements with animations']},
{id:'port',t:'Personal Portfolio Website',c:'web',s:'You are looking at it',l:[H,C,J],d:'A portfolio that presents my profile, skills, experience, CV and projects, with responsive layouts and interactive elements.',p:'Showing my work clearly and giving people an easy way to get in touch.',k:['Responsive layouts','Light and dark themes','Interactive 3D elements']},
{id:'lib',t:'Frontend Component Library',c:'web',l:[H,C,J],d:'Reusable UI components, including auth forms, dashboards and landing pages, built to demonstrate advanced CSS Grid and responsive patterns.',p:'Interfaces become inconsistent when every page is built from scratch.',k:['WCAG accessibility standards','Cross-browser testing','Reusable responsive patterns']},
{id:'lead',t:'Chrome Lead Tracker',c:'tools',l:[J],d:'A Chrome extension that saves and organises business leads.',p:'Tracking leads by hand is repetitive and easy to lose track of.',k:['Chrome API and localStorage','Event-driven interactions','Modular render() function']},
{id:'ml',t:'Hypertension Diagnosis ML Model',c:'ai',s:'Final-year project',l:[P],d:'A supervised machine learning approach to support the diagnosis of hypertension from patient health data, built for my B.Sc. at Coal City University.',p:'Turning patient health data into diagnosis-support predictions.',k:['Data preprocessing and dataset preparation','Trained and compared multiple algorithms','Predictive, diagnosis-support analysis']},
{id:'p2p',t:'Crypto Peer-to-Peer System',c:'ai',s:'In progress',l:[P],d:'A blockchain-inspired Python system with block structure, SHA-256 hashing and proof-of-work, simulating decentralised transactions.',p:'Understanding how decentralised systems keep records trustworthy.',k:['Focus on integrity, transparency and security']},
{id:'mini',t:'Mini Apps Collection',c:'tools',l:[J,H,C],d:'Passenger Counter, BlackJack, BMI Calculator, Math Calculator, Digital Clock, To-Do List, Pricing Table, Student Grade Calculator and a Sign-Up Form with validation.',p:'Practising real-time updates, conditional logic and client-side validation.',k:['DOM manipulation','Conditional logic','Real-time updates','Client-side form validation']}];
const PB=[
['Websites that do not work well on mobile','Layouts built only for desktop become cramped or unreadable on phones.','I build responsive layouts with Flexbox and Grid, then test across screen sizes.','truck'],
['Confusing user experiences','People leave when they cannot find what they came for.','Clear navigation, sensible hierarchy and accessible components help users finish their task.','lib'],
['Repetitive manual tasks','Copying, tracking and calculating by hand wastes time.','Small, focused tools that do one job well and remove the manual step.','lead'],
['Ideas that need to become working products','A good idea stays an idea until someone turns it into something usable.','I turn requirements into structure, flow, working code and tested prototypes.','mini'],
['Businesses that need an online presence','Customers cannot choose a business they cannot find or understand.','A professional website that explains services and makes it easy to get in touch.','vee'],
['Data and AI project needs','Models are only as good as the data and feedback behind them.','Data preparation, annotation and careful evaluation inside a machine learning workflow.','ml']];

/* ---- render ---- */
$('#sv').innerHTML=SV.map(([i,t,d,p],n)=>`<article class="card rv" data-tilt style="--d:${n%4*70}ms"><div class="tile">${ic(i)}</div><h3>${t}</h3><p>${d}</p><p><b>Helps with:</b> ${p}</p><a class="lnk" href="${mail('Project inquiry: '+t)}">Discuss a project</a></article>`).join('');
$('#sk').innerHTML=SK.map(([n,k,g,w,u,m],i)=>`<article class="card rv" data-tilt style="--d:${i%4*70}ms"><div class="tile">${g.startsWith('i-')?ic(g.slice(2)):logo(g,n+' logo')}</div><span class="tag">${k}</span><h3>${n}</h3><p>${w}</p><p><b>Used for:</b> ${u}</p><p><b>In my work:</b> ${m}</p></article>`).join('');
$('#track').innerHTML=PR.map(p=>`<article class="card pc" data-tilt data-c="${p.c}"><div class="cover" style="--g:${G[p.c]}"><div class="lg">${p.l.map(n=>`<span>${logo(n)}</span>`).join('')}</div>${p.s?`<em class="st">${p.s}</em>`:''}</div><div class="pb"><h3>${p.t}</h3><p>${p.d}</p><button class="btn" type="button" data-open="${p.id}">Project details</button></div></article>`).join('');
$('#pb').innerHTML=PB.map(([t,p,a,id],i)=>`<article class="card rv" data-tilt style="--d:${i%3*80}ms"><h3>${t}</h3><p><b>The problem:</b> ${p}</p><p><b>My approach:</b> ${a}</p><button class="lnk" type="button" data-open="${id}" style="background:none;border:0;border-bottom:2px solid;font:inherit;font-weight:700;cursor:pointer">See: ${PR.find(x=>x.id===id).t}</button></article>`).join('');
$('#yr').textContent=new Date().getFullYear();

/* ---- theme + menu ---- */
$('#theme').onclick=()=>{const t=root.dataset.theme==='dark'?'light':'dark';root.dataset.theme=t;try{localStorage.setItem('theme',t)}catch(e){}};
const nav=$('#nav'),mb=$('#menu'),setM=o=>{nav.classList.toggle('open',o);mb.setAttribute('aria-expanded',o);mb.setAttribute('aria-label',o?'Close menu':'Open menu')};
mb.onclick=()=>setM(!nav.classList.contains('open'));$$('#links a').forEach(a=>a.addEventListener('click',()=>setM(false)));
addEventListener('keydown',e=>e.key==='Escape'&&setM(false));

/* ---- modal ---- */
const dlg=$('#dlg');
const openP=id=>{const p=PR.find(x=>x.id===id);$('#dc').innerHTML=`<p class="eye">${p.s||'Project'}</p><h3 id="dt">${p.t}</h3><p>${p.d}</p><h4>Problem it addresses</h4><p>${p.p}</p><h4>What it includes</h4><ul>${p.k.map(k=>`<li>${k}</li>`).join('')}</ul><h4>Built with</h4><div class="lg">${p.l.map(n=>`<span>${logo(n,n.split('-')[0]+' logo')}</span>`).join('')}</div><div class="row"><a class="btn p" href="${GH}" target="_blank" rel="noopener">See my GitHub</a>${p.demo?`<a class="btn" href="${p.demo}" target="_blank" rel="noopener">Live demo</a>`:''}</div>`;dlg.showModal()};
document.addEventListener('click',e=>{const b=e.target.closest('[data-open]');if(b)openP(b.dataset.open)});
dlg.addEventListener('click',e=>{if(e.target===dlg)dlg.close()});$('#dx').onclick=()=>dlg.close();

/* ---- carousel ---- */
const tr=$('#track'),bar=$('#bar'),car=$('#car');let hov=false;
const step=()=>{const c=$('.pc:not([hidden])',tr);return c?c.offsetWidth+18:300};
const prog=()=>bar.style.width=Math.min(100,(tr.clientWidth+tr.scrollLeft)/tr.scrollWidth*100)+'%';
const next=()=>tr.scrollLeft+tr.clientWidth>=tr.scrollWidth-6?tr.scrollTo({left:0,behavior:'smooth'}):tr.scrollBy({left:step(),behavior:'smooth'});
$('#prev').onclick=()=>tr.scrollBy({left:-step(),behavior:'smooth'});$('#next').onclick=next;tr.addEventListener('scroll',prog,{passive:true});prog();
[['pointerenter',1],['focusin',1],['pointerleave',0],['focusout',0]].forEach(([e,v])=>car.addEventListener(e,()=>hov=!!v));
tr.addEventListener('keydown',e=>{if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')$('#prev').click()});
setInterval(()=>{if(!hov&&!document.hidden&&!RM.matches&&!dlg.open)next()},5000);
$$('.fl button').forEach(b=>b.onclick=()=>{$$('.fl button').forEach(x=>x.setAttribute('aria-pressed',x===b));$$('.pc',tr).forEach(c=>c.hidden=!(b.dataset.f==='all'||c.dataset.c===b.dataset.f));tr.scrollTo({left:0});prog()});

/* ---- 3D tilt, scroll, reveal ---- */
const tilt=el=>{el.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.setProperty('--gx',(x+.5)*100+'%');el.style.setProperty('--gy',(y+.5)*100+'%');el.style.transform=`perspective(900px) rotateX(${-y*7}deg) rotateY(${x*9}deg) translateY(-4px)`});el.addEventListener('pointerleave',()=>el.style.transform='')};
if(!RM.matches){$$('[data-tilt]').forEach(tilt);const st=$('#stage'),fr=$('#frame');
st.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;fr.style.transform=`rotateX(${-y*18}deg) rotateY(${x*24}deg)`});
st.addEventListener('pointerleave',()=>fr.style.transform='')}
const topb=$('#top');let tk=0;
addEventListener('scroll',()=>{if(tk)return;tk=requestAnimationFrame(()=>{tk=0;root.style.setProperty('--sy',scrollY);root.style.setProperty('--p',Math.min(1,scrollY/Math.max(1,root.scrollHeight-innerHeight)));topb.classList.toggle('show',scrollY>600)})},{passive:true});
topb.onclick=()=>scrollTo({top:0,behavior:RM.matches?'auto':'smooth'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);setTimeout(()=>e.target.classList.remove('rv','in'),1800)}}),{threshold:.1});
$$('.rv').forEach(el=>io.observe(el));


/* ---- luxury layer ---- */
setTimeout(()=>$('#intro')?.remove(),2400);
const h1=$('h1');h1.innerHTML=h1.textContent.trim().split(' ').map((w,i)=>`<span class="wd" style="--i:${i}">${w}</span>`).join(' ');
const gl=$('#glow');if(!RM.matches&&matchMedia('(hover:hover)').matches){addEventListener('pointermove',e=>{gl.style.opacity=1;gl.style.translate=`${e.clientX}px ${e.clientY}px`},{passive:true});
$$('.btn:not(.icb),.soc a').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.18}px ${(e.clientY-r.top-r.height/2)*.28}px`});b.addEventListener('pointerleave',()=>b.style.translate='')})}
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const b=e.target,n=+b.dataset.n,s=b.dataset.s||'';if(RM.matches)return;const t0=performance.now(),f=t=>{const k=Math.min(1,(t-t0)/1600);b.textContent=Math.round(n*(1-Math.pow(1-k,3)))+s;k<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6});
$$('[data-n]').forEach(b=>{if(!RM.matches)b.textContent='0'+(b.dataset.s||'');cio.observe(b)});
(()=>{const c=$('#dust');if(!c||RM.matches)return;const x=c.getContext('2d');let W,H,P=[],col='#d4ad5c';const uc=()=>col=getComputedStyle(root).getPropertyValue('--b').trim()||col;uc();new MutationObserver(uc).observe(root,{attributes:true});
const R=()=>{W=c.width=c.offsetWidth;H=c.height=c.offsetHeight;P=Array.from({length:Math.min(70,W/16|0)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.4,s:Math.random()*.35+.08,a:Math.random()*.6+.2}))};R();addEventListener('resize',R);
const d=()=>{if(!document.hidden&&scrollY<innerHeight){x.clearRect(0,0,W,H);x.fillStyle=col;P.forEach(p=>{x.globalAlpha=p.a;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill();p.y-=p.s;p.x+=Math.sin(p.y/60)*.15;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}})}requestAnimationFrame(d)};d()})();
