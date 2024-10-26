Start = (Policies / Empty { return {}; });

Policies = l:(Space? p:Policy PolicySep Space? { return p; } / p:Policy { return p; })+ {
	return l.reduce((p, c) => ({ ...p, ...c }), {});
};

Policy = PolicyWithRules / SingleSrcPolicy;

SingleSrcPolicy = name:Src {
	return { [name]: [] };
};

PolicyWithRules = name:Src Space rules:Rules {
	return { [name]: rules };
};

Src = $(SrcWord '-' / SrcWord)+;

SrcWord = $([a-zA-Z])+;

Rules = rules:(r:Rule RuleSep { return r; } / r:Rule)+ {
	return rules;
};

Rule = rule:(QuotedRule / UnQuotedRule) {
	return rule;
};

QuotedRule = rule:$(RuleQuote $(!RuleQuote .)* RuleQuote) { return rule; };

UnQuotedRule = $(!RuleQuote !Space [a-zA-Z0-9 \.\:\/\-*])+

Space = ' '+;
RuleSep = Space;
RuleQuote = "'";
PolicySep = ';'
Empty = ""