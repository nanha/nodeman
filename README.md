소개
-----

  node.js 알짜배기 문서를 제공하는데 목적이 있습니다. github의 readme를 긁어와서 바로 보여줄 수 있지만, 내가 사용해보고 중요한 부분을 color module을 사용하여 제공합니다. 문서의 업데이트는 module 중요도에 따라 계속 쭈~욱 된다는것을 약속드립니다.
  
  [소개 웹페이지](http://nanha.github.com/nodeman/)
  
  
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

- github에 README에 기재된 모든 내용보다는 필수적인 요소만 추출하고, 중요한 부분은 색상을 입혀서 작업시에 유용하게 참고할 수 있도록 작성해야 합니다.
- docs 디렉토리안에 <code>moduleName</code>.js 규칙으로 생성되어야 합니다.
- 파일의 내용은

        exports.name = 'moduleName';
        exports.category = 'category';
        exports.context = 'use require';
        exports.homepage = 'http://homepage';
        exports.description = [
            "\t blah blah"
            , "\t blah blah"
        ].join('\n');



사용방법
----------

## cli

### $ nodeman OR nodeman -h
![usage](http://nanha.com/images/nodeb/nodeman_cli.png)

### $ nodeman -b
![builtin](http://nanha.com/images/nodeb/nodeman_list.png)

### $ 문서보기

    # linux
    nodeman optimist | less

    # bsd
    # more 사용할 경우 ansi-color를 그대로 표현하기 때문에 -R 옵션을 붙여준다.
    nodeman optimist | less -r

![output](http://nanha.com/images/nodeb/nodeman_optimist.png)

### $ nodeman -m
![builtin](http://nanha.com/images/nodeb/nodeman_npm_most_depend_on_list.png)

## repl

    $ node
    > var man = require('nodeman');
    > man.help('optimist')


