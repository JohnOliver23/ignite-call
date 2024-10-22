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
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export default function Register() {
  const registerFormSchema = z.object({
    username: z
      .string()
      .min(3, { message: 'O Usuário precisa ter pelo menos 3 letras.' })
      .regex(/^([a-z\\\\-]+)$/i, {
        message: 'O usuário pode ter apenas letras e hifens.',
      })
      .transform((username) => username.toLocaleLowerCase()),
    name: z
      .string()
      .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),
  })

  type RegisterFormData = z.infer<typeof registerFormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

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

        <Box
          as="form"
          className="mt-6 flex flex-col gap-4"
          onSubmit={handleSubmit(handleRegister)}
        >
          <label className="flex flex-col gap-2">
            <Text size="sm"> Nome do usuário </Text>
            <TextInput
              prefix="ignite.com/"
              placeholder="seu-usuário"
              {...register('username')}
            />
            {errors.username && (
              <Text size="sm">
                <div className="text-red-400">{errors.username.message}</div>
              </Text>
            )}
          </label>

          <label className="flex flex-col gap-2">
            <Text size="sm"> Nome completo</Text>
            <TextInput placeholder="Seu nome" {...register('name')} />
            {errors.name && (
              <Text size="sm">
                <div className="text-red-400">{errors.name.message}</div>
              </Text>
            )}
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
