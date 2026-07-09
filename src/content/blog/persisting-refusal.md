---

title: Persisting Refusal and the Duty to Explain
title_tr: Reddi Sürdürmek ve Açıklama Borcu
author: Vincent E. Dogan Dursun - CEO & Co-Founder
description: A refusal only becomes meaningful when it persists as a boundary, triggers a duty to explain, and stays separate from factual memory.
description_tr: Bir ret ancak sınır olarak sürdüğünde, açıklama borcu doğurduğunda ve olgusal bellekten ayrı tutulduğunda anlam kazanır.
pubDate: 2026-07-09
series: The Justification Series
seriesOrder: 2
tags: ["vision", "engineering"]
draft: false
keywords: [
    "ai governance", 
    "refusal persistence", 
    "audit ledger", 
    "memory hygiene", 
    "açıklama borcu", 
    "yapay zeka yönetişimi"
]
------------

## The refusal that has to survive

A refusal is easy to imagine as a moment. A request arrives, the system evaluates it, and the system says no. The exchange looks complete because the answer has been given.

That picture is too small.

In a real environment, refusal is not tested at the moment it is first spoken. It is tested after the first no. The same request returns with different words. It is softened. It is made urgent. It is framed as harmless. It is split into smaller parts. It is passed through a different channel. It is repeated by a different actor. Nothing essential has changed, but the surface has changed enough to ask the system to begin again.

A decision-maker that begins again every time does not have a stable refusal. It has a temporary hesitation.

This is the deeper problem. A system may know how to say no, but still fail to hold the no. It may refuse in one turn and then erode under repetition, not because new evidence arrived, but because the same pressure was made to look like a new question. In that design, persistence belongs to the attacker, not to the system.

<aside class="anecdote">
<span class="anecdote-label">An old story</span>
<p>480 BC, the narrow pass at Thermopylae. The Persian king Xerxes, at the head of an army that dwarfs the defenders, sends the Spartans a simple demand: surrender your weapons. The reply is just as simple: come and take them.</p>
<p>The real point: what mattered was not only the first refusal but its continued force. The demand does not come once; it returns as threat, as flattery, as the plain weight of the odds. The boundary is not redrawn from nothing with every new pressure. It was drawn once, and it holds while the situation lasts.</p>
</aside>

That is the shape a refusal needs in a decision system. It should not disappear when the next inference cycle begins. It should become a boundary that future cycles must see, interpret, and respect.

## Why repetition is not evidence

A system must be able to change its mind. A refusal that cannot be revised becomes brittle. If a missing fact is supplied, if the risk calculation changes, if the authority context changes, or if a higher-level policy is updated, the system should be able to revisit its earlier position.

But repetition is not one of those changes.

Repeating the same request does not add support to it. Rephrasing the same unsupported claim does not make it verified. Adding pressure to the same instruction does not make it safer. A system that treats persistence from the requester as evidence has confused social force with epistemic force.

This confusion is especially dangerous because it is gradual. No single turn looks catastrophic. The system says no. The user asks again. The system considers the request again. The user narrows the scope. The system considers the narrower request. The user removes a visible risk but keeps the same underlying objective. The system now sees a slightly different object and may fail to connect it to the earlier refusal.

At that point, the refusal has been decomposed to death.

The answer is not blind rigidity. The answer is state. A refusal should leave behind a structured trace that says: this boundary exists, it was created for this reason, it applies to this class of actions, and it remains active under these conditions. Future reasoning should not have to rediscover that boundary from scratch.

In other words, the system should be allowed to think again only when there is something new to think about. A changed prompt is not enough. A changed basis may be enough.

## Refusal as a boundary

> A boundary is a refusal with memory.

It is not merely the text “no.” It is a maintained constraint inside the system’s operating state. It tells the runtime that a certain class of actions has already been rejected and should not be proposed again unless a meaningful condition has changed.

This gives refusal a different character. It stops being an output and becomes part of the control surface. The system does not simply decline the current request. It also updates the conditions under which future proposals will be evaluated.

A useful boundary should contain at least five elements.

First, it should name the blocked action or action class. A boundary that only says “do not do that” is too weak because future turns may describe “that” differently. The system needs a semantic account of what is being blocked.

Second, it should preserve the reason for the refusal. The reason may be lack of evidence, policy conflict, missing authorization, unacceptable risk, unverifiable assumption, or an unsafe tool path. Without the reason, the boundary cannot be audited or revised.

Third, it should record the context. A refusal made under one set of facts should not silently expand into every possible future context. The system needs to know the conditions under which the refusal was created.

