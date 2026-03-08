import z from 'zod'

export const ColumnKey = {
  id: 'id',
  entityId: 'entityId',
  entity: 'entity',
  action: 'action',
  userId: 'userId',
  createdAt: 'createdAt',
}

export const logSchema = z.object({
  id: z.string(),
  entity: z.string().nullable(),
  entityId: z.string().nullable(),
  action: z.string(),
  userId: z.string().nullish(),
  oldValue: z.any().nullish(),
  newValue: z.any().nullish(),
  user: z
    .object({
      id: z.string(),
      fullName: z.string().nullable(),
      email: z.string().nullable(),
    })
    .nullish(),
  createdAt: z.string(),
})

export type ActivityLogSchema = z.infer<typeof logSchema>
