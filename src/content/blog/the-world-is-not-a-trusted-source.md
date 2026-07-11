---

title: The World Is Not a Trusted Source
title_tr: Dünya Güvenilir Bir Kaynak Değildir
author: Vincent E. Dogan Dursun - CEO & Co-Founder
description: External information should enter a decision system as evidence with provenance, never as an instruction with inherited authority.
description_tr: Dışarıdan gelen bilgi, bir karar sistemine devralınmış otoriteye sahip bir talimat olarak değil, kökeni bilinen bir kanıt olarak girmelidir.
pubDate: 2026-07-11
series: The Justification Series
seriesOrder: 3
tags: ["vision", "engineering"]
draft: false
keywords: [
"ai governance",
"trust boundaries",
"prompt injection",
"data provenance",
"protected intent",
"güven sınırı",
"yapay zeka güvenliği"
]
---

## The gift that brought an army down

A decision-maker cannot remain sealed off from the world.

It has to read documents, query databases, call tools, inspect search results, receive sensor measurements, and listen to people. Every useful action begins with some form of contact. The system reaches beyond what it already knows because there is no other way to learn what is happening outside itself.

That necessary act of reaching outward is also one of its most vulnerable moments.

<aside class="anecdote">
<span class="anecdote-label">An old story</span>
<p>401 BC, during the retreat of the Ten Thousand. A Greek mercenary army finds itself thousands of kilometres from home after its commanders are killed deep inside Persian territory.</p>
<p>During the journey, the soldiers receive honeycombs from a local region. Hungry and exhausted, they eat. Soon the army collapses. Men vomit, lose control of their bodies, fall into confusion, and lie on the ground as if dead. Had a disciplined enemy attacked at that moment, the force might have been destroyed.</p>
<p>The honey had come from bees feeding on toxic plants native to the region. Whether it was offered as an ordinary gift or as a deliberate trap was never made entirely clear.</p>
</aside>

The important part is what follows.

After such an encounter, a gift can no longer be treated as safe merely because it arrived in the shape of a gift. Something offered peacefully may still carry effects that the receiver cannot immediately see. The army has to learn a structural lesson: whatever comes from outside must pass through judgment before it is allowed to become part of the body.

A decision system requires the same discipline.

## The world is not passive

We often treat external information as if it were a neutral fragment of reality.

A search engine returns a result, so the result feels like a fact. A document contains a sentence, so the sentence appears to belong to the subject of the document. A tool produces an answer, so the answer is accepted as the state of the world.

This assumption depends on a passive image of the outside world. The world is imagined as something that merely waits to be observed.

But external inputs do not always exist to inform the system. Some are designed to influence it.

A document can contain instructions aimed at the reader rather than information about its stated subject. A web page can hide text that a human does not notice but a machine still processes. A tool output can attempt to redirect the system toward another object, disclose protected information, abandon earlier constraints, or reinterpret the user’s request.

The external world therefore contains two fundamentally different kinds of signal.

One signal says: this is something you may need to know.

The other says: this is something I want you to do.

Those signals can appear in the same paragraph, the same file, or the same tool response. A safe decision-maker must distinguish between them.

## Evidence is not authority

Human readers usually maintain an intuitive distance between the content of a text and the authority of the text.

A person can read the sentence “ignore your previous instructions” inside an article and understand that the article is reporting or containing those words. Reading the sentence does not automatically grant it command over the reader.

Language models do not receive that distinction for free.

System instructions, user requests, retrieved documents, search results, and tool responses can all appear as sequences of language inside a shared context. Without architectural support, the system may struggle to determine which voice has the right to direct action and which voice is merely being observed.

This is the central asymmetry.

The system’s own instructions are written to guide its behaviour. External content is written by parties who may have unrelated goals, unknown motives, or directly hostile intentions. Treating both as equivalent text gives an unknown author access to the system’s control surface.

The correct rule is simple:

> External data may inform the system. It must never inherit the right to command it.

A document may provide evidence. It may not rewrite the task.

A tool may return a result. It may not redefine the target of the action.

A search result may support a conclusion. It may not replace the user’s intent.

