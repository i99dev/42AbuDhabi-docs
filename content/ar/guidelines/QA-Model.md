---
title: نموذج QA
description: 'this page use only for QA model template'
position: 3.3
category:  ﻗﻮاﻋﺪ إرﺷﺎدﻳﺔ
subtitle: 'This page used only for the QA model template'
# remove blow this line, only for example purposes
items:
  - Item1
  - Item2
  - Item3
---

## المقدمة

### الوصف
مشروع get_next_line  يعتبر من المشاريع التي تستطيع من خلالها تعلم استخدام أدوات التحكم بالذاكرة مثل malloc  و free  بالإضافة الى التعامل مع المتغيرات من نوع static  .
### المطلوب
المشروع عبارة عن خوارزميات تعمل على قرأه الملف من خلال file descriptor من خلال قيمة عددية يتم تمريرها من خلال امر استدعاء function  تحت مسمى BUFFER_SIZE   و يتم ارجاع سطر ينتهى ```\n (new line)``` في كل مره حتى انتهاء الخوارزمية من قرأه الملف بشكل كامل.
### الاهداف
-	المنطق ، الخوارزميات ، استخدام متغير من نوع Static .
-	استخدام وظائف مثل (read, mollac, free).

### المخطط البياني

<mermaid>
graph TD
id1[Start]-->|FD & BUFFER_ZISE|id2{is True}
id2-->id3[01-ReadFd]-->id2
id2-->id5[02-found '\n`]-->id2
id2-->id6[03-return *line*]-->id3-->id5
id3-->|'\0'|id7[free var]-->id8[end]
</mermaid>

## الوصفة البرمجية

### السؤال 01

قبل بداية أي مشروع برمجي تحتاج الى تهيئة البيئة البرمجة و متطلبات المشروع، مثل توزيع الملفات و المسميات الخاصة, هناك شروط يجب التقيد بها يمكنك الرجوع الى ملف المشروع pdf  وقراءته بشكل جيد.

<alert type='success'>

يجب عليك اتباع الفكرة من خلال تقديد الكثير من المشاريع.

</alert>

<solution>
قبل بداية أي مشروع برمجي تحتاج الى تهيئة البيئة البرمجة و متطلبات المشروع، مثل توزيع الملفات و المسميات الخاصة, هناك شروط يجب التقيد بها يمكنك الرجوع الى ملف المشروع pdf  وقراءته بشكل جيد.


<alert>

Check out an info alert with a `codeblock` and a [link](/themes/docs)!

</alert>

<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @nuxt/content-theme-docs
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @nuxt/content-theme-docs
  ```

  </code-block>
</code-group>

</solution>