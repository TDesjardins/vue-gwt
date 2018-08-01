(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{249:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),s("p",[t._v("But in Vue GWT you are not responsible for your Components instantiation.\nApart from your application root, other Components are instantiated for you by Vue depending on your model.")]),s("p",[t._v("So how do you pass the instance of those Services to your Components?\nSure you could have a static instance of those Services as a Singleton, but this is awful for testing.")]),s("p",[t._v("Luckily, "),s("strong",[t._v("Vue GWT supports Dependency Injection")]),t._v(".\nAn instance of your Services can be automatically provided when your Components are instantiated.\nYou can also provide a mock yourself when you are "),s("router-link",{attrs:{to:"../tooling/unit-testing.html"}},[t._v("testing your Components")]),t._v(".")],1),t._m(3),s("p",[t._v("In GWT two solutions exist for Dependency Injection:")]),s("ul",[s("li",[s("a",{attrs:{href:"https://google.github.io/dagger/users-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dagger 2"),s("OutboundLink")],1)]),s("li",[s("a",{attrs:{href:"https://github.com/nishtahir/google-gin",target:"_blank",rel:"noopener noreferrer"}},[t._v("GIN"),s("OutboundLink")],1)])]),s("p",[t._v("In this documentation we will explain Injection with Dagger 2 as GIN is not actively developed anymore and not recommended for new projects.\nHowever if you are using GIN already, Vue GWT also works with it.")]),s("p",[t._v("To setup Dagger 2 on your project you can follow this guide: "),s("a",{attrs:{href:"http://www.g-widgets.com/2017/06/28/dependency-injection-in-gwt-using-dagger-2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dependency injection in GWT using Dagger 2"),s("OutboundLink")],1),t._v(".")]),s("p",[t._v("The version of the Maven dependency in the guide is a little out of date.\nYou can check for the latest version of Dagger GWT to use on the "),s("a",{attrs:{href:"https://mvnrepository.com/artifact/com.google.dagger/dagger-gwt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dagger GWT Maven repo"),s("OutboundLink")],1),t._v(".")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),s("p",[t._v("To make this Component work we now must find a way to have it Injected.")]),t._m(12),t._m(13),t._m(14),s("p",[t._v("To inject this factory we declare a Dagger 2 Component.")]),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),s("p",[t._v("And here is the resulting live Component:")]),t._m(20),t._m(21),s("p",[t._v("We injected our root Component, that's great, but how about it's children?")]),s("p",[t._v("Here is the good news: if you inject your root Component, then the whole tree of locally declared Components will be injected 🎉!")]),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),t._m(33),s("p",[t._v("It's also possible to inject Components that are declared globally.\nFor this you only need to inject their factory and use it for the global registration.\nWhen used in the templates, the instances will automatically be injected.")]),t._m(34),t._m(35),s("p",[t._v("If you are using "),s("a",{attrs:{href:"https://github.com/Axellience/vue-router-gwt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue GWT Router"),s("OutboundLink")],1),t._v(", you can also inject your Routes.")]),t._m(36)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"dependency-injection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dependency-injection","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependency Injection")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"why-dependency-injection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#why-dependency-injection","aria-hidden":"true"}},[this._v("#")]),this._v(" Why Dependency Injection?")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("When developing your App "),n("em",[this._v("you want to keep a maximum of business logic out of your Components")]),this._v(".\nFor example you can create Services that can be reused across Components.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"setting-up-dagger-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-dagger-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting up Dagger 2")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"injecting-a-vue-gwt-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#injecting-a-vue-gwt-component","aria-hidden":"true"}},[this._v("#")]),this._v(" Injecting a Vue GWT Component")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"declaring-the-component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#declaring-the-component","aria-hidden":"true"}},[this._v("#")]),this._v(" Declaring the Component")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Let's say we have a "),n("code",[this._v("GotQuotesService")]),this._v(" that is able to provide us with a random quote from a famous TV Show.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("We want to use that service in a "),n("code",[this._v("GotQuotesComponent")]),this._v(" that will display a random quote.\nWe simply add "),n("code",[this._v("GotQuotesService")]),this._v(" as an attribute of our Component with the "),n("code",[this._v("@Inject")]),this._v(" annotation.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),n("p",[this._v("It's not possible to use injected constructor parameters as Java constructors are not supported in Vue GWT Components.")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("GotQuotesComponent")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IsVueComponent")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HasCreated "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Data")]),t._v(" GotQuote quote"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v(" GotQuotesService gotQuotesService"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("created")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("changeQuote")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@JsMethod")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("changeQuote")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        quote "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" gotQuotesService"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getRandomQuote")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("We can then simply use "),n("code",[this._v("quote")]),this._v(" in our "),n("code",[this._v("GotQuotesComponent")]),this._v(" template:")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("blockquote")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        {{ quote.getText() }}\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cite")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            **{{ quote.getAuthor() }}**, Season **{{ quote.getSeason() }}**, Episode **{{ quote.getEpisode() }}**\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cite")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("blockquote")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("changeQuote"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Give me another!"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"instantiating-the-gotquotescomponent-with-injection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instantiating-the-gotquotescomponent-with-injection","aria-hidden":"true"}},[this._v("#")]),this._v(" Instantiating the "),n("code",[this._v("GotQuotesComponent")]),this._v(" with Injection")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("Every Vue GWT Component get an associated Factory generated for them by the Vue GWT annotation processor.\nThis means that "),n("code",[this._v("GotQuotesComponent")]),this._v(" has a generated "),n("code",[this._v("GotQuotesComponentFactory")]),this._v(".")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("To bootstrap injection we need to inject "),n("code",[this._v("GotQuotesComponentFactory")]),this._v(".\nEvery instance of our "),n("code",[this._v("GotQuotesComponent")]),this._v(" created using the injected "),n("code",[this._v("GotQuotesComponentFactory")]),this._v(" will then be correctly injected.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),n("p",[this._v("Dagger 2 has it's own "),n("code",[this._v("Component")]),this._v(" annotation.\nSo you must be careful to use the right one when declaring your Dagger 2 Component.")])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// ⚠️ This is Dagger 2 @Component annotation, not the Vue GWT one.")]),t._v("\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Singleton")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("ExampleInjector")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    GotQuotesComponentFactory "),s("span",{attrs:{class:"token function"}},[t._v("gotQuoteComponentFactory")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("TIP")]),n("p",[this._v("If "),n("code",[this._v("GotQuotesComponentFactory")]),this._v(" doesn't exist, then check your annotation processor configuration in your IDE to make sure that it's running.")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("We can then create our Dagger Injector, get our "),n("code",[this._v("GotQuotesComponentFactory")]),this._v(" and use it to create our injected "),n("code",[this._v("GotQuotesComponent")]),this._v(":")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("VueGwtExamplesApp")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("EntryPoint")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onModuleLoad")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Create Dagger Injector")]),t._v("\n        ExampleInjector exampleInjector "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" DaggerExampleInjector"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Get our Factory from the Injector")]),t._v("\n        GotQuotesComponentFactory factory "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" exampleInjector"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("gotQuoteComponentFactory")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Create our Component, it will be correctly injected")]),t._v("\n        GotQuotesComponent component "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" factory"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// Mount (attach) our Component to an existing div")]),t._v("\n        component"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$"),s("span",{attrs:{class:"token function"}},[t._v("mount")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"#gotQuotesComponent"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"example-container",attrs:{"data-name":"gotQuotesComponent"}},[n("br"),n("span",{attrs:{id:"gotQuotesComponent"}})])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"injecting-component-s-children"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#injecting-component-s-children","aria-hidden":"true"}},[this._v("#")]),this._v(" Injecting Component's Children")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("For example if you have the following Components, you only need to inject "),n("code",[this._v("RootComponentFactory")]),this._v(" and use it to create your "),n("code",[this._v("RootComponent")]),this._v(".\nAll the Components used in the template and declared in "),n("code",[this._v("components")]),this._v(" will be injected.")])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"rootcomponent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rootcomponent","aria-hidden":"true"}},[this._v("#")]),this._v(" RootComponent")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("components "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Child1Component"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Child2Component"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("RootComponent")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IsVueComponent")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Create 10 instances of Child1Component --\x3e")]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child1")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("int i in 10"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("child2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("child2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"child1component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#child1component","aria-hidden":"true"}},[this._v("#")]),this._v(" Child1Component")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("components "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" GrandChild1Component"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Child1Component")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IsVueComponent")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v(" MyService myService"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("grand-child1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("grand-child1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"child2component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#child2component","aria-hidden":"true"}},[this._v("#")]),this._v(" Child2Component")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Child2Component")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IsVueComponent")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v(" MyService myService"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v(" AnotherService anotherService"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h3",{attrs:{id:"grandchild1component"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#grandchild1component","aria-hidden":"true"}},[this._v("#")]),this._v(" GrandChild1Component")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Component")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("GrandChild1Component")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("IsVueComponent")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v(" AnotherService anotherService"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"globally-registered-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#globally-registered-components","aria-hidden":"true"}},[this._v("#")]),this._v(" Globally Registered Components")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("VueGwtExamplesApp")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("EntryPoint")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("onModuleLoad")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ExampleInjector exampleInjector "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" DaggerExampleInjector"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        MyGlobalComponentFactory factory "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" exampleInjector"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getMyGlobalComponentFactory")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        VueGWT"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("register")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"my-global-component"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" factory"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("h2",{attrs:{id:"injecting-routes-in-vue-gwt-router"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#injecting-routes-in-vue-gwt-router","aria-hidden":"true"}},[this._v("#")]),this._v(" Injecting Routes in Vue GWT Router")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("RoutesConfig")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("CustomizeOptions")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v(" LoginComponentFactory loginComponentFactory"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v(" HomeComponentFactory homeComponentFactory"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Inject")]),t._v(" SettingsComponentFactory settingsComponentFactory"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("customizeOptions")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VueComponentOptions vueComponentOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        RouterOptions routerOptions "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("RouterOptions")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("setMode")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RouterMode"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HISTORY"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addRoute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/login"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loginComponentFactory"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addRoute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/home"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" homeComponentFactory"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("addRoute")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"/settings"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" homeComponentFactory"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n        vueComponentOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"router"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routerOptions"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.default=e.exports}}]);