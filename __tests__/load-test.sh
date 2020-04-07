#!/bin/sh

echo "UUID --------------------------------------"
for i in {1..20}; do time ts-node __tests__/load-testing-uuid.ts; done

echo "UUID 58 -----------------------------------"
for i in {1..20}; do time ts-node __tests__/load-testing-uuid58.ts; done