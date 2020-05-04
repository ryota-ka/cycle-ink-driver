TARBALL=cycle-ink-driver-*.tgz

all:

build: clean install
	npx rollup -c
	cp README.md ./lib
	cp package.json ./lib

clean:
	rm -rf ./lib

install:
	yarn install

publish: sdist
	npm publish $(TARBALL)

sdist: build
	cd ./lib && npm pack && mv $(TARBALL) ..