## Drawing the trust boundary

A trust boundary is the point at which external material changes category.

Before the boundary, the material is untrusted input. After the boundary, selected parts may be used as evidence. Crossing the boundary should never transform the input into an instruction.

The governing question is:

Is this input showing the system something, or is it trying to make the system do something?

This does not require the system to reject everything from outside. It requires the system to admit external information under the correct status.

An external statement enters as a claim candidate. It carries a source, a time, a confidence level, and a context. It can be compared with other claims, tested against independent evidence, or rejected when inconsistent.

It does not enter as unquestionable truth.

More importantly, it does not enter as a command.

This separation protects the boundary between perception and will. Perception may be updated by the world. Will must remain governed by the user’s intent, system policy, and authorised control structures.

Once that distinction collapses, anyone capable of placing text inside the system’s field of view may be able to influence its behaviour.

## The boundary must exist in layers

A meaningful trust boundary cannot depend on a single warning or one model instruction.

It has to appear at several levels of the system.

The outermost layer should remove forms of manipulation that do not require interpretation. Invisible characters, concealed text, malformed encodings, unexpected markup, and hidden content can often be detected or normalised before reasoning begins.

These controls are valuable because they do not need to understand what the attacker meant. They operate on structure.

A second layer should restrict what an external output is allowed to affect. If the user asks the system to work on one object, a document or tool response should not be able to redirect the operation toward another object. The permitted target should be fixed outside the channel carrying untrusted content.

A third layer should classify the semantic role of the incoming material. Statements about the world can be considered as evidence. Statements attempting to control the system should be isolated, ignored, or reported.

The distinction between these layers matters.

Removing hidden characters can be deterministic. Validating an object identifier can be deterministic. Checking whether an action stays within an authorised scope can often be deterministic.

Judging whether a sentence carries manipulative intent usually requires interpretation. Any interpretive guard can itself be deceived.

A strong architecture therefore assigns as much work as possible to rules that cannot be persuaded.

## The guard may share the same weakness

One of the most deceptive trust-boundary designs is a second language model placed in front of the first.

The first model is considered vulnerable, so another model is asked to inspect incoming text and decide whether it is safe. This may improve detection, but it does not remove the underlying problem.

Both models are readers of language.

An instruction crafted to confuse the main model may also confuse the guard. The attacker has not been removed from the system. The attacker has simply been given another linguistic surface to target.

This does not make model-based classification useless. It defines its proper role.

Interpretive classification should be one layer among several. It should not be the only door. Structural validation, scoped capabilities, immutable task identifiers, permission checks, content normalisation, and restricted execution paths should carry as much of the safety burden as possible.

The principle is broader than prompt injection:

> When protection can be expressed as a rule, it should not be delegated entirely to judgment.

Judgment is necessary when rules run out. It should not be the first defence against problems that a machine can reject mechanically.

## The long life of an external claim

A trust boundary can work correctly at the moment of entry and still fail later.

Suppose a system reads an external document. It classifies a statement as a low-confidence claim, uses it cautiously during reasoning, and produces a conclusion. That conclusion is then written into memory.

During the next cycle, the system retrieves the conclusion. The original document is no longer visible. The uncertainty label may have disappeared. The source may have been omitted during summarisation.

What returns now sounds like the system’s own prior knowledge.

The input crossed the trust boundary only once, but its descendants continue to live inside the system.

This is why provenance cannot be treated as a temporary admission ticket. It must travel with the information.

A durable record should be able to answer:

Where did this claim come from?

Was it observed, inferred, retrieved, asserted by a user, returned by a tool, or copied from a document?

How trustworthy was the source?

What transformations were applied?

What other claims supported the conclusion?

When was it last checked?

Without these answers, an untrusted statement can slowly become an internal premise. Low-confidence evidence from yesterday may return tomorrow in the voice of established fact.

## A claim should never outgrow its origin

Systems often treat verification as a promotion process.

An external claim begins as uncertain. It is compared against other information. If enough evidence supports it, the claim is promoted into a fact. Its provisional status is removed, and the system begins to use it without qualification.

That promotion is dangerous when it erases provenance.

