#Comment for this Makefile
.PHONY: start watch bootstrap;

bootstrap:
	@npm install

start:
	@node index.js

watch:
	@webpack --watch

build:
	@webpack