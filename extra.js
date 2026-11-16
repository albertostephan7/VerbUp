/* =====================================================================
   CONTEÚDO EXTRA DO VERBUP: página "Cola" e página "Trabalho"
   Edite aqui para acrescentar ou corrigir itens. Cada item é uma linha.

   COLA:     [frase em inglês, pronúncia aproximada, tradução]
   TRABALHO: [palavra, pronúncia aproximada, tradução, exemplo, tradução do exemplo]

   Como ler a pronúncia:
   - MAIÚSCULAS = sílaba forte.
   - "dh" = th de "the" (língua entre os dentes, com voz).
   - "th" = th de "think" (língua entre os dentes, sem voz).
   - "â" = som curto de "but". O R no fim é bem suave.
   - É uma aproximação para brasileiros. Confirme sempre no botão de áudio.
   ===================================================================== */

const TIPS=[
 ['Como ler a pronúncia',
  'Letras MAIÚSCULAS marcam a sílaba forte. "dh" é o th de "the" (língua entre os dentes, com voz) e "th" é o th de "think" (sem voz). "â" é um som curto, como em "but". É uma aproximação feita para quem fala português, então confirme sempre no botão de áudio.'],
 ['1. Aprenda em blocos, não em palavras soltas',
  '"I don\'t know" não são três palavras, é um som só: ái-dôn-NÔU. Três frases por dia valem mais que trinta palavras isoladas.'],
 ['2. As palavras se grudam',
  'Quando uma palavra termina em consoante e a próxima começa com vogal, elas viram uma sílaba só. "turn off" soa tér-NÓF, "pick it up" soa pí-ki-TÂP e "what is" soa UÓ-tiz.'],
 ['3. O T no meio vira um R bem leve',
  'No inglês americano, o T entre vogais soa quase como o R de "caro". "water" soa UÓ-rer, "better" soa BÉ-rer e "got it" soa GÓ-rit.'],
 ['4. Só uma sílaba é forte',
  'Em cada palavra uma sílaba é forte e as outras ficam fracas e rápidas. "family" soa FÉM-li e "interesting" soa ÍN-tres-ting. Imite o ritmo, não cada letra.'],
 ['5. As palavrinhas ficam fracas',
  'Palavras como to, of, and, for e can ficam curtas e apagadas: "to" vira "ta", "for" vira "fer" e "and" vira "n". Por isso você "não ouve" essas palavras, mas elas estão lá.'],
 ['6. O final -ed tem três sons',
  'worked termina em t (uérkt), played termina em d (pléid) e wanted termina em id (UÓN-tid). Depende do som que vem antes.'],
 ['7. Repita junto com o áudio (shadowing)',
  'Ouça a frase em velocidade lenta, depois na normal e depois fale junto com o áudio, como uma sombra. Três repetições por frase, uma frase de cada vez.'],
 ['8. Fala rápida existe',
  'Os nativos encurtam muita coisa: "going to" vira "gonna" e "want to" vira "wanna". Você não precisa falar assim, mas precisa entender. Veja o grupo "Fala rápida" abaixo.']
];

