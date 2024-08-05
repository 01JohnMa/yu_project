# AI答题应用平台

## 项目介绍

业务场景企业级别实战项目，基于VUE+spring boot+redis+chatGlm+rxjava+sse 的AI应用平台
用户可以基于AI快速制作并发布多种答题应用、支持检索和分享应用、在线答题并基于评分算法或者AI得到回答总结；管理员可以审核应用、集中管理内容整站内容，并进行统计分析。

## 项目四大阶段

### 1）第一阶段

### 开分本地MBTI性格测试小程序（基于Taraui）

要点

#### mbti性格测试小程序

vue 脚手架tara_ui
函数式组件

方案介绍：题目、用户答案、评分规则

##### 1、题目结构

> 用json表示结构  
> 
> ``   [
>     {
>         "title": "你通常更喜欢",
>         "options": [
>             {
>                 "result": "I",
>                 "value": "独自工作",
>                 "key": "A"
>             },
>             {
>                 "result": "E",
>                 "value": "与他人合作",
>                 "key": "B"
>             }
>         ]
>     }
> ] ``       

##### 2、答案结构

> 用户提交答案只需要传递一个数组，按数组顺序匹配对应的题目，优点不用完整的传递题目结构，节省体积，提高性能
>     ["A","A","A","B","A","A","A","B","B","A"]



##### 3、评分规则

> <img src="https://pic.yupi.icu/1285/1715046546067-58fb9480-4d8d-473c-b5aa-6ba2e6f153c6.png" alt="" class="medium-zoom-image">
> 
> ```
> [
>     {
>         "title": "你通常更喜欢",
>         "options": [
>             {
>                 "result": "I",
>                 "value": "独自工作",
>                 "key": "A"
>             },
>             {
>                 "result": "E",
>                 "value": "与他人合作",
>                 "key": "B"
>             }
>         ]
>     }
> ]
> 评分计算原理
> 首先要有一个题目评分结果集合，这里预先创建了很多结果，包括了 MBTI 的所有 16 种角色。
> resultName：ISTJ
> resultDesc：忠诚可靠，被公认为务实，注重细节。
> resultIcon：预留字段，如果想界面好看点，可以给 result 设定图片
> resultProp：[I,S,T
> 
> ```

<img src="https://pic.yupi.icu/1285/1714989020474-15ea45c5-5edf-46db-b58a-ad0b4a12d1b9.png" alt="" class="medium-zoom-image">

评分结果json返回

```[
[
  {
    "resultProp": [
      "I",
      "S",
      "T",
      "J"
    ],
    "resultDesc": "忠诚可靠，被公认为务实，注重细节。",
    "resultPicture": "icon_url_istj",
    "resultName": "ISTJ（物流师）"
  },
  {
    "resultProp": [
      "I",
      "S",
      "F",
      "J"
    ],
    "resultDesc": "善良贴心，以同情心和责任为特点。",
    "resultPicture": "icon_url_isfj",
    "resultName": "ISFJ（守护者）"
  }
]
```

评分结果，根据每一次选项的result字段，便利16中角色是否含有该字段，答题完后角色得分最高的则为结果

遵循函数式组件写法

```export
  return(
    <View className ="index">
    <Text>HELLOW WORD!</Text>
    </view>
  );
};
```

注意每次编程前要使微信开发者工具实时改变要启动dev模式
主页代码

```typescript
#Usestate是 React 钩子函数之一，用于在函数组件中添加状态管理功能。它允许你在组件中声明一个状态变量，并提供一个用于更新该变量的函数。
#题号从一开始
const[current,setcurrent] = Usestate<number>(1)
#当前问题
const[currentquestion,setCurrentqustion] = Usetate<string>(question[0])
//当前答案
const[currentAnswer,setCurrentAnswer] = useStat<string>([])
#选项的映射对每一个option都给一个value    提交给后面的答案列表
const radioOptions = currentQuestion.options.map(option)=>{
    return{
    labal:'${option.key}.${option.value}',
    value:options.key,
    
};
};
//接受回答选项“A B”
const [answerList] = useSate<sTring[]>([]);
//序号发生变化的时候，切回当前的题目以及回答
//useEffect 用于在函数组件中执行副作用操作 钩子函数  params： 回调函数，触发回调函数的数组
useEffect(()=>{
    setCurrentqustion(qustion[current-1]);
    setCurrentAnswer(answerList[current-1]);
   
},[current]);






```

### 2)第二阶段

开发答题应用平台。用户通过上传题目和自定义评分规则，创建答题应用，供其他用户检索和使用。涉及到VUE3+spring boot 前后端全栈项目

### 3）第三阶段

开发AI智能答题应用平台。只需要设定主题就能通过AI快速生成题目、让ai分析用户答案，降低答题应用成本。

### 4）第四阶段

项目优化

使用多种企业开发技术进行项目优化。包括RXjava+SSE优化AI生成体验、通过缓存和分表优化性能，通过幂等设计和线性池隔离提高系通安全性、通过统计分析和应用分享功能应用产品化。


