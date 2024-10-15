import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Uusuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLocaleLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClainUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }
  return (
    <>
      <Box
        as="form"
        className="grid grid-cols-1fr md:grid-cols-[1fr_auto] gap-2 mr-4 p-4"
        onSubmit={handleSubmit(handleClaimUsername)}
      >
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button>
          Reservar
          <ArrowRight />
        </Button>
      </Box>

      <Text size="sm">
        <div className="mt-2 text-gray-400">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário desejado'}
        </div>
      </Text>
    </>
  )
}