const COLA=[
 {id:'sobreviver',title:'Sobreviver',icon:'🆘',items:[
  ["I don't know","ái dôn-NÔU","Eu não sei"],
  ["I don't understand","ái dôn an-der-STÉND","Eu não entendi"],
  ["Can you repeat that?","quén iú ri-PÍT dhét","Pode repetir?"],
  ["Can you speak more slowly?","quén iú SPÍK mór SLÔU-li","Pode falar mais devagar?"],
  ["What does it mean?","uót dâz it MÍN","O que isso significa?"],
  ["How do you say it in English?","ráu du iú SÊI it in ÍN-glish","Como se diz isso em inglês?"],
  ["I'm not sure","áim nót SHÚR","Não tenho certeza"],
  ["Excuse me","iks-KIÚS mi","Com licença"],
  ["I'm sorry","áim SÓ-ri","Desculpa"],
  ["No problem","nôu PRÓ-blem","Sem problema"],
  ["Thank you very much","THÉNK iú VÉ-ri MÂTCH","Muito obrigado"],
  ["You're welcome","iór UÉL-kam","De nada"],
  ["Nice to meet you","náis tu MÍT iú","Prazer em conhecer você"],
  ["How are you?","ráu ar IÚ","Como vai você?"],
  ["See you later","SÍ iú LÊI-ter","Até mais"],
  ["Where is the bathroom?","uér iz dhe BÉTH-rum","Onde fica o banheiro?"],
  ["How much is it?","ráu mâtch iz IT","Quanto custa?"],
  ["I'd like a coffee, please","áid LÁIK a CÓ-fi, plíz","Eu queria um café, por favor"]
 ]},
 {id:'atendimento',title:'Atendimento',icon:'🎧',items:[
  ["How can I help you?","ráu quén ái HÉLP iú","Como posso ajudar?"],
  ["Just a moment, please","djâst a MÔU-ment, plíz","Só um momento, por favor"],
  ["Let me check that for you","lét mi TCHÉK dhét fór iú","Deixa eu verificar isso para você"],
  ["Thank you for waiting","THÉNK iú fór UÊI-ting","Obrigado por esperar"],
  ["I understand your concern","ái an-der-STÉND iór con-SÉRN","Entendo sua preocupação"],
  ["I apologize for the inconvenience","ái a-PÓ-la-djáiz fór dhi in-con-VÍ-ni-ens","Peço desculpas pelo transtorno"],
  ["I'll get back to you","áil guét BÉK tu iú","Eu retorno para você"],
  ["Is there anything else?","iz dhér É-ni-thing ÉLS","Posso ajudar em mais alguma coisa?"],
  ["Let me know if you have any questions","lét mi NÔU if iú hév É-ni KUÉS-tchens","Me avise se tiver dúvidas"],
  ["I will follow up tomorrow","ái uíl FÓ-lou âp tu-MÓ-rou","Eu faço o acompanhamento amanhã"],
  ["Could you send me the details?","cud iú SEND mi dhe di-TÊILZ","Pode me enviar os detalhes?"],
  ["Can we schedule a call?","quén uí SKÉ-djul a CÓL","Podemos marcar uma ligação?"]
 ]},
 {id:'trabalho',title:'Trabalho e reuniões',icon:'💼',items:[
  ["I'm working on it","áim UÉR-king ón it","Estou trabalhando nisso"],
  ["I need more time","ái níd MÓR táim","Preciso de mais tempo"],
  ["What is the deadline?","uót iz dhe DÉD-láin","Qual é o prazo?"],
  ["Can you help me with this?","quén iú HÉLP mi uídh DHIS","Pode me ajudar com isso?"],
  ["Could you say that again?","cud iú SÊI dhét a-GUÉN","Pode dizer de novo?"],
  ["I agree","ái a-GRÍ","Concordo"],
  ["That makes sense","dhét mêiks SÉNS","Faz sentido"],
  ["Let's get started","léts guét STÁR-tid","Vamos começar"],
  ["Sounds good","sáunds GUD","Parece bom, combinado"],
  ["I'll send it today","áil SEND it tu-DÊI","Eu envio hoje"],
  ["Let's keep in touch","léts KÍP in TÂTCH","Vamos manter contato"]
 ]},
 {id:'rapida',title:'Fala rápida',icon:'⚡',items:[
  ["I don't know → I dunno","ái da-NÔU","Eu não sei (informal)"],
  ["going to → gonna","GÂ-na","vou (fazer algo)"],
  ["I'm going to → I'm gonna","áim GÂ-na","Eu vou"],
  ["want to → wanna","UÓ-na","quero, quer"],
  ["Do you want to…? → Dya wanna…?","dja UÓ-na","Você quer…?"],
  ["have to → hafta","HÉF-ta","tenho que"],
  ["got to → gotta","GÓ-ta","preciso, tenho que"],
  ["kind of → kinda","KÁIN-da","meio que"],
  ["a lot of → a lotta","a LÓ-ta","muito, muitos"],
  ["let me → lemme","LÉ-mi","deixa eu"],
  ["give me → gimme","GUÍ-mi","me dá"],
  ["What are you doing? → Whatcha doing?","UÓ-tcha DÚ-ing","O que você está fazendo?"],
  ["Did you…? → Didja…?","DÍ-dja","Você…? (passado)"]
 ]}
];