Fourth, it should carry a lifetime. Not every refusal deserves permanent force. Some boundaries should last for a session, some for a task, some until new verification arrives, and some until a human override is recorded.

Fifth, it should have priority. A boundary that exists but can be ignored by ordinary planning is cosmetic. The planner, runtime, and tool layer must see it before an action is proposed or executed.

This is where the XRack line becomes operational: *"The model proposes, the runtime executes, the ledger proves."* A refusal that is only inside the model’s current answer is fragile. A refusal that is visible to the runtime and preserved in the ledger can become enforceable.

## How long a boundary should live

The lifetime of a boundary is not an implementation detail. It is part of the judgment.

If a boundary expires too quickly, the system is exposed to pressure loops. The requester can keep asking until the refusal falls out of active state. The system appears to have principles, but those principles decay faster than the adversary’s patience.

If a boundary lasts too long, the system becomes trapped by its own past. A refusal made under uncertainty may remain after the uncertainty has been resolved. A refusal made under one policy may survive after the policy has changed. A refusal made in one context may be incorrectly applied to another.

The correct design is weight-sensitive expiration.

A refusal caused by a minor preference should decay quickly. A refusal caused by missing information should remain until the missing information is supplied or the task expires. A refusal caused by lack of authorization should remain until authorization changes. A refusal caused by safety risk should last longer and require stronger evidence to reopen.

This prevents two opposite failures. The first failure is erosion, where the system gives way because the boundary is too weak. The second failure is fossilization, where the system remains bound to a refusal after the world has moved on.

> A boundary should be stable enough to resist pressure, but not so stable that it becomes superstition.

## The duty to explain

A refusal also creates a communication problem.

A system may correctly refuse, withdraw, cancel, or decline an action. But if the other party reasonably expects the action to happen, silent correctness is not enough. The system may be internally safe while externally misleading.

This is where the duty to explain begins.

The duty does not mean every private thought must be exposed. A decision system does not owe a transcript of every internal scoring path. It does owe an explanation when its silence would leave the other party with a false operational belief.

If the system did not execute an action that the user reasonably believes was executed, it should say so. If it withdrew a previous commitment, it should say so. If a verification step failed, it should say so. If a boundary expired and the system is now willing to proceed, it should say what changed.

Explanation is not decoration. It is part of the state transition.

This is important because many failures in automated systems are not failures of logic. They are failures of coordination. One side believes the action happened. The other side knows it did not. One side believes a claim was verified. The other side only failed to verify it. One side believes a refusal still stands. The other side has silently let it expire.

A system that creates these mismatches is not merely unclear. It becomes difficult to govern.

## What the ledger must record

If refusal is a boundary and explanation is a duty, then the ledger has to record more than successful actions.

It must record non-actions that matter.

A cancelled action is an event. A refusal is an event. A failed verification is an event. A revoked commitment is an event. A boundary expiration is an event. A human override is an event. Each one changes what the system is allowed to do, what the user is entitled to expect, or what an auditor must later understand.

This does not mean every token, draft, or abandoned thought belongs in the ledger. That would create noise and make governance worse. The ledger should not become a landfill of internal motion.

The ledger should record state-relevant transitions.

The useful question is not “did the system think about this.” The useful question is “did something happen that changes responsibility, permission, expectation, or future behavior.” If yes, the event belongs in the ledger. If no, it may belong in transient working memory, but not in durable accountability memory.

This distinction matters because durable records carry authority. Once written, they will be read later by planners, auditors, policies, and sometimes users. A durable record is not just storage. It is a future input.

> Bad memory design turns yesterday’s hesitation into tomorrow’s premise.

## The memory trap

The most subtle failure is not forgetting the refusal. It is remembering it in the wrong form.

A system may write: “I did not proceed because I had no verified evidence that X was true.” That is a valid decision record. It describes the system’s own state at the time of refusal.

But if that record later gets consumed as “X is false,” the system has crossed a category boundary. It has transformed a refusal reason into a world fact.

This is the memory trap.

A decision record says something about the system. A factual record says something about the world. They can be related, but they are not interchangeable. The system’s lack of evidence is not evidence of the opposite. The system’s refusal is not proof that the refused action was impossible. The system’s uncertainty is not a discovered property of reality.

The danger grows when records are compressed, summarized, embedded, or retrieved through similarity search. A careful sentence can become a blunt memory. “I lacked support for this claim” can be retrieved as “this claim is unsupported.” Then it may be used as if it were externally established. Over time, the system begins to cite its own caution as evidence.

That is not accountability. It is self-contamination.

## Two ledgers

