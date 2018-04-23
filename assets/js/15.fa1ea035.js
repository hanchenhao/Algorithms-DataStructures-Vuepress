(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{62:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"二叉查找树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二叉查找树","aria-hidden":"true"}},[t._v("#")]),t._v(" 二叉查找树")]),a("p",[t._v("二叉树是一个树形的数据结构,顾名思义它每个节点最多能有两个子节点,一般称为左子节点和右子节点,其次序不能任意颠倒.")]),a("p",[t._v("二叉查找树（Binary Search Tree），是一种特殊类型的二叉树，它执行插入和删除，以使树始终排序。")]),a("h3",{attrs:{id:"属性的始终排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性的始终排序","aria-hidden":"true"}},[t._v("#")]),t._v(" 属性的始终排序")]),a("p",[t._v("按照惯例,"),a("strong",[t._v("BST")]),t._v("每个左边的子节点是小于它的父节点的，并且每个右边的子节点都是大于它的父节点的。这是二叉搜索树的关键特征。")]),a("h3",{attrs:{id:"插入新节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入新节点","aria-hidden":"true"}},[t._v("#")]),t._v(" 插入新节点")]),a("p",[t._v("当执行插入的时候,我们首先将新值与根节点进行比较,如果新值较小,我们就把它放到左边分支,反之放到右边分支,我们以这种方式递归,直到找到一个合适的位置插入新值")]),a("p",[t._v("因为新元素插入到树中的位置只有一种可能,所以我们通常可以很快的找到其位置,二叉搜索树的时间复杂度为 "),a("strong",[t._v("n(h)")]),t._v(" , 其中h是树的"),a("strong",[t._v("高度")]),t._v("(该节点到其最低叶所需的步骤数)")]),a("h3",{attrs:{id:"创建基础的一个二叉树"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建基础的一个二叉树","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建基础的一个二叉树")]),a("p",[t._v("其包含树形结构中的基本内容,以及左右两个节点")]),a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("BinarySearchTree")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("T"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("Comparable")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" parent"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("BinarySearchTree")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("BinarySearchTree")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("BinarySearchTree")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v("\n    \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("init")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("self")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),a("h4",{attrs:{id:"插入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入","aria-hidden":"true"}},[t._v("#")]),t._v(" 插入")]),a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("insert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("insert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("self")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("insert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("BinarySearchTree")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" value "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("self")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("insert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("BinarySearchTree")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" parent\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("insert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" parent"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("BinarySearchTree")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parent "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" parent\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),a("p",[t._v("插入是最简单的递归实现。我们将新值与现有节点的值进行比较，并决定是将其添加到左侧分支还是右侧分支,如果没有更多的左、右子节点要查看，我们为新节点创建一个BinarySearchTree对象，并通过设置其父节点属性将其连接到树,我们插入的内容总是可以保证其插入正确的分支中")]),a("h4",{attrs:{id:"查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询","aria-hidden":"true"}},[t._v("#")]),t._v(" 查询")]),a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("search")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" T"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("BinarySearchTree")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" value "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("self")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("search")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" value "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("self")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),a("span",{attrs:{class:"token operator"}},[t._v("?")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("search")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" value"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("self")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n")])]),a("p",[t._v("依然利用递归的方式,我们从根节点开始比较这些值,如果搜索的值小于节点的值,我们就从左边开始比较,反正从右边开始,如果搜索的值正好和根节点相同,那么它就是我们的根节点")]),a("h4",{attrs:{id:"遍历"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遍历","aria-hidden":"true"}},[t._v("#")]),t._v(" 遍历")]),a("p",[t._v("用递归的方式遍历二叉树,并将排序数据存在数组中:")]),a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("toArray")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("T"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("T"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            arr "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("left")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toArray")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        arr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("append")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            arr "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("right")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toArray")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr\n        \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])}],!1,null,null,null);s.default=r.exports}}]);