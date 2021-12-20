---
title: إرشادات عامة
description: ''
position: 3.1
category:  ﻗﻮاﻋﺪ إرﺷﺎدﻳﺔ
---


## أضافات chrome
<a href="https://youtu.be/lG25KQUtcg4" target="_blank">[مشاهدة الفيديو]</a>

يجهل الكثير من المستخدمين بمميزات متصفح كورم وكيف انه من الممكن ان يسهل علي الكثير من الاجراءات اليومية , من خلال الفيديو الذي في الاعلى سوف اشرح بشكل مختصر و بسيط ماهي الاضافات التي تساعدني اثناء العمل , طبعاً يمكنك البحث , و أستخدام ما يناسبك بعد الاطلاع على الفيديو.

## اعدادت devContainers
<a href="https://youtu.be/gqj5jv_wleg" target="_blank">[مشاهدة الفيديو]</a>

يعتبر من المميزات الجميلة في برنامج vocode , حيث من خلاله يمكنك العمل على أي مشروع مستقبلي يتطلب بعض الاحتياجات الخاصة, على سبيل المثال لا الحصر مشاريع 42  تطلب بعض المكتبات الخاصة باللغة C    حيث يواجه بعض الطلبة في العمل على المشاريع في المنزل فتم حل ذلك من خلال devContainer  بالإضافة  الى أضافة norminette. الى الحاوية

[DevContainer](https://code.visualstudio.com/docs/remote/containers)

يجب مراعاة نسخ ولصق الكود من غير حذف image في الحاوية

  ```docker
RUN apt-get update --no-install-recommends -y

RUN apt-get install --no-install-recommends \
    'build-essential' \
    "valgrind" \
    "gdb" \
    'automake' \
    'make' \
    'ca-certificates' \
    'g++' \
    'libtool' \
    'pkg-config' \ 
    'manpages-dev' \
    'zip' \
    'unzip' \
    'python3' \
    'python3-pip' \
    'git' \
    'openssh-server' \
    'dialog' \
    'llvm' \
    'zsh' \
    'wget' \
    'clang' \
	'libbsd-dev' -y \
    && apt-get clean autoclean \
    && apt-get autoremove --yes \
    && rm -rf /var/lib/{apt,dpkg,cache,log}/ 

    

RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)" -- \
    -t robbyrussell \
    -p git 

RUN python3 -m pip install --upgrade pip setuptools
RUN python3 -m pip install norminette

```
شكرا خاص الى [@opsec-infosec](https://github.com/opsec-infosec)  للمساهمة في تطويرها

يمكنك ايضاً الحصول على الحاوية جاهزة الاعدادت من [42-Devcontainer](https://github.com/opsec-infosec/42-Devcontainer)

## Debugger 
<a href="https://www.youtube.com/watch?v=O-1JKYHjQac" target="_blank">[مشاهدة الفيديو]</a>

هي عملية لتصحيح الأخطاء من خلال تتبع عمل البرنامج سطر سطر حيث لا يمكن لي أي مبرمج العمل من دونها و تعتبر من المهارات المطلوبة لدى أي مبرمج , حيث تم رفع فيديو بسيط جدا اشرح فيه عملية ال debugger   .

<alert type="danger">

لا يعمل  ال debugger  من غير main() function

</alert>


## debugging on Exam
قريباً
