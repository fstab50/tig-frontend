import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { env, createExecutionContext, waitOnExecutionContext } from 'cloudflare:test';
import { describe, it, expect } from 'vitest';

const workerPath = join(
	dirname(fileURLToPath(import.meta.url)),
	'../.open-next/worker.js',
);

const hasBuiltWorker = existsSync(workerPath);

if (!hasBuiltWorker) {
	describe.skip('Next.js worker', () => {
		it('requires `npx opennextjs-cloudflare build` before running tests', () => {
			expect(true).toBe(true);
		});
	});
} else {
	const workerModule = await import(workerPath);
	const worker = workerModule.default ?? workerModule;

	describe('Next.js worker', () => {
		it('responds with a document for /', async () => {
			const request = new Request('http://example.com/');
			const ctx = createExecutionContext();
			const response = await worker.fetch(request, env, ctx);
			await waitOnExecutionContext(ctx);
			expect(response.status).toBe(200);
			const contentType = response.headers.get('content-type') ?? '';
			expect(contentType).toMatch(/text\/html/);
		});
	});
}
