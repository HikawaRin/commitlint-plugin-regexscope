"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rules = require("@commitlint/rules");
const regexscope = (parsed, when, value = {}) => {
    if (!parsed.scope) {
        return [true, ''];
    }
    const { pattern = '', clean = null, enum: enumValue = [], case: caseValue = 'lower-case' } = value;
    var subscope = String(parsed.scope).match(pattern);

    if (clean != null){
        subscope = String(subscope).match(clean);
    }
    
    const { default:{['scope-case']: caseRule, ['scope-enum']: enumRule} } = rules;
    const scopeRules = [
        [enumRule, enumValue],
        [caseRule, caseValue],
    ];

    let result = [true, ''];
    scopeRules.every(([rule, ruleValue]) => {
        return subscope.every(scope => {
            const commit = { ...parsed, scope };
            result = rule(commit, when, ruleValue);
            return result[0];
        });
    });
    return result;
};
exports.default = regexscope;