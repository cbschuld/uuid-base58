#!/bin/sh

echo "UUID 58 -----------------------------------"
for i in {1..20}; do time ts-node load-testing-uuid58.ts; done