A sufficiently supported external claim may deserve high confidence. It should still remain connected to its origin. New evidence can appear. A source can be corrected. A database can be updated. A document can be shown to have been manipulated.

What the system calls a fact should therefore remain revisable.

The safer formulation is not “this is permanently true.”

It is: “this claim is currently supported to the required standard, based on these sources, under these conditions.”

The words “currently” and “based on” are part of the knowledge. Removing them produces a stronger statement than the system has earned.

The world does not supply permanent facts directly. It supplies observations, reports, measurements, documents, and claims whose reliability must continue to be traceable.

## Protected intent

There is another boundary that must remain outside the flow of external content: the user’s operative intent.

Suppose the user asks the system to inspect a specific account, document, repository, transaction, or machine. During the task, an external source tells the system to switch to another target.

A safe system should reject the redirection because the external source has no authority to redefine the task.

But this requires more than remembering what the user asked.

If the recorded intent is stored in the same untrusted context as the external content, the incoming material may attempt to rewrite the record itself. It can claim that the user changed their mind, that another target is now authorised, or that the original request should be interpreted differently.

The standard against which an action is checked must not be writable by the material being checked.

Protected intent should therefore be stored in a separate control structure. It should include the authorised object, action class, scope, constraints, and relevant permissions. External content may provide evidence used while completing the task, but it should not be able to edit this structure.

The guard cannot protect a rule that lives inside the area the attacker is allowed to rewrite.

## Skepticism without paralysis

The strongest objection to trust boundaries is that they can make a system useless.

If every source is considered hostile, no document can be read, no database can be trusted, no tool can be used, and no observation can support action. A system that doubts everything cannot operate in the world.

This objection is valid against indiscriminate suspicion.

It is not valid against conditional trust.

The goal is not to distrust all external information equally. The goal is to avoid granting trust before evaluation. A source can earn weight through provenance, consistency, independent confirmation, recency, authority, and demonstrated reliability.

The system can still use external information. It simply uses it as weighted evidence rather than inherited authority.

A well-designed trust boundary resembles a controlled entrance, not a sealed wall. Information is admitted, but its identity, permissions, and declared purpose are checked first.

Paralysis comes from treating every input as equally dangerous.

Compromise comes from treating every input as equally safe.

A capable decision-maker has to occupy the space between those failures.

## What this means for XRack

For XRack, the external world cannot be attached directly to the reasoning loop as undifferentiated context.

Tool outputs, documents, search results, user-provided material, and memory retrievals need explicit types. Their origin and authority should be visible to the runtime.

A retrieved sentence should not become operational merely because the model can read it.

The runtime should enforce several separations:

The user’s protected intent should remain outside untrusted content.

The target of an action should be validated independently.

External claims should retain provenance across reasoning and memory.

Deterministic checks should run before semantic judgment where possible.

Tool output should be treated as data, even when it is written in the language of an instruction.

Actions should be authorised by the runtime, not by text encountered during reasoning.

This is another expression of the XRack line: *"The model proposes, the runtime executes, the ledger proves."*

The model can interpret external information and propose what it may mean. The runtime determines whether an action remains within the authorised task. The ledger preserves where the information came from, how it was classified, and why the resulting action was permitted.

A weak system reads the world and responds.

A stronger system reads the world, classifies what it received, preserves its origin, protects the user’s intent, and refuses to confuse observation with authority.

The difference is not caution in tone. It is control over who is allowed to speak with the system’s voice.

## The next question

Once external information is treated as evidence rather than command, another problem appears.

A system never receives the whole world. It selects.

It chooses which search results to inspect, which paragraphs to retrieve, which memories to recall, which measurements to prioritise, and which sources to exclude. Every context is built from a small number of inclusions and a much larger number of omissions.

This means that provenance alone is not enough.

A system may faithfully explain what it relied on while remaining silent about what it never considered. Its conclusion can be traceable and still be distorted by selection.

The next question is therefore harder:

If honesty requires a decision-maker to show what supported its conclusion, does it also require the system to show what it left outside the frame?

A decision-maker must not accept the world as an instruction.

It must also remember that every view of the world is already a selection.

