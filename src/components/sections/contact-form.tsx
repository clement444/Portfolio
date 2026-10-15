'use client';

import * as React from 'react';
import {
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiSendPlaneLine,
} from '@remixicon/react';

import * as Alert from '@/components/ui/alert';
import * as Button from '@/components/ui/button';
import * as Hint from '@/components/ui/hint';
import * as Input from '@/components/ui/input';
import * as Label from '@/components/ui/label';
import * as Textarea from '@/components/ui/textarea';
import { contactSchema } from '@/lib/contact-schema';
import type { ContactApiResponse, ContactFormValues } from '@/types/contact';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

interface ValidationIssue {
  path: PropertyKey[];
  message: string;
}

const emptyFormValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
  website: '',
};

const GENERIC_ERROR_MESSAGE =
  "Le message n'a pas pu être envoyé. Merci de réessayer plus tard.";

function collectFieldErrors(issues: ValidationIssue[]): FieldErrors {
  const errors: FieldErrors = {};

  for (const issue of issues) {
    const field = issue.path[0];

    if (typeof field !== 'string') {
      continue;
    }

    const typedField = field as keyof ContactFormValues;

    if (errors[typedField] === undefined) {
      errors[typedField] = issue.message;
    }
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = React.useState<ContactFormValues>(emptyFormValues);
  const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({});
  const [status, setStatus] = React.useState<FormStatus>('idle');
  const [feedback, setFeedback] = React.useState('');

  function updateField(field: keyof ContactFormValues, value: string) {
    setValues((previousValues) => {
      return { ...previousValues, [field]: value };
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = contactSchema.safeParse(values);

    if (!validation.success) {
      setFieldErrors(collectFieldErrors(validation.error.issues));
      setStatus('idle');
      setFeedback('');

      return;
    }

    setFieldErrors({});
    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const payload: ContactApiResponse = await response.json();

      if (!response.ok) {
        setStatus('error');
        setFeedback(payload.message || GENERIC_ERROR_MESSAGE);

        return;
      }

      setStatus('success');
      setFeedback(payload.message);
      setValues(emptyFormValues);
    } catch {
      setStatus('error');
      setFeedback(GENERIC_ERROR_MESSAGE);
    }
  }

  const isLoading = status === 'loading';

  return (
    <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-5'>
      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='contact-nom'>
          Nom
          <Label.Asterisk />
        </Label.Root>
        <Input.Root hasError={fieldErrors.name !== undefined}>
          <Input.Wrapper>
            <Input.Input
              id='contact-nom'
              name='nom'
              type='text'
              autoComplete='name'
              placeholder='Votre nom'
              value={values.name}
              disabled={isLoading}
              aria-invalid={fieldErrors.name !== undefined}
              aria-describedby='contact-nom-erreur'
              onChange={(event) => updateField('name', event.target.value)}
            />
          </Input.Wrapper>
        </Input.Root>
        {fieldErrors.name ? (
          <Hint.Root id='contact-nom-erreur' hasError>
            <Hint.Icon as={RiErrorWarningFill} />
            {fieldErrors.name}
          </Hint.Root>
        ) : null}
      </div>

      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='contact-email'>
          Email
          <Label.Asterisk />
        </Label.Root>
        <Input.Root hasError={fieldErrors.email !== undefined}>
          <Input.Wrapper>
            <Input.Input
              id='contact-email'
              name='email'
              type='email'
              autoComplete='email'
              placeholder='vous@exemple.fr'
              value={values.email}
              disabled={isLoading}
              aria-invalid={fieldErrors.email !== undefined}
              aria-describedby='contact-email-erreur'
              onChange={(event) => updateField('email', event.target.value)}
            />
          </Input.Wrapper>
        </Input.Root>
        {fieldErrors.email ? (
          <Hint.Root id='contact-email-erreur' hasError>
            <Hint.Icon as={RiErrorWarningFill} />
            {fieldErrors.email}
          </Hint.Root>
        ) : null}
      </div>

      <div className='flex flex-col gap-1'>
        <Label.Root htmlFor='contact-message'>
          Message
          <Label.Asterisk />
        </Label.Root>
        <Textarea.Root
          simple
          id='contact-message'
          name='message'
          rows={6}
          placeholder='Votre message'
          value={values.message}
          disabled={isLoading}
          hasError={fieldErrors.message !== undefined}
          aria-invalid={fieldErrors.message !== undefined}
          aria-describedby='contact-message-erreur'
          onChange={(event) => updateField('message', event.target.value)}
        />
        {fieldErrors.message ? (
          <Hint.Root id='contact-message-erreur' hasError>
            <Hint.Icon as={RiErrorWarningFill} />
            {fieldErrors.message}
          </Hint.Root>
        ) : null}
      </div>

      <div aria-hidden='true' className='hidden'>
        <label htmlFor='contact-site-web'>Site web</label>
        <input
          id='contact-site-web'
          name='site-web'
          type='text'
          tabIndex={-1}
          autoComplete='off'
          value={values.website}
          onChange={(event) => updateField('website', event.target.value)}
        />
      </div>

      <div aria-live='polite'>
        {status === 'success' ? (
          <Alert.Root variant='lighter' status='success' size='small'>
            <Alert.Icon as={RiCheckboxCircleFill} />
            {feedback}
          </Alert.Root>
        ) : null}
        {status === 'error' ? (
          <Alert.Root variant='lighter' status='error' size='small'>
            <Alert.Icon as={RiErrorWarningFill} />
            {feedback}
          </Alert.Root>
        ) : null}
      </div>

      <div>
        <Button.Root
          type='submit'
          variant='primary'
          mode='filled'
          size='medium'
          disabled={isLoading}
        >
          <Button.Icon as={RiSendPlaneLine} />
          {isLoading ? 'Envoi en cours' : 'Envoyer le message'}
        </Button.Root>
      </div>
    </form>
  );
}
