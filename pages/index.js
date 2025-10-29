import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Header from '../components/Header'

const products = [
  { id:1, key:'mixer', zh:'和面机', en:'Dough Mixer', fr:'Pétrin', image:'/public-placeholder-mixer.jpg' },
  { id:2, key:'laminoir', zh:'压面机', en:'Laminoir', fr:'Laminoir', image:'/public-placeholder-laminoir.jpg' },
  { id:3, key:'proofer', zh:'醒发箱', en:'Proofer', fr:'Chambre de fermentation', image:'/public-placeholder-proofer.jpg' },
  { id:4, key:'freezer', zh:'冰柜', en:'Freezer', fr:'Congélateur', image:'/public-placeholder-freezer.jpg' },
  { id:5, key:'workbench', zh:'操作平台', en:'Work Platform', fr:'Plateforme de travail', image:'/public-placeholder-workbench.jpg' },
  { id:6, key:'chariot', zh:'烤车', en:'Chariot', fr:'Chariot', image:'/public-placeholder-chariot.jpg' },
]

export default function Home() {
  const [lang, setLang] = useState('en')
  const t = {
    zh:{ productsTitle:'产品系列', contactTitle:'联系我们', inquire:'立即询价', brochure:'下载产品手册' },
    en:{ productsTitle:'Product Ranges', contactTitle:'Contact Us', inquire:'Request Quote', brochure:'Download Brochure' },
    fr:{ productsTitle:'Séries de Produits', contactTitle:'Contactez-nous', inquire:'Demander un devis', brochure:'Télécharger la brochure' }
  }[lang]

  return (
    <div>
      <Head>
        <title>juyi CHR - {lang==='zh' ? '供应链管理' : 'Supply Chain Management'}</title>
        <meta name="description" content="JUYI CHR - bakery equipment" />
      </Head>

      <Header lang={lang} setLang={setLang} />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <section className="bg-white rounded-lg p-6 shadow mb-8">
          <div className="md:flex items-center gap-6">
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{lang==='zh' ? '专业的烘焙设备与一站式解决方案' : lang==='fr' ? 'Équipements de boulangerie professionnels & solutions tout-en-un' : 'Professional bakery equipment & one-stop solutions'}</h1>
              <p className="mt-3 text-gray-600">JUYI provides quality bakery machines and full supply-chain support for bakeries and distributors worldwide.</p>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 bg-amber-500 text-white rounded">{t.inquire}</button>
                <button className="px-4 py-2 border rounded">{t.brochure}</button>
              </div>
            </div>
            <div className="w-48 h-48 bg-gray-100 rounded flex items-center justify-center">
              <Image src="/logo.png" alt="logo" width={160} height={160} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">{t.productsTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(p=>(
              <div key={p.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <img src={p.image==='/'?'/logo.png':p.image} alt={p.zh} className="max-h-full" />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-lg">{lang==='zh'?p.zh:lang==='en'?p.en:p.fr}</div>
                  <p className="mt-2 text-sm text-gray-600">Model / Modèle</p>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="text-sm px-3 py-1 border rounded">{t.inquire}</button>
                    <a className="text-sm underline">Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{t.contactTitle}</h3>
          <p className="mt-3 text-gray-600">Email: info@juyi-chr.com</p>
          <p className="mt-1 text-gray-600">WhatsApp: +86 150 0033 3056</p>
          <p className="mt-1 text-gray-600">Address: Shenzhen, China</p>
        </section>

      </main>

      <footer className="bg-gray-900 text-gray-200 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div>© juyi CHR All rights reserved</div>
          <div className="text-sm">Languages: 中文 / EN / FR</div>
        </div>
      </footer>
    </div>
  )
}
