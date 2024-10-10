import { Box, Button, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export function ClainUsernameForm() {
  return (
    <Box
      as="form"
      className="grid grid-cols-1fr md:grid-cols-[1fr_auto] gap-2 mr-4 p-4"
    >
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuario" />
      <Button>
        Reservar
        <ArrowRight />
      </Button>
    </Box>
  )
}
