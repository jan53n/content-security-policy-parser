Policy = OptionalWhiteSpace d:Directive|.., PolicyDelim| PolicyDelim? {
    return d.reduce((p, c) => ({ ...p, ...c }), {});
} / "";

PolicyDelim = OptionalWhiteSpace ";" OptionalWhiteSpace;

Directive = name:DirectiveName value:(RequiredWhiteSpace @DirectiveValue)? {
    return { [name]: value };
};

DirectiveName = $(ALPHA / DIGIT / "-")+;

DirectiveValue = SourceList;

SourceList = SourceExpression|.., RequiredWhiteSpace|;

SourceExpression = SchemeSource / HostSource / KeywordSource / NonceSource / HashSource;

SchemeSource = $(SchemePart ":" !"//");

HostSource = $((SchemePart "://")? HostPart (":" PortPart)? PathPart?);

KeywordSource = "'self'" / "'unsafe-inline'" / "'unsafe-eval'"
                 / "'strict-dynamic'" / "'unsafe-hashes'"
                 / "'report-sample'" / "'unsafe-allow-redirects'"
                 / "'wasm-unsafe-eval'" / "'none'";

NonceSource = $("nonce-" Base64Value);

HashSource = $(HashAlgorithm "-" Base64Value);

HashAlgorithm = "sha256" / "sha384" / "sha512";

Base64Value = (ALPHA / DIGIT / "+" / "/" / "-" / "_" )+ ("=")|2..|

HostPart = ("*.")? HostChar+ ("." HostChar+)* (".")? / "*";

PortPart = (DIGIT / "*")+;

PathPart = PathAbEmpty / PathAbsolute / PathNoScheme / PathRootless / PathEmpty;

PathAbEmpty = ("/" PathSegment )*;

PathAbsolute = "/" (PathSegmentNz ("/" PathSegment)*)?

PathNoScheme = PathSegmentNzNc ("/" PathSegment)*;

PathRootless = PathSegmentNz ("/" PathSegment)*;

PathEmpty = "";

PathSegment = PCHAR*;

PathSegmentNz = PCHAR+;

PathSegmentNzNc = (!":" PCHAR)+;

PCHAR = UnreservedChar / PCTEncoded / SubDelims / ":" / "@";

SubDelims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "=";

HostChar = ALPHA / DIGIT / "-";

SchemePart = ALPHA (ALPHA / DIGIT / "+" / "-" / ".")*;

OptionalWhiteSpace = WhiteSpace*;

RequiredWhiteSpace = WhiteSpace+;

WhiteSpace = ('\t' / '\n' / '\f' / '\r' / ' ');

PCTEncoded = "%" HEXDIG HEXDIG;

UnreservedChar = ALPHA / DIGIT / "-" / "." / "_" / "~"

HEXDIG = [A-Fa-f0-9];

ALPHA = [A-Za-z];

DIGIT = [0-9];