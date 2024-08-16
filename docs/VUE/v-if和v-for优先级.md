# `v-if`和`v-for`优先级

- `vue2`中，`v-for` > `v-if`。这意味着在模板中，如果`v-if`和`v-for`同时出现在同一个元素上，`v-for`会先于`v-if`执行。

- `vue3`中，`v-if` > `v-for`。这意味着在模版中，如果`v-if`和`v-for`同时出现在同一个元素上，`v-if`会先于`v-for`执行。这可能导致问题，因为`v-if`执行时可能还没有访问到`v-for`循环中的变量。

优先级是在源码中体现的：`function genElement`。

<CodeGroup>
  <CodeGroupItem title="Options">

```js
function (){}
```

  </CodeGroupItem>

  <CodeGroupItem title="Composition" active>

```js
export function genElement(el: ASTElement, state: CodegenState): string {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state);
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state);
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state);
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state);
  } else if (el.tag === "template" && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || "void 0";
  } else if (el.tag === "slot") {
    return genSlot(el, state);
  } else {
    // component or element
    let code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      let data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData(el, state);
      }

      let tag: string | undefined;
      // check if this is a component in <script setup>
      const bindings = state.options.bindings;
      if (bindings && bindings.__isScriptSetup !== false) {
        tag =
          checkBindingType(bindings, el.tag) ||
          checkBindingType(bindings, camelize(el.tag)) ||
          checkBindingType(bindings, capitalize(camelize(el.tag)));
      }
      if (!tag) tag = `'${el.tag}'`;

      const children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = `_c(${tag}${
        data ? `,${data}` : "" // data
      }${
        children ? `,${children}` : "" // children
      })`;
    }
    // module transforms
    for (let i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code;
  }
}
```

  </CodeGroupItem>
</CodeGroup>