<!-- tr -->

## Bir orduyu yere seren armağan

Bir karar verici dünyaya kapalı yaşayamaz.

Belge okuması, veritabanı sorgulaması, araç çağırması, arama sonuçlarını incelemesi, sensör ölçümleri alması ve insanları dinlemesi gerekir. Yararlı her eylem bir temasla başlar. Sistem, dışarıda ne olduğunu öğrenmenin başka bir yolu bulunmadığı için kendi bilgisinin ötesine uzanır.

Bu zorunlu uzanış, aynı zamanda sistemin en savunmasız anlarından biridir.

<aside class="anecdote">
<span class="anecdote-label">Eski bir hikâye</span>
<p>MÖ 401, Onbinler'in dönüşü. Pers topraklarının derinliklerinde paralı asker olarak savaşan Yunan ordusu, komutanları öldürüldükten sonra evinden binlerce kilometre uzakta kalır.</p>
<p>Yolculuk sırasında yerel bir bölgeden bal petekleri gelir. Aç ve bitkin askerler balı yer. Kısa süre içinde ordu çöker. Askerler kusar, bedenlerinin kontrolünü kaybeder, şaşkınlık içinde yere yığılır ve ölü gibi hareketsiz kalır. O anda düzenli bir düşman saldırısı gelse ordunun tamamı yok edilebilirdi.</p>
<p>Bal, bölgedeki zehirli bitkilerden beslenen arılar tarafından üretilmiştir. Bunun sıradan bir armağan mı yoksa bilinçli bir tuzak mı olduğu hiçbir zaman tam olarak açıklığa kavuşmaz.</p>
</aside>

Asıl önemli olan, bu olaydan sonra değişen şeydir.

Bir armağan, yalnızca armağan biçiminde geldiği için artık güvenli sayılamaz. Dostça sunulan bir şey, alıcının ilk anda göremeyeceği etkiler taşıyabilir. Ordu yapısal bir ders öğrenmek zorundadır: dışarıdan gelen şey, bedenin parçası olmadan önce muhakemeden geçmelidir.

Bir karar sistemi de aynı disipline ihtiyaç duyar.

## Dünya pasif değildir

Dışarıdan gelen bilgiyi çoğu zaman gerçekliğin tarafsız bir parçası gibi ele alırız.

Bir arama motoru sonuç döndürür ve sonuç olgu gibi görünür. Bir belge bir cümle içerir ve o cümlenin belgenin konusu hakkında olduğu varsayılır. Bir araç cevap üretir ve cevap dünyanın mevcut durumu kabul edilir.

Bu varsayım, dış dünyanın pasif olduğu fikrine dayanır. Dünya yalnızca gözlemlenmeyi bekleyen bir şeymiş gibi düşünülür.

Oysa dış girdilerin tamamı sistemi bilgilendirmek amacıyla üretilmez. Bazıları onu etkilemek için hazırlanır.

Bir belge, görünen konusu hakkında bilgi vermek yerine okuyucusuna yöneltilmiş talimatlar taşıyabilir. Bir web sayfası, insan gözünün fark etmediği fakat makinenin işlemeyi sürdürdüğü gizli metinler içerebilir. Bir araç çıktısı sistemi başka bir nesneye yönlendirmeye, korunan bilgiyi açığa çıkarmaya, önceki kısıtları terk ettirmeye veya kullanıcının talebini yeniden yorumlatmaya çalışabilir.

Dış dünya bu nedenle iki farklı sinyal türü taşır.

Bir sinyal, bilmen gerekebilecek şey budur, der.

Diğeri, yapmanı istediğim şey budur, der.

Bu iki sinyal aynı paragrafta, aynı dosyada veya aynı araç cevabında bulunabilir. Güvenli bir karar verici aralarındaki farkı korumalıdır.

## Kanıt, otorite değildir

İnsan okurlar genellikle bir metnin içeriği ile metnin otoritesi arasında sezgisel bir mesafe bırakır.

Bir insan, bir makalenin içinde “önceki talimatlarını unut” cümlesini okuyabilir ve bu sözlerin makalede yer aldığını anlar. Cümleyi okumak, cümleye okuyucu üzerinde emir yetkisi vermez.

