import test from 'node:test';
import assert from 'node:assert/strict';
import {
  convertPrice,
  calculateDiscountPercentage,
  calculateTimeRemaining,
} from './pricing.ts';

test('convertPrice converts EUR to EUR correctly', () => {
  const result = convertPrice(39, 'EUR');
  assert.equal(result.amount, 39);
  assert.equal(result.formatted, '39 €');
});

test('convertPrice converts EUR to Franc CFA (XOF) rounded to nearest 500', () => {
  // 39 * 655.957 = 25582.323 -> rounded to nearest 500 = 25500
  const result = convertPrice(39, 'XOF');
  assert.equal(result.amount, 25500);
  assert.ok(result.formatted.includes('FCFA'));
});

test('convertPrice converts EUR to USD with prefix', () => {
  // 39 * 1.08 = 42.12 -> rounded to 42
  const result = convertPrice(39, 'USD');
  assert.equal(result.amount, 42);
  assert.ok(result.formatted.startsWith('$'));
});

test('calculateDiscountPercentage returns exact integer percent', () => {
  const discount = calculateDiscountPercentage(99, 39);
  // (99 - 39) / 99 = 60 / 99 = 60.6% -> 61%
  assert.equal(discount, 61);
});

test('calculateTimeRemaining returns accurate remaining units', () => {
  const now = 1700000000000;
  // + 2 hours, 15 minutes, 30 seconds
  const target = now + (2 * 3600 + 15 * 60 + 30) * 1000;
  const rem = calculateTimeRemaining(target, now);
  assert.equal(rem.hours, 2);
  assert.equal(rem.minutes, 15);
  assert.equal(rem.seconds, 30);
  assert.equal(rem.isExpired, false);
});

test('calculateTimeRemaining marks expired correctly', () => {
  const now = 1700000000000;
  const target = now - 5000;
  const rem = calculateTimeRemaining(target, now);
  assert.equal(rem.isExpired, true);
  assert.equal(rem.hours, 0);
});
