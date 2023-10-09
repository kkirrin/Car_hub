'use client'

import { SeacrhManufacturerProps } from '@/types/types'
import { manufacturers } from '@/data/constans'
import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image'
const SearchManufacturer = ({setManufacturer, manufacturer}: SeacrhManufacturerProps) => {
  
  const [query, setQuery] = useState('')
  const filteredManufactures = 
    query === "" 
    ? manufacturers 
    : manufacturers.filter((item) => (
        item.toLowerCase()
          .replace(/\s+/g,"")
          .includes(query.toLocaleLowerCase() .replace(/\s+/g,""))
    ))
  return (
    <div className='seacrh-manufacturer'>
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className='relative w-full'>
            <Combobox.Button className='absolute top-[14px]'>
              <Image src='/car-logo.svg' alt='logo' width={20} height={20} />
            </Combobox.Button>
            <Combobox.Input 
              className='search-manufacturer__input' 
              placeholder='Volkswagen' 
              displayValue={(manufacturer: string) => manufacturer} 
              onChange={(e) => setQuery(e.target.value)}
            />

            <Transition
              as={Fragment}  
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              afterLeave={() => setQuery('')}
            >
              <Combobox.Options>
                {filteredManufactures.map((item) => (
                  <Combobox.Option 
                    value={item}
                    key={item} 
                    className={({ active}) => `relative seacrh-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>
                    {item}
                  </Combobox.Option>
                ))
              }
              {({ selected, active }) => (
                <>
                  <span 
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {item}
                  </span>
                  {selected ? (
                    <span
                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}
                      ></span>
                  ) : null}
                </>
              )}
              </Combobox.Options>
            </Transition>
        </div>  
      </Combobox>
    </div>
  )
}

export default SearchManufacturer