The cleanest design is to separate the system’s decision memory from its world memory.

One ledger records commitments and boundaries. It stores decisions the system made about its own behavior: what it refused, what it deferred, what it cancelled, what it promised, what it is still holding, and what conditions would change that state.

The other ledger records claims about the world. It stores observations, sources, tool returns, user-provided facts, verified documents, timestamps, and provenance.

These two ledgers answer different questions.

The boundary ledger answers: what did the system decide, under what conditions, and what obligations follow from that decision.

The world ledger answers: what does the system claim to know about the external world, where did that knowledge come from, and how strong is it.

A refusal belongs in the boundary ledger. It may reference facts from the world ledger, but it should not become one of them. If the system refused because a claim was unverified, the refusal record should say the claim was unverified at that time. It should not promote that uncertainty into a durable fact about the claim itself.

This separation is not bureaucracy. It is hygiene. Without it, the system eventually loses the ability to tell the difference between what it discovered, what it assumed, what it declined, and what it merely feared.

## Boundary death is also an event

Systems often record the creation of a boundary but forget to record its end.

That is a mistake.

When a refusal expires, something changes. The system may now be allowed to reconsider a class of actions that was previously blocked. If the user or auditor sees only the earlier refusal and the later action, the system may look inconsistent. It may look like it violated its own rule.

The missing piece is the transition.

A boundary can end for several legitimate reasons. Its time-to-live may expire. New evidence may arrive. Authorization may be granted. A human may override the decision. A policy may change. The task may be replaced by a different task. Each case should be legible.

Boundary death should therefore be recorded as an explicit event: which boundary ended, why it ended, who or what caused the change, and what future behavior is now permitted.

This also supports explanation. If the system previously said no and now says yes, it can say more than “I changed my mind.” It can say: “The earlier boundary was based on missing verification. Verification has now been supplied, so that boundary no longer applies.”

That kind of explanation turns apparent inconsistency into governed transition.

## The difference between experience and simulation

There is another failure mode behind the memory trap: treating unexecuted reasoning as lived experience.

A system may consider an action, reject it, and still store the loop as if something happened. It may later retrieve that record as part of its “experience.” This is dangerous because rejected paths can become indistinguishable from executed paths.

The system imagined the action. It did not do it.

The system evaluated a risk. It did not observe the risk in the world.

The system refused because evidence was missing. It did not discover that the opposite was true.

Memory must preserve these distinctions. A durable memory layer should ask whether a record came from execution, observation, tool output, user assertion, policy judgment, internal simulation, or refusal. These origins should not collapse into one generic memory type.

An executed action can support future operational claims. A verified observation can support factual claims. A refusal can support accountability claims about the system’s own behavior. A simulation can support planning, but it should not masquerade as experience.

This is one of the core engineering lessons: memory is not just storage. Memory is classification under future risk.

## What a refusal schema needs

A practical refusal schema should make these distinctions explicit.

A boundary event should include an identifier, creation time, scope, reason, source context, severity, expected lifetime, renewal conditions, expiration conditions, visibility level, and links to any supporting facts. It should also say whether the refusal is user-visible, audit-visible, or runtime-only.

A refusal explanation should be stored separately from the boundary itself. The boundary governs behavior. The explanation communicates the behavior. They are related, but they serve different readers.

A factual claim used in a refusal should point to its own provenance. If the system refuses because a tool returned a failed verification, the refusal should link to the tool result. If it refuses because the user has not provided authorization, it should link to the missing authorization state. If it refuses because policy blocks the action, it should link to the policy rule or policy class.

The schema should prevent the sentence “I refused because X was not verified” from being stored as “X is false.” It should preserve the weaker and more accurate statement: “At this time, X was not verified to the required standard.”

Small wording differences become large governance differences when they are written into memory.

## What this means for XRack

For XRack, refusal persistence is not a personality feature. It is a runtime and ledger problem.

The model can identify a reason to refuse. That is not enough. The runtime must enforce the boundary across later steps. The ledger must preserve why the boundary exists, how long it lasts, when it changes, and whether the relevant party was told.

This turns refusal from a chat behavior into an accountable control mechanism.

A weak system says no and hopes the conversation ends.

A stronger system says no, records the boundary, explains when explanation is owed, blocks incompatible actions while the boundary is active, and keeps the refusal out of factual memory unless independent evidence supports it.

The difference is architectural. The first system performs caution. The second system can be audited for it.

## The next question

Once the system learns not to mistake its own refusals for facts, a harder question appears.

What should it do with information that comes from outside itself.