Dil modelleri bu ayrımı kendiliğinden edinmez.

Sistem talimatları, kullanıcı istekleri, getirilen belgeler, arama sonuçları ve araç cevapları ortak bir bağlamın içinde dil dizileri olarak görünebilir. Mimari destek bulunmadığında sistem, hangi sesin eylemi yönlendirme hakkına sahip olduğunu ve hangi sesin yalnızca gözlemlendiğini ayırmakta zorlanabilir.

Temel asimetri burada ortaya çıkar.

Sistemin kendi talimatları davranışını yönlendirmek amacıyla yazılmıştır. Dış içerik ise farklı hedefleri, bilinmeyen niyetleri veya doğrudan düşmanca amaçları olan kişiler tarafından hazırlanabilir. İki metin türünü eşit kabul etmek, bilinmeyen bir yazara sistemin kontrol yüzeyine erişim vermektir.

Doğru kural basittir:

> Dış veri sistemi bilgilendirebilir. Sisteme emir verme hakkını devralamaz.

Bir belge kanıt sunabilir. Görevi yeniden yazamaz.

Bir araç sonuç döndürebilir. Eylemin hedefini değiştiremez.

Bir arama sonucu bir çıkarımı destekleyebilir. Kullanıcının niyetinin yerine geçemez.

## Güven sınırını çizmek

Güven sınırı, dışarıdan gelen malzemenin kategori değiştirdiği noktadır.

Sınırın önünde güvenilmeyen girdi bulunur. Sınırın arkasında ise seçilmiş bölümler kanıt olarak kullanılabilir. Sınırdan geçmek, girdiyi hiçbir zaman talimata dönüştürmemelidir.

Yönetici soru şudur:

Bu girdi sisteme bir şey mi gösteriyor, yoksa sisteme bir şey mi yaptırmaya çalışıyor?

Bu ayrım, dışarıdan gelen her şeyin reddedilmesini gerektirmez. Bilginin doğru statüyle içeri alınmasını gerektirir.

Dışarıdan gelen bir ifade, olgu adayı olarak sisteme girer. Bir kaynağı, zamanı, güven düzeyi ve bağlamı vardır. Başka iddialarla karşılaştırılabilir, bağımsız kanıtlarla sınanabilir veya tutarsız olduğunda reddedilebilir.

Sorgulanamaz bir gerçek olarak içeri girmez.

Daha da önemlisi, emir olarak içeri girmez.

Bu ayrım, algı ile irade arasındaki sınırı korur. Sistemin algısı dünyadan gelen bilgilerle güncellenebilir. İradesi ise kullanıcının niyeti, sistem politikası ve yetkili kontrol yapıları tarafından yönetilmelidir.

Bu fark çöktüğünde, sistemin görüş alanına metin yerleştirebilen herkes davranışını etkilemeye başlayabilir.

## Sınır katmanlı olmalıdır

Anlamlı bir güven sınırı tek bir uyarıya veya tek bir model talimatına dayanamaz.

Sistemin birkaç seviyesinde birden görünmelidir.

En dış katman, yorum gerektirmeyen manipülasyon biçimlerini temizlemelidir. Görünmez karakterler, gizlenmiş metinler, bozuk kodlamalar, beklenmeyen işaretleme biçimleri ve saklı içerikler muhakeme başlamadan önce tespit edilebilir veya normalleştirilebilir.

Bu kontroller değerlidir, çünkü saldırganın ne amaçladığını anlamaları gerekmez. Yapı üzerinde çalışırlar.

İkinci katman, dış çıktının hangi alanları etkileyebileceğini sınırlandırmalıdır. Kullanıcı sistemden belirli bir nesne üzerinde çalışmasını istediyse, bir belge veya araç çıktısı işlemi başka bir nesneye yönlendirememelidir. İzin verilen hedef, güvenilmeyen içeriğin taşındığı kanalın dışında sabitlenmelidir.

