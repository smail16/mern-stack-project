import * as z from 'zod'

export const schema = z.object({
  fullName: z.string().min(1),
  phone: z.string().min(1),
})
