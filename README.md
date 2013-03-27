[![Build Status](https://travis-ci.org/nanha/nodeman.png?branch=master)](https://travis-ci.org/nanha/nodeman)

소개
====

  문서를 브라우져로만 봐야 하나요? 저의 개발환경은 vim. 저는 참 vim 을 좋아하는데요. 암튼 man 명령어를 node.js 용으로 만들어보자.

  Node.js Core Module 부터 각종 3rd party module 유용한 것이면, 모두 제공할 수 있도록 지속적인 업데이트
  
  [소개 웹페이지](http://manual.nodeman.org)
  
  
설치
====

    npm install nodeman -g

업데이트
========

    npm update nodeman -g


사용방법
======

## help

    $ nodeman -h

## 포함된 모듈을 카테고리별로 보기

    $ nodeman -b

## node.js doc 에 포함된 http NativeModule 보기

    $ nodeman http

## async module

    $ nodeman async

문서추가 방법
==============

docs 디렉토리안에 moduleName.meta.js, modulename.md 규칙으로 생성되어야 합니다.

## moduleName.meta.js

    exports.name = 'moduleName';
    exports.category = 'none';
    exports.homepage = 'http://homepage';

## moduleName.md

Markdown 형식으로 작성