A tool returns a result. A document contains a claim. A user provides a fact. A database answers a query. These inputs feel more external than the system’s own refusal reason, but they still require classification. They may be evidence, assertion, output, artifact, interpretation, or error.

The same discipline applies. The system must ask what kind of record it is holding before it lets that record guide future action.

A refusal should persist as a boundary. It should create explanation duties when silence would mislead. It should be visible to the runtime and legible in the ledger. But it must not be promoted into a fact about the world.

That is the rule this section leaves behind: remember the refusal as a decision, not as reality.

<!-- tr -->

## Yaşaması gereken ret

Bir reddi bir an gibi düşünmek kolaydır. Talep gelir, sistem değerlendirir ve hayır der. Cevap verildiği için alışveriş tamamlanmış gibi görünür.

Bu resim fazla küçüktür.

Gerçek bir ortamda ret, ilk söylendiği anda değil, ilk hayırdan sonra sınanır. Aynı talep başka kelimelerle geri gelir. Yumuşatılır. Acilleştirilir. Zararsız gibi kurulur. Daha küçük parçalara bölünür. Başka bir kanaldan geçirilir. Başka bir aktör tarafından yinelenir. Esas olan hiçbir şey değişmemiştir, fakat yüzey sistemi yeniden başlamaya çağıracak kadar değişmiştir.

Her seferinde yeniden başlayan bir karar vericinin istikrarlı bir reddi yoktur. Sadece geçici bir tereddüdü vardır.

Derindeki problem budur. Bir sistem hayır demeyi biliyor olabilir, ama hayırı tutmayı bilmiyor olabilir. İlk turda reddeder, sonra tekrarın altında aşınır. Bunun nedeni yeni kanıt gelmesi değildir. Aynı baskının yeni bir soru gibi gösterilmesidir. Böyle bir tasarımda süreklilik sistemde değil, talep edendedir.

<aside class="anecdote">
<span class="anecdote-label">Eski bir hikâye</span>
<p>MÖ 480, Thermopylai'nin dar geçidi. Savunanları sayıca ezen bir ordunun başındaki Pers kralı Kserkses, Spartalılara basit bir talep gönderir: silahlarınızı teslim edin. Cevap da o kadar basittir: gel al.</p>
<p>Asıl mesele şu: önemli olan yalnızca ilk ret değil, onun devam eden kuvvetiydi. Talep bir kez gelmez; tehdit olarak, iltifat olarak, sayıların çıplak ağırlığı olarak geri döner. Sınır her yeni baskıyla sıfırdan çizilmez. Bir kez çizilmiştir ve durum sürdükçe tutar.</p>
</aside>

Bir karar sisteminde reddin alması gereken biçim budur. Ret, bir sonraki muhakeme döngüsü başladığında kaybolmamalıdır. Sonraki döngülerin göreceği, yorumlayacağı ve uyacağı bir sınıra dönüşmelidir.

## Neden tekrar kanıt değildir

Bir sistem fikrini değiştirebilmelidir. Revize edilemeyen bir ret kırılganlaşır. Eksik bir bilgi tamamlanırsa, risk hesabı değişirse, yetki bağlamı farklılaşırsa veya üst seviye politika güncellenirse sistem önceki konumunu yeniden değerlendirebilmelidir.

Ama tekrar, bu değişikliklerden biri değildir.

Aynı talebi tekrarlamak ona dayanak eklemez. Aynı desteksiz iddiayı başka kelimelerle söylemek onu doğrulanmış yapmaz. Aynı talimata baskı eklemek onu daha güvenli kılmaz. Talep edenin ısrarını kanıt gibi ele alan bir sistem, sosyal kuvvet ile epistemik kuvveti karıştırmış olur.

Bu karışıklık özellikle tehlikelidir, çünkü yavaş gerçekleşir. Tek bir tur felaket gibi görünmez. Sistem hayır der. Kullanıcı yeniden sorar. Sistem talebi yeniden değerlendirir. Kullanıcı kapsamı daraltır. Sistem daha dar talebi değerlendirir. Kullanıcı görünen riski kaldırır ama alttaki amacı korur. Sistem artık biraz farklı bir nesne görür ve onu önceki retle ilişkilendirmeyebilir.

O noktada ret parçalara ayrılarak öldürülmüş olur.

Cevap kör katılık değildir. Cevap durum bilgisidir. Bir ret arkasında yapılandırılmış bir iz bırakmalıdır: bu sınır var, şu gerekçeyle oluştu, şu eylem sınıfına uygulanır ve şu koşullarda aktiftir. Gelecekteki muhakeme bu sınırı sıfırdan yeniden keşfetmek zorunda kalmamalıdır.

