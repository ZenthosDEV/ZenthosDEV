'use client'

import { Tab, Tabs } from '@heroui/tabs'
import { notoSerif } from '../fonts/fonts'
import { cn } from '@heroui/react'
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavBarProps {
  className?: string
}

const NavBar = ({ className }: NavBarProps) => {
  const pathname = usePathname()
  const router = useRouter()
  const [selected, setSelected] = useState('zengames')

  useEffect(() => {
    setSelected(pathname)
  }, [pathname])

  const onChange = (key: string | number): void => {
    router.push(key.toLocaleString());
  }

  return (
    <nav className={cn('flex justify-center mb-8', className)}>
      <Tabs selectedKey={selected} onSelectionChange={onChange} classNames={{
        tabList: 'backdrop-filter backdrop-blur-sm bg-opacity-0 border-1 border-white/10 px-4 py-3',
        tab: 'text-xl',
        cursor: 'bg-white/10',
        tabContent: `${notoSerif.className}`
      }} radius='full' color='primary'>
        <Tab key="/" title="Home" />
        <Tab key="/darkvale" title="DARKVALE" />
        <Tab key="/news" title="News" />
        <Tab key="/account" title="Account" />
        <Tab key="/downloads" title="Downloads" />
      </Tabs>
    </nav>
  )
}

export default NavBar
