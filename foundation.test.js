import { describe, it, expect } from 'vitest';

describe('Foundation', () => {
  it('should have a secure Node.js environment', () => {
    const version = process.versions.node.split('.')[0];
    expect(parseInt(version)).toBeGreaterThanOrEqual(20);
  });
});