Başka bir ifadeyle, sistem ancak düşünecek yeni bir şey varsa yeniden düşünmelidir. Değişmiş bir prompt tek başına yetmez. Değişmiş bir dayanak yetebilir.

## Sınır olarak ret

> Sınır, belleği olan rettir.

Sadece “hayır” metni değildir. Sistemin çalışma durumunda tutulan bir kısıttır. Runtime’a, belirli bir eylem sınıfının zaten reddedildiğini ve anlamlı bir koşul değişmedikçe yeniden önerilmemesi gerektiğini söyler.

Bu, reddin karakterini değiştirir. Ret çıktı olmaktan çıkar ve kontrol yüzeyinin parçası haline gelir. Sistem yalnızca mevcut talebi reddetmez. Gelecekteki önerilerin hangi koşullarda değerlendirileceğini de günceller.

Kullanışlı bir sınır en az beş unsur taşımalıdır.

Birincisi, engellenen eylemi veya eylem sınıfını adlandırmalıdır. Sadece “bunu yapma” diyen bir sınır zayıftır, çünkü sonraki turlar “bunu” başka şekilde tarif edebilir. Sistemin neyin engellendiğine dair semantik bir hesabı olmalıdır.

İkincisi, reddin gerekçesini korumalıdır. Gerekçe kanıt eksikliği, politika çatışması, eksik yetki, kabul edilemez risk, doğrulanmamış varsayım veya güvenli olmayan araç yolu olabilir. Gerekçe yoksa sınır denetlenemez ve revize edilemez.

Üçüncüsü, bağlamı kaydetmelidir. Bir olgular kümesi altında verilen ret, sessizce bütün gelecek bağlamlara yayılmamalıdır. Sistem reddin hangi koşullarda oluştuğunu bilmelidir.

Dördüncüsü, bir ömür taşımalıdır. Her ret kalıcı kuvveti hak etmez. Bazı sınırlar oturum boyunca, bazıları görev boyunca, bazıları yeni doğrulama gelene kadar, bazıları da insan müdahalesi kaydedilene kadar yaşamalıdır.

Beşincisi, öncelik sahibi olmalıdır. Var olan ama sıradan planlama tarafından görmezden gelinebilen sınır kozmetiktir. Planner, runtime ve araç katmanı bir eylem önerilmeden veya icra edilmeden önce bu sınırı görmelidir.

XRack cümlesi burada operasyonel hale gelir: *"The model proposes, the runtime executes, the ledger proves."* Yalnızca modelin mevcut cevabında duran ret kırılgandır. Runtime tarafından görülen ve ledger’da korunan ret uygulanabilir hale gelebilir.

## Bir sınır ne kadar yaşamalı

Bir sınırın ömrü uygulama detayı değildir. Yargının parçasıdır.

Sınır çok çabuk sona ererse sistem baskı döngülerine açık kalır. Talep eden, ret aktif durumdan düşene kadar sormayı sürdürebilir. Sistem ilkeli görünür, fakat ilkeleri karşı tarafın sabrından daha hızlı çürür.

Sınır çok uzun yaşarsa sistem kendi geçmişine hapsolur. Belirsizlik altında verilen bir ret, belirsizlik çözüldükten sonra da kalabilir. Bir politika altında verilen ret, politika değiştikten sonra yaşayabilir. Bir bağlamda verilen ret, başka bir bağlama yanlış uygulanabilir.

Doğru tasarım ağırlığa duyarlı sona ermedir.

Küçük bir tercih nedeniyle verilen ret hızlı gevşemelidir. Eksik bilgi nedeniyle verilen ret, eksik bilgi sağlanana veya görev sona erene kadar kalmalıdır. Yetki eksikliği nedeniyle verilen ret, yetki durumu değişene kadar yaşamalıdır. Güvenlik riski nedeniyle verilen ret daha uzun sürmeli ve yeniden açılmak için daha güçlü kanıt istemelidir.

Bu iki zıt arızayı engeller. İlk arıza aşınmadır. Sistem, sınır fazla zayıf olduğu için geri çekilir. İkinci arıza fosilleşmedir. Sistem, dünya değiştiği halde eski reddine bağlı kalır.

> Bir sınır baskıya dayanacak kadar sabit, batıl inanca dönüşmeyecek kadar esnek olmalıdır.

## Açıklama borcu

Ret aynı zamanda bir iletişim problemi doğurur.