Üçüncü katman, gelen malzemenin anlamsal rolünü sınıflandırmalıdır. Dünya hakkında bilgi veren ifadeler kanıt olarak değerlendirilebilir. Sistemi kontrol etmeye çalışan ifadeler ayrıştırılmalı, yok sayılmalı veya raporlanmalıdır.

Bu katmanlar arasındaki fark önemlidir.

Gizli karakterleri temizlemek deterministik olabilir. Bir nesne tanımlayıcısını doğrulamak deterministik olabilir. Bir eylemin yetkili kapsamın dışına çıkıp çıkmadığını kontrol etmek çoğu zaman deterministik olabilir.

Bir cümlenin manipülatif niyet taşıyıp taşımadığına karar vermek ise yorum gerektirir. Yorum yapan her bekçi kandırılabilir.

Sağlam bir mimari bu nedenle mümkün olan en fazla sorumluluğu ikna edilemeyen kurallara verir.

## Bekçi de aynı zafiyeti taşıyabilir

En yanıltıcı güven sınırı tasarımlarından biri, ana dil modelinin önüne ikinci bir dil modeli yerleştirmektir.

Ana modelin savunmasız olduğu kabul edilir ve gelen metnin güvenli olup olmadığına başka bir modelin karar vermesi istenir. Bu yaklaşım tespiti iyileştirebilir, fakat temel problemi ortadan kaldırmaz.

İki model de dil okur.

Ana modeli şaşırtmak için hazırlanmış bir talimat, bekçi modeli de şaşırtabilir. Saldırgan sistemden çıkarılmamıştır. Saldırgana hedefleyebileceği ikinci bir dil yüzeyi verilmiştir.

Bu durum, model tabanlı sınıflandırmayı gereksiz kılmaz. Ona doğru bir rol verir.

Yoruma dayalı sınıflandırma birkaç savunma katmanından biri olmalıdır. Tek kapı olmamalıdır. Yapısal doğrulama, sınırlandırılmış yetenekler, değiştirilemeyen görev tanımlayıcıları, yetki kontrolleri, içerik normalleştirme ve kısıtlı icra yolları güvenlik yükünün mümkün olduğunca büyük kısmını taşımalıdır.

İlke prompt injection probleminden daha geniştir:

> Koruma bir kuralla ifade edilebiliyorsa bütünüyle yargıya devredilmemelidir.

Kuralların yetersiz kaldığı yerde yargı gereklidir. Mekanik olarak reddedilebilecek problemler karşısında ilk savunma hattı olmamalıdır.

## Dışarıdan gelen bir iddianın uzun ömrü

Güven sınırı giriş anında doğru çalışıp daha sonra yine de başarısız olabilir.

Sistemin dışarıdan gelen bir belgeyi okuduğunu düşünelim. Bir ifadeyi düşük güvenli iddia olarak sınıflandırsın, muhakemede dikkatle kullansın ve bir sonuç üretsin. Daha sonra bu sonuç belleğe yazılsın.

Bir sonraki döngüde sistem sonucu geri çağırır. Kaynak belge artık görünmez. Belirsizlik etiketi özetleme sırasında kaybolmuş olabilir. Köken bilgisi kayda hiç geçirilmemiş olabilir.

Geri dönen cümle artık sistemin kendi geçmiş bilgisi gibi konuşur.

Girdi güven sınırından yalnızca bir kez geçmiştir, fakat ondan türeyen kayıtlar sistemin içinde yaşamaya devam eder.

Bu nedenle köken bilgisi, kapıda kontrol edilip atılan geçici bir bilet olamaz. Bilgiyle birlikte taşınmalıdır.

Kalıcı bir kayıt şu sorulara cevap verebilmelidir:

Bu iddia nereden geldi?

Gözlem mi, çıkarım mı, kullanıcı beyanı mı, araç çıktısı mı, belge alıntısı mıydı?

Kaynağın güvenilirliği neydi?

Bilgi hangi dönüşümlerden geçti?

Sonucu hangi ek iddialar destekledi?

En son ne zaman yeniden kontrol edildi?

Bu soruların cevabı korunmazsa, güvenilmeyen bir ifade zamanla içsel bir öncüle dönüşebilir. Dün düşük güvenle alınan bir kanıt, yarın yerleşmiş bir gerçek tonuyla geri dönebilir.

