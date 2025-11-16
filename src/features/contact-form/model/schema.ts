import { v } from '@/shared/lib/forms';

export const contactFormSchema = v.object({
  contactPerson: v.pipe(v.string(), v.nonEmpty('This field is required.')),
  email: v.pipe(
    v.string(),
    v.email('Please check your email address and provide a correct one.'),
  ),
  company: v.pipe(v.string(), v.nonEmpty('This field is required.')),
  phone: v.pipe(v.string(), v.minLength(5, 'This field is required.')),
  request: v.pipe(v.string()),
});