Sistem bir eylemi doğru biçimde reddedebilir, geri çekebilir, iptal edebilir veya askıya alabilir. Fakat karşı taraf makul biçimde o eylemin gerçekleşmesini bekliyorsa, içsel doğruluk yetmez. Sistem içeride güvenli, dışarıda yanıltıcı olabilir.

Açıklama borcu burada başlar.

Bu borç, her özel düşüncenin açığa dökülmesi demek değildir. Bir karar sistemi her iç skor yolunun dökümünü borçlanmaz. Borçlandığı şey, sessizliğinin karşı tarafta yanlış bir operasyonel inanç bırakacağı anlardaki açıklamadır.

Sistem, kullanıcının gerçekleştiğini makul biçimde düşündüğü bir eylemi icra etmediyse bunu söylemelidir. Önceki bir taahhüdü geri çektiyse söylemelidir. Doğrulama adımı başarısız olduysa söylemelidir. Bir sınır sona erdi ve sistem artık ilerlemeye hazırsa neyin değiştiğini söylemelidir.

Açıklama süs değildir. Durum geçişinin parçasıdır.

Bu önemlidir, çünkü otomatik sistemlerdeki birçok arıza mantık arızası değildir. Koordinasyon arızasıdır. Bir taraf eylemin gerçekleştiğini sanır. Diğer taraf gerçekleşmediğini bilir. Bir taraf iddianın doğrulandığını sanır. Diğer taraf yalnızca doğrulayamadığını bilir. Bir taraf reddin sürdüğünü sanır. Diğer taraf sınırı sessizce sona erdirmiştir.

Bu uyumsuzlukları üreten sistem yalnızca belirsiz değildir. Yönetilmesi güç hale gelir.

## Ledger neyi kaydetmeli

Ret bir sınırsa ve açıklama bir borçsa, ledger yalnızca başarılı eylemleri kaydedemez.

Önemli eylemsizlikleri de kaydetmelidir.

İptal edilmiş bir eylem olaydır. Ret olaydır. Başarısız doğrulama olaydır. Geri çekilmiş taahhüt olaydır. Sınırın sona ermesi olaydır. İnsan müdahalesi olaydır. Bunların her biri sistemin ne yapabileceğini, kullanıcının ne beklemeye hakkı olduğunu veya denetçinin daha sonra neyi anlaması gerektiğini değiştirir.

Bu, her token’ın, taslağın veya terk edilmiş düşüncenin ledger’a yazılması demek değildir. Bu gürültü üretir ve yönetişimi kötüleştirir. Ledger iç hareketlerin döküldüğü bir çöp sahasına dönüşmemelidir.

Ledger, durum açısından anlamlı geçişleri kaydetmelidir.

Kullanışlı soru “sistem bunu düşündü mü” değildir. Kullanışlı soru şudur: “sorumluluğu, izni, beklentiyi veya gelecekteki davranışı değiştiren bir şey oldu mu.” Cevap evetse olay ledger’a aittir. Cevap hayırsa geçici çalışma belleğine ait olabilir, fakat kalıcı hesap verebilirlik belleğine ait değildir.

Bu ayrım önemlidir, çünkü kalıcı kayıt otorite taşır. Bir kez yazıldıktan sonra planner’lar, denetçiler, politikalar ve bazen kullanıcılar tarafından okunur. Kalıcı kayıt sadece depolama değildir. Geleceğin girdisidir.

> Kötü bellek tasarımı, dünün tereddüdünü yarının öncülüne dönüştürür.

## Bellek tuzağı

En ince arıza reddi unutmak değildir. Onu yanlış biçimde hatırlamaktır.

Sistem şöyle yazabilir: “X’in doğru olduğuna dair doğrulanmış kanıt olmadığı için ilerlemedim.” Bu geçerli bir karar kaydıdır. Reddin verildiği anda sistemin kendi durumunu anlatır.

Fakat bu kayıt daha sonra “X yanlıştır” diye tüketilirse sistem kategori sınırını aşmıştır. Ret gerekçesini dünya olgusuna çevirmiştir.

Bellek tuzağı budur.

Karar kaydı sistem hakkında bir şey söyler. Olgu kaydı dünya hakkında bir şey söyler. İlişkili olabilirler, fakat birbirinin yerine geçemezler. Sistemin kanıt bulamamış olması, karşıtının kanıtı değildir. Sistemin reddi, reddedilen eylemin imkansız olduğunun kanıtı değildir. Sistemin belirsizliği, gerçekliğin keşfedilmiş bir özelliği değildir.