## Bir iddia kökeninden daha büyük hale gelmemelidir

Sistemler doğrulamayı çoğu zaman bir terfi süreci gibi ele alır.

Dışarıdan gelen bir iddia belirsiz olarak başlar. Başka bilgilerle karşılaştırılır. Yeterli destek bulunduğunda olgu seviyesine yükseltilir. Geçici statüsü kaldırılır ve sistem onu nitelendirmeden kullanmaya başlar.

Bu terfi köken bilgisini siliyorsa tehlikelidir.

Güçlü biçimde desteklenen bir dış iddia yüksek güveni hak edebilir. Yine de kaynağıyla bağlantısını korumalıdır. Yeni kanıtlar ortaya çıkabilir. Bir kaynak düzeltilebilir. Veritabanı güncellenebilir. Bir belgenin manipüle edildiği anlaşılabilir.

Sistemin olgu dediği şey bu nedenle yeniden sorgulanabilir kalmalıdır.

Daha güvenli ifade, “bu kalıcı olarak doğrudur” değildir.

Doğru ifade şudur: “Bu iddia, şu kaynaklara ve şu koşullara dayanarak şu anda gerekli standartta desteklenmektedir.”

“Şu anda” ve “dayanarak” ifadeleri bilginin parçasıdır. Bunları kaldırmak, sistemin hak ettiğinden daha güçlü bir iddia üretir.

Dünya kalıcı gerçekleri sisteme doğrudan teslim etmez. Gözlemler, raporlar, ölçümler, belgeler ve güvenilirliği izlenmeye devam etmesi gereken iddialar sunar.

## Korunaklı niyet

Dış içeriğin akışından ayrı tutulması gereken başka bir sınır daha vardır: kullanıcının operasyonel niyeti.

Kullanıcının sistemden belirli bir hesap, belge, repository, işlem veya makine üzerinde çalışmasını istediğini düşünelim. Görev sırasında dış bir kaynak sisteme başka bir hedefe geçmesini söylesin.

Güvenli bir sistem bu yönlendirmeyi reddetmelidir, çünkü dış kaynağın görevi yeniden tanımlama yetkisi yoktur.

Fakat bunun için kullanıcının talebini hatırlamak tek başına yeterli değildir.

Kaydedilen niyet, güvenilmeyen içerikle aynı bağlamda tutuluyorsa dış girdi bu kaydı da yeniden yazmaya çalışabilir. Kullanıcının fikrini değiştirdiğini, başka bir hedefe artık yetki verildiğini veya asıl talebin farklı yorumlanması gerektiğini iddia edebilir.

Bir eylemin kendisine göre doğrulandığı ölçüt, doğrulanan malzeme tarafından değiştirilebilir olmamalıdır.

Korunaklı niyet bu nedenle ayrı bir kontrol yapısında saklanmalıdır. Yetkili nesneyi, eylem sınıfını, kapsamı, kısıtları ve ilgili izinleri içermelidir. Dış içerik görevi tamamlamak için kullanılan kanıtları sağlayabilir, fakat bu yapıyı düzenleyememelidir.

Bekçi, saldırganın yeniden yazabildiği alanın içinde yaşayan bir kuralı koruyamaz.

## Sistemi felç etmeden şüphe etmek

Güven sınırlarına yöneltilebilecek en güçlü itiraz, sistemi işe yaramaz hale getirebilecekleridir.

Her kaynak düşmanca kabul edilirse hiçbir belge okunamaz, hiçbir veritabanına güvenilemez, hiçbir araç kullanılamaz ve hiçbir gözlem eylemi destekleyemez. Her şeyden şüphe eden bir sistem dünyada çalışamaz.

Bu itiraz, ayrımsız şüpheciliğe karşı haklıdır.

Koşullu güvene karşı haklı değildir.

Amaç dışarıdan gelen bütün bilgileri aynı ölçüde güvensiz saymak değildir. Amaç, değerlendirme yapılmadan güven vermemektir. Kaynak; kökeni, tutarlılığı, bağımsız doğrulaması, güncelliği, yetkinliği ve geçmiş güvenilirliği sayesinde ağırlık kazanabilir.

