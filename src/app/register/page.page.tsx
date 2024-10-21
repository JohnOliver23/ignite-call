'use client'

import {
  Box,
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <main className="max-w-[572px] mt-20 mx-auto mb-4  py-0 px-4">
      <div className="py-0 px-6">
        <Heading as="strong">Bem vindo ao Ignite call</Heading>
        <Text>
          <div className="mt-2 text-gray-400 leading-4 mb-6">
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar as informaçòes depois.
          </div>
        </Text>

        <MultiStep size={4} currentStep={1}></MultiStep>

        <Box as="form" className="mt-6 flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <Text size="sm"> Nome do usuário </Text>
            <TextInput prefix="ignite.com/" placeholder="seu-usuário" />
          </label>

          <label className="flex flex-col gap-2">
            <Text size="sm"> Nome completo</Text>
            <TextInput placeholder="Seu nome" />
          </label>

          <Button type="submit">
            Próximo passo
            <ArrowRight />
          </Button>
        </Box>
      </div>
    </main>
  )
}