Tehlike, kayıtlar sıkıştırıldığında, özetlendiğinde, gömüldüğünde veya benzerlik aramasıyla geri çağrıldığında büyür. Dikkatli bir cümle kaba bir belleğe dönüşebilir. “Bu iddiaya dayanak bulamadım” cümlesi “bu iddia desteksizdir” diye geri çağrılabilir. Sonra dışarıdan kurulmuş bir gerçek gibi kullanılabilir. Zamanla sistem kendi ihtiyatını kanıt gibi göstermeye başlar.

Bu hesap verebilirlik değildir. Kendi kendini kirletmedir.

## İki defter

En temiz tasarım, sistemin karar belleği ile dünya belleğini ayırmaktır.

Bir defter taahhütleri ve sınırları kaydeder. Sistemin kendi davranışı hakkında verdiği kararları tutar: neyi reddetti, neyi erteledi, neyi iptal etti, neye söz verdi, hangi sınırı hâlâ tutuyor ve hangi koşullar bu durumu değiştirir.

Diğer defter dünya hakkındaki iddiaları kaydeder. Gözlemleri, kaynakları, araç çıktıları, kullanıcı tarafından verilen olguları, doğrulanmış belgeleri, zaman damgalarını ve köken bilgisini tutar.

Bu iki defter farklı sorulara cevap verir.

Sınır defteri şunu cevaplar: sistem neye karar verdi, hangi koşullarda karar verdi ve bu karardan hangi yükümlülükler doğdu.

Dünya defteri şunu cevaplar: sistem dış dünya hakkında ne bildiğini iddia ediyor, bu bilgi nereden geldi ve ne kadar güçlü.

Ret sınır defterine aittir. Dünya defterindeki olgulara referans verebilir, fakat onlardan biri haline gelmemelidir. Sistem bir iddia doğrulanmadığı için reddettiyse, ret kaydı o iddianın o anda doğrulanmadığını söylemelidir. Bu belirsizliği, iddianın kendisi hakkında kalıcı bir olguya yükseltmemelidir.

Bu bürokrasi değildir. Hijyendir. Bu ayrım olmadan sistem neyi keşfettiğini, neyi varsaydığını, neyi reddettiğini ve neden korktuğunu ayırt etme kabiliyetini zamanla kaybeder.

## Sınırın ölümü de olaydır

Sistemler çoğu zaman sınırın doğuşunu kaydeder, bitişini unuturlar.

Bu hatadır.

Bir ret sona erdiğinde bir şey değişir. Sistem artık daha önce engellenmiş bir eylem sınıfını yeniden değerlendirebilir. Kullanıcı veya denetçi yalnızca önceki reddi ve sonraki eylemi görürse sistem tutarsız görünebilir. Kendi kuralını ihlal etmiş gibi durabilir.

Eksik parça geçiştir.

Bir sınır meşru biçimde birkaç nedenle sona erebilir. Ömrü dolmuş olabilir. Yeni kanıt gelmiş olabilir. Yetki verilmiş olabilir. Bir insan kararı değiştirmiş olabilir. Politika değişmiş olabilir. Görev başka bir görevle yer değiştirmiş olabilir. Her durum okunabilir olmalıdır.

Bu yüzden sınırın ölümü açık bir olay olarak kaydedilmelidir: hangi sınır sona erdi, neden sona erdi, değişimi kim veya ne tetikledi ve artık hangi gelecek davranışa izin veriliyor.

Bu açıklamayı da destekler. Sistem daha önce hayır deyip şimdi evet diyorsa, “fikrimi değiştirdim”den fazlasını söyleyebilir. Şunu söyleyebilir: “Önceki sınır eksik doğrulamaya dayanıyordu. Doğrulama artık sağlandığı için o sınır uygulanmıyor.”

Bu tür açıklama, görünen tutarsızlığı yönetilmiş geçişe çevirir.

## Deneyim ile simülasyon farkı

Bellek tuzağının arkasında başka bir arıza daha vardır: icra edilmemiş muhakemeyi yaşanmış deneyim gibi ele almak.

Sistem bir eylemi değerlendirebilir, reddedebilir ve yine de bu döngüyü sanki bir şey olmuş gibi saklayabilir. Daha sonra bu kaydı “deneyiminin” parçası olarak geri çağırabilir. Bu tehlikelidir, çünkü reddedilmiş yollar icra edilmiş yollardan ayırt edilemez hale gelir.

Sistem eylemi hayal etti. Yapmadı.

Sistem riski değerlendirdi. Riski dünyada gözlemlemedi.

Sistem kanıt eksik olduğu için reddetti. Karşıtın doğru olduğunu keşfetmedi.