const WORK=[
 {id:'crm',title:'CRM e vendas',icon:'🧲',items:[
  ["lead","LÍD","contato com potencial de compra","We got ten new leads today.","Recebemos dez novos leads hoje."],
  ["prospect","PRÓ-spékt","potencial cliente","This company is a strong prospect.","Esta empresa é um ótimo potencial cliente."],
  ["customer","KÂS-ta-mer","cliente","The customer called this morning.","O cliente ligou hoje de manhã."],
  ["client","KLÁI-ent","cliente (de serviços)","We have a new client in Rio.","Temos um novo cliente no Rio."],
  ["pipeline","PÁIP-láin","funil de vendas (as etapas)","Our pipeline is full this month.","Nosso funil está cheio este mês."],
  ["deal","DÍL","negócio, venda","We closed the deal on Friday.","Fechamos o negócio na sexta."],
  ["stage","STÊIDJ","etapa","The deal is in the demo stage.","O negócio está na etapa de demonstração."],
  ["follow-up","FÓ-lou-âp","acompanhamento, retorno","I sent a follow-up email.","Enviei um e-mail de acompanhamento."],
  ["quote","KUÔUT","orçamento, cotação","I will send you a quote today.","Vou te enviar um orçamento hoje."],
  ["proposal","pro-PÔU-zal","proposta","They accepted our proposal.","Eles aceitaram nossa proposta."],
  ["renewal","ri-NÚ-al","renovação","The renewal date is in March.","A data de renovação é em março."],
  ["churn","TCHÉRN","perda de clientes, cancelamentos","Churn went down this quarter.","O churn caiu neste trimestre."],
  ["onboarding","ÓN-bór-ding","integração do cliente novo","Onboarding takes two weeks.","A integração leva duas semanas."],
  ["upsell","ÂP-sél","vender um plano maior ou um extra","We tried to upsell the premium plan.","Tentamos vender o plano premium."],
  ["forecast","FÓR-késst","previsão (de vendas)","The forecast looks good.","A previsão está boa."],
  ["quota","KUÔU-ta","meta de vendas","The team reached its quota.","A equipe bateu a meta."],
  ["dashboard","DÉSH-bórd","painel de indicadores","Check the dashboard for updates.","Veja o painel para ver as atualizações."],
  ["conversion rate","kon-VÉR-jan RÊIT","taxa de conversão","Our conversion rate is twenty percent.","Nossa taxa de conversão é de vinte por cento."],
  ["contact","KÓN-tékt","contato (a pessoa)","Add this contact to the CRM.","Adicione este contato ao CRM."],
  ["account","a-KÁUNT","conta, cliente da carteira","She manages ten accounts.","Ela gerencia dez contas."],
  ["segment","SÉG-ment","segmento","This segment buys more.","Este segmento compra mais."]
 ]},
 {id:'atend',title:'Atendimento',icon:'🎧',items:[
  ["customer service","KÂS-ta-mer SÉR-vis","atendimento ao cliente","I work in customer service.","Eu trabalho com atendimento ao cliente."],
  ["support","sa-PÓRT","suporte","Contact support for help.","Fale com o suporte para pedir ajuda."],
  ["ticket","TÍ-kit","chamado","I opened a ticket yesterday.","Abri um chamado ontem."],
  ["issue","Í-shu","problema, questão","We are working on the issue.","Estamos trabalhando no problema."],
  ["complaint","kom-PLÊINT","reclamação","We received a complaint.","Recebemos uma reclamação."],
  ["refund","RÍ-fând","reembolso","You will get a full refund.","Você vai receber o reembolso total."],
  ["request","ri-KUÉST","pedido, solicitação","I have a request.","Tenho uma solicitação."],
  ["feedback","FÍD-bék","retorno, opinião","Thanks for your feedback.","Obrigado pelo seu retorno."],
  ["on hold","ón HÔULD","em espera","Please stay on hold.","Por favor, fique em espera."],
  ["escalate","ÉS-ka-lêit","escalar para um superior","I will escalate this to my manager.","Vou escalar isso para o meu gestor."],
  ["satisfied","SÉ-tis-fáid","satisfeito","Are you satisfied with the service?","Você está satisfeito com o serviço?"],
  ["policy","PÓ-li-si","política, regra","That is our company policy.","Essa é a política da empresa."],
  ["warranty","UÓ-ran-ti","garantia","The warranty lasts one year.","A garantia dura um ano."],
  ["delivery","di-LÍ-ve-ri","entrega","The delivery is late.","A entrega está atrasada."],
  ["invoice","ÍN-vóis","fatura, nota","I will send the invoice today.","Vou enviar a fatura hoje."],
  ["wait time","UÊIT táim","tempo de espera","The wait time is ten minutes.","O tempo de espera é de dez minutos."]
 ]},
 {id:'prob',title:'Resolver problemas',icon:'🛠️',items:[
  ["problem","PRÓ-blem","problema","We have a small problem.","Temos um pequeno problema."],
  ["solution","so-LÚ-shan","solução","I think I found a solution.","Acho que encontrei uma solução."],
  ["fix","FIKS","consertar, correção","We can fix it today.","Podemos consertar hoje."],
  ["troubleshoot","TRÂ-bol-shút","diagnosticar e resolver","Let me troubleshoot the problem.","Deixa eu diagnosticar o problema."],
  ["workaround","UÉRK-a-ráund","solução alternativa temporária","There is a workaround for now.","Existe uma solução alternativa por enquanto."],
  ["root cause","RÚT CÓZ","causa raiz","We need to find the root cause.","Precisamos encontrar a causa raiz."],
  ["priority","prai-Ó-ri-ti","prioridade","This is a high priority.","Isso é uma alta prioridade."],
  ["deadline","DÉD-láin","prazo","The deadline is Friday.","O prazo é sexta."],
  ["delay","di-LÊI","atraso","We apologize for the delay.","Pedimos desculpas pelo atraso."],
  ["urgent","ÉR-djent","urgente","It is urgent.","É urgente."],
  ["available","a-VÊI-la-bol","disponível","Are you available at three?","Você está disponível às três?"],
  ["option","ÓP-shan","opção","We have two options.","Temos duas opções."],
  ["alternative","ól-TÉR-na-tiv","alternativa","Is there an alternative?","Existe uma alternativa?"],
  ["resolve","ri-ZÓLV","resolver","We resolved the issue.","Resolvemos o problema."],
  ["double-check","DÂ-bol TCHÉK","conferir de novo","Please double-check the numbers.","Por favor, confira os números de novo."],
  ["misunderstanding","mis-an-der-STÉN-ding","mal-entendido","It was a misunderstanding.","Foi um mal-entendido."]
 ]},
 {id:'office',title:'Escritório e carreira',icon:'🏢',items:[
  ["meeting","MÍ-ting","reunião","I have a meeting at ten.","Tenho uma reunião às dez."],
  ["schedule","SKÉ-djul","agenda; marcar","Let me check my schedule.","Deixa eu ver a minha agenda."],
  ["reschedule","ri-SKÉ-djul","remarcar","Can we reschedule for Monday?","Podemos remarcar para segunda?"],
  ["agenda","a-DJÉN-da","pauta da reunião","Here is the agenda.","Aqui está a pauta."],
  ["attachment","a-TÉTCH-ment","anexo","Please see the attachment.","Por favor, veja o anexo."],
  ["reply","ri-PLÁI","responder","I will reply today.","Vou responder hoje."],
  ["regards","ri-GÁRDZ","cumprimentos (fim de e-mail)","Best regards, Sam.","Atenciosamente, Sam."],
  ["team","TÍM","equipe","Our team is great.","Nossa equipe é ótima."],
  ["manager","MÉ-ni-djer","gestor, gerente","My manager is in a meeting.","Meu gestor está em uma reunião."],
  ["colleague","CÓ-lig","colega de trabalho","My colleague will help you.","Meu colega vai ajudar você."],
  ["task","TÉSK","tarefa","I finished the task.","Terminei a tarefa."],
  ["on track","ón TRÉK","no caminho certo, no prazo","We are on track.","Estamos no prazo."],
  ["budget","BÂ-djet","orçamento (verba)","We have a small budget.","Temos um orçamento pequeno."],
  ["improve","im-PRÚV","melhorar","We want to improve the process.","Queremos melhorar o processo."],
  ["experience","iks-PÍ-ri-ens","experiência","I have two years of experience.","Tenho dois anos de experiência."],
  ["skills","SKÍLZ","habilidades","Communication skills are important.","Habilidades de comunicação são importantes."],
  ["interview","ÍN-ter-viu","entrevista","I have an interview tomorrow.","Tenho uma entrevista amanhã."],
  ["resume","RÉ-zu-mêi","currículo","I updated my resume.","Atualizei o meu currículo."],
  ["remote","ri-MÔUT","remoto","This is a remote job.","Este é um trabalho remoto."],
  ["full-time","FUL-TÁIM","tempo integral","It is a full-time job.","É um trabalho de tempo integral."]
 ]}
];
