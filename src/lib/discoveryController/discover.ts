import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

import { SpotifyError } from '@lib/spotify';

import { runDiscovery } from './runDiscovery';

export async function discover(request: Request) {
  let prompt = '';
  let mock = false;

  try {
    const body = (await request.json()) as { prompt?: unknown; mock?: unknown };

    if (typeof body.prompt === 'string') {
      prompt = body.prompt.trim();
    }

    // Sent by the client, so it can be anything. Only a real boolean counts;
    // anything else falls back to the default.
    if (typeof body.mock === 'boolean') {
      mock = body.mock;
    }
  } catch {
    return NextResponse.json({ error: 'Expected a JSON body.' }, { status: 400 });
  }

  if (prompt.length < 3) {
    return NextResponse.json(
      { status: 'rejected', message: 'Describe a mood, activity or vibe.' },
      { status: 400 },
    );
  }

  try {
    const outcome = await runDiscovery(prompt, mock);

    return NextResponse.json(outcome, { status: 200 });
  } catch (cause) {
    const { error, status } = toFailure(cause);

    return NextResponse.json({ error }, { status });
  }
}

function toFailure(cause: unknown): { error: string; status: number } {
  if (cause instanceof SpotifyError) {
    return { error: cause.message, status: cause.status };
  }

  if (cause instanceof Anthropic.APIError) {
    // The user gets something calm; the log gets what actually happened.
    console.error('[discover] anthropic error:', cause.status, cause.message);

    return { error: 'The music model is unavailable right now.', status: cause.status ?? 502 };
  }

  if (cause instanceof ZodError) {
    return { error: 'The music model returned an unusable answer.', status: 502 };
  }

  console.error('[discover] unexpected failure:', cause);

  return { error: 'Something went wrong.', status: 500 };
}