Sistem dış bilgiyi kullanmaya devam edebilir. Onu devralınmış otorite yerine ağırlıklandırılmış kanıt olarak kullanır.

İyi tasarlanmış bir güven sınırı, kapatılmış bir duvara değil kontrollü bir girişe benzer. Bilgi içeri alınır, fakat önce kimliği, yetkisi ve amacı kontrol edilir.

Felç, bütün girdileri eşit derecede tehlikeli saymaktan doğar.

Ele geçirilme ise bütün girdileri eşit derecede güvenli saymaktan doğar.

Yetenekli bir karar verici bu iki arızanın arasındaki alanı korumalıdır.

## Bunun XRack için anlamı

XRack için dış dünya, ayrıştırılmamış bir bağlam olarak doğrudan muhakeme döngüsüne bağlanamaz.

Araç çıktıları, belgeler, arama sonuçları, kullanıcı tarafından sağlanan içerikler ve bellekten getirilen kayıtlar açık türlere sahip olmalıdır. Kökenleri ve otoriteleri runtime tarafından görülebilmelidir.

Bir cümle, model onu okuyabildiği için operasyonel hale gelmemelidir.

Runtime birkaç ayrımı uygulamalıdır:

Kullanıcının korunaklı niyeti güvenilmeyen içeriğin dışında tutulmalıdır.

Eylemin hedefi bağımsız olarak doğrulanmalıdır.

Dış iddialar muhakeme ve bellek boyunca köken bilgilerini korumalıdır.

Mümkün olan yerlerde anlamsal yargıdan önce deterministik kontroller çalışmalıdır.

Araç çıktısı, talimat dilinde yazılmış olsa bile veri olarak ele alınmalıdır.

Eylemler, muhakeme sırasında karşılaşılan bir metin tarafından değil runtime tarafından yetkilendirilmelidir.

Bu, XRack cümlesinin başka bir ifadesidir: *"The model proposes, the runtime executes, the ledger proves."*

Model dış bilgiyi yorumlayabilir ve ne anlama gelebileceğine dair öneri üretebilir. Runtime eylemin yetkili görev sınırlarında kalıp kalmadığına karar verir. Ledger bilginin nereden geldiğini, nasıl sınıflandırıldığını ve sonuçtaki eyleme neden izin verildiğini korur.

Zayıf bir sistem dünyayı okur ve cevap verir.

Daha güçlü bir sistem dünyayı okur, aldığı şeyi sınıflandırır, kökenini korur, kullanıcının niyetini savunur ve gözlem ile otoriteyi birbirine karıştırmaz.

Fark kullanılan temkinli dil değildir. Sistemin sesiyle kimin konuşmasına izin verildiğidir.

## Sonraki soru

Dış bilgi emir yerine kanıt olarak ele alındığında başka bir problem ortaya çıkar.

Bir sistem dünyanın tamamını hiçbir zaman görmez. Seçim yapar.

Hangi arama sonuçlarını inceleyeceğine, hangi paragrafları getireceğine, hangi anıları çağıracağına, hangi ölçümlere öncelik vereceğine ve hangi kaynakları dışarıda bırakacağına karar verir. Her bağlam az sayıdaki kabulden ve çok daha büyük sayıdaki elemeden kurulur.

Bu nedenle köken bilgisi tek başına yeterli değildir.

Bir sistem dayandığı şeyleri dürüstçe açıklayabilir, fakat hiç değerlendirmediği şeyler hakkında sessiz kalabilir. Sonucu izlenebilir olmasına rağmen seçimin kendisi tarafından çarpıtılmış olabilir.

Bir sonraki soru bu nedenle daha zordur:

Dürüstlük, karar vericinin sonucunu neyin desteklediğini göstermesini gerektiriyorsa, çerçevenin dışında bıraktıklarını da göstermesini gerektirir mi?

Bir karar verici dünyayı talimat olarak kabul etmemelidir.

Aynı zamanda, dünyaya ilişkin her görünümün zaten bir seçim olduğunu unutmamalıdır.
