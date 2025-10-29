import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Header({ lang, setLang }) {
  const router = useRouter()
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="JUYI" width={60} height={60} />
          <div>
            <div className="font-bold text-lg">{lang==='zh' ? 'juyi CHR 供应链管理' : lang==='fr' ? 'juyi CHR Supply Chain Management' : 'juyi CHR Supply Chain Management'}</div>
            <div className="text-sm text-gray-500">{lang==='zh' ? '专业的烘焙设备与一站式解决方案' : lang==='fr' ? 'Équipements de boulangerie professionnels & solutions tout-en-un' : 'Professional bakery equipment & one-stop solutions'}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={()=>setLang('zh')} className={`px-2 py-1 rounded ${lang==='zh' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>中文</button>
          <button onClick={()=>setLang('en')} className={`px-2 py-1 rounded ${lang==='en' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>EN</button>
          <button onClick={()=>setLang('fr')} className={`px-2 py-1 rounded ${lang==='fr' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}>FR</button>
        </div>
      </div>
    </header>
  )
}
