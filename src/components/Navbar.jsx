import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Crown from './Ornament/OrnamentCrown'
import FooterLeft from './Ornament/OrnamentFooterLeft'
import FooterRight from './Ornament/OrnamentFooterRight'

let tabs = [
  { id: 'home', label: 'Inicio', href: '/' },
  { id: 'products', label: 'Productos', href: '/productos' },
  { id: 'contact', label: 'Contacto', href: '/contacto' },
]

const Navbar = () => {
  const location = useLocation()
  let [activeTab, setActiveTab] = useState(tabs[0].id)

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.href === location.pathname)
    if (currentTab) {
      setActiveTab(currentTab.id)
    }
  }, [location.pathname])

  return (
    <div className="flex space-x-1 bg-[#403D2E] rounded-full p-1 drop-shadow-lg">
      {tabs.map((tab) => (
        <NavLink
          to={tab.href}
          key={tab.id}
          className={
            'relative px-8 py-1 text-sm font-medium text-white transition'
          }
        >
          {/* Placeholder del ornamento */}
          <div
            className={`${activeTab === tab.id ? 'hidden' : 'flex items-center justify-center relative z-10'}`}
          >
            <Crown width={'14px'} height={'9px'} />
          </div>

          {activeTab === tab.id && (
            <>
              <motion.div
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-[#26211E] drop-shadow-lg rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />

              <motion.div
                className="flex items-center justify-center relative inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Crown width={'14px'} height={'9px'} color={'#FCEFBB'} />
              </motion.div>

              <span className="font-serif text-base font-normal text-[#FCEFBB] relative z-10">
                {tab.label}
              </span>

              <motion.div
                className="flex items-center justify-between relative inset-0 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <FooterLeft width={'10px'} height={'10px'} color={'#FCEFBB'} />
                <FooterRight width={'10px'} height={'10px'} color={'#FCEFBB'} />
              </motion.div>
            </>
          )}
          <span
            className={`${activeTab === tab.id ? 'hidden' : 'font-serif text-base font-normal text-[#FCEFBB]'}`}
          >
            {tab.label}
          </span>

          {/* Placeholder del ornamento */}
          <div
            className={`${activeTab === tab.id ? 'hidden' : 'flex items-center justify-between relative z-10'}`}
          >
            <FooterLeft width={'10px'} height={'10px'} />
            <FooterRight width={'10px'} height={'10px'} />
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default Navbar
