import * as z from 'zod'

export const schema = z.object({
  address: z.string().min(1),
  zip: z.string().min(1),
  city: z.string().min(1),
})