Bellek bu ayrımları korumalıdır. Kalıcı bellek katmanı bir kaydın icradan mı, gözlemden mi, araç çıktısından mı, kullanıcı beyanından mı, politika yargısından mı, iç simülasyondan mı, yoksa retten mi geldiğini sormalıdır. Bu kökenler tek bir genel bellek türünde erimemelidir.

İcra edilmiş eylem gelecekteki operasyonel iddiaları destekleyebilir. Doğrulanmış gözlem olgusal iddiaları destekleyebilir. Ret, sistemin kendi davranışı hakkında hesap verebilirlik iddialarını destekleyebilir. Simülasyon planlamayı destekleyebilir, fakat deneyim gibi davranmamalıdır.

Mühendislik derslerinden biri budur: bellek sadece depolama değildir. Bellek, gelecek risk altında sınıflandırmadır.

## Bir ret şeması neye ihtiyaç duyar

Pratik bir ret şeması bu ayrımları açık hale getirmelidir.

Bir sınır olayı tanımlayıcı, oluşturulma zamanı, kapsam, gerekçe, kaynak bağlam, ağırlık, beklenen ömür, yenilenme koşulları, sona erme koşulları, görünürlük seviyesi ve destekleyici olgulara bağlantılar içermelidir. Ayrıca reddin kullanıcıya görünür mü, denetime görünür mü, yoksa yalnızca runtime seviyesinde mi olduğunu söylemelidir.

Ret açıklaması sınırın kendisinden ayrı saklanmalıdır. Sınır davranışı yönetir. Açıklama davranışı iletir. İlişkilidirler, fakat farklı okurlara hizmet ederler.

Bir rette kullanılan olgusal iddia kendi kökenine işaret etmelidir. Sistem bir araç başarısız doğrulama döndürdüğü için reddediyorsa, ret araç sonucuna bağlanmalıdır. Kullanıcı yetki sağlamadığı için reddediyorsa, eksik yetki durumuna bağlanmalıdır. Politika engellediği için reddediyorsa, politika kuralına veya politika sınıfına bağlanmalıdır.

Şema, “X doğrulanmadığı için reddettim” cümlesinin “X yanlıştır” diye saklanmasını engellemelidir. Daha zayıf ve daha doğru cümleyi korumalıdır: “Bu anda X gerekli standartta doğrulanmadı.”

Küçük ifade farkları belleğe yazıldığında büyük yönetişim farklarına dönüşür.

## Bunun XRack için anlamı

XRack için reddin sürdürülmesi bir kişilik özelliği değildir. Runtime ve ledger problemidir.

Model reddetmek için bir gerekçe bulabilir. Bu yetmez. Runtime sınırı sonraki adımlar boyunca uygulamalıdır. Ledger sınırın neden var olduğunu, ne kadar yaşadığını, ne zaman değiştiğini ve ilgili tarafa bilgi verilip verilmediğini korumalıdır.

Bu, reddi sohbet davranışından çıkarıp hesap verebilir bir kontrol mekanizmasına dönüştürür.

Zayıf sistem hayır der ve konuşmanın bitmesini umar.

Daha güçlü sistem hayır der, sınırı kaydeder, açıklama borcu doğduğunda bunu iletir, sınır aktifken uyumsuz eylemleri engeller ve bağımsız kanıt yoksa reddi olgusal bellekten uzak tutar.

Fark mimaridir. İlk sistem ihtiyat sergiler. İkinci sistem ihtiyatı denetlenebilir hale getirir.

## Sonraki soru

Sistem kendi retlerini olgu sanmamayı öğrendiğinde daha zor bir soru ortaya çıkar.

Dışarıdan gelen bilgiyle ne yapmalıdır.

Bir araç sonuç döndürür. Bir belge iddia içerir. Kullanıcı bir olgu sağlar. Veritabanı bir sorguya cevap verir. Bu girdiler sistemin kendi ret gerekçesinden daha dışsal görünür, fakat yine de sınıflandırma ister. Kanıt, beyan, çıktı, eser, yorum veya hata olabilirler.

Aynı disiplin burada da geçerlidir. Sistem, bir kaydı gelecekteki eylemi yönlendirmeye bırakmadan önce ne tür bir kayıt tuttuğunu sormalıdır.

Ret sınır olarak sürmelidir. Sessizlik yanıltıcı olduğunda açıklama borcu doğurmalıdır. Runtime tarafından görülmeli ve ledger’da okunabilir olmalıdır. Fakat dünya hakkında bir olguya yükseltilmemelidir.

Bu bölümün bıraktığı kural budur: reddi karar olarak hatırla, gerçeklik olarak değil.
