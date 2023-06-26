const original = { prop: { nested: "value" } };

import _ from "lodash";
// オブジェクトの複製
console.log(original);

const cloned = _.cloneDeep(original);

cloned.prop.nested = "new value";

console.log(original, cloned);
