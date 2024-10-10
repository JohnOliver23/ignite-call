'use client'

import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import previewImage from '@/app/assets/app-preview.png'
import { ClainUsernameForm } from './components/ClainUsernameForm'

export default function Home() {
  return (
    <div className="flex items-center gap-20 ml-auto max-w-[calc(100vw-(100vw-1160px)/2)] h-[100vh]">
      <div className="max-w-[480px] p-10">
        <Heading as="h1" size="4xl" className="font-bold text-white">
          Agendamento descomplicado
        </Heading>

        <Text size="xl" className="p-2 font-normal ">
          {' '}
          <div className="text-gray-400">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </div>
        </Text>

        <ClainUsernameForm />
      </div>

      <div className="pr-8 overflow-hidden hidden md:block">
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário simbolizando aplicação em funcionamento"
        />
      </div>
    </div>
  )
}
