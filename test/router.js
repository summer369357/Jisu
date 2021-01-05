//路由配置:
 
const Hello = {
    props: ['name'], //使用rute的props传参的时候,对应的组件一定要添加props进行接收,否则根本拿不到传参
    template: '<div>Hello {{ $route.params}}和{{this.name}}</div>'
    //如果this.name有值,那么name已经成功成为组件的属性,传参成功
  }
   
  const router = new VueRouter({
  mode: 'history',
    routes: [
      { path: '/', component: Hello }, // 没有传参  所以组件什么都拿不到
      { path: '/hello/:name', component: Hello, props: true }, //布尔模式: props 被设置为 true，此时route.params (即此处的name)将会被设置为组件属性。
      { path: '/static', component: Hello, props: { name: 'world' }}, // 对象模式: 此时就和params没什么关系了.此时的name将直接传给Hello组件.注意:此时的props需为静态!
      { path: '/dynamic/:years', component: Hello, props: dynamicPropsFn }, // 函数模式: 1,这个函数可以默认接受一个参数即当前路由对象.2,这个函数返回的是一个对象.3,在这个函数里你可以将静态值与路由相关值进行处理.
      { path: '/attrs', component: Hello, props: { name: 'attrs' }}
    ]
  })
   
  function dynamicPropsFn (route) {
    return {
      name: (new Date().getFullYear() + parseInt(route.params.years)) + '!'
    }
  }
   
  new Vue({
    router,
    el: '#app'
  })
  复制代码