install:
	npm ci

gendiff:
	node bin/gendiff.js

run:
	gendiff  './__fixtures__/file1.json' './__fixtures__/file2.json' 

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

publish:
	npm publish --dry-run

lint:
	npx eslint .	

fix:
	npx eslint . --fix

.PHONY: test



