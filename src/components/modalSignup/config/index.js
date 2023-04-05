import * as z from 'zod'

export const schema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string().min(1),
  phone: z.string(),
  address: z.string(),

})
