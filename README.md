소개
-----

  문서를 브라우져로만 봐야 하나요? 저의 개발환경은 vim. 저는 참 vim 을 좋아하는데요. 암튼 man 명령어를 node.js 용으로 만들어보자.
  
  [소개 웹페이지](http://manual.nodeman.org)
  
  
동기
-------

  리눅스에는 유명한 man 명령어가 있습니다. Node.js 에도 필요하지 않을까? 생각을 하자마자 프로젝트를 진행하기 시작했습니다.


설치
-----

    npm install nodeman -g

업데이트
--------

    npm update nodeman -g


문서추가 방법
--------------

docs 디렉토리안에 moduleName.meta.js, modulename.md 규칙으로 생성되어야 합니다.

- moduleName.meta.js

        exports.name = 'moduleName';
        exports.category = 'none';
        exports.homepage = 'http://homepage';

- moduleName.md: Markdown 형식으로 작성



사용방법
----------

## cli

    $ nodeman -h

    $ nodeman http
