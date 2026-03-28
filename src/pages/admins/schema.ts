import z from 'zod'
import { IMAGE_ACCEPTED_FORMATS, MAX_IMAGE_SIZE_MB } from '@/global'
import i18n from '@/i18n'
import { roleSchema } from '../roles/schema'

export const ColumnKey = {
  email: 'email',
  firstname: 'firstname',
  lastname: 'lastname',
  fullname: 'fullname',
  verifiedAt: 'verifiedAt',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  avatar: 'avatar',
}

export const adminSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  fullname: z.string(),
  phone: z.string().nullable(),
  birthday: z.string().nullable(),
  email: z.string(),
  bio: z.string().nullish(),
  avatar: z.string().nullish(),
  verifiedAt: z.boolean(),
  role: roleSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
})

export type AdminSchema = z.infer<typeof adminSchema>

const passwordSchema = z
  .string()
  .min(8, { message: 'Password must be at least 8 characters' })
  .max(20, { message: 'Password must be at most 20 characters' })
  .refine((password) => /[A-Z]/.test(password), {
    message: 'Password must contain at least one uppercase letter',
  })
  .refine((password) => /[a-z]/.test(password), {
    message: 'Password must contain at least one lowercase letter',
  })
  .refine((password) => /[0-9]/.test(password), {
    message: 'Password must be contain at least one number letter',
  })
  .refine((password) => /[!@#$%^&*]/.test(password), {
    message: 'Password must contain at least one special character (!@#$%^&*)',
  })

export const adminCreateSchema = z
  .object({
    firstname: z
      .string({ error: i18n.t('validation.required') })
      .min(1, 'First name is required'),
    lastname: z
      .string({ error: i18n.t('validation.required') })
      .min(1, 'Last name is required'),
    phone: z.string().optional(),
    birthday: z.string().nullish(),
    email: z.email('Invalid email address'),
    password: passwordSchema,
    confirmPassword: z
      .string({ error: i18n.t('validation.required') })
      .min(8, 'Confirm Password must be at least 8 characters'),
    roleId: z.string({ error: i18n.t('validation.required') }),
    bio: z.string().optional(),
    avatar: z
      .instanceof(File)
      .optional()
      .refine(
        (f) => !f || f.size <= MAX_IMAGE_SIZE_MB,
        'File size is too large'
      )
      .refine(
        (f) => !f || IMAGE_ACCEPTED_FORMATS.includes(f.type),
        'Unsupported file format'
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type AdminCreateSchema = z.infer<typeof adminCreateSchema>

export const adminEditSchema = z.object({
  firstname: z
    .string({ error: i18n.t('validation.required') })
    .min(1, 'First name is required'),
  lastname: z
    .string({ error: i18n.t('validation.required') })
    .min(1, 'Last name is required'),
  phone: z.string().optional(),
  birthday: z.string().nullish(),
  email: z.email('Invalid email address'),
  roleId: z.string({ error: i18n.t('validation.required') }),
  bio: z.string({ error: i18n.t('validation.required') }).nullish(),
  avatar: z
    .instanceof(File)
    .optional()
    .refine((f) => !f || f.size <= MAX_IMAGE_SIZE_MB, 'File size is too large')
    .refine(
      (f) => !f || IMAGE_ACCEPTED_FORMATS.includes(f.type),
      'Unsupported file format'
    ),
})

export type AdminEditSchema = z.infer<typeof adminEditSchema>
