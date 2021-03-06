package methods;

import com.axellience.vuegwt.core.client.component.options.VueComponentOptions;
import elemental2.core.Function;
import jsinterop.base.JsPropertyMap;

@Generated(
    value = "com.axellience.vuegwt.processors.component.ComponentExposedTypeGenerator",
    comments = "https://github.com/Axellience/vue-gwt"
)
public class MethodsBindingComponentExposedType extends MethodsBindingComponent {

  @JsMethod
  @SuppressWarnings("unusable-by-js")
  public String exp$0() {
    // MethodsBindingComponent.html, line 2
    return VueGWTTools.templateExpressionToString(simpleObject.getText());
  }

  @JsMethod
  @SuppressWarnings("unusable-by-js")
  public String exp$1() {
    // MethodsBindingComponent.html, line 3
    return VueGWTTools.templateExpressionToString(simpleObject.getText() + " Expression 2");
  }

  public VueComponentOptions<MethodsBindingComponent> getOptions() {
    VueComponentOptions<MethodsBindingComponent> options = new VueComponentOptions<MethodsBindingComponent>();
    Proto p = __proto__;
    options.setComponentExportedTypePrototype(p);
    options.addMethod("onClickMethod", p.onClickMethod);
    options.addHookMethod("created", p.vg$created);
    options.initData(true, VueGWTTools.getFieldsName(this, () -> {
      this.simpleObject = null;
    }));
    options.registerTemplateMethods(p.exp$0, p.exp$1);
    options.initRenderFunctions(getRenderFunction(), getStaticRenderFunctions());
    return options;
  }

  @JsType(
      isNative = true,
      namespace = JsPackage.GLOBAL,
      name = "Object"
  )
  private static class Proto implements JsPropertyMap<Object> {

    public Function onClickMethod;

    public Function vg$created;

    public Function exp$0;

    public Function exp$1;
  }
}