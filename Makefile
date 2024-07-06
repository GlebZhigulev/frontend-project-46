install:
	npm ci

gendiff:
	node bin/gendiff.js

run:
	gendiff  './__fixtures__/file1.json' './__fixtures__/file2.json' 

run2:
	gendiff  './__fixtures__/file1.json' './__fixtures__/file2.json'  --format plain

run3:
	gendiff  './__fixtures__/file1.yml' './__fixtures__/file2.yml'  --format plain

run4:
	gendiff  './__fixtures__/file1.yml' './__fixtures__/file2.yml'

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



