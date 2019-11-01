var Handlebars = require("handlebars/dist/handlebars.runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['scxml.states.template.hbs'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "    <"
    + alias5(((helper = (helper = helpers.kind || (depth0 != null ? depth0.kind : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":2,"column":5},"end":{"line":2,"column":13}}}) : helper)))
    + " id=\""
    + alias5(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":2,"column":18},"end":{"line":2,"column":24}}}) : helper)))
    + "\""
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.initial : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":25},"end":{"line":2,"column":69}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.type : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":69},"end":{"line":2,"column":104}}})) != null ? stack1 : "")
    + ">\n"
    + ((stack1 = container.invokePartial(partials["scxml.states.template.hbs"],depth0,{"name":"scxml.states.template.hbs","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.onentries : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":4},"end":{"line":6,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.onexits : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":4},"end":{"line":9,"column":13}}})) != null ? stack1 : "")
    + ((stack1 = helpers.each.call(alias2,(depth0 != null ? depth0.transitions : depth0),{"name":"each","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":4},"end":{"line":18,"column":13}}})) != null ? stack1 : "")
    + "    </"
    + alias5(((helper = (helper = helpers.kind || (depth0 != null ? depth0.kind : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"kind","hash":{},"data":data,"loc":{"start":{"line":19,"column":6},"end":{"line":19,"column":14}}}) : helper)))
    + ">\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return " initial=\""
    + container.escapeExpression(((helper = (helper = helpers.initial || (depth0 != null ? depth0.initial : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"initial","hash":{},"data":data,"loc":{"start":{"line":2,"column":50},"end":{"line":2,"column":61}}}) : helper)))
    + "\"";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return " type=\""
    + container.escapeExpression(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"type","hash":{},"data":data,"loc":{"start":{"line":2,"column":88},"end":{"line":2,"column":96}}}) : helper)))
    + "\"";
},"6":function(container,depth0,helpers,partials,data) {
    return "        <onentry>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</onentry>\n";
},"8":function(container,depth0,helpers,partials,data) {
    return "        <onexit>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</onexit>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.action : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.program(16, data, 0),"data":data,"loc":{"start":{"line":11,"column":8},"end":{"line":17,"column":15}}})) != null ? stack1 : "");
},"11":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {}), alias3=container.hooks.helperMissing, alias4="function", alias5=container.escapeExpression;

  return "        <transition "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.event : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":20},"end":{"line":12,"column":58}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.cond : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":58},"end":{"line":12,"column":93}}})) != null ? stack1 : "")
    + "target=\""
    + alias5(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"target","hash":{},"data":data,"loc":{"start":{"line":12,"column":101},"end":{"line":12,"column":111}}}) : helper)))
    + "\">\n            "
    + alias5(((helper = (helper = helpers.action || (depth0 != null ? depth0.action : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(alias2,{"name":"action","hash":{},"data":data,"loc":{"start":{"line":13,"column":12},"end":{"line":13,"column":22}}}) : helper)))
    + "\n        </transition>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "event=\""
    + container.escapeExpression(((helper = (helper = helpers.event || (depth0 != null ? depth0.event : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"event","hash":{},"data":data,"loc":{"start":{"line":12,"column":40},"end":{"line":12,"column":49}}}) : helper)))
    + "\" ";
},"14":function(container,depth0,helpers,partials,data) {
    var helper, alias1=container.propertyIsEnumerable;

  return "cond=\""
    + container.escapeExpression(((helper = (helper = helpers.cond || (depth0 != null ? depth0.cond : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cond","hash":{},"data":data,"loc":{"start":{"line":12,"column":76},"end":{"line":12,"column":84}}}) : helper)))
    + "\" ";
},"16":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.propertyIsEnumerable, alias2=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <transition "
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.event : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":20},"end":{"line":16,"column":58}}})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias2,(depth0 != null ? depth0.cond : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":58},"end":{"line":16,"column":93}}})) != null ? stack1 : "")
    + "target=\""
    + container.escapeExpression(((helper = (helper = helpers.target || (depth0 != null ? depth0.target : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"target","hash":{},"data":data,"loc":{"start":{"line":16,"column":101},"end":{"line":16,"column":111}}}) : helper)))
    + "\"/>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.propertyIsEnumerable;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.states : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":20,"column":9}}})) != null ? stack1 : "");
},"usePartial":true,"useData":true});
