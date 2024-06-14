import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

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
    <div className="flex space-x-1">
      {tabs.map((tab) => (
        <NavLink
          to={tab.href}
          key={tab.id}
          className={`${
            activeTab === tab.id ? '' : 'hover:text-white/60'
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-white mix-blend-difference"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </NavLink>
      ))}
    </div>
  )
}

export default Navbar
