동기
-------

  리눅스에는 유명한 man 명령어가 있습니다. Node.js 에도 필요하지 않을까? 생각을 하자마자 프로젝트를 진행하기 시작했습니다.


설치
-----

    npm install nodeman -g


문서작성 철학
---------------

  github에 README에 기재된 모든 내용보다는 필수적인 요소만 추출하고, 중요한 부분은 색상을 입혀서 작업시에 유용하게 참고할 수 있도록 작성해야 합니다.


문서추가 방법
--------------

- docs 디렉토리안에 <code>moduleName</code>_doc.js 규칙으로 생성되어야 합니다.
- 파일의 내용은

        exports.name = 'moduleName';
        exports.context = 'use require';
        exports.homepage = 'http://homepage';
        exports.description = [
            "\t blah blah"
            , "\t blah blah"
        ].join('\n');


  위와 같은 형식으로 작성하시면 됩니다. \t 탭은 아래에 DESCRIPTION 처럼 보여지기 위해서 삽입해야 합니다.

![output](https://photos-1.dropbox.com/btj/4faa6d69/wrJ7qPsDFgAg78-vcNjiIR_GcUqX9rJvkD8n7y2Q7ks/ScreenShot003.jpg?size=1280x960)


사용방법
----------

## cli

![usage](https://github.com/nanha/nodeman/raw/master/images/nodeman_usage.png)

    $ nodeman -h
    $ nodeman -b
    $ nodeman optimist
    

## repl

    $ node
    > var man = require('nodeman');
    > man.help('optimist')


