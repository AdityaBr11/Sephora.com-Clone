import React from 'react'
import './common.css'
export const Brand = () => {
    const alpha = ["A",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'];
    const alp = alpha.map(alpha=><p className='font-bold'>{alpha}</p> )
    const a=['ABBOTT','Acqua di Parma','adwoa beauty','AERIN','Algenist','Alpha-H','alpyn beauty','ALTERNA Haircare','amika','AMOREPACIFIC','Anastasia Beverly Hills','Aquis','Armani Beauty','Artist Couture','Atelier Cologne','Athr Beauty','Augustinus Bader']
    const as = a.map(a => <div><p>{a}</p></div> )
    const b=['bareMinerals','The Beauty Chef','BeautyBio','beautyblender','belif','Benefit Cosmetics','BERDOUES','Better Not Younger','Bio Ionic','Biossance','blendSMART','Blinc','Bobbi Brown','Bon Parfumeur﻿NEW','BondiBoost','Boy Smells﻿NEW','BREAD BEAUTY SUPPLY','Briogeo','Bumble and bumble','BURBERRY','Buxom','By Rosie Jane']
    const bs = b.map(b => <div><p>{b}</p></div> )
    const c=['caliray','Calvin Klein','CANOPY','Capri Blue','Carolina Herrera','Caudalie','CAY SKIN','Ceremonia','CHANEL','Charlotte Tilbury','Chloé','Christian Louboutin','Christophe Robin','Ciaté London','Cinema Secrets','Clarins','CLEAN RESERVE','CLINIQUE','COACH','COLOR WOW','Commodity﻿NEW','Community Sixty-Six','COOLA','Crown Affair','Curlsmith﻿NEW']
    const cs = c.map(c => <div><p>{c}</p></div> )
    const d=['dae','DAMDAM','Dame','Danessa Myricks Beauty','Deborah Lippmann','DedCool','DEREK LAM 10 CROSBY','DERMAFLASH','Dermalogica','Dior','DOLCE&GABBANA','DOMINIQUE COSMETICS','Donna Karan','dpHUE','Dr. Barbara Sturm','Dr. Brandt Skincare','Dr. Dennis Gross Skincare','Dr. Jart+','Dr. Lara Devgan Scientific Beauty','Dr. Zenovia Skincare','Drunk Elephant','Drybar','DUO','Dyson']
    const ds = d.map(d => <div><p>{d}</p></div> )
    const e=['EADEM','Eight & Bob','Elie Saab','Ellis Brooklyn','Erno Laszlo','Estée Lauder','Evian']
    const es = e.map(e => <div><p>{e}</p></div> )
    const f=['Fable & Mane','FaceGym','Farmacy','Fashion Fair','Fenty Beauty by Rihanna','Fenty Skin','First Aid Beauty','Flora + Bast','Floral Street','FOREO','FORVR Mood','Four Sigmatic','Freck Beauty','fresh']
    const fs = f.map(f => <div><p>{f}</p></div> )
    const g=['ghd','Gisou','Givenchy','GLAMGLOW','Glamnetic','GLO Science','Glow Recipe','Good Dye Young','Google','goop','Grace Eleyae','Grande Cosmetics','Gucci','GUERLAIN','GXVE BY GWEN STEFANI']
    const gs = g.map(g => <div><p>{g}</p></div> )
    const h=['HABIT','Hanni','HAUS LABS BY LADY GAGA','Herbivore','HERETIC','HERMÈS','Hourglass','House of Lashes','HUDA BEAUTY','HUM Nutrition','Hyper Skin']
    const hs = h.map(h => <div><p>{h}</p></div> )
    const i=['Iconic London','IGK','Iles Formula','ILIA','iluminage','INC.redible','Indie Lee','The INKEY List','iNNBEAUTY PROJECT','innisfree','Isle of Paradise','IT Cosmetics','ITEM Beauty By Addison Rae']
    const is = i.map(i => <div><p>{i}</p></div> )
    const j=['Jack Black','Jillian Dempsey','JIMMY CHOO','JLo Beauty','Jo Malone London','John Varvatos','Josie Maran','Jouer Cosmetics','Juicy Couture','Juliette Has a Gun','JVN']
    const js = j.map(j => <div><p>{j}</p></div> )
    const k=['K18 Biomimetic Hairscience','Kaja','Kate McLeod','Kate Somerville','KAYALI','Kérastase','Kiehls Since 1851','KILIAN Paris','Kitsch','KNC Beauty','Koh Gen Do','Kopari','KORA Organics','KORRES','Kosas','Kulfi','KVD Beauty']
    const ks = k.map(k => <div><p>{k}</p></div> )
    const l=["L'Occitane","L'Oreal Professionnel","La Mer","Lancôme","LANEIGE","LASHFOOD","Laura Mercier","LAWLESS","LightStim","lilah b.","Lilly Lashes","Living Proof","Lord Jones","LXMI","LYS Beauty"]
    const ls = l.map(l => <div><p>{l}</p></div> )
    const m=['Madison Reed','Maison Louis Marie','Maison Margiela','MAKE UP FOR EVER','MAKEUP BY MARIO','Marc Jacobs Fragrances','Mario Badescu','maude','Melanin Haircare','Melt Cosmetics','MERIT','Milk Makeup','Mizani','Montblanc','Moon Juice','Moroccanoil','Mount Lai','Mugler','Murad']
    const ms = m.map(m => <div><p>{m}</p></div> )
    const n=['NAILS INC.','Narciso Rodriguez','NARS','Natasha Denona','Naturally Serious','Nécessaire','NEST New York','NUDESTIX','The Nue Co.','NuFACE','Nurse Jamie']
    const ns = n.map(n => <div><p>{n}</p></div> )
    const o=['O&M','Olaplex','OLEHENRIKSEN','ONE/SIZE by Patrick Starrr','The Ordinary','Oribe','The Original MakeUp Eraser','Origins','OTHERLAND','OTZI','OUAI','The Outset','Overose']
    const os = o.map(o => <div><p>{o}</p></div> )
    const p=['Paco Rabanne','PAT McGRATH LABS','PATRICK TA','PATTERN by Tracee Ellis Ross','Paulas Choice','Peace Out','Peter Thomas Roth','philosophy','The Phluid Project','PHLUR','PMD','Prada','Prima','Pureology']
    const ps = p.map(p => <div><p>{p}</p></div> )
    const q=['Rahua','Ralph Lauren','RANAVAT','Rare Beauty by Selena Gomez','REFY','REN Clean Skincare','Reverie','RIES﻿NEW','rms beauty','ROSE INC','ROSE Ingleton MD','Rosebud Perfume Co','Rossano Ferretti Parma']
    const qs = q.map(q => <div><p>{q}</p></div> )
    const s=['Saie','Saint Jane','Sakara Life','Selfless by Hyram','SEPHORA COLLECTION','Sephora Favorites','Shani Darden Skin Care','Shiseido','shu uemura','SIMIHAZE BEAUTY﻿NEW','SK-II','Skin Laundry','Skinfix','Skylar﻿NEW','Slip','Smashbox','SOBEL SKIN Rx','Sol de Janeiro','St. Tropez','stila','StriVectin','Sulwhasoo','Summer Fridays','SUNDAY II SUNDAY','Sunday Riley','Supergoop!','Susteau']
    const ss = s.map(s => <div><p>{s}</p></div> )
    const t=['T3','TAN-LUXE','tarte','Tata Harper','Tatcha','This Works','TOCCA','TOM FORD','Too Faced','Topicals','Tory Burch','Touchland','Tower 28 Beauty','TULA Skincare','Tweezerman']
    const ts = t.map(t => <div><p>{t}</p></div> )
    const u=["Urban Decay"]
    const us = u.map(u => <div><p>{u}</p></div> )
    const v=['Valentino','Vegamour','Velour Lashes','Verb','Versace','Viktor&Rolf','Violet Voss','Viori','Virtue','Viseart','Vitruvi','Volition Beauty','Voluspa']
    const vs = v.map(v => <div><p>{v}</p></div> )
    const w=['Wander Beauty','WASO','Westman Atelier','Wishful']
    const ws = w.map(w => <div><p>{w}</p></div> )
    const y=['Youth To The People','Yves Saint Laurent']
    const ys = y.map(y => <div><p>{y}</p></div> )
    const z=['19-69','54 Thrones','The 7 Virtues','8Greens']
    const zs = z.map(z => <div><p>{z}</p></div> )
  return (
    <div className='px-36 py-12 divide-y-2 b'>
        <div className="flex space-x-8 justify-center mb-8">{alp}</div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>A</h2>
           <div className="yahi">
               {as}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>B</h2>
           <div className="yahi">
               {bs}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>C</h2>
           <div className="yahi">
               {cs}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>D</h2>
           <div className="yahi">
               {ds}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>E</h2>
           <div className="yahi">
               {es}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>F</h2>
           <div className="yahi">
               {fs}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>G</h2>
           <div className="yahi">
               {gs}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>H</h2>
           <div className="yahi">
               {hs}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>I</h2>
           <div className="yahi">
               {is}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>J</h2>
           <div className="yahi">
               {js}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>K</h2>
           <div className="yahi">
               {ks}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>L</h2>
           <div className="yahi">
               {ls}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>M</h2>
           <div className="yahi">
               {ms}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>N</h2>
           <div className="yahi">
               {ns}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>O</h2>
           <div className="yahi">
               {os}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>P</h2>
           <div className="yahi">
               {ps}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>R</h2>
           <div className="yahi">
               {qs}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>S</h2>
           <div className="yahi">
               {ss}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>T</h2>
           <div className="yahi">
               {ts}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>U</h2>
           <div className="yahi">
               {us}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>V</h2>
           <div className="yahi">
               {vs}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>W</h2>
           <div className="yahi">
               {ws}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>Y</h2>
           <div className="yahi">
               {ys}
           </div>
        </div>
        <div className="flex justify-center my-12 pt-8">
           <h2 className='mr-20 ml-40 font-bold text-lg'>#</h2>
           <div className="yahi">
               {zs}
           </div>
        </div>
    </div>
    )